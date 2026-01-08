"use client";

import React from "react";
import { Menu, Bell, Search, UserCheck } from "lucide-react";

export const AdminNavbar = ({ onMenuClick }: { onMenuClick: () => void }) => {
    return (
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">

                {/* Left Side: Mobile Menu & Breadcrumbs */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden p-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
                    >
                        <Menu size={24} />
                    </button>

                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Dashboard</p>
                        <h2 className="text-xl font-black text-slate-900">System Overview</h2>
                    </div>
                </div>

                {/* Right Side: Search & Profile */}
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-3 bg-slate-50 px-4 py-2.5 rounded-2xl border border-transparent focus-within:border-emerald-500/20 focus-within:bg-white focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all w-64 lg:w-96">
                        <Search className="text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search users, IDs, or logs..."
                            className="bg-transparent border-none outline-none text-sm font-medium w-full text-slate-900 placeholder:text-gray-400"
                        />
                    </div>

                    <div className="flex items-center gap-4 border-l border-gray-200 pl-6">
                        <button className="relative p-2 text-gray-400 hover:text-emerald-600 transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>

                        <div className="flex items-center gap-3">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-black text-slate-900 leading-none mb-1">Super Admin</p>
                                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Verified Staff</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-black/20">
                                <UserCheck size={18} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
