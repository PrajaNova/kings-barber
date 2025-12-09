"use client";

import { Menu, Phone, User, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  COMPANY_NAME,
  CONTACT_PHONE_NUMBER,
  NAV_ITEMS,
} from "##/lib/constants";
import { cn } from "##/lib/utils";

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="rounded-full px-8 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white w-full text-center lg:w-auto lg:px-5 lg:py-2 lg:text-sm"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12">
      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-bold tracking-tight text-white lg:text-3xl z-50"
        onClick={() => setIsOpen(false)}
      >
        {COMPANY_NAME}
      </Link>

      {/* Desktop Nav Links - Glass Effect */}
      <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-md lg:flex">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.href} href={item.href}>
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Action Button & Mobile Menu */}
      <div className="flex items-center gap-4 z-50">
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-md">
          <Link
            href={`tel:${CONTACT_PHONE_NUMBER}`}
            className="rounded-full px-3 py-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Call Us"
          >
            <Phone className="h-5 w-5" />
          </Link>
          <Link
            href="/login"
            className="rounded-full px-3 py-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Account"
          >
            <User className="h-5 w-5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden rounded-full px-3 py-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Pane */}
      <div
        className={cn(
          "absolute top-full left-0 w-full px-4 pb-4 lg:hidden transition-all duration-300 ease-in-out",
          isOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-4 opacity-0 invisible",
        )}
      >
        <div className="flex flex-col items-center gap-1 rounded-3xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
