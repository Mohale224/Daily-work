"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/auth/styles.module.css";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/auth/register" },
  { name: "Login", href: "/auth/login" },
  { name: "Forgot Paasword", href: "/auth/forgot-password" },
];
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <div className={styles.container} >
        <div>
            <input value={input} onChange{(e) => setInput(e.target.value)} />
        </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
