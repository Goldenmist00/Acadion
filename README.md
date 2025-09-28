# Acadion ERP - Modern Educational Management System

![Acadion ERP](https://img.shields.io/badge/Acadion-ERP-green)
![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-cyan)

A comprehensive, modern ERP solution designed specifically for educational institutions. Built with Next.js, React, TypeScript, and Tailwind CSS.

## ✨ Features

### 🎯 **Role-Based Dashboards**
- **Administrator**: Complete system management and oversight
- **Student**: Academic progress, fees, hostel, and exam management
- **Staff**: Course management, grading, and student oversight
- **Finance**: Fee collection, financial reporting, and budget management
- **Warden**: Hostel management, room allocation, and student welfare

### 🏗️ **Core Modules**
- **Admissions Management**: Application tracking, review workflows, and decision management
- **Fee Management**: Payment processing, invoice generation, and financial tracking
- **Hostel Management**: Room allocation, occupancy tracking, and maintenance
- **Examination System**: Scheduling, grading, and result management
- **User Management**: Role-based access control and user administration
- **AI Integration**: Student success prediction and career guidance
- **Analytics & Reporting**: Comprehensive dashboards and data insights

### 🎨 **Modern UI/UX**
- Responsive design for all devices
- Dark/Light theme support
- Accessible components (WCAG 2.1 AA)
- Smooth animations and transitions
- Professional gradient designs

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/acadion-erp.git
   cd acadion-erp
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏛️ Architecture

### **Frontend Architecture**
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom design system
- **Components**: Radix UI primitives for accessibility
- **State Management**: React Context API
- **Authentication**: Role-based access control

### **Technology Stack**
- **Next.js 14.2.16** - React framework with SSR/SSG
- **React 18** - UI library
- **TypeScript 5** - Static type checking
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Modern icon library
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation

## 📱 Usage

### **Login System**
1. Visit the login page
2. Select your role (Admin, Student, Staff, Finance, Warden)
3. Enter credentials (demo mode available)
4. Access your role-specific dashboard

### **Dashboard Navigation**
- **Sidebar**: Role-specific navigation menu
- **Topbar**: User info, notifications, and profile access
- **Main Content**: Dynamic content based on user role

### **Profile Management**
- View and edit personal information
- Change password and account settings
- Role-specific profile data
- Sign out functionality

## 🎯 Role-Specific Features

### **👨‍💼 Administrator**
- System-wide analytics and reporting
- User management and role assignment
- Complete access to all modules
- System configuration and settings

### **🎓 Student**
- Personal academic dashboard
- Fee payment and history
- Exam schedules and results
- Hostel information and services

### **👨‍🏫 Staff**
- Course and student management
- Grade entry and evaluation
- Exam scheduling and management
- Department-specific analytics

### **💰 Finance**
- Fee collection and tracking
- Financial reporting and analytics
- Invoice generation and management
- Payment status monitoring

### **🏠 Warden**
- Hostel occupancy management
- Room allocation and maintenance
- Student welfare and discipline
- Complaint handling system

## 🛠️ Development

### **Project Structure**
```
acadion-erp/
├── app/                    # Next.js App Router
│   ├── (dashboard)/       # Dashboard routes
│   ├── login/            # Authentication
│   ├── signup/           # Registration
│   └── page.tsx          # Landing page
├── components/           # Reusable components
│   ├── ui/              # UI primitives
│   ├── auth/            # Authentication components
│   ├── layout/          # Layout components
│   └── providers/       # Context providers
├── public/              # Static assets
└── styles/              # Global styles
```

### **Available Scripts**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Design System

### **Color Palette**
- **Primary**: Emerald green (`oklch(0.6 0.12 150)`)
- **Accent**: Warm amber (`oklch(0.83 0.12 80)`)
- **Background**: Dynamic (light/dark mode)
- **Foreground**: High contrast text

### **Typography**
- **Font Family**: Geist Sans & Geist Mono
- **Scale**: Responsive typography system
- **Weights**: 400, 500, 600, 700

## 🔐 Security Features

- Role-based access control (RBAC)
- Input validation and sanitization
- XSS protection
- CSRF protection
- Secure authentication flow

## 📊 Performance

- Server-side rendering (SSR)
- Static site generation (SSG)
- Code splitting and lazy loading
- Image optimization
- Bundle optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Lucide](https://lucide.dev/) for beautiful icons

## 📞 Support

For support, email support@acadion.com or join our community discussions.

---

**Built with ❤️ for educational institutions worldwide**