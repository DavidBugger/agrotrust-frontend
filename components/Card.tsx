import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    variant?: "glass" | "white" | "dark";
    padding?: "none" | "sm" | "md" | "lg";
}

export const Card = ({
    children,
    className = "",
    variant = "white",
    padding = "md",
}: CardProps) => {
    const paddings = {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
    };

    const variants = {
        white: "bg-white border border-gray-100 shadow-sm",
        glass: "glass shadow-xl",
        dark: "glass-dark text-white",
    };

    return (
        <div className={`rounded-3xl ${variants[variant]} ${paddings[padding]} ${className}`}>
            {children}
        </div>
    );
};
