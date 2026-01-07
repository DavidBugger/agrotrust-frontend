"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Mail, Phone, MapPin, Twitter, Linkedin, Github, Facebook, ArrowRight, Sparkles } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        platform: [
            { label: "For Farmers", href: "/farmer/home" },
            { label: "For Partners", href: "/partner/dashboard" },
            { label: "For Admins", href: "/admin/dashboard" },
            { label: "How It Works", href: "#how" }
        ],
        company: [
            { label: "About Us", href: "#about" },
            { label: "Our Mission", href: "#mission" },
            { label: "Careers", href: "#careers" },
            { label: "Press Kit", href: "#press" }
        ],
        resources: [
            { label: "Documentation", href: "#docs" },
            { label: "API Reference", href: "#api" },
            { label: "Trust Score Guide", href: "#guide" },
            { label: "Support Center", href: "#support" }
        ],
        legal: [
            { label: "Privacy Policy", href: "#privacy" },
            { label: "Terms of Service", href: "#terms" },
            { label: "Cookie Policy", href: "#cookies" },
            { label: "Compliance", href: "#compliance" }
        ]
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <footer className="relative bg-[#081C15] text-white pt-24 pb-12 overflow-hidden">
            {/* Premium Background Decoration */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20"
                >
                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-8">
                        <motion.div variants={itemVariants} className="space-y-6">
                            <Link href="/" className="flex items-center space-x-3 group">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-emerald-500 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                    <div className="relative w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-6 transition-transform">
                                        <Leaf className="text-white w-6 h-6" strokeWidth={2.5} />
                                    </div>
                                </div>
                                <span className="text-3xl font-black tracking-tighter bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                                    AgroTrust
                                </span>
                            </Link>
                            <p className="text-gray-400 text-lg leading-relaxed font-medium">
                                Redefining agricultural finance through <span className="text-emerald-400">blockchain-verified</span> trust scores. Empowering the hands that feed the world.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-4">
                            <div className="flex items-center space-x-4 text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                                    <Mail size={18} />
                                </div>
                                <span className="font-semibold">hello@agrotrust.io</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                                    <MapPin size={18} />
                                </div>
                                <span className="font-semibold">Lagos, Nigeria</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <motion.div key={title} variants={itemVariants} className="space-y-6">
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-500/80">{title}</h3>
                                <ul className="space-y-4">
                                    {links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-all font-bold text-sm flex items-center group"
                                            >
                                                <span className="w-0 h-px bg-emerald-500 group-hover:w-4 transition-all mr-0 group-hover:mr-3"></span>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Newsletter Card - Top Notch Polish */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="relative rounded-[40px] p-1 bg-gradient-to-br from-emerald-500/20 via-white/5 to-teal-500/20 overflow-hidden group">
                        <div className="absolute inset-0 bg-[#0A251C] rounded-[39px]"></div>
                        <div className="relative rounded-[39px] px-8 py-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="space-y-4 max-w-xl text-center lg:text-left">
                                <div className="flex items-center justify-center lg:justify-start gap-2 text-emerald-400">
                                    <Sparkles size={20} />
                                    <span className="text-sm font-black uppercase tracking-widest">Join the ecosystem</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                                    Ready to harvest your <span className="text-emerald-400">credit potential?</span>
                                </h2>
                                <p className="text-gray-400 font-medium">Get the latest insights on decentralized agricultural finance.</p>
                            </div>

                            <div className="w-full lg:max-w-md">
                                <form className="relative flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your seed email..."
                                        className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 font-bold text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                                    />
                                    <button className="bg-emerald-500 hover:bg-emerald-400 text-[#081C15] font-black px-8 py-4 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-3 active:scale-95">
                                        Subscribe <ArrowRight size={18} />
                                    </button>
                                </form>
                            </div>

                            {/* Decorative Pattern */}
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]"></div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
                >
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">© {currentYear} AgroTrust Labs Inc.</p>
                        <p className="text-gray-600 text-[10px] font-medium">Secured by Ethereum State Channels & Supabase Sync</p>
                    </div>

                    <div className="flex items-center gap-4">
                        {[
                            { icon: Twitter, href: "#" },
                            { icon: Linkedin, href: "#" },
                            { icon: Github, href: "#" },
                            { icon: Facebook, href: "#" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-[#081C15] transition-all transform hover:-translate-y-1 shadow-sm"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-8">
                        <Link href="#" className="text-xs font-black text-gray-500 hover:text-emerald-400 transition-colors">Privacy</Link>
                        <Link href="#" className="text-xs font-black text-gray-500 hover:text-emerald-400 transition-colors">Terms</Link>
                        <Link href="#" className="text-xs font-black text-gray-500 hover:text-emerald-400 transition-colors uppercase tracking-widest">Trust Protocol v1.4</Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};