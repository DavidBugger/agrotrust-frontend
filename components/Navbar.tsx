"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf, ArrowRight, Sparkles } from "lucide-react";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Farmers", href: "/farmer/home" },
        { label: "Partners", href: "/partner/dashboard" },
        { label: "How It Works", href: "#how" },
        { label: "Admin", href: "/admin/dashboard" }
    ];

    return (
        <motion.nav
            initial={false}
            animate={{
                paddingTop: isScrolled ? "12px" : "24px",
                paddingBottom: isScrolled ? "12px" : "24px"
            }}
            className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
        >
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    layout
                    initial={false}
                    animate={{
                        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.6)",
                        backdropFilter: isScrolled ? "blur(24px) saturate(180%)" : "blur(12px) saturate(100%)",
                        boxShadow: isScrolled
                            ? "0 20px 40px -15px rgba(8, 28, 21, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1) inset"
                            : "0 10px 20px -10px rgba(0, 0, 0, 0.05)",
                        borderRadius: "28px",
                    }}
                    className="relative px-8 py-4 flex items-center justify-between border border-white/20 group"
                >
                    {/* Water/Glow Effect Underlay */}
                    <AnimatePresence>
                        {isScrolled && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 rounded-[28px] bg-gradient-to-r from-emerald-500/5 via-transparent to-teal-500/5 pointer-events-none"
                            />
                        )}
                    </AnimatePresence>

                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group relative z-10">
                        <div className="relative">
                            <div className="absolute inset-0 bg-emerald-500 rounded-xl blur-lg opacity-20 group-hover:opacity-100 transition-opacity"></div>
                            <motion.div
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                className="relative w-11 h-11 bg-[#081C15] rounded-xl flex items-center justify-center shadow-xl"
                            >
                                <Leaf className="text-emerald-400 w-6 h-6" strokeWidth={2.5} />
                            </motion.div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-black tracking-tighter text-[#081C15]">
                                AgroTrust
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 -mt-1">
                                Secure Protocol
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-2 relative z-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="relative px-5 py-2 text-sm font-bold text-[#081C15]/70 hover:text-[#081C15] transition-colors group/link"
                            >
                                {link.label}
                                <motion.span
                                    className="absolute inset-0 bg-emerald-500/5 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity"
                                    layoutId="navHover"
                                />
                                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-emerald-500 rounded-full group-hover/link:w-4 transition-all" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center space-x-6 relative z-10">
                        <Link href="/auth" className="text-sm font-black text-[#081C15] hover:text-emerald-600 transition-colors flex items-center gap-2 group/login">
                            <Sparkles size={16} className="text-emerald-500" />
                            Sign In
                        </Link>

                        <Link href="/auth">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative px-7 py-3 font-black text-white rounded-2xl overflow-hidden group/btn shadow-xl shadow-[#081C15]/20"
                            >
                                <div className="absolute inset-0 bg-[#081C15]"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                                <span className="relative flex items-center gap-2">
                                    Get Started
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </span>
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-3 bg-[#081C15]/5 rounded-xl text-[#081C15] hover:bg-emerald-500 hover:text-white transition-all relative z-10"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </motion.button>
                </motion.div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className="lg:hidden mt-4 backdrop-blur-3xl bg-[#081C15] rounded-[32px] shadow-2xl p-8 space-y-6 overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />

                            <div className="space-y-4 relative z-10">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="block text-2xl font-black text-white/90 hover:text-emerald-400 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-white/10 relative z-10">
                                <Link href="/auth" className="block">
                                    <button className="w-full px-8 py-5 font-black text-[#081C15] bg-emerald-400 rounded-2xl shadow-xl shadow-emerald-500/20 active:scale-95 transition-transform">
                                        Get Started Now
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};