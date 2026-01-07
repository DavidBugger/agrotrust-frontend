"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { StatusBadge } from "@/components/StatusBadge";
import { farmerApi } from "@/lib/api";
import { Sprout, TrendingUp, ClipboardList, ShieldCheck, ChevronRight, Sparkles, LayoutDashboard, Calendar, Bell } from "lucide-react";
import Link from "next/link";

export default function FarmerHome() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                const res = await farmerApi.getHome();
                setData(res.data);
            } catch (err) {
                // Fallback for demo
                setData({
                    greeting_name: "Farmer",
                    farm_status: "record_growing",
                    trust_level: "High Trust",
                    trust_score: 840,
                    pending_actions: ["Log farm activity"]
                });
            } finally {
                setLoading(false);
            }
        };
        fetchHomeData();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    if (loading) return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
                <p className="text-[#081C15] font-black uppercase tracking-widest text-xs animate-pulse">Initializing Dashboard...</p>
            </div>
        </div>
    );

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-12 pb-20"
        >
            {/* Header / Welcome Banner */}
            <section className="relative overflow-hidden rounded-[40px] bg-[#081C15] p-8 md:p-12 text-white shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] -ml-20 -mb-20"></div>

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/5 backdrop-blur-md">
                            <Sparkles className="w-4 h-4 text-emerald-400" />
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-100">Farmer Portal</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
                            Welcome back, <br />
                            <span className="text-emerald-400">{data?.greeting_name}</span>
                        </h1>
                        <p className="max-w-md text-emerald-100/60 font-medium text-lg leading-relaxed">
                            Your consistent farm activity is driving global trust in sustainable agriculture.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl text-center min-w-[140px]"
                        >
                            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-1">Trust Score</p>
                            <p className="text-4xl font-black">{data?.trust_score || 840}</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-6 bg-emerald-500 rounded-3xl text-center min-w-[140px] shadow-xl shadow-emerald-500/20"
                        >
                            <p className="text-[10px] font-black uppercase tracking-widest text-[#081C15] mb-1">Status</p>
                            <p className="text-2xl font-black text-[#081C15]">LEVEL 4</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats / Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div variants={itemVariants}>
                    <Card variant="white" className="h-full bg-white/80 backdrop-blur-xl border-slate-100 rounded-[32px] p-8 hover:shadow-2xl transition-all duration-500 group">
                        <div className="flex justify-between items-start mb-10">
                            <div className="p-4 bg-emerald-50 rounded-2xl group-hover:scale-110 transition-transform">
                                <ShieldCheck className="text-emerald-600" size={28} />
                            </div>
                            <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-black uppercase tracking-widest">
                                Verified
                            </span>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-slate-400 text-xs font-black uppercase tracking-widest">Global Trust Rank</h3>
                            <p className="text-4xl font-black text-[#081C15]">Top 5%</p>
                        </div>
                        <Link href="/farmer/trust" className="mt-8 pt-6 border-t border-slate-50 text-sm font-black text-emerald-600 flex items-center group/link">
                            View Trust Breakdown
                            <ChevronRight size={18} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Card variant="white" className="h-full bg-white/80 backdrop-blur-xl border-slate-100 rounded-[32px] p-8 hover:shadow-2xl transition-all duration-500 group">
                        <div className="flex justify-between items-start mb-10">
                            <div className="p-4 bg-teal-50 rounded-2xl group-hover:scale-110 transition-transform">
                                <TrendingUp className="text-teal-600" size={28} />
                            </div>
                            <span className="px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-600 text-xs font-black uppercase tracking-widest">
                                Active Sync
                            </span>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-slate-400 text-xs font-black uppercase tracking-widest">Farm Efficiency</h3>
                            <p className="text-4xl font-black text-[#081C15]">92.4%</p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-500 tracking-tight">Synced with IoT Sensors</span>
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        </div>
                    </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Card variant="white" className="h-full bg-white/80 backdrop-blur-xl border-slate-100 rounded-[32px] p-8 hover:shadow-2xl transition-all duration-500 group">
                        <div className="flex justify-between items-start mb-10">
                            <div className="p-4 bg-orange-50 rounded-2xl group-hover:scale-110 transition-transform">
                                <Calendar className="text-orange-600" size={28} />
                            </div>
                            <span className="px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-600 text-xs font-black uppercase tracking-widest">
                                Action Needed
                            </span>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-slate-400 text-xs font-black uppercase tracking-widest">Next Scheduled Log</h3>
                            <p className="text-3xl font-black text-[#081C15]">Crop Health Log</p>
                        </div>
                        <Link href="/farmer/activity">
                            <Button className="mt-6 w-full py-6 rounded-2xl font-black uppercase tracking-widest text-xs" variant="primary">
                                Log Activity Now
                            </Button>
                        </Link>
                    </Card>
                </motion.div>
            </div>

            {/* Main Action Hub */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <motion.div variants={itemVariants} className="lg:col-span-8">
                    <Card variant="white" className="bg-white rounded-[40px] p-10 shadow-xl border-none">
                        <div className="flex items-center justify-between mb-10">
                            <div>
                                <h2 className="text-3xl font-black text-[#081C15]">Action Hub</h2>
                                <p className="text-slate-500 font-medium">Quick access to essential tools.</p>
                            </div>
                            <Button variant="outline" size="md" className="rounded-2xl font-black">
                                <LayoutDashboard className="mr-2" size={18} /> Configure
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: "Register Activity", desc: "Log harvest, fertilization, or planting data.", icon: ClipboardList, color: "emerald", href: "/farmer/activity" },
                                { title: "Update Profile", desc: "Maintain 100% data completion for higher score.", icon: Sprout, color: "teal", href: "/farmer/profile" },
                                { title: "Verification Requests", desc: "Respond to partner proof-of-work audits.", icon: ShieldCheck, color: "blue", href: "#" },
                                { title: "Notifications", desc: "Stay updated on loan status and tips.", icon: Bell, color: "orange", href: "#" }
                            ].map((action, i) => (
                                <Link key={i} href={action.href}>
                                    <div className="group p-6 rounded-[32px] bg-slate-50 hover:bg-[#081C15] transition-all duration-500 cursor-pointer">
                                        <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                                            <action.icon className={`text-${action.color}-600 group-hover:text-emerald-400 transition-colors`} size={28} />
                                        </div>
                                        <h3 className="text-xl font-black text-[#081C15] group-hover:text-white transition-colors mb-2">{action.title}</h3>
                                        <p className="text-slate-500 text-sm font-medium group-hover:text-emerald-100/60 transition-colors">{action.desc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Card>
                </motion.div>

                <motion.div variants={itemVariants} className="lg:col-span-4 space-y-8">
                    <Card variant="white" className="bg-gradient-to-br from-[#081C15] to-[#102B20] rounded-[40px] p-10 text-white border-none shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
                        <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                            <Sparkles className="text-emerald-400" size={24} />
                            Pro Tips
                        </h2>
                        <ul className="space-y-6">
                            {[
                                "Weekly logs increase trust consistency by 40%.",
                                "Attach GPS-tagged photos for instant verification.",
                                "Complete your basic profile for a +50 Trust Score boost."
                            ].map((tip, i) => (
                                <li key={i} className="flex gap-4 group">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_10px_#10b981]"></div>
                                    </div>
                                    <p className="text-emerald-100/80 font-medium leading-relaxed group-hover:text-white transition-colors">
                                        {tip}
                                    </p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-10 pt-8 border-t border-white/5">
                            <button className="w-full py-4 bg-emerald-500 rounded-2xl text-[#081C15] font-black uppercase tracking-widest text-xs hover:bg-emerald-400 transition-colors">
                                Build More Trust
                            </button>
                        </div>
                    </Card>

                    <Card variant="white" className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                                <ShieldCheck className="text-blue-600" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-[#081C15]">Security Status</h3>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Two-Factor Active</p>
                            </div>
                        </div>
                        <p className="text-sm font-medium text-slate-500 leading-relaxed italic">
                            "Your account is protected by military-grade encryption and decentralized identity protocols."
                        </p>
                    </Card>
                </motion.div>
            </section>
        </motion.div>
    );
}

