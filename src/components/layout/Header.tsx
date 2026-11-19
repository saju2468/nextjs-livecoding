"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Utensils,
  Phone,
  CalendarDays,
  ShoppingBag,
  Menu,
  X,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "Menu", href: "#menu" },
  { name: "Reservations", href: "#reservations" },
  { name: "Chef's Specials", href: "#specials" },
  { name: "Our Story", href: "#story" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-xs">
      {/* Top Notification / Hours Bar */}
      <div className="hidden border-b border-orange-100 bg-orange-50/70 py-1.5 text-xs text-orange-950 sm:block">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-orange-900">Open Today: 12:00 PM – 11:00 PM</span>
          </div>
          <div className="flex items-center gap-4 text-orange-800">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-1.5 transition-colors hover:text-orange-600 font-medium"
            >
              <Phone className="size-3.5 text-orange-600" />
              <span>+1 (555) 234-5678</span>
            </a>
            <span className="text-orange-200">|</span>
            <div className="flex items-center gap-1 text-orange-800/80">
              <Clock className="size-3.5 text-orange-600" />
              <span>Dinner Service from 5:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        {/* Brand / Restaurant Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex size-10 items-center justify-center rounded-xl bg-orange-600 text-white shadow-md shadow-orange-600/20 transition-all group-hover:scale-105 group-hover:bg-orange-700">
            <Utensils className="size-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-stone-900 group-hover:text-orange-600 transition-colors">
              SAVOR
            </span>
            <span className="text-[10px] uppercase tracking-widest text-orange-600 -mt-1 font-bold">
              Bistro & Bar
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-orange-600 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          {/* Order Bag / Cart Button */}
          <Button
            variant="ghost"
            size="icon"
            className="relative hidden sm:inline-flex text-stone-700 hover:text-orange-600 hover:bg-orange-50"
            aria-label="Order Cart"
          >
            <ShoppingBag className="size-5" />
            <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white shadow-xs">
              2
            </span>
          </Button>

          {/* Book Table Button */}
          <Button className="hidden sm:inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-medium shadow-md shadow-orange-600/20 transition-all hover:shadow-lg hover:shadow-orange-600/30">
            <CalendarDays className="size-4" />
            <span>Book a Table</span>
          </Button>

          {/* Mobile Menu Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-stone-800 hover:text-orange-600 hover:bg-orange-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-orange-100 bg-white px-4 py-6 shadow-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-stone-800 py-2 border-b border-orange-100 hover:text-orange-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <Button className="w-full justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white shadow-md">
                <CalendarDays className="size-4" />
                <span>Book a Table</span>
              </Button>
              <Button variant="outline" className="w-full justify-center gap-2 border-orange-200 text-orange-900 hover:bg-orange-50">
                <ShoppingBag className="size-4 text-orange-600" />
                <span>Order Online (2 items)</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
