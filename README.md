Eco-Elimu_Track2_WMH2025
🌿 Eco-Elimu — Track 2: Community Engagement & 4K Clubs
Wangari Maathai Hackathon 2025 Submission
Team Name: Eco-Elimu Team Members:

Beryl Makaya — Team Lead & Environmental Educator
Sheila Jelagat Kipchumba — UX & Prototype Contact: sheilakipchumba43@gmail.com
1. Project Overview
Eco-Elimu is a digital platform designed to revive 4K Clubs, strengthen community participation, and empower learners and teachers with climate education, structured environmental activities, and transparent impact tracking.

Our solution blends learning, community engagement, and verified climate actions, helping schools participate meaningfully in environmental protection while connecting them to supporters.

2. Track Alignment — Track 2: Community Engagement & 4K Clubs
Eco-Elimu directly supports Track 2 by:

Re-activating 4K Clubs through guided environmental activities
Providing teachers with structured resources and mentorship
Creating a community hub that connects schools, mentors, and funders
Encouraging youth-led climate action through gamified learning
Enabling local communities to verify actions and celebrate impact
This solution is optimized for GBM & WMF contexts, where youth clubs, schools, and community forestry groups are central to restoration.

3. Problem Statement
Many schools and 4K Clubs face challenges such as:

Lack of structured climate education
Teacher burnout with no incentives or support
Dormant or inconsistent club activities
No tools to document impact (trees, cleanups, plastic collection)
Communities disconnected from student-led climate action
Funders lacking visibility and verification
This results in weak community engagement, low youth participation, and unverified environmental actions.

4. Proposed Solution — Eco-Elimu Platform
Eco-Elimu revives school-based climate clubs through:

✔ Structured Learning
A Climate Change Course with 4 modules + quizzes. Students earn 2,000 points per completed lesson.

✔ Action Center
Students log actions such as:

Tree planting
Plastic collection
Clean-ups
Teachers verify actions → recorded in the school dashboard.

✔ Teacher Dashboard (Private Earnings)
Teachers approve activities
Access climate teaching resources
Private activity-based earning summary
✔ Community Hub
(Mentorship + Club Network merged here)

Mentor resources
Club stories
Community challenges
✔ Funder Dashboard
Funders support actions—they do NOT earn. They get:

Verified reports
Photos + teacher approvals
Regional-level and school-level impact stats
5. Technical Approach / Prototype Architecture
Frontend (Lovable Prototype)
        |
        v
Application Layer (Web/Mobile)
- Student Interface
- Teacher Dashboard
- Community Hub
- Funder Dashboard
        |
        v
Backend Services
- User Authentication
- Action Logging API
- Teacher Verification Engine
- Course Module Service
        |
        v
Database
- Users
- Clubs & Schools
- Actions (trees, plastic, cleanups)
- Quizzes & Course Progress
        |
        v
Impact Verification Layer
- Photo checks (manual or AI-assisted)
- Teacher confirmation
        |
        v
Funder Reporting Module
Tools used:

Lovable (Prototype)
Firebase / SQL (Suggested)
Basic AI image-verification (optional future step)
6. Core Features of the MVP
For Students
Log climate actions
Complete climate lessons & quizzes
Earn points (gamified)
Join community challenges
For Teachers
Verify student actions
Access lesson plans
View private earnings summary
Participate in teacher community
For Schools
View club leaderboard
Track all activities
Download impact reports
For Funders
View actions they can support
See verified impact
Follow progress of sponsored schools
8. Repository Structure
Eco-Elimu_Track2_WMH2025/
│
├── README.md
├── pitch-deck/
│   └── Eco-Elimu_PitchDeck.pdf
│
├── prototype/
│   ├── lovable-prototype-link.txt
│   └── figma-screens.png
│
├── documentation/
│   ├── architecture.png
│   ├── datasets.md
│   ├── api-endpoints.md
│
└── demo-video/
    ├── demo.mp4
    └── script.txt
9. Pitch Deck
Eco-Elimu_PitchDeck.pdf

10. Dataset Documentation
Data Collected Within Eco-Elimu
Eco-Elimu collects structured environmental activity data from 4K Clubs:

Tree Planting Records: species, quantity, date, location, photo evidence
Plastic Collection Records: weight (kg), category (PET, HDPE, etc.), collection site, photos
Clean-Up Activities: area covered, number of participants, waste collected
User & Club Data
Student profiles (Name, School, Class)
Teacher profiles (Name, School)
School information (Location, Club details)
Funder profiles (Organization name, region)
Course Progress Data
Completed modules
Quiz scores
Lesson completion timestamps
Verification Data
Teacher approvals
AI/manual photo verification logs
Suggested External Data Sources
GBM tree species lists
County forest cover datasets
WMF historical club activity data
OpenStreetMap (school mapping)
11. API Documentation
Below is the proposed API structure for Eco-Elimu. These endpoints support the MVP.

Authentication Endpoints
POST /auth/register
Registers new users (student, teacher, funder).

POST /auth/login
Returns authentication token for user sessions.

Student Endpoints
POST /actions/log
Logs an environmental action.

Body:
student_id
action_type (tree, plastic, cleanup)
description
photo_url
quantity
GET /student/{id}/progress
Returns student lessons, points, and actions.

Teacher Endpoints
GET /teacher/actions/pending
View list of student-submitted actions awaiting verification.

POST /teacher/actions/verify
Approve or reject student action.

Body:
action_id
status (approved/rejected)
GET /teacher/earnings
Private teacher earnings.

Course Module Endpoints
GET /courses
Returns available courses.

GET /courses/{id}/modules
Returns module list.

POST /courses/submit-quiz
Submit quiz answers.

Funder Endpoints
GET /funders/actions
View list of supported school activities.

POST /funders/support
Support a tree planting, plastic drive, or cleanup.

Body:
school_id
action_type
amount
School Dashboard Endpoints
GET /school/{id}/report
Generates school impact report.

12. Appendix (Optional)
Field insights from teachers
Sample club activity calendar
Community interview notes
Expanded data workflow diagram
✔ Eco-Elimu — Youth-Powered Environmental Engagement
This platform is built to strengthen communities, empower learners, and drive local climate action — one school at a time.



## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS


Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
