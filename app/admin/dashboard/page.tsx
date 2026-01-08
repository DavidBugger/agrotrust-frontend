"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { adminApi } from "@/lib/api";
import {
    Users,
    ShieldCheck,
    Sprout,
    AlertCircle,
    MoreVertical,
    TrendingUp,
    Activity
} from "lucide-react";

export default function AdminDashboard() {
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await adminApi.getStats();
                setStats(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    if (loading) return (
        <div className="flex items-center justify-center h-96">
            <div className="w-12 h-12 border-4 border-slate-900/20 border-t-slate-900 rounded-full animate-spin"></div>
        </div>
    );

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8 pb-20"
        >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Farmers", value: stats?.total_farmers, icon: Users, color: "blue", change: "+12%" },
                    { label: "Avg Trust Score", value: stats?.avg_trust_score, icon: ShieldCheck, color: "emerald", change: "+5pts" },
                    { label: "Active Loans", value: stats?.active_loans, icon: Sprout, color: "amber", change: "+3%" },
                    { label: "Pending Verifications", value: stats?.pending_verifications, icon: AlertCircle, color: "rose", change: "-2" },
                ].map((stat, i) => (
                    <motion.div key={i} variants={itemVariants}>
                        <Card variant="white" className="p-6 border-none shadow-xl shadow-slate-200/50 rounded-[28px]">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600`}>
                                    <stat.icon size={24} />
                                </div>
                                <span className="text-xs font-black bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full flex items-center gap-1">
                                    <TrendingUp size={12} /> {stat.change}
                                </span>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-slate-400 text-xs font-black uppercase tracking-widest">{stat.label}</h3>
                                <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Charts & Activity Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart Area (Placeholder) */}
                <motion.div variants={itemVariants} className="lg:col-span-2">
                    <Card variant="white" className="p-8 border-none shadow-xl shadow-slate-200/50 rounded-[32px] h-full min-h-[400px]">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h3 className="text-xl font-black text-slate-900">Platform Activity</h3>
                                <p className="text-slate-400 text-sm font-medium">User engagement over time</p>
                            </div>
                            <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400">
                                <MoreVertical size={20} />
                            </button>
                        </div>

                        <div className="flex items-end gap-2 h-64 mt-10 px-4">
                            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                                <div key={i} className="flex-1 group relative">
                                    <div
                                        className="bg-emerald-500/10 group-hover:bg-emerald-500 rounded-t-xl w-full transition-all duration-300"
                                        style={{ height: `${h}%` }}
                                    ></div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between text-xs font-bold text-slate-300 mt-4 px-4 uppercase tracking-widest">
                            <span>Jan</span>
                            <span>Dec</span>
                        </div>
                    </Card>
                </motion.div>

                {/* Recent Activity Feed */}
                <motion.div variants={itemVariants} className="lg:col-span-1">
                    <Card variant="white" className="p-8 border-none shadow-xl shadow-slate-200/50 rounded-[32px] h-full">
                        <div className="flex items-center gap-3 mb-8">
                            <Activity className="text-emerald-500" size={24} />
                            <h3 className="text-xl font-black text-slate-900">Live Feed</h3>
                        </div>

                        <div className="space-y-6">
                            {stats?.recent_activity?.map((activity: any, i: number) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="relative mt-1.5">
                                        <div className="w-3 h-3 bg-emerald-500 rounded-full z-10 relative shadow-[0_0_0_4px_rgba(255,255,255,1)]"></div>
                                        {i !== stats.recent_activity.length - 1 && (
                                            <div className="absolute top-3 left-1.5 w-px h-12 bg-slate-100 -ml-px"></div>
                                        )}
                                    </div>
                                    <div className="pb-2">
                                        <p className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                                            {activity.user}
                                        </p>
                                        <p className="text-xs text-slate-500 font-medium mb-1">
                                            {activity.action}
                                        </p>
                                        <p className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">
                                            {activity.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-8 py-3 rounded-xl bg-slate-50 text-slate-400 text-xs font-black uppercase tracking-widest hover:bg-slate-100 hover:text-slate-600 transition-all">
                            View All Logs
                        </button>
                    </Card>
                </motion.div>
            </div>
        </motion.div>
    );
}
