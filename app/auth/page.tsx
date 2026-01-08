"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { signInWithPhone, verifyOtp } from "@/lib/auth";
import { farmerApi } from "@/lib/api";
import { Phone, Lock, ArrowRight, ShieldCheck, RefreshCcw } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
    const router = useRouter();
    const [step, setStep] = useState<"phone" | "otp">("phone");
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [formattedPhone, setFormattedPhone] = useState("");

    const formatToE164 = (number: string) => {
        // Remove all non-digit characters except leading +
        let cleaned = number.replace(/[^\d+]/g, "");

        // Nigerian specific formatting
        if (cleaned.startsWith("0") && cleaned.length === 11) {
            return "+234" + cleaned.substring(1);
        }
        if (cleaned.length === 10 && /^[789]/.test(cleaned)) {
            return "+234" + cleaned;
        }
        if (cleaned.startsWith("234") && cleaned.length === 13) {
            return "+" + cleaned;
        }
        if (cleaned.startsWith("+234") && cleaned.length === 14) {
            return cleaned;
        }

        // Return original if no specific rule matches, or basic cleaning
        return cleaned.startsWith("+") ? cleaned : `+${cleaned}`;
    };

    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const e164Phone = formatToE164(phone);
        setFormattedPhone(e164Phone);
        const { error } = await signInWithPhone(e164Phone);

        if (error) {
            setError(error.message);
            // For demo purposes, we allow proceeding to OTP step if backend is not configured
            if (error.message.includes("URL")) {
                setStep("otp");
            }
        } else {
            setStep("otp");
        }
        setLoading(false);
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const { data, error } = await verifyOtp(formattedPhone || phone, otp);

        if (error) {
            setError(error.message);
            // For demo purposes, redirect anyway if secret is missing
            if (error.message.includes("URL")) {
                router.push("/farmer/home");
            }
        } else if (data.session) {
            try {
                // Check if user has a profile
                const profileRes = await farmerApi.getProfile();
                const profile = profileRes.data;

                if (!profile || !profile.full_name) {
                    router.push("/farmer/profile");
                } else {
                    router.push("/farmer/home");
                }
            } catch (err) {
                // If profile fetch fails, default to home (or profile if we want to be strict)
                console.error("Failed to fetch profile", err);
                router.push("/farmer/home");
            }
        }
        setLoading(false);
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-10 space-y-4">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-16 h-16 bg-forest-green rounded-3xl mx-auto flex items-center justify-center shadow-2xl"
                    >
                        <ShieldCheck className="text-white" size={32} />
                    </motion.div>
                    <h1 className="text-4xl font-black text-sleek-dark">Secure Access</h1>
                    <p className="text-gray-500 font-medium italic">Building trust in agriculture, one login at a time.</p>
                </div>

                <AnimatePresence mode="wait">
                    {step === "phone" ? (
                        <motion.div
                            key="phone"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                        >
                            <Card padding="lg" variant="white">
                                <form onSubmit={handleSendOtp} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-gray-400">Phone Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-forest-green" size={20} />
                                            <input
                                                type="tel"
                                                placeholder="+234 812 345 6789"
                                                required
                                                className="w-full bg-gray-50 border-none rounded-2xl p-4 pl-12 font-bold text-sleek-dark focus:ring-2 focus:ring-forest-green-500"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    {error && <p className="text-xs font-bold text-red-500 bg-red-50 p-3 rounded-xl">{error}</p>}

                                    <Button type="submit" className="w-full" size="lg" isLoading={loading}>
                                        Send Secure Code <ArrowRight size={18} className="ml-2" />
                                    </Button>

                                    <p className="text-[10px] text-center text-gray-400 font-medium">
                                        By continuing, you agree to build trust through transparent data sharing.
                                    </p>
                                </form>
                            </Card>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="otp"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <Card padding="lg" variant="white">
                                <form onSubmit={handleVerifyOtp} className="space-y-6">
                                    <div className="space-y-2 text-center mb-4">
                                        <h3 className="font-black text-xl">Verification Code</h3>
                                        <p className="text-sm text-gray-500 font-medium">We sent a 6-digit code to <span className="text-forest-green font-bold">{formattedPhone || phone}</span></p>
                                    </div>

                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-forest-green" size={20} />
                                        <input
                                            type="text"
                                            placeholder="Enter 6-digit code"
                                            maxLength={6}
                                            required
                                            className="w-full bg-gray-50 border-none rounded-2xl p-4 pl-12 text-center tracking-[1em] font-black text-2xl text-sleek-dark focus:ring-2 focus:ring-forest-green"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                        />
                                    </div>

                                    {error && <p className="text-xs font-bold text-red-500 bg-red-50 p-3 rounded-xl">{error}</p>}

                                    <Button type="submit" className="w-full" size="lg" isLoading={loading}>
                                        Verify & Login <ShieldCheck size={18} className="ml-2" />
                                    </Button>

                                    <div className="flex justify-center">
                                        <button
                                            type="button"
                                            onClick={() => setStep("phone")}
                                            className="text-xs font-bold text-forest-green hover:underline flex items-center"
                                        >
                                            <RefreshCcw size={14} className="mr-1" /> Use different number
                                        </button>
                                    </div>
                                </form>
                            </Card>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
