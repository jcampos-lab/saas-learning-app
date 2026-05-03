"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavItems() {
    const pathname = usePathname();

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Companions", href: "/companions" },
        { label: "My Journey", href: "/my-journey" },
    ];

    return (
        <nav className="flex items-center gap-4">
            {navItems.map((item) => (
                <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                        pathname === item.href && "text-primary font-semibold"
                    )}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
}