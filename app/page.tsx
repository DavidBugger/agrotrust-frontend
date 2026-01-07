"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, UserCheck, BarChart3, ArrowRight, Lock, Zap, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-3xl animate-float-delayed"
          style={{
            transform: `translate(-${mousePosition.x * 0.03}px, -${mousePosition.y * 0.03}px)`
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 px-6 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[100px] -ml-48 -mb-48 animate-pulse"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8 md:space-y-10"
            >
              {/* Badge */}
              <div className="inline-block">
                <div className="backdrop-blur-xl bg-white/40 border border-emerald-500/20 px-4 py-2 md:px-6 md:py-3 rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.1)] flex items-center gap-2 md:gap-3 group cursor-default">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div>
                  <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.2em] text-emerald-800">
                    Blockchain-Secured Agricultural Finance
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-black leading-[1.1] md:leading-[0.9] tracking-tight text-[#081C15]">
                  Trust that <br />
                  <span className="relative inline-block mt-1 sm:mt-2">
                    <span className="relative z-10 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent italic pr-2 sm:pr-4">
                      Builds Future.
                    </span>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="absolute bottom-2 sm:bottom-4 left-0 h-2 sm:h-4 bg-emerald-500/10 -z-10 rounded-full"
                    ></motion.div>
                  </span>
                </h1>
              </div>

              {/* Subheading */}
              <p className="text-lg md:text-2xl text-slate-500 font-medium leading-relaxed max-w-xl">
                AgroTrust transforms farm activity into
                <span className="text-[#081C15] font-black underline decoration-emerald-500/30 decoration-4 underline-offset-8"> verifiable trust scores</span>,
                unlocking loans without traditional land collateral.
              </p>

              {/* Quick Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Verified Creditworthiness",
                  "No Land Collateral Required",
                  "Instant Blockchain Audit",
                  "Direct Partner Access"
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-6 h-6 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 font-black uppercase tracking-widest text-[10px]">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 md:pt-6">
                <Link href="/auth">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative w-full sm:w-auto px-8 md:px-10 py-5 md:py-6 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs text-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(16,185,129,0.3)] hover:shadow-[0_40px_80px_rgba(16,185,129,0.5)] transition-all"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-[#081C15]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#081C15] to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative flex items-center justify-center">
                      Join the Network
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                    </span>
                  </motion.button>
                </Link>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-full sm:w-auto px-8 md:px-10 py-5 md:py-6 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs text-[#081C15] bg-white border-2 border-slate-100 rounded-2xl hover:border-emerald-500/20 hover:bg-emerald-50/30 transition-all shadow-xl shadow-slate-200/50"
                >
                  System Protocol
                </motion.button>
              </div>

              {/* Stats High Contrast */}
              <div className="grid grid-cols-2 sm:flex gap-8 md:gap-12 pt-8 md:pt-10 border-t border-slate-100">
                {[
                  { value: "50K+", label: "Farmers Connected" },
                  { value: "$10M+", label: "Capital Deployed" },
                  { value: "98%", label: "Verified Repayment" }
                ].map((stat, i) => (
                  <div key={i} className={`space-y-1 ${i === 2 ? 'col-span-2' : ''}`}>
                    <div className="text-2xl md:text-3xl font-black text-[#081C15]">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Cinematic Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative lg:block hidden"
            >
              {/* Backglow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>

              {/* Main Container */}
              <div className="relative">
                {/* Floating Status Widgets */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -left-10 z-20 backdrop-blur-2xl bg-white/90 p-6 rounded-[32px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <ShieldCheck className="text-white w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Trust Index</div>
                    <div className="text-xl font-black text-[#081C15]">850/1000</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/3 -right-12 z-20 backdrop-blur-2xl bg-[#081C15] p-6 rounded-[32px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/10 flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Sparkles className="text-emerald-400 w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-emerald-100/40">Active Oracle</div>
                    <div className="text-xl font-black text-white">Live Data Sync</div>
                  </div>
                </motion.div>

                {/* Main Cinematic Image Card */}
                <div className="relative p-6 bg-white/40 backdrop-blur-md rounded-[60px] border border-white/50 shadow-2xl transform hover:rotate-2 transition-all duration-700 group">
                  <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden shadow-inner">
                    <motion.img
                      initial={{ scale: 1.2 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 2 }}
                      src="/img/harvesting.jpg?w=800&h=1000&fit=crop"
                      alt="AgroTrust Farmer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081C15]/60 via-transparent to-transparent"></div>

                    {/* Image Footer Widget */}
                    <div className="absolute bottom-8 left-8 right-8 backdrop-blur-2xl bg-white/10 border border-white/10 p-6 rounded-3xl flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                          <CheckCircle2 className="text-white w-6 h-6" strokeWidth={3} />
                        </div>
                        <div>
                          <p className="text-white font-black text-sm">Collateral Cleared</p>
                          <p className="text-emerald-100/60 text-[10px] font-bold uppercase tracking-widest">Protocol Verified</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-emerald-400 font-black text-xs uppercase tracking-widest">Global Access</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Particle Decorations */}
                <div className="absolute -bottom-10 left-1/4 flex gap-3">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -15, 0], opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                      className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24 px-4 overflow-hidden" id="stakeholders">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-black uppercase tracking-widest text-emerald-700">Multi-Role Ecosystem</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#081C15] tracking-tight">
              Built for Every <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Stakeholder</span>
            </h2>
            <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
              Empowering the entire agricultural value chain with decentralized trust and transparent data flow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Farmer Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-emerald-500/10 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative h-full bg-white/80 backdrop-blur-xl border border-slate-100 rounded-[40px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-4">
                <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <ShieldCheck className="w-10 h-10 text-emerald-600" strokeWidth={2.5} />
                </div>

                <h3 className="text-3xl font-black text-[#081C15] mb-4">For Farmers</h3>

                <p className="text-gray-500 font-medium mb-8 leading-relaxed text-lg">
                  Build your digital identity through verified activities and access capital without traditional barriers.
                </p>

                <ul className="space-y-4 mb-10">
                  {["Zero land collateral", "Daily activity rewards", "Portable trust score"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-bold text-[#081C15]/80">
                      <div className="w-6 h-6 bg-emerald-500/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" strokeWidth={3} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href="/farmer/home">
                  <button className="w-full px-8 py-5 font-black text-white bg-[#081C15] rounded-2xl hover:bg-emerald-900 transition-all flex items-center justify-center group/btn shadow-xl shadow-[#081C15]/10">
                    Enter Portal
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Partner Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-teal-500/10 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative h-full bg-white/80 backdrop-blur-xl border border-slate-100 rounded-[40px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-4">
                <div className="w-20 h-20 bg-teal-50 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <UserCheck className="w-10 h-10 text-teal-600" strokeWidth={2.5} />
                </div>

                <h3 className="text-3xl font-black text-[#081C15] mb-4">For Partners</h3>

                <p className="text-gray-500 font-medium mb-8 leading-relaxed text-lg">
                  Access a pool of vetted, high-performing farmers with real-time risk mitigation and data insights.
                </p>

                <ul className="space-y-4 mb-10">
                  {["Risk-adjusted profiles", "Batch monitoring", "Verified proof-of-work"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-bold text-[#081C15]/80">
                      <div className="w-6 h-6 bg-teal-500/10 rounded-full flex items-center justify-center mr-3">
                        <TrendingUp className="w-3.5 h-3.5 text-teal-600" strokeWidth={3} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href="/partner/dashboard">
                  <button className="w-full px-8 py-5 font-black text-white bg-teal-600 hover:bg-teal-700 rounded-2xl transition-all flex items-center justify-center group/btn shadow-xl shadow-teal-600/10">
                    Partner Access
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Admin Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-slate-900/10 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative h-full bg-[#081C15] rounded-[40px] p-10 shadow-2xl hover:shadow-[0_40px_80px_rgba(8,28,21,0.2)] transition-all duration-500 hover:-translate-y-4 border border-white/5">
                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <BarChart3 className="w-10 h-10 text-emerald-400" strokeWidth={2.5} />
                </div>

                <h3 className="text-3xl font-black text-white mb-4">Agro Admin</h3>

                <p className="text-emerald-100/60 font-medium mb-8 leading-relaxed text-lg">
                  Governance at scale. Configure trust protocols and oversee global system health and audits.
                </p>

                <ul className="space-y-4 mb-10">
                  {["Global parameter control", "Fraud detection HUD", "Audit trail visibility"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-bold text-emerald-100/80">
                      <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center mr-3">
                        <Lock className="w-3.5 h-3.5 text-emerald-400" strokeWidth={3} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href="/admin/dashboard">
                  <button className="w-full px-8 py-5 font-black text-[#081C15] bg-emerald-400 hover:bg-emerald-300 rounded-2xl transition-all flex items-center justify-center group/btn shadow-xl shadow-emerald-400/20">
                    Admin Control
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animation-delay-100 {
          animation-delay: 0.1s;
          animation-fill-mode: backwards;
        }

        .animation-delay-150 {
          animation-delay: 0.15s;
          animation-fill-mode: backwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: backwards;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
          animation-fill-mode: backwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}