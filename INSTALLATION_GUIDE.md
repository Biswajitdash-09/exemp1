# 🚀 Installation Guide for Beginners

Complete step-by-step guide to set up the Ex-Employee Verification Portal on your computer.

---

## 📋 Prerequisites

Before you begin, make sure you have:

### 1. **Node.js and npm**
- Download and install from: https://nodejs.org/
- Recommended: **Node.js 18.x or higher**
- npm comes automatically with Node.js

**Check if installed:**
```bash
node --version
# Should show: v18.x.x or higher

npm --version
# Should show: 9.x.x or higher
```

### 2. **A Code Editor** (Optional but recommended)
- VS Code: https://code.visualstudio.com/
- Or any text editor you prefer

### 3. **A Web Browser**
- Chrome, Firefox, Edge (any modern browser)

---

## 📦 Step-by-Step Installation

### **Step 1: Extract the Project**

After downloading the zip file:
1. Right-click on the zip file
2. Select "Extract All..."
3. Choose a location (e.g., Desktop or Documents)
4. You'll get a folder named `ex_employee_verification_portal-main`

### **Step 2: Open Terminal/Command Prompt**

**On Windows:**
- Press `Windows + R`
- Type `cmd` and press Enter
- OR: Right-click in the project folder → "Open in Terminal"

**On Mac/Linux:**
- Open Terminal application
- Navigate to the project folder

### **Step 3: Navigate to Project Folder**

In the terminal, go to the project directory:

```bash
# Windows example:
cd C:\Users\YourName\Desktop\ex_employee_verification_portal-main

# Mac/Linux example:
cd ~/Desktop/ex_employee_verification_portal-main
```

**Verify you're in the right folder:**
```bash
# Windows:
dir

# Mac/Linux:
ls
```

You should see files like: `package.json`, `README.md`, `app`, `components`, etc.

### **Step 4: Install Dependencies**

This downloads all the required packages for the project:

```bash
npm install
```

**What to expect:**
- This might take 2-5 minutes
- You'll see a lot of text scrolling
- Wait until you see a message like "added XXX packages"
- ✅ Success: You're back to the command prompt

**If you see errors:**
- Make sure you have Node.js installed correctly
- Try running: `npm install --legacy-peer-deps`

### **Step 5: Set Up the Database**

This project uses file-based storage. Run this to initialize it:

```bash
node scripts/seed-database.js
```

**You should see:**
```
🌱 Seeding database with test data...
✅ Database seeded successfully!
📊 Data Summary:
   - Employees: 3
   - Admins: 2
```

### **Step 6: Add Test Verifier Account**

Add a verifier user for testing:

```bash
node scripts/add-verifier.js
```

**You should see:**
```
✅ Verifier added successfully!
🔐 Login Credentials:
   Email: adityamathan@codemateai.dev
   Password: Aditya@12345
```

### **Step 7: Start the Development Server**

Now start the application:

```bash
npm run dev
```

**You should see:**
```
▲ Next.js 15.3.4
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Starting...
✓ Ready in 2.5s
```

**✅ The server is now running!**

**IMPORTANT:** 
- **Keep this terminal window open** while using the application
- To stop the server later, press `Ctrl + C`

---

## 🌐 Accessing the Application

### **Step 8: Open in Browser**

1. Open your web browser
2. Go to: **http://localhost:3000**

You should see the home page! 🎉

---

## 🔐 Login Credentials

The application has different types of users:

### **Admin Login**
- URL: `http://localhost:3000/admin/login`
- Username: `admin`
- Password: `admin123`

**OR**

- Username: `hr_manager`
- Password: `hr123`

### **Verifier Login**
- URL: `http://localhost:3000/login`
- Email: `adityamathan@codemateai.dev`
- Password: `Aditya@12345`

### **Test Employee Data**
For verification testing, use these employee IDs:
- `6002056` - S Sathish (TVSCSHIB)
- `6002057` - Rajesh Kumar (TVSCSHIB)
- `6002058` - Priya Sharma (HIB)

---

## 🧪 Testing the Application

### **Test Verifier Flow:**

1. **Login as Verifier**
   - Go to: `http://localhost:3000/login`
   - Email: `adityamathan@codemateai.dev`
   - Password: `Aditya@12345`

2. **Perform Verification**
   - You'll be redirected to `/verify`
   - Fill in employee details:
     - Employee ID: `6002056`
     - Name: `S Sathish`
     - Entity: `TVSCSHIB`
     - Date of Joining: `2021-02-05`
     - Date of Leaving: `2024-03-31`
     - Designation: `Executive`
     - Exit Reason: `Resigned`
   - Submit and see results!

3. **View Results**
   - See field-by-field comparison
   - Download PDF report
   - Send email notification
   - Raise appeals if needed

### **Test Admin Flow:**

1. **Login as Admin**
   - Go to: `http://localhost:3000/admin/login`
   - Username: `admin`
   - Password: `admin123`

2. **View Dashboard**
   - See verification statistics
   - View recent activities
   - Check pending appeals

3. **Manage Appeals**
   - Review appeal requests
   - Approve or reject appeals

---

## ⚠️ Common Issues & Solutions

### **Issue 1: "Port 3000 already in use"**

**Solution:**
Either stop the other application using port 3000, or use a different port:

```bash
# Run on port 3001 instead
npm run dev -- -p 3001
```

Then access at: `http://localhost:3001`

### **Issue 2: "Cannot find module..."**

**Solution:**
Delete node_modules and reinstall:

```bash
# Windows:
rmdir /s node_modules
npm install

# Mac/Linux:
rm -rf node_modules
npm install
```

### **Issue 3: "Verifier access required" error**

**Solution:**
Clear browser localStorage:

1. Open browser console (F12)
2. Go to Console tab
3. Run:
```javascript
localStorage.clear();
```
4. Refresh page and login again

### **Issue 4: Changes not appearing**

**Solution:**

1. **Hard refresh browser:**
   - Windows: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

2. **Restart development server:**
   - In terminal, press `Ctrl + C`
   - Run `npm run dev` again

### **Issue 5: "npm not found" error**

**Solution:**
Node.js is not installed or not in PATH. Reinstall Node.js from https://nodejs.org/

---

## 📚 Folder Structure

```
ex_employee_verification_portal-main/
├── .storage/               # File-based database
│   └── database.json      # All data stored here
├── app/                   # Next.js 15 pages (App Router)
│   ├── admin/            # Admin pages
│   ├── api/              # API routes
│   ├── login/            # Verifier login page
│   └── verify/           # Verification wizard
├── components/            # React components
│   ├── admin/            # Admin components
│   ├── auth/             # Authentication components
│   └── verify/           # Verification components
├── lib/                   # Utility libraries
│   ├── auth.js           # JWT authentication
│   ├── fileStorage.service.js  # File storage
│   └── localStorage.service.js # Data access
├── public/               # Static files
│   └── seed-data.js      # Browser-side seed script
├── scripts/              # Utility scripts
│   ├── seed-database.js  # Seed server data
│   ├── add-verifier.js   # Add verifier
│   └── check-verifiers.js # Check verifiers
├── package.json          # Project dependencies
└── README.md            # Project documentation
```

---

## 🔄 Daily Usage

### **Starting the Server**

Every time you want to use the application:

1. Open terminal in project folder
2. Run:
```bash
npm run dev
```
3. Open browser to `http://localhost:3000`

### **Stopping the Server**

When you're done:

1. Go to the terminal
2. Press `Ctrl + C`
3. Type `Y` if asked to confirm

---

## 🛠️ Useful Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Seed database with test data
node scripts/seed-database.js

# Add test verifier
node scripts/add-verifier.js

# Check all verifiers
node scripts/check-verifiers.js

# Test JWT token generation
node scripts/test-jwt.js
```

---

## 📖 Next Steps

After successful installation:

1. ✅ **Explore the Application**
   - Try logging in as different users
   - Test the verification flow
   - Check the admin dashboard

2. ✅ **Read the Documentation**
   - `README.md` - Main project documentation
   - `TEST_CREDENTIALS_GUIDE.md` - All login credentials
   - `DEPLOYMENT_GUIDE.md` - How to deploy to production

3. ✅ **Customize for Your Needs**
   - Add your own employee data
   - Create additional admin/verifier accounts
   - Modify the UI as needed

---

## 🆘 Getting Help

If you're stuck:

1. **Check the error message** in the terminal
2. **Check browser console** (F12 → Console tab)
3. **Review this guide** for solutions
4. **Check existing documentation** in the project folder

---

## ✅ Installation Checklist

- [ ] Node.js installed (v18+)
- [ ] Project extracted to a folder
- [ ] Terminal opened in project folder
- [ ] `npm install` completed successfully
- [ ] `node scripts/seed-database.js` completed
- [ ] `node scripts/add-verifier.js` completed
- [ ] `npm run dev` started successfully
- [ ] Browser opened to `http://localhost:3000`
- [ ] Successfully logged in as verifier
- [ ] Successfully performed a verification
- [ ] Successfully logged in as admin

---

🎉 **Congratulations!** Your Ex-Employee Verification Portal is now running!

For production deployment, see `DEPLOYMENT_GUIDE.md`.
