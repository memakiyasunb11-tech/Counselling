# ADMIN PANEL FUNCTIONAL SPECIFICATION

**EduFordge**

## 1. Overview
The Admin Panel is the control center for EduFordge's internal operations. It allows `SUPER_ADMIN` and `CONTENT_EDITOR` roles to manage users, monitor business metrics, update website content, and configure psychometric assessments.

## 2. Dashboard & Analytics
- **Key Metrics Overview**:
  - Total Active Students
  - Total Counsellors
  - Leads Generated (Current Month)
  - Consultation Conversion Rate
  - Total Revenue (from Packages)
- **Charts**:
  - Leads by Source (Bar/Pie Chart)
  - Sessions Conducted over time (Line Chart)
- **Quick Actions**: "Add Counsellor", "Publish New Assessment", "View Pending Support Tickets".

## 3. User Management Module
### 3.1 Student & Parent Management
- **View**: Searchable, filterable list of all registered students.
- **Details**: View student profile, linked parent, purchased packages, assigned counsellor, and roadmap progress.
- **Actions**: Edit profile, reset password, change assigned counsellor, deactivate account.

### 3.2 Counsellor Management
- **View**: List of all counsellors, their active student count, and average ratings.
- **Details**: View specialization, availability calendar, and session history.
- **Actions**: Add new counsellor, verify credentials, edit bio, suspend account.

## 4. Assessment Engine Configuration
- **List View**: All assessments (Active / Draft).
- **Builder Interface**:
  - Define Test Title, Category, and Time Limit.
  - **Question Bank Manager**: Add/Edit/Delete questions, define options, and assign weights to specific trait categories (e.g., Option A = +2 Logic, Option B = +2 Creativity).
- **Actions**: Publish test (makes it available to students), Unpublish test, Version control (duplicate test).

## 5. CRM & Lead Management
- **List View**: Kanban board or Data Table of Leads (New, Contacted, Consultation Booked, Converted, Lost).
- **Filters**: By Lead Source, By Date, By Assigned Counsellor.
- **Lead Detail**: Contact info, notes from sales team, activity history.
- **Actions**: Manually add lead, re-assign lead, update stage, convert lead to Student (triggers account creation).

## 6. Financial & Package Management
- **Packages**: Define Pricing Plans (e.g., "Career Clarity Pack", "Premium Roadmap Pack").
  - Attributes: Name, Price, Included features (e.g., "1 Assessment, 3 Sessions").
- **Transactions**: View all successful and failed payments. Generate invoices.

## 7. CMS (Content Management System)
- **Career Library Manager**: Add/Edit/Delete career profiles.
- **College/Course Manager**: Update database of colleges, entrance exams, and fees.
- **Blog Manager**: WYSIWYG editor for SEO-friendly blog posts.
- **Testimonial Manager**: Approve and publish student success stories to the homepage.

## 8. Role & Permission Matrix
- **SUPER_ADMIN**: Full access to all modules, including billing and system settings.
- **CONTENT_EDITOR**: Access to CMS, Career Library, and Blog modules only.
- **OPERATIONS_MANAGER**: Access to User Management, CRM, and Sessions, but not financial settings or DB configuration.
