# DATABASE SCHEMA DOCUMENT

**EduForge**
*Target Database: MongoDB (via Mongoose)*

## Overview
This document outlines the primary data collections and relationships for the EduForge platform. The schema is designed for flexibility, separating authentication credentials from role-specific profile data.

---

## 1. Core Users & Profiles

### 1.1 `Users` Collection
Base collection for authentication and role-based access.
- `_id`: ObjectId
- `email`: String (Unique, Indexed)
- `passwordHash`: String
- `role`: Enum (`STUDENT`, `PARENT`, `COUNSELLOR`, `SCHOOL_ADMIN`, `SUPER_ADMIN`)
- `isVerified`: Boolean
- `createdAt`: Date
- `updatedAt`: Date

### 1.2 `StudentProfiles` Collection
Contains specific data for students.
- `_id`: ObjectId
- `userId`: ObjectId (Ref `Users`)
- `firstName`: String
- `lastName`: String
- `phone`: String
- `dateOfBirth`: Date
- `gradeClass`: String
- `schoolCollegeName`: String
- `location`: { city: String, state: String, country: String }
- `academicInterests`: [String]
- `careerInterests`: [String]
- `parentUserId`: ObjectId (Ref `Users`, Optional)
- `assignedCounsellorId`: ObjectId (Ref `Users`, Optional)
- `schoolPartnerId`: ObjectId (Ref `SchoolPartners`, Optional)
- `subscriptionPlanId`: ObjectId (Ref `Plans`, Optional)

### 1.3 `CounsellorProfiles` Collection
- `_id`: ObjectId
- `userId`: ObjectId (Ref `Users`)
- `firstName`: String
- `lastName`: String
- `specialization`: [String]
- `yearsOfExperience`: Number
- `bio`: String
- `availabilitySettings`: Object (Daily time slots)

---

## 2. Assessments & Reports

### 2.1 `Assessments` Collection
Metadata for a test.
- `_id`: ObjectId
- `title`: String
- `category`: Enum (`Aptitude`, `Interest`, `Personality`, etc.)
- `description`: String
- `isTimed`: Boolean
- `timeLimitMinutes`: Number
- `isActive`: Boolean

### 2.2 `Questions` Collection
Question bank.
- `_id`: ObjectId
- `assessmentId`: ObjectId (Ref `Assessments`)
- `traitCategory`: String (e.g., "Numerical Aptitude", "Social Interest")
- `questionText`: String
- `options`: [{ text: String, weight: Number }]
- `order`: Number

### 2.3 `AssessmentAttempts` Collection
Tracks student progress on a test.
- `_id`: ObjectId
- `studentId`: ObjectId (Ref `StudentProfiles`)
- `assessmentId`: ObjectId (Ref `Assessments`)
- `status`: Enum (`IN_PROGRESS`, `COMPLETED`, `REVIEWED`)
- `answers`: [{ questionId: ObjectId, selectedOptionIndex: Number }]
- `rawScores`: { trait: String, score: Number }
- `startedAt`: Date
- `completedAt`: Date

### 2.4 `Reports` Collection
Final generated reports for students.
- `_id`: ObjectId
- `studentId`: ObjectId (Ref `StudentProfiles`)
- `attemptId`: ObjectId (Ref `AssessmentAttempts`)
- `counsellorId`: ObjectId (Ref `CounsellorProfiles`, Optional)
- `reportType`: Enum (`PSYCHOMETRIC`, `COUNSELLING_SUMMARY`)
- `pdfFileUrl`: String (S3 link)
- `counsellorRemarks`: String
- `recommendedCareers`: [ObjectId] (Ref `Careers`)
- `publishedAt`: Date

---

## 3. Operations & CRM

### 3.1 `Sessions` Collection
Counselling appointments.
- `_id`: ObjectId
- `studentId`: ObjectId (Ref `StudentProfiles`)
- `counsellorId`: ObjectId (Ref `CounsellorProfiles`)
- `sessionType`: Enum (`FREE_CONSULT`, `PAID_COUNSELLING`, `REPORT_REVIEW`)
- `status`: Enum (`BOOKED`, `CONFIRMED`, `COMPLETED`, `CANCELLED`)
- `scheduledStartTime`: Date
- `scheduledEndTime`: Date
- `meetingLink`: String
- `counsellorNotes`: String

### 3.2 `Roadmaps` Collection
Action plans assigned to students.
- `_id`: ObjectId
- `studentId`: ObjectId (Ref `StudentProfiles`)
- `counsellorId`: ObjectId (Ref `CounsellorProfiles`)
- `title`: String
- `milestones`: [{
    `title`: String,
    `description`: String,
    `dueDate`: Date,
    `status`: Enum (`PENDING`, `IN_PROGRESS`, `COMPLETED`)
}]

### 3.3 `Leads` Collection
CRM Leads from marketing / public website.
- `_id`: ObjectId
- `name`: String
- `contactInfo`: { email: String, phone: String }
- `enquiryType`: String
- `leadSource`: String
- `stage`: Enum (`NEW`, `CONTACTED`, `CONSULTATION_BOOKED`, `CONVERTED`, `LOST`)
- `assignedCounsellorId`: ObjectId (Ref `CounsellorProfiles`, Optional)
- `notes`: String
- `createdAt`: Date

---

## 4. Knowledge Base (Career Library)

### 4.1 `Careers` Collection
- `_id`: ObjectId
- `title`: String
- `overview`: String
- `skillsNeeded`: [String]
- `salaryRange`: String
- `futureScope`: String

### 4.2 `Colleges` Collection
- `_id`: ObjectId
- `name`: String
- `location`: String
- `coursesOffered`: [String]
- `eligibility`: String
- `rankings`: Object
