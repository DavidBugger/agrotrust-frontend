"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    ClipboardList,
    ShieldCheck,
    User,
    LogOut,
    Sprout
} from "lucide-react";
import { motion } from "framer-motion";
import { signOut } from "@/lib/auth";
import { useRouter } from "next/navigation";

const SidebarItem = ({ icon: Icon, label, href, isActive, onClick }: any) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`
                group flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300
                ${isActive
                    ? "bg-emerald-500 text-[#081C15] font-black shadow-lg shadow-emerald-500/20"
                    : "text-slate-400 hover:bg-white/5 hover:text-emerald-400 font-bold"
                }
            `}
        >
            <Icon size={20} className={isActive ? "text-[#081C15]" : "text-slate-500 group-hover:text-emerald-400 transition-colors"} />
            <span className="text-sm tracking-wide">{label}</span>
            {isActive && (
                <motion.div
                    layoutId="activeTab"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-[#081C15]"
                />
            )}
        </Link>
    );
};

export const FarmerSidebar = ({ mobileOpen, closeMobile }: { mobileOpen: boolean, closeMobile: () => void }) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        router.push("/auth");
    };

    const routes = [
        { icon: LayoutDashboard, label: "Dashboard", href: "/farmer/home" },
        { icon: ClipboardList, label: "Activities", href: "/farmer/activity" },
        { icon: ShieldCheck, label: "Trust Score", href: "/farmer/trust" },
        { icon: User, label: "My Profile", href: "/farmer/profile" },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={closeMobile}
                />
            )}

            {/* Sidebar Container */}
            <aside className={`
                fixed lg:sticky rounded-l-4xl rounded-r-4xl top-0 left-0 z-50 h-screen w-72 bg-[#081C15] border-r border-white/5
                transition-transform duration-300 ease-in-out
                ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}>
                <div className="flex flex-col h-full p-6">
                    {/* Brand */}
                    <div className="flex items-center gap-3 px-2 mb-10">
                        <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                            <Sprout className="text-[#081C15]" size={24} />
                        </div>
                        <h1 className="text-2xl font-black text-white tracking-tight">
                            Agro<span className="text-emerald-500">Trust</span>
                        </h1>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-2">
                        {routes.map((route) => (
                            <SidebarItem
                                key={route.href}
                                {...route}
                                isActive={pathname === route.href}
                                onClick={closeMobile}
                            />
                        ))}
                    </nav>

                    {/* Footer / Sign Out */}
                    <div className="pt-6 border-t border-white/5">
                        <button
                            onClick={handleSignOut}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all font-bold group"
                        >
                            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm">Sign Out</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};
