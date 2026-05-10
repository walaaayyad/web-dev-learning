"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, Heart, LogIn, Globe } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

type Language = "EN" | "AR";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState<Language>("EN");
  const [favorites] = useState(3);

  const isRTL = language === "AR";

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "EN" ? "AR" : "EN"));

  return (
    <header
      //   dir={isRTL ? "rtl" : "ltr"}
      className="w-full border-b bg-background/80 backdrop-blur-md sticky top-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg">
          LearnHub
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Favorites */}
          <Button variant="ghost" size="icon" className="relative">
            <Heart size={18} />
            {favorites > 0 && (
              <span className="absolute -top-1 -right-1 text-[10px] bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center">
                {favorites}
              </span>
            )}
          </Button>

          {/* Theme */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          {/* Language */}
          <Button variant="ghost" size="sm" onClick={toggleLanguage}>
            <Globe size={16} className="mr-1" />
            {language}
          </Button>

          {/* Login */}
          <Button size="sm">
            <LogIn size={16} className="mr-1" />
            Login
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side={isRTL ? "right" : "left"}>
              <div className="flex flex-col gap-4 mt-6">
                <Link href="/">Home</Link>
                <Link href="/courses">Courses</Link>
                <Link href="/dashboard">Dashboard</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
