"use client";

import React, { useState, useEffect } from "react";
import { Menu, Bell, Search, User } from "lucide-react";
import { farmerApi } from "@/lib/api";

export const FarmerNavbar = ({ onMenuClick }: { onMenuClick: () => void }) => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await farmerApi.getProfile();
                setUser(res.data);
            } catch (err) {
                // Ignore for demo
            }
        };
        fetchUser();
    }, []);

    return (
        <header className="sticky top-0 z-30 bg-gray-50/80 backdrop-blur-xl border-b border-gray-100 px-6 py-4">
            <div className="flex items-center justify-between">

                {/* Left Side: Mobile Menu & User Profile */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden p-2 rounded-xl bg-white text-[#081C15] hover:bg-emerald-50 transition-colors shadow-sm"
                    >
                        <Menu size={24} />
                    </button>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-[#081C15] text-white flex items-center justify-center shadow-lg shadow-black/10">
                            <User size={18} />
                        </div>
                        <div className="hidden sm:block">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Welcome back,</p>
                            <p className="text-sm font-black text-[#081C15] leading-none">
                                {user?.full_name || "Farmer"}
                            </p>
                            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mt-1">
                                {user?.main_crop || "AgroTrust Member"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Search & Notifications */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-gray-100 shadow-sm w-64 lg:w-96 transition-all focus-within:ring-2 focus-within:ring-emerald-500/20">
                        <Search className="text-gray-300" size={18} />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent border-none outline-none text-sm font-medium w-full text-[#081C15] placeholder:text-gray-300"
                        />
                    </div>

                    <button className="relative p-3 rounded-2xl bg-white hover:bg-emerald-50 text-gray-400 hover:text-emerald-600 transition-colors shadow-sm border border-gray-100">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                </div>
            </div>
        </header>
    );
};
