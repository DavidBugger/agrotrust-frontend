"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    ShieldCheck,
    Settings,
    LogOut,
    BarChart3
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
                    ? "bg-slate-800 text-white font-black shadow-lg shadow-black/20"
                    : "text-slate-400 hover:bg-white/5 hover:text-white font-bold"
                }
            `}
        >
            <Icon size={20} className={isActive ? "text-emerald-400" : "text-slate-500 group-hover:text-emerald-400 transition-colors"} />
            <span className="text-sm tracking-wide">{label}</span>
            {isActive && (
                <motion.div
                    layoutId="activeAdminTab"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400"
                />
            )}
        </Link>
    );
};

export const AdminSidebar = ({ mobileOpen, closeMobile }: { mobileOpen: boolean, closeMobile: () => void }) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        router.push("/auth");
    };

    const routes = [
        { icon: LayoutDashboard, label: "Overview", href: "/admin/dashboard" },
        { icon: Users, label: "User Management", href: "/admin/users" },
        { icon: ShieldCheck, label: "Trust Controls", href: "/admin/trust" },
        { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
        { icon: Settings, label: "System Settings", href: "/admin/settings" },
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
                fixed lg:sticky top-0 left-0 z-50 h-screen w-72 bg-[#0F172A] border-r border-slate-800
                transition-transform duration-300 ease-in-out
                ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}>
                <div className="flex flex-col h-full p-6">
                    {/* Brand */}
                    <div className="flex items-center gap-3 px-2 mb-10">
                        <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                            <ShieldCheck className="text-[#081C15]" size={24} />
                        </div>
                        <h1 className="text-2xl font-black text-white tracking-tight">
                            Agro<span className="text-emerald-500">Admin</span>
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
                    <div className="pt-6 border-t border-slate-800">
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
