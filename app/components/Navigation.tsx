"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import ThemeToggle from "./ThemeToggle";
import { navigationItems } from "../data/portfolioData";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);

      const sections = navigationItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) {
          return false;
        }

        const rect = element.getBoundingClientRect();
        return rect.top <= 110 && rect.bottom >= 110;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-foreground/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-semibold text-base tracking-wide"
            onClick={() => scrollToSection("#hero")}
          >
            Yuta Nishioka
          </motion.button>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * (index + 1) }}
                onClick={() => scrollToSection(item.href)}
                className={clsx(
                  "relative px-2 py-2 text-sm transition-colors",
                  activeSection === item.href.substring(1)
                    ? "text-foreground"
                    : "text-foreground/65 hover:text-foreground"
                )}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-foreground"
                  />
                )}
              </motion.button>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="p-2 rounded-md text-foreground/65 hover:text-foreground"
              aria-label="メニューを開く"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-foreground/10"
          >
            <div className="px-3 py-2 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={clsx(
                    "block w-full text-left px-3 py-2 rounded-md text-base transition-colors",
                    activeSection === item.href.substring(1)
                      ? "bg-foreground/10 text-foreground"
                      : "text-foreground/65 hover:bg-foreground/5 hover:text-foreground"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
