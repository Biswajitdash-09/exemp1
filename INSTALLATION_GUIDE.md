# Installation Guide


## 🚀 Beginners Installation Guide

```bash
# 1. Extract Project

# 2. Open terminal in project folder
# Example:
cd ex_employee_verification_portal-main

# 3. Check Node version (should be 18+)
node --version

# 4. Install dependencies
npm install

# 5. Seed database (Important)
node scripts/seed-database.js
node scripts/add-verifier.js

# 6. Start server
npm run dev

# 7. Open browser
http://localhost:3000
```


## 🔑 Complete Test Credentials & Data

### 👤 VERIFIER ACCOUNTS

**Verifier #1 (Pre-seeded)**
- Email: `testverifier@company.test`
- Password: `TestVerifier@2024!`
- Company: Test Company Inc

### 🔐 ADMIN ACCOUNTS

**Admin #1 (Super Admin)**
- Username: `testadmin`
- Password: `TestAdmin@2024!`
- Role: Super Admin

## 👔 EX-EMPLOYEE DATA (Ready to Fill)

### Employee #1 - S Sathish (100% Match)
Use these exact values for perfect match:

**Step 2 - Employee Details:**
- Employee ID: `6002056`
- Full Name: `S Sathish`

**Step 3 - Employment Details:**
- Entity Name: `TVSCSHIB`
- Designation: `Executive`
- Date of Joining: `2021-02-05`
- Date of Leaving: `2024-03-31`
- Exit Reason: `Resigned`

---
