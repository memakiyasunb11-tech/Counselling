# STUDENT JOURNEY FLOW DOCUMENT

**EduFordge**

This document outlines the end-to-end user experience for a student progressing through the EduFordge platform, from initial discovery to continuous roadmap tracking.

---

## 1. Discovery & Lead Capture

1. **Landing on Website**: The student (or parent) visits the EduFordge public website, explores services, and views trust metrics.
2. **Exploration**: They browse the Career Library or read blog posts regarding career confusion.
3. **Action (Lead Creation)**: 
   - They click "Book Free Consultation".
   - They fill out a form (Name, Email, Phone, Grade, Enquiry Reason).
   - *Backend*: A new `Lead` record is created. An automated welcome email is sent.

## 2. Onboarding & Consultation

1. **Scheduling**: A Counsellor reaches out or the student books a slot using the integrated calendar.
2. **Initial Consultation**: The free session happens via a meeting link (Zoom/Google Meet).
3. **Conversion**: The Counsellor recommends a specific package (e.g., "Career Clarity Pack" which includes an assessment and 2 counselling sessions).
4. **Checkout**: The student purchases the package on the platform.
5. **Account Activation**: The student's account transitions from a simple Lead to a fully provisioned `StudentProfile` with access to the dashboard.

## 3. The Assessment Phase

1. **Dashboard Access**: The student logs in and sees an assigned task: "Take the Comprehensive Psychometric Assessment".
2. **Taking the Test**:
   - They enter the distraction-free assessment UI.
   - They answer multi-choice questions across different sections (Aptitude, Interest, Personality).
   - They can pause and resume if needed.
3. **Submission**: Upon completion, the system calculates raw scores instantly but does not immediately display the final report.
4. **Review Queue**: The completed assessment triggers a notification to the assigned Counsellor for review.

## 4. Counselling & Reporting

1. **Counsellor Review**: The Counsellor reviews the raw scores, adds personalized remarks, selects top career matches, and publishes the Final Report.
2. **Report Notification**: The student receives an email: "Your Career Assessment Report is Ready!"
3. **Session Booking**: The student logs in, views/downloads the PDF report, and books their first paid "Report Review Session" with the Counsellor.
4. **The Counselling Session**: They meet online. The Counsellor explains the results and discusses potential career paths.

## 5. Roadmap & Ongoing Support

1. **Roadmap Generation**: Post-session, the Counsellor builds an actionable "Career Roadmap" (e.g., "Research these 3 colleges", "Take a Python introductory course by next month").
2. **Student Execution**: The student logs into the dashboard, sees their Roadmap Milestones, and marks tasks as "In Progress" or "Completed".
3. **Follow-ups**: Based on the purchased package, they can book follow-up sessions or chat with their Counsellor for ongoing mentorship.
4. **Continuous Value**: The student frequently returns to explore the Career Library, read updated College admissions criteria, and track their progress until they reach their career/college goal.
