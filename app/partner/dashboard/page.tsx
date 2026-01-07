"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { StatusBadge } from "@/components/StatusBadge";
import { partnerApi } from "@/lib/api";
import { Search, Users, Shield, TrendingUp, Filter, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function PartnerDashboard() {
    const [farmers, setFarmers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchFarmers = async () => {
            try {
                const res = await partnerApi.listFarmers();
                setFarmers(res.data);
            } catch (err) {
                // Mock data for demo
                setFarmers([
                    { id: "1", full_name: "John Doe", location: "Kaduna", main_crop: "Maize", trust_level: "Good", score: 85 },
                    { id: "2", full_name: "Sarah Smith", location: "Kano", main_crop: "Rice", trust_level: "Fair", score: 62 },
                    { id: "3", full_name: "Musa Ibrahim", location: "Oyo", main_crop: "Cocoa", trust_level: "Excellent", score: 91 },
                    { id: "4", full_name: "Grace Amadi", location: "Enugu", main_crop: "Cassava", trust_level: "Fair", score: 58 },
                ]);
            } finally {
                setLoading(false);
            }
        };
        fetchFarmers();
    }, []);

    const filteredFarmers = farmers.filter(f =>
        f.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8">
            {/* Search & Stats Header */}
            <section className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Partner Dashboard</h1>
                    <p className="text-gray-500 font-medium">Monitoring farmer performance and trust distribution.</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Search farmers..."
                            className="bg-white border-2 border-gray-100 rounded-2xl py-3 pl-12 pr-6 font-bold text-sm focus:border-emerald-500 outline-none transition-all w-full md:w-64"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Button variant="outline" size="md" className="hidden md:flex">
                        <Filter size={18} className="mr-2" /> Filter
                    </Button>
                </div>
            </section>

            {/* Aggregate Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Active Farmers", value: "1,240", icon: Users, color: "emerald" },
                    { label: "High Trust (80+)", value: "432", icon: Shield, color: "blue" },
                    { label: "Avg Trust Score", value: "72%", icon: TrendingUp, color: "purple" },
                    { label: "Risk Alerts", value: "12", icon: Shield, color: "red" }
                ].map((stat, i) => (
                    <Card key={i} variant="white" className="flex items-center gap-4 p-5 border-none shadow-lg">
                        <div className={`p-4 bg-${stat.color}-50 text-${stat.color}-600 rounded-2xl`}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</p>
                            <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Farmer List Table */}
            <Card variant="white" padding="none" className="overflow-hidden shadow-2xl border-none">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50 border-b border-gray-100">
                                <th className="px-6 py-4 text-xs font-black uppercase text-gray-400 tracking-wider">Farmer</th>
                                <th className="px-6 py-4 text-xs font-black uppercase text-gray-400 tracking-wider">Location</th>
                                <th className="px-6 py-4 text-xs font-black uppercase text-gray-400 tracking-wider">Main Crop</th>
                                <th className="px-6 py-4 text-xs font-black uppercase text-gray-400 tracking-wider">Trust Level</th>
                                <th className="px-6 py-4 text-xs font-black uppercase text-gray-400 tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredFarmers.map((farmer) => (
                                <tr key={farmer.id} className="hover:bg-emerald-50/30 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center font-black text-emerald-700">
                                                {farmer.full_name[0]}
                                            </div>
                                            <span className="font-bold text-slate-900">{farmer.full_name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-sm font-semibold text-gray-500">{farmer.location}</td>
                                    <td className="px-6 py-5">
                                        <StatusBadge label={farmer.main_crop} variant="info" />
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full bg-${farmer.score > 80 ? 'emerald' : farmer.score > 60 ? 'blue' : 'yellow'}-500`}
                                                    style={{ width: `${farmer.score}%` }}
                                                />
                                            </div>
                                            <span className="text-xs font-black text-slate-700">{farmer.score}%</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <Link href={`#`}>
                                            <button className="p-2 text-gray-400 hover:text-emerald-600 transition-colors group-hover:bg-white rounded-xl shadow-sm">
                                                <ExternalLink size={18} />
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}
