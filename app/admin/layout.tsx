"use client";

import React, { useState } from "react";
import { AdminSidebar } from "@/components/AdminSidebar";
import { AdminNavbar } from "@/components/AdminNavbar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-slate-50">
            {/* Sidebar */}
            <AdminSidebar
                mobileOpen={mobileOpen}
                closeMobile={() => setMobileOpen(false)}
            />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                <AdminNavbar onMenuClick={() => setMobileOpen(true)} />

                <main className="flex-1 p-4 md:p-8 lg:p-10">
                    {children}
                </main>
            </div>
        </div>
    );
}
