"use client";

import React, { useState } from "react";
import { FarmerSidebar } from "@/components/FarmerSidebar";
import { FarmerNavbar } from "@/components/FarmerNavbar";

export default function FarmerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <FarmerSidebar
                mobileOpen={mobileOpen}
                closeMobile={() => setMobileOpen(false)}
            />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
                <FarmerNavbar onMenuClick={() => setMobileOpen(true)} />

                <main className="flex-1 p-4 md:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
