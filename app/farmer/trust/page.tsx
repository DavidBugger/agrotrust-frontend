"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { StatusBadge } from "@/components/StatusBadge";
import { farmerApi } from "@/lib/api";
import { ShieldCheck, Info, ArrowUpRight, CheckCircle2, Sparkles, TrendingUp, TrendingDown, Target, Zap } from "lucide-react";
import Link from "next/link";

export default function TrustDashboard() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrustData = async () => {
            try {
                const res = await farmerApi.getTrustLevel();
                setData(res.data);
            } catch (err) {
                setData({
                    trust_level: "Tier 1: Reliable",
                    status_color: "emerald",
                    explanation: [
                        "Consistent activity logging for 4+ weeks",
                        "High data completion score (98%)",
                        "Verified farm coordinates matched with satellite data"
                    ],
                    tips: [
                        "Maintain your 4-week logging streak",
                        "Attach more photo evidence for Tier 2",
                        "Respond to partner audit within 24hrs"
                    ],
                    score_percentage: 84
                });
            } finally {
                setLoading(false);
            }
        };
        fetchTrustData();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    if (loading) return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
                <p className="text-[#081C15] font-black uppercase tracking-widest text-xs animate-pulse">Calculating Trust Metrics...</p>
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
            <section className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-700">Algorithmic Reputation</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-[#081C15] tracking-tight">Trust Dashboard</h1>
                <p className="text-slate-500 font-medium text-lg">Your biometric and activity-based credit reliability score.</p>
            </section>

            {/* Main Cinematic Score Card */}
            <Card variant="white" className="relative overflow-hidden border-none shadow-[0_40px_100px_rgba(0,0,0,0.08)] rounded-[40px] p-0">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="lg:col-span-7 bg-[#081C15] p-10 md:p-16 text-white relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]"></div>
                        <div className="relative z-10 space-y-8">
                            <div className="space-y-2">
                                <p className="text-emerald-400 font-black uppercase tracking-[0.3em] text-xs">Current Ranking</p>
                                <h2 className="text-5xl md:text-6xl font-black leading-tight">
                                    {data.trust_level}
                                </h2>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <div className="px-6 py-3 rounded-2xl bg-white/10 border border-white/5 backdrop-blur-xl flex items-center gap-3">
                                    <Zap className="text-emerald-400 w-5 h-5" />
                                    <span className="font-bold text-sm">Consistent Logger</span>
                                </div>
                                <div className="px-6 py-3 rounded-2xl bg-white/10 border border-white/5 backdrop-blur-xl flex items-center gap-3">
                                    <Target className="text-teal-400 w-5 h-5" />
                                    <span className="font-bold text-sm">Verified Coordinates</span>
                                </div>
                            </div>

                            <p className="text-emerald-100/60 font-medium leading-relaxed max-w-md">
                                Your Trust Score is an aggregated identity metric that replaces traditional collateral for credit access. Keep logging to reach Tier 2.
                            </p>

                            <Button variant="outline" className="text-white border-white/20 hover:bg-white hover:text-[#081C15] px-10 py-6 rounded-2xl font-black uppercase tracking-widest text-xs transition-all">
                                Request Peer Verification
                            </Button>
                        </div>
                    </div>

                    <div className="lg:col-span-5 bg-white p-16 flex flex-col items-center justify-center relative">
                        <div className="relative w-64 h-64 flex items-center justify-center group">
                            <div className="absolute inset-0 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors"></div>
                            <svg className="w-full h-full transform -rotate-90">
                                <circle
                                    cx="128" cy="128" r="110"
                                    stroke="currentColor"
                                    strokeWidth="12"
                                    fill="transparent"
                                    className="text-slate-50"
                                />
                                <motion.circle
                                    cx="128" cy="128" r="110"
                                    stroke="currentColor"
                                    strokeWidth="12"
                                    strokeLinecap="round"
                                    fill="transparent"
                                    strokeDasharray={691}
                                    initial={{ strokeDashoffset: 691 }}
                                    animate={{ strokeDashoffset: 691 - (691 * (data.score_percentage || 84)) / 100 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="text-emerald-500"
                                />
                            </svg>
                            <div className="absolute flex flex-col items-center">
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-6xl font-black text-[#081C15]"
                                >
                                    {data.score_percentage}%
                                </motion.span>
                                <span className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 mt-1">Trust Score</span>
                            </div>
                        </div>

                        <div className="mt-12 flex gap-10">
                            <div className="text-center">
                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Last Month</p>
                                <div className="flex items-center gap-1 text-emerald-600 font-black text-lg">
                                    <TrendingUp size={18} /> +12%
                                </div>
                            </div>
                            <div className="w-px h-10 bg-slate-100"></div>
                            <div className="text-center">
                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Tier Goal</p>
                                <p className="text-[#081C15] font-black text-lg">90%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card variant="white" className="bg-white/80 backdrop-blur-xl border-slate-100 rounded-[40px] p-10 hover:shadow-2xl transition-all duration-500 group">
                    <div className="flex items-center space-x-3 mb-10">
                        <div className="p-3 bg-blue-50 rounded-2xl group-hover:scale-110 transition-transform">
                            <Info className="text-blue-600" size={24} />
                        </div>
                        <h3 className="text-2xl font-black text-[#081C15]">Score Analysis</h3>
                    </div>
                    <div className="space-y-4">
                        {data.explanation.map((exp: string, i: number) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="flex items-start space-x-4 p-6 bg-slate-50 rounded-[32px] hover:bg-white border-2 border-transparent hover:border-blue-100 transition-all"
                            >
                                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 mt-1">
                                    <CheckCircle2 size={14} strokeWidth={3} />
                                </div>
                                <p className="text-sm font-bold text-slate-700 leading-relaxed">{exp}</p>
                            </motion.div>
                        ))}
                    </div>
                </Card>

                <Card variant="white" className="bg-emerald-500 rounded-[40px] p-10 text-white border-none shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-[80px]"></div>
                    <div className="flex items-center space-x-3 mb-10 relative z-10">
                        <div className="p-3 bg-white/20 rounded-2xl group-hover:rotate-12 transition-transform">
                            <Sparkles className="text-white" size={24} />
                        </div>
                        <h3 className="text-2xl font-black">Road to Tier 2</h3>
                    </div>
                    <div className="space-y-6 relative z-10">
                        {data.tips.map((tip: string, i: number) => (
                            <div key={i} className="group/item flex items-center justify-between p-6 bg-white/10 border border-white/10 rounded-[32px] hover:bg-white hover:text-[#081C15] transition-all cursor-pointer">
                                <p className="text-sm font-black tracking-tight">{tip}</p>
                                <ArrowUpRight size={22} className="group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-transform" />
                            </div>
                        ))}
                    </div>
                    <Link href="/farmer/activity" className="block mt-10 relative z-10">
                        <Button className="w-full py-6 rounded-2xl font-black uppercase tracking-widest text-[#081C15] bg-white border-none hover:bg-emerald-100 transition-colors">
                            Boost My Score Now
                        </Button>
                    </Link>
                </Card>
            </div>
        </motion.div>
    );
}
