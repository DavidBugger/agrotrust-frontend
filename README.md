# AgroTrust 🌿💎

**Decentralized Agricultural Trust & Credit Protocol**

AgroTrust is a premium Web3-enabled platform designed to bridge the credit gap for smallholder farmers. By transforming daily farm activities into verifiable, blockchain-secured "Trust Scores," we enable farmers to access credit and financing without the need for traditional land collateral.

![AgroTrust Preview](https://github.com/DavidBugger/agrotrust-frontend/raw/main/app/icon.png)

## 🚀 Key Features

### 👨‍🌾 Farmer Module
- **Biometric Identity**: Secure digital identity for unbanked farmers.
- **Activity Logging**: Daily farm activity verification (planting, fertilization, harvesting) with GPS and photo proof.
- **Trust Score Engine**: An algorithmic reputation system that builds creditworthiness over time.
- **Tier-Based Access**: Unlock higher loan amounts and better interest rates by maintaining consistent logging streaks.

### 🤝 Partner Dashboard
- **Risk Mitigation**: Access vetted farmer profiles with real-time activity data.
- **Batch Monitoring**: Oversee entire farmer cooperatives through a unified interface.
- **Direct Capital Deployment**: Streamlined pipeline for agricultural lending and input supply.

### 🛠 Tech Stack
- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router, Turbopack)
- **Styling**: Vanilla Tailwind CSS + Custom Design System
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for cinematic UI/UX.
- **Icons**: [Lucide React](https://lucide.dev/)
- **Backend/Auth**: [Supabase](https://supabase.com/) & Blockchain Oracle Integration.

## 🎨 Design Philosophy
AgroTrust features a **"Top Notch" Cinematic UI**:
- **Glassmorphism**: Translucent, blurred glass elements for a modern, high-end feel.
- **Color Palette**: Deep Forest Green (`#081C15`), Emerald, and Teal accents representing growth and security.
- **Liquid Motion**: Smooth, physics-based animations that respond to user interaction.
- **Mobile First**: Fully responsive experience optimized for field use on smartphones.

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DavidBugger/agrotrust-frontend.git
   cd agrotrust-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file and add your Supabase/API credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_API_URL=your_backend_api_url
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

## 🏗 Project Structure
- `/app`: Next.js App Router pages (Farmer, Partner, Admin portals).
- `/components`: Reusable premium UI components (Cards, Buttons, Navbar).
- `/lib`: API clients, Authentication logic, and Types.
- `/styles`: Global CSS and Design Tokens.

## 🌍 Impact
AgroTrust aims to empower the 500 million smallholder farmers globally by providing a transparent, decentralized path to financial inclusion and sustainable agricultural growth.

---
Built with ❤️ for the future of Agriculture.
