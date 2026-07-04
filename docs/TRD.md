# TECHNICAL REQUIREMENTS DOCUMENT (TRD)

**EduFordge**
*Career Counselling / Career Guidance / Student Mentorship / Psychometric Assessment / College & Career Planning Platform*

## 1. Executive Summary
This document outlines the technical architecture, technology stack, database considerations, API design, and deployment strategy for EduFordge. It bridges the product requirements (PRD) with the development execution.

## 2. Technology Stack

### 2.1 Frontend Stack (Client)
- **Framework**: React 19 / Vite (or Next.js for SSR/SEO needs)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, Vanilla CSS
- **Animations**: Framer Motion for smooth scroll and micro-interactions (PixelShield style)
- **Icons**: Lucide React
- **State Management**: React Context + Custom Hooks (Zustand or Redux if complexity increases)
- **Routing**: React Router v7

### 2.2 Backend Stack (Server)
- **Framework**: Node.js with Express.js
- **Language**: JavaScript / TypeScript
- **Architecture**: Modular Monolith (MVC pattern - Controllers, Services, Models)

### 2.3 Database
- **Primary DB**: MongoDB (aligned with MERN Stack architecture)
- **ODM**: Mongoose
- **File Storage**: AWS S3 (or equivalent cloud storage) for student reports, assessment PDFs, and academic documents.

## 3. System Architecture

### 3.1 High-Level Architecture
1. **Client Application (React/Vite)**: Handles all user interfaces for Students, Parents, Counsellors, and Admins. Communicates with the Backend via REST APIs.
2. **Backend Server (Express)**: Exposes secure REST endpoints, handles business logic, assessment scoring engine, and role-based access control.
3. **Database (MongoDB)**: Stores user data, psychometric questions, session bookings, CRM leads, and career library content.
4. **Cloud Storage**: Stores user-uploaded documents and generated PDF reports.

### 3.2 Authentication & Security
- **Strategy**: JWT (JSON Web Tokens) with short-lived access tokens and httpOnly refresh tokens.
- **Roles (RBAC)**: `STUDENT`, `PARENT`, `COUNSELLOR`, `SCHOOL_ADMIN`, `SUPER_ADMIN`.
- **Password Security**: bcrypt for password hashing.
- **CORS & Rate Limiting**: Enabled for secure public endpoints.

## 4. API Design (REST)

APIs will follow standard RESTful conventions. All secure endpoints will require a valid JWT `Authorization` header.

### 4.1 Core Namespaces
- `/api/auth/*` - Registration, Login, Token Refresh, Password Reset
- `/api/users/*` - Profile management, Role-specific fetching
- `/api/assessments/*` - Fetching questions, submitting answers, scoring engine, retrieving reports
- `/api/sessions/*` - Booking, updating, listing counselling sessions
- `/api/roadmaps/*` - Roadmap milestone CRUD
- `/api/crm/*` - Lead generation and management
- `/api/library/*` - Careers, Colleges, Courses content fetching

## 5. Module-wise Backend Logic

### 5.1 Psychometric Assessment Engine
- **Data Model**: Questions are tagged by trait/category (e.g., Aptitude, Interest).
- **Scoring Logic**: When a student submits a test, the backend calculates scores per trait based on defined weights, generating a normalized percentile/score.
- **Report Generation**: Data payload is prepared by the backend and sent to a PDF generation service (e.g., Puppeteer or a template engine) to create the final downloadable report.

### 5.2 Session Booking System
- **Logic**: Counsellors define availability slots (e.g., specific days/hours). The system validates slot availability before confirming a booking.
- **Concurrency**: Transactions or atomic updates to prevent double-booking.

### 5.3 Career Recommendation Engine (Phase 1)
- **Logic**: Rule-based matching engine. The backend compares a student's top psychometric traits and preferences (stream, budget, location) against predefined profiles of careers in the database.

## 6. Deployment Architecture (MVP)

- **Frontend Hosting**: Vercel or Netlify (Fast global CDN, easy CI/CD integration).
- **Backend Hosting**: Render, Heroku, or AWS EC2 (Node.js runtime).
- **Database Hosting**: MongoDB Atlas (Managed DB for scalability and backups).
- **Domain & DNS**: Custom domain (e.g., EduFordge.com) with SSL certificates managed by Cloudflare or the hosting provider.

## 7. Version Control & CI/CD
- **Repository**: GitHub or GitLab.
- **Branching Strategy**: GitFlow (main, develop, feature/*, hotfix/*).
- **CI/CD**: GitHub Actions to automatically run linting, tests, and deploy to staging environments on push to `develop`, and production on push to `main`.
