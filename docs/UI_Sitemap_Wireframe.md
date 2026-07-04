# UI SITEMAP & WIREFRAME DOCUMENT

**EduForge**

## 1. Information Architecture (Sitemap)

### 1.1 Public Website
- `/` (Home)
- `/about`
- `/services`
  - `/services/career-counselling`
  - `/services/psychometric-assessment`
  - `/services/stream-selection`
  - `/services/college-planning`
- `/assessments`
- `/library/careers`
  - `/library/careers/:slug` (Detail)
- `/library/colleges`
- `/pricing`
- `/contact` (Includes Consultation Booking)
- `/login`
- `/signup`

### 1.2 Platform (Protected Routes)
- `/student/dashboard`
  - `/student/assessments`
  - `/student/reports`
  - `/student/sessions`
  - `/student/roadmap`
- `/parent/dashboard`
- `/counsellor/dashboard`
  - `/counsellor/students`
  - `/counsellor/sessions`
  - `/counsellor/reports`
- `/admin/dashboard`

---

## 2. High-Level Wireframes & Section Blocks

### 2.1 Home Page (`/`)
- **Header**: Sticky Navbar (Logo, Links, "Book Consultation", "Login")
- **Hero Section**: 
  - Headline: *Discover the Right Career Path with Expert Guidance and Psychometric Insights*
  - CTA 1: Book Free Consultation, CTA 2: Take Career Quiz
  - Visual: Abstract Premium SVG illustration or Dashboard Mockup (Floating animation)
- **Trust Metrics Bar**: 10,000+ Students Guided | 100+ Mentors | 95% Satisfaction
- **How It Works (Cards)**: Discover -> Understand -> Select -> Map -> Support (Horizontal scrolling or grid)
- **Services Overview**: 2x3 Grid of premium cards with hover elevation.
- **Student Journey**: Vertical timeline revealing step-by-step (Scroll animation).
- **Testimonials**: Carousel of student/parent stories.
- **Footer**: Sitemap links, Newsletter signup, Legal links.

### 2.2 Login & Signup (`/login`, `/signup`)
- **Layout**: Split screen. Left side: High-quality illustration/branding. Right side: Auth form.
- **Fields (Signup)**: Name, Email, Password, Role Selection (Student, Parent, Counsellor).
- **CTA**: Large, high-contrast button.

### 2.3 Student Dashboard (`/student/dashboard`)
- **Layout**: Fixed Left Sidebar (Nav) + Top Bar (Profile, Notifications) + Main Content Area.
- **Main Area - Top**: Welcome Banner "Welcome back, [Name]! Next milestone: Complete Aptitude Test."
- **Widgets**:
  - *Upcoming Sessions*: Card with Date, Time, Counsellor Name, and "Join Meeting" button.
  - *Assessment Status*: Progress bar (e.g., 2/4 completed).
  - *Latest Report*: Preview thumbnail with "Download PDF" button.
  - *Roadmap Progress*: Mini-timeline showing next pending task.

### 2.4 Counsellor Dashboard (`/counsellor/dashboard`)
- **Layout**: Fixed Left Sidebar + Main Content Area.
- **Widgets**:
  - *Today's Schedule*: List of sessions with quick links to join.
  - *Pending Reports*: Tasks to review student assessments and draft remarks.
  - *New Leads*: Snippets of recently assigned leads awaiting consultation.
  - *Student List Quick View*: Searchable table of assigned students.

### 2.5 Assessment Engine UI (`/student/assessments/:id`)
- **Layout**: Distraction-free full-screen mode.
- **Header**: Test Title, Timer (if applicable), Overall Progress Bar.
- **Content**: One question per screen or vertical list (configurable).
- **Controls**: "Previous", "Next", "Save & Exit", "Submit Test".

### 2.6 Report Builder UI (`/counsellor/reports/build/:attemptId`)
- **Layout**: Two-column layout.
- **Left Column**: Student's raw scores and psychometric data visualizer (Charts).
- **Right Column**: Form fields for Counsellor Remarks, Career Recommendations (Search & Select from DB), and Roadmap generation.

## 3. UI/UX Style Notes
- **Theme**: Premium Dark (Background: #0F172A) with vibrant accents (Indigo #4F46E5, Cyan #06B6D4).
- **Cards**: Soft rounded corners (16px), subtle border stroke, inner glow on hover.
- **Typography**: Inter or Plus Jakarta Sans (Modern, legible).
- **Animations**: Page transitions using Framer Motion, stagger children elements on list renders.
