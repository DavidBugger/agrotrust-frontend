"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { farmerApi } from "@/lib/api";
import { Sprout, User, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        full_name: "",
        location: "",
        main_crop: "",
        farm_size: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await farmerApi.updateProfile(form);
            router.push("/farmer/home");
        } catch (err) {
            console.error("Profile update failed", err);
            // Fallback for demo if API fails
            router.push("/farmer/home");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-[80vh] p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-lg space-y-8"
            >
                <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full mx-auto flex items-center justify-center mb-6">
                        <Sprout className="text-emerald-600" size={32} />
                    </div>
                    <h1 className="text-4xl font-black text-[#081C15]">Let's Get Started</h1>
                    <p className="text-slate-500 font-medium">Complete your profile to start building your trust score.</p>
                </div>

                <Card variant="white" className="p-8 md:p-10 shadow-2xl rounded-[40px] border-none">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" size={18} />
                                <input
                                    type="text"
                                    placeholder="e.g. John Doe"
                                    required
                                    className="w-full bg-slate-50 border-none rounded-2xl p-4 pl-12 font-bold text-[#081C15] focus:ring-2 focus:ring-emerald-500"
                                    value={form.full_name}
                                    onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Location</label>
                            <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" size={18} />
                                <input
                                    type="text"
                                    placeholder="e.g. Lagos, Nigeria"
                                    required
                                    className="w-full bg-slate-50 border-none rounded-2xl p-4 pl-12 font-bold text-[#081C15] focus:ring-2 focus:ring-emerald-500"
                                    value={form.location}
                                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Main Crop</label>
                            <div className="relative">
                                <Sprout className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" size={18} />
                                <input
                                    type="text"
                                    placeholder="e.g. Maze, Rice"
                                    required
                                    className="w-full bg-slate-50 border-none rounded-2xl p-4 pl-12 font-bold text-[#081C15] focus:ring-2 focus:ring-emerald-500"
                                    value={form.main_crop}
                                    onChange={(e) => setForm({ ...form, main_crop: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Farm Size (Hectares)</label>
                            <div className="relative">
                                <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" size={18} />
                                <input
                                    type="text"
                                    placeholder="e.g. 50"
                                    required
                                    className="w-full bg-slate-50 border-none rounded-2xl p-4 pl-12 font-bold text-[#081C15] focus:ring-2 focus:ring-emerald-500"
                                    value={form.farm_size}
                                    onChange={(e) => setForm({ ...form, farm_size: e.target.value })}
                                />
                            </div>
                        </div>

                        <Button type="submit" className="w-full py-6 rounded-2xl font-black uppercase tracking-widest text-xs" size="lg" isLoading={loading}>
                            Complete Profile <ArrowRight size={18} className="ml-2" />
                        </Button>
                    </form>
                </Card>
            </motion.div>
        </div>
    );
}
