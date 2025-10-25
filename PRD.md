# Product Requirements Document (PRD)
## Presence - Attendance & Time Management System

**Version:** 1.0
**Date:** October 25, 2025
**Company:** ThoughtSpeed
**Document Owner:** Product Team

---

## Table of Contents
1. [Executive Summary](#executive-summary)
2. [Product Overview](#product-overview)
3. [Technology Stack](#technology-stack)
4. [User Roles & Permissions](#user-roles--permissions)
5. [Core Features](#core-features)
6. [Phase 1: MVP Features](#phase-1-mvp-features)
7. [Phase 2: Enhanced Features](#phase-2-enhanced-features)
8. [Phase 3: Advanced Features](#phase-3-advanced-features)
9. [Data Models](#data-models)
10. [Compliance & Security](#compliance--security)
11. [Success Metrics](#success-metrics)

---

## Executive Summary

**Presence** is a multi-tenant SaaS attendance and time management system designed for organizations to track employee attendance, manage leaves, and monitor work hours. The platform supports multiple attendance modes (clock-in/out, selfie-based, GPS-based) and provides comprehensive reporting and analytics.

### Target Users
- Organizations (companies) managing their workforce
- HR/Admin personnel managing attendance policies
- Employees/Workers tracking their own time

### Key Value Propositions
- Flexible attendance tracking (multiple modes)
- Comprehensive leave management with custom workflows
- Time allocation to projects/tasks
- Multi-tenant architecture supporting multiple organizations
- Mobile-first approach for end users
- Detailed reporting and analytics

---

## Product Overview

### Product Vision
To provide organizations with a robust, flexible, and easy-to-use attendance and time management system that adapts to their unique workforce management needs.

### Product Goals
1. Enable accurate time and attendance tracking
2. Streamline leave approval workflows
3. Provide actionable insights through reports and analytics
4. Support diverse workforce types (full-time, part-time, agents, interns)
5. Ensure data security and compliance with Indian labor laws

### Out of Scope (Current Version)
- Project/Task Management features (Jira-like functionality)
- Payroll processing
- Performance management
- Email/SMS notifications (Phase 1-3)
- SSO/OAuth integration
- Two-factor authentication

---

## Technology Stack

### Frontend
- **Web Application:** Next.js 15, TypeScript, Tailwind CSS
- **GraphQL Client:** Apollo Client
- **Primary Users:** Company Admin, Company Manager, Super Admin

### Backend
- **Framework:** NestJS (Node.js)
- **API:** GraphQL with Apollo Server
- **Authentication:** JWT (JSON Web Tokens)
- **Language:** TypeScript

### Mobile
- **Framework:** Flutter
- **Platforms:** Android & iOS
- **Primary Users:** Humans (employees/workers)
- **Purpose:** Attendance tracking and basic leave management

### Database
- **Primary Option:** MongoDB
- **Alternative:** PostgreSQL (recommended for complex relational data, multi-tenancy, and time-series queries)
- **Considerations:**
  - MongoDB offers schema flexibility
  - PostgreSQL provides better relational integrity, row-level security for multi-tenancy, and ACID compliance

### File Storage
- **Provider:** Google Drive API
- **Purpose:** Storing attendance selfies/photos
- **Implementation:** Per-organization Google Drive integration (each organization connects their own Google Drive)

### Infrastructure & Deployment
- TBD (suggest: AWS/GCP/Azure, Docker, CI/CD)

---

## User Roles & Permissions

### 1. Super Admin (ThoughtSpeed)
**Organization:** ThoughtSpeed (parent company)
**Permissions:**
- Full system access
- Manage all organizations (clients)
- View all data across organizations
- System configuration and settings
- Create/manage Admins

### 2. Admin (ThoughtSpeed)
**Organization:** ThoughtSpeed (parent company)
**Permissions:**
- Manage client organizations
- View analytics across organizations
- Support and troubleshooting
- Limited system configuration

### 3. Company Admin
**Organization:** Client company (tenant)
**Permissions:**
- Full control over their organization
- Manage Company Managers and Humans
- Configure attendance modes
- Create/manage leave types and approval workflows
- Configure work schedules and policies
- Manage holiday calendar
- Create/view all reports
- Configure notification settings
- Manage auto clock-out settings
- Approve/disapprove self-registrations
- CSV import/export

### 4. Company Manager
**Organization:** Client company (tenant)
**Permissions:**
- Manage Humans in their assigned teams/departments
- Configure work schedules for their team
- Create/manage leave types and approval workflows
- Approve/disapprove leaves (based on workflow)
- View reports for their team
- Manage holiday calendar
- Configure grace periods and work hours

### 5. Human (Employee/Worker)
**Organization:** Client company (tenant)
**Types:** Full-time, Part-time, Agent, Intern, Custom
**Permissions:**
- Clock in/out (attendance)
- Submit attendance (selfie/GPS based on company settings)
- View own attendance history
- Apply for leaves
- View leave balance
- View own work hours and overtime
- Allocate time to projects/tasks
- View assigned projects/tasks
- Receive push notifications (mobile)

---

## Core Features

### 1. Multi-Tenancy
- Each organization (company) is isolated
- Separate data storage per organization
- Custom branding (optional, future phase)
- Per-organization configuration

### 2. Attendance Tracking
**Configurable Modes (Company Admin decides):**
1. **Simple Clock-in/Clock-out:** Manual button press
2. **Selfie Check-in/Check-out:** Photo with timestamp
3. **Selfie + GPS:** Photo with location coordinates
4. **Clock-in/Clock-out + GPS:** Manual + location

**Time Tracking Components:**
- Work start time
- Work pause time (for breaks)
- Work restart time (after breaks)
- Work end time
- Lunch start time (optional, admin configured)
- Lunch end time (optional, admin configured)

**Features:**
- Multiple check-ins per day for breaks
- Overtime tracking
- Late arrival tracking with grace period (default: 30 minutes, configurable)
- Auto clock-out with notification system (see below)

**Auto Clock-out Logic:**
- If Human forgets to clock out
- System sends X notifications (configurable by Company Admin)
- If no response, auto clock-out at configured time
- Example: Standard clock-out at 7:00 PM → send notifications at 7:10, 7:20, 7:30 PM → auto clock-out at 7:35 PM
- Fully configurable: number of notifications, timing, and auto clock-out delay

### 3. Leave Management

**Leave Types:**
- Default types: Paid Leave, Sick Leave, Casual Leave, Unpaid Leave
- Custom leave types created by Company Admin/Manager
- Per-type configurations:
  - Leave balance allocation (annual)
  - Carry-forward rules
  - Approval workflow (single or multi-level)
  - Eligibility criteria

**Leave Application:**
- Full-day, half-day, hourly leave support
- Leave reason/notes
- Date range selection
- Attachment support (optional, future)

**Approval Workflow:**
- Configurable per leave type
- Single-level: Human → Company Manager/Admin
- Multi-level: Human → Manager → Admin
- Approval/rejection with comments
- Leave balance validation before approval

**Leave Balance:**
- Track remaining leave balance per type
- Automatic deduction upon approval
- Balance carry-forward (configurable)
- Balance expiry rules

### 4. Shift Management
- Multiple shifts supported (morning, evening, night, custom)
- Per-Human shift assignment
- Flexible hours vs. strict timings (configurable per Human)
- Shift rotation support (future phase)

### 5. Work Schedules & Policies
- Company Admin/Manager sets work timings per Human
- Minimum work hours per day/week/month (configurable)
- Grace period for late check-ins (default: 30 min, configurable)
- Overtime calculation rules
- Break time policies

### 6. Holiday Calendar
- Organization-wide holiday calendar
- Regional holidays (country-wise, state-wise)
- Managed by Company Admin and Company Manager
- Holidays excluded from work hour calculations

### 7. Project & Task Time Allocation
- Humans can allocate work time to projects/tasks
- Time tracking per project/task
- Reports showing time allocation distribution
- **Note:** No project management features (no task creation, assignments, etc.)
- Projects/tasks are created by Admin/Manager for time tracking purposes only

### 8. Reports & Analytics
**Report Types:**
1. **Daily Attendance Summary:** Who checked in/out, late arrivals, absences
2. **Leave Balance Report:** Remaining leave balance per Human
3. **Overtime Report:** Overtime hours per Human
4. **Project Time Allocation Report:** Time spent on each project/task
5. **Custom Report Builder:** Create reports with custom filters and date ranges

**Export Options:**
- CSV export
- PDF export (future phase)
- Excel export (future phase)

### 9. Notifications
**Delivery Method:** Push notifications (mobile app only)

**Notification Triggers:**
- Leave application submitted (to approver)
- Leave approved/rejected (to applicant)
- Clock-in reminder (configurable time)
- Forgot to clock out (3 reminders before auto clock-out)
- Late check-in warning
- Shift start reminder
- Holiday announcement
- Custom notifications from Admin

### 10. Onboarding & Bulk Operations
**CSV Import:**
- Bulk import Humans
- Fields: Name, email, mobile, human type, shift, work hours, etc.
- Validation and error reporting

**Invitation System:**
- Company Admin/Manager sends email invitations
- Invited Humans create accounts via link
- Auto-approval for invited Humans

**Self-Registration:**
- Humans can self-register
- Requires Company Admin approval before full access
- Limited functionality until approved (can view only, no attendance/leave actions)

### 11. Authentication
**Methods:**
- Email + Password
- Username + Password
- Mobile + SMS OTP (future phase)

**Security:**
- JWT-based authentication
- Password hashing (bcrypt)
- Session management
- Password reset functionality

---

## Phase 1: MVP Features

**Goal:** Launch a functional attendance and leave management system for early adopters.

**Timeline:** 3-4 months

### Features Included

#### 1. User Management
- [ ] Super Admin and Admin roles (ThoughtSpeed)
- [ ] Company Admin and Company Manager roles
- [ ] Human role with basic types (Full-time, Part-time, Intern)
- [ ] User registration (email + password only)
- [ ] JWT authentication
- [ ] Basic user profile (name, email, mobile, role, type)

#### 2. Organization Management
- [ ] Create/manage organizations (by Super Admin)
- [ ] Organization settings (name, address, timezone)
- [ ] Company Admin can manage their organization

#### 3. Attendance Tracking
- [ ] **Clock-in/Clock-out only** (simple mode)
- [ ] Work start and work end time
- [ ] Manual attendance marking
- [ ] View attendance history (daily, weekly, monthly)
- [ ] Admin can view all Humans' attendance

#### 4. Leave Management
- [ ] Default leave types: Paid, Sick, Casual, Unpaid
- [ ] Leave application (full-day only in Phase 1)
- [ ] Single-level approval workflow (Human → Company Manager/Admin)
- [ ] Leave balance tracking
- [ ] Approve/reject leaves
- [ ] View leave history

#### 5. Basic Reporting
- [ ] Daily attendance summary
- [ ] Leave balance report
- [ ] Simple export to CSV

#### 6. Web Application (Next.js)
- [ ] Login/logout
- [ ] Dashboard for Admin (attendance overview)
- [ ] Human list and management
- [ ] Attendance view (calendar view)
- [ ] Leave management UI
- [ ] Basic responsive design

#### 7. Mobile Application (Flutter)
- [ ] Login/logout
- [ ] Clock-in/Clock-out button
- [ ] View today's attendance
- [ ] Apply for leave (simple form)
- [ ] View leave balance

#### 8. Backend (NestJS)
- [ ] GraphQL API setup
- [ ] User authentication APIs
- [ ] Attendance CRUD operations
- [ ] Leave management APIs
- [ ] Basic validation and error handling

#### 9. Database
- [ ] Schema design for users, organizations, attendance, leaves
- [ ] MongoDB setup and configuration
- [ ] Indexing for performance

### Out of Scope for Phase 1
- Selfie/GPS attendance modes
- Multiple check-ins (breaks, lunch)
- Shift management
- Holiday calendar
- Overtime tracking
- Project/task time allocation
- Push notifications
- Auto clock-out
- Grace periods
- Custom leave types
- Multi-level approval workflows
- Half-day/hourly leaves
- CSV import
- Self-registration

---

## Phase 2: Enhanced Features

**Goal:** Add flexibility and advanced attendance tracking capabilities.

**Timeline:** 2-3 months after Phase 1

### Features Included

#### 1. Advanced Attendance Modes
- [ ] Selfie check-in/check-out with timestamp
- [ ] GPS-based attendance (optional add-on)
- [ ] Company Admin can choose attendance mode
- [ ] Google Drive integration for storing selfies

#### 2. Enhanced Time Tracking
- [ ] Work pause/restart (break tracking)
- [ ] Lunch start/end time (configurable)
- [ ] Multiple check-ins per day
- [ ] View detailed time breakdown (work hours, break hours)

#### 3. Shift Management
- [ ] Create/manage shifts (morning, evening, night, custom)
- [ ] Assign shifts to Humans
- [ ] Shift-based attendance validation

#### 4. Grace Period & Auto Clock-out
- [ ] Configure grace period for late check-ins (default 30 min)
- [ ] Auto clock-out logic with configurable notifications
- [ ] Notification count and timing configuration

#### 5. Work Schedules & Policies
- [ ] Set minimum work hours (per day/week/month)
- [ ] Flexible vs. strict timing mode per Human
- [ ] Late arrival tracking and reporting

#### 6. Holiday Calendar
- [ ] Organization-wide holidays
- [ ] Regional holidays (country/state level)
- [ ] Holiday management UI
- [ ] Exclude holidays from work hour calculations

#### 7. Custom Leave Types & Workflows
- [ ] Company Admin/Manager can create custom leave types
- [ ] Configure leave balance and carry-forward rules
- [ ] Multi-level approval workflows (configurable per leave type)
- [ ] Half-day and hourly leave support

#### 8. Push Notifications
- [ ] Mobile push notification setup (Firebase/FCM)
- [ ] Leave approval/rejection notifications
- [ ] Clock-in reminder
- [ ] Auto clock-out reminders
- [ ] Late check-in warnings

#### 9. Enhanced Reporting
- [ ] Overtime report
- [ ] Shift adherence report
- [ ] Late arrival report
- [ ] Export to PDF

### Dependencies
- Google Drive API integration
- Push notification service (Firebase)
- Enhanced mobile app UI

---

## Phase 3: Advanced Features

**Goal:** Provide comprehensive analytics, bulk operations, and advanced time allocation.

**Timeline:** 2-3 months after Phase 2

### Features Included

#### 1. Overtime Tracking
- [ ] Automatic overtime calculation based on work hours
- [ ] Overtime approval workflow (optional)
- [ ] Overtime compensation tracking (hours or pay)
- [ ] Overtime reports and analytics

#### 2. Project & Task Time Allocation
- [ ] Create projects (by Admin/Manager)
- [ ] Create tasks under projects
- [ ] Humans allocate work time to projects/tasks
- [ ] Time allocation during clock-in or retroactively
- [ ] Project time allocation reports

#### 3. Custom Report Builder
- [ ] Drag-and-drop report builder
- [ ] Custom filters (date range, human type, department, etc.)
- [ ] Save and schedule reports
- [ ] Email report delivery (if email notifications added)

#### 4. Advanced Analytics Dashboard
- [ ] Attendance trends (weekly, monthly, yearly)
- [ ] Leave usage patterns
- [ ] Overtime trends
- [ ] Department-wise comparisons
- [ ] Productivity metrics (time allocation)

#### 5. Bulk Operations
- [ ] CSV import for Humans (with validation)
- [ ] Bulk leave application (for holidays)
- [ ] Bulk shift assignment
- [ ] Bulk export (attendance, leaves, reports)

#### 6. Onboarding Enhancements
- [ ] Self-registration for Humans
- [ ] Admin approval workflow for self-registered users
- [ ] Invitation system via email
- [ ] Onboarding checklist

#### 7. Audit Logs
- [ ] Track all sensitive actions (attendance edits, leave approvals, settings changes)
- [ ] View audit log (Admin only)
- [ ] Export audit logs
- [ ] Retain logs per data retention policy

#### 8. Data Retention & Compliance
- [ ] Configurable data retention policies
- [ ] Automatic data archival after retention period
- [ ] Compliance with Indian labor laws (leave balance, work hours, overtime)
- [ ] GDPR-like data privacy features (data export, account deletion)

#### 9. Mobile App Enhancements
- [ ] Biometric authentication (fingerprint, face unlock)
- [ ] Offline mode (cache attendance, sync later)
- [ ] Rich notifications with actions (approve leave from notification)
- [ ] Dark mode

### Optional Additions (Phase 3.5 or Later)
- [ ] Email/SMS notifications
- [ ] SSO integration (Google, Microsoft)
- [ ] Two-factor authentication
- [ ] Payroll integration
- [ ] Advanced project management features
- [ ] Performance reviews
- [ ] Custom branding per organization
- [ ] White-label solution
- [ ] API for third-party integrations
- [ ] Mobile web app (PWA)

---

## Data Models

### Organization
```
{
  id: UUID
  name: String
  address: String
  country: String
  state: String
  timezone: String
  attendanceMode: Enum [CLOCK_IN, SELFIE, SELFIE_GPS, CLOCK_IN_GPS]
  googleDriveConnected: Boolean
  googleDriveConfig: Object
  gracePeriodMinutes: Number (default: 30)
  autoClockOutEnabled: Boolean
  autoClockOutNotificationCount: Number
  autoClockOutDelayMinutes: Number
  createdAt: DateTime
  updatedAt: DateTime
}
```

### Human (Employee/Worker)
```
{
  id: UUID
  organizationId: UUID (ref: Organization)
  firstName: String
  lastName: String
  email: String (unique)
  mobile: String
  username: String (unique)
  passwordHash: String
  role: Enum [SUPER_ADMIN, ADMIN, COMPANY_ADMIN, COMPANY_MANAGER, HUMAN]
  humanType: Enum [FULL_TIME, PART_TIME, AGENT, INTERN, CUSTOM] (nullable if not HUMAN role)
  shiftId: UUID (ref: Shift, nullable)
  workStartTime: Time
  workEndTime: Time
  flexibleHours: Boolean
  minimumWorkHoursPerDay: Number
  minimumWorkHoursPerWeek: Number
  minimumWorkHoursPerMonth: Number
  isApproved: Boolean (for self-registration)
  isActive: Boolean
  createdAt: DateTime
  updatedAt: DateTime
}
```

### Attendance
```
{
  id: UUID
  humanId: UUID (ref: Human)
  organizationId: UUID (ref: Organization)
  date: Date
  workStartTime: DateTime
  workPauseTime: DateTime (nullable, array for multiple breaks)
  workRestartTime: DateTime (nullable, array)
  workEndTime: DateTime (nullable)
  lunchStartTime: DateTime (nullable)
  lunchEndTime: DateTime (nullable)
  checkInMode: Enum [CLOCK_IN, SELFIE, GPS]
  checkInLocation: GeoPoint (nullable)
  checkInPhotoUrl: String (nullable, Google Drive link)
  checkOutMode: Enum [CLOCK_IN, SELFIE, GPS]
  checkOutLocation: GeoPoint (nullable)
  checkOutPhotoUrl: String (nullable)
  isLate: Boolean
  lateByMinutes: Number
  totalWorkMinutes: Number
  totalBreakMinutes: Number
  overtimeMinutes: Number
  isAutoClockOut: Boolean
  status: Enum [CHECKED_IN, CHECKED_OUT, ABSENT, ON_LEAVE]
  createdAt: DateTime
  updatedAt: DateTime
}
```

### Shift
```
{
  id: UUID
  organizationId: UUID (ref: Organization)
  name: String
  startTime: Time
  endTime: Time
  isActive: Boolean
  createdAt: DateTime
  updatedAt: DateTime
}
```

### LeaveType
```
{
  id: UUID
  organizationId: UUID (ref: Organization)
  name: String (e.g., "Paid Leave", "Sick Leave")
  isPaid: Boolean
  annualBalance: Number (days)
  carryForwardAllowed: Boolean
  carryForwardMaxDays: Number (nullable)
  approvalWorkflow: Array [{ level: Number, approverRole: Enum }]
  isActive: Boolean
  createdAt: DateTime
  updatedAt: DateTime
}
```

### Leave
```
{
  id: UUID
  humanId: UUID (ref: Human)
  organizationId: UUID (ref: Organization)
  leaveTypeId: UUID (ref: LeaveType)
  startDate: Date
  endDate: Date
  isHalfDay: Boolean
  halfDayPeriod: Enum [FIRST_HALF, SECOND_HALF] (nullable)
  isHourly: Boolean
  hourlyDuration: Number (nullable, in hours)
  reason: String
  status: Enum [PENDING, APPROVED, REJECTED, CANCELLED]
  approvalLevel: Number (current level in workflow)
  approverComments: String (nullable)
  approvedBy: UUID (ref: Human, nullable)
  approvedAt: DateTime (nullable)
  totalDays: Number
  createdAt: DateTime
  updatedAt: DateTime
}
```

### LeaveBalance
```
{
  id: UUID
  humanId: UUID (ref: Human)
  organizationId: UUID (ref: Organization)
  leaveTypeId: UUID (ref: LeaveType)
  year: Number
  allocated: Number (days)
  used: Number (days)
  remaining: Number (days)
  carriedForward: Number (days)
  createdAt: DateTime
  updatedAt: DateTime
}
```

### Holiday
```
{
  id: UUID
  organizationId: UUID (ref: Organization)
  name: String
  date: Date
  isRegional: Boolean
  country: String (nullable)
  state: String (nullable)
  isActive: Boolean
  createdAt: DateTime
  updatedAt: DateTime
}
```

### Project
```
{
  id: UUID
  organizationId: UUID (ref: Organization)
  name: String
  description: String
  isActive: Boolean
  createdBy: UUID (ref: Human)
  createdAt: DateTime
  updatedAt: DateTime
}
```

### Task
```
{
  id: UUID
  projectId: UUID (ref: Project)
  name: String
  description: String
  isActive: Boolean
  createdAt: DateTime
  updatedAt: DateTime
}
```

### TimeAllocation
```
{
  id: UUID
  humanId: UUID (ref: Human)
  organizationId: UUID (ref: Organization)
  attendanceId: UUID (ref: Attendance, nullable)
  projectId: UUID (ref: Project)
  taskId: UUID (ref: Task, nullable)
  date: Date
  minutes: Number
  notes: String (nullable)
  createdAt: DateTime
  updatedAt: DateTime
}
```

### AuditLog
```
{
  id: UUID
  organizationId: UUID (ref: Organization)
  userId: UUID (ref: Human)
  action: String (e.g., "ATTENDANCE_EDITED", "LEAVE_APPROVED")
  entityType: Enum [ATTENDANCE, LEAVE, HUMAN, ORGANIZATION, etc.]
  entityId: UUID
  changesBefore: Object (nullable)
  changesAfter: Object (nullable)
  ipAddress: String
  userAgent: String
  timestamp: DateTime
}
```

### Notification
```
{
  id: UUID
  humanId: UUID (ref: Human)
  organizationId: UUID (ref: Organization)
  type: Enum [LEAVE_APPROVAL, CLOCK_IN_REMINDER, AUTO_CLOCK_OUT_WARNING, etc.]
  title: String
  message: String
  isRead: Boolean
  actionUrl: String (nullable, deep link for mobile)
  createdAt: DateTime
}
```

---

## Compliance & Security

### Data Retention (India)
- **Attendance Records:** Retain for 3 years minimum (as per Indian labour laws)
- **Leave Records:** Retain for 3 years minimum
- **Audit Logs:** Retain for 1 year minimum
- **User Data:** Retain as long as account is active + 1 year after deletion
- **Selfie/Photos:** Retain per organization policy (default: same as attendance records)

### Security Requirements
1. **Authentication:**
   - JWT tokens with expiration (15 min access token, 7 day refresh token)
   - Password hashing with bcrypt (salt rounds: 10)
   - Rate limiting on login endpoints (max 5 attempts per 15 min)

2. **Authorization:**
   - Role-based access control (RBAC)
   - Row-level security for multi-tenant data isolation
   - API-level permission checks for all mutations

3. **Data Protection:**
   - HTTPS only (TLS 1.2+)
   - Encrypt sensitive data at rest (selfies, personal info)
   - Input validation and sanitization (prevent injection attacks)
   - CORS configuration for web app

4. **Audit & Monitoring:**
   - Log all sensitive actions (attendance edits, leave approvals, user changes)
   - Monitor failed login attempts
   - Alert on suspicious activity

5. **Privacy:**
   - Allow Humans to view/export their own data
   - Account deletion process (soft delete with data retention period)
   - Privacy policy and terms of service

### Indian Labor Law Compliance
- **Work Hours:** Track and report minimum work hours per regulations
- **Overtime:** Calculate overtime per rules (1.5x or 2x pay based on hours)
- **Leave Entitlements:** Ensure leave types comply with statutory requirements (e.g., Earned Leave, Casual Leave)
- **Weekly Off:** Track and report weekly offs (typically 1 day per week)
- **Holidays:** National and regional holiday tracking

---

## Success Metrics

### Phase 1 (MVP)
- **Adoption:** 10 organizations onboarded in first 3 months
- **User Engagement:** 80% daily active users (Humans) using mobile app
- **Attendance Accuracy:** 95% of Humans clock in/out daily
- **Leave Processing:** Average leave approval time < 24 hours

### Phase 2 (Enhanced)
- **Feature Adoption:** 60% of organizations using selfie/GPS attendance
- **Notification Effectiveness:** 90% of auto clock-out reminders result in manual clock-out
- **Leave Workflow:** 50% of organizations using multi-level approval workflows

### Phase 3 (Advanced)
- **Reporting Usage:** 70% of Company Admins generate reports weekly
- **Time Allocation:** 50% of Humans allocate time to projects/tasks
- **Bulk Operations:** 40% of organizations use CSV import for onboarding

### Overall Business Metrics
- **Customer Retention:** 85% annual retention rate
- **NPS Score:** 40+ (Net Promoter Score)
- **System Uptime:** 99.5% availability
- **Support Tickets:** < 5 tickets per organization per month

---

## Non-Functional Requirements

### Performance
- **API Response Time:** < 500ms for 95th percentile
- **Mobile App Load Time:** < 3 seconds
- **Report Generation:** < 10 seconds for standard reports
- **Database Queries:** Optimized with indexing, < 100ms for common queries

### Scalability
- **Support:** 100,000+ Humans across all organizations
- **Concurrent Users:** 10,000+ simultaneous users
- **Data Growth:** Handle 1M+ attendance records per month

### Availability
- **Uptime:** 99.5% (approximately 3.65 hours downtime per month)
- **Maintenance Windows:** Planned downtime during off-peak hours (weekends)

### Usability
- **Mobile App:** Intuitive, < 3 taps to clock in/out
- **Web App:** Responsive design, accessible on tablets
- **Onboarding:** New users complete setup in < 10 minutes

---

## Open Questions & Future Considerations

1. **Biometric Integration:** Should we support fingerprint/face recognition devices in Phase 3+?
2. **Geofencing:** Should GPS attendance have geofencing (only allow check-in within X meters of office)?
3. **Integrations:** Which third-party tools should we integrate with? (Slack, Microsoft Teams, Jira, etc.)
4. **Payroll:** Should we build payroll features or integrate with existing payroll systems?
5. **Pricing Model:** Freemium, per-user pricing, or tiered pricing?
6. **White-Label:** Should we offer white-label solutions for enterprises?
7. **Offline Mode:** How robust should offline mode be? Full functionality or limited?
8. **Multi-Language:** Should we support multiple languages? (Hindi, regional languages)
9. **Accessibility:** WCAG 2.1 compliance for web app?
10. **Custom Fields:** Should organizations be able to add custom fields to Humans/Attendance?

---

## Appendix

### Glossary
- **Human:** General term for employees, workers, agents, interns, or any person tracked in the system
- **Company Admin:** Administrator from the client organization with full control
- **Company Manager:** Manager from the client organization with team-level control
- **Organization:** Tenant/client company using Presence
- **ThoughtSpeed:** Parent company providing Presence as a SaaS product
- **Attendance Mode:** Method of attendance tracking (clock-in, selfie, GPS)
- **Grace Period:** Time buffer for late check-ins without penalty
- **Auto Clock-out:** Automatic system clock-out if Human forgets

### References
- Indian Labour Laws: [Ministry of Labour & Employment](https://labour.gov.in/)
- GraphQL Best Practices: [Apollo Docs](https://www.apollographql.com/docs/)
- NestJS Documentation: [NestJS Docs](https://docs.nestjs.com/)
- Flutter Documentation: [Flutter Docs](https://flutter.dev/docs)

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Oct 25, 2025 | Product Team | Initial PRD creation |

---

**END OF DOCUMENT**
