"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
} from "lucide-react";


const navLinks = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/#gallery" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
  { label: "Client Intake", href: "/intake" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg py-3"
            : "bg-white/80 backdrop-blur-md py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">

          

            {/* Replace with your logo */}

           

            <Image
    src="/logo.png"
    alt="Bearing Bear"
    width={180}
    height={80}
    loading="eager"
    priority
/>

            <div>
              <h2 className="font-bold text-xl text-sky-700">
                Bearing Bear
              </h2>

              <p className="text-xs text-gray-500">
                Companion Care
              </p>
            </div>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                //className="font-medium text-gray-700 hover:text-sky-600 transition"
                className="text-gray-700 hover:text-sky-600 transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="tel:+15616604145"
              className="flex items-center gap-2 text-sky-700 font-semibold"
            >
              <Phone size={18} />
              (561) 660-4145
            </a>

            <Link
              href="/intake"
              className="bg-sky-600 hover:bg-sky-700 transition text-white px-5 py-3 rounded-xl shadow-md"
            >
              Schedule Consultation
            </Link>

          </nav>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>

        </div>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[78px] left-0 w-full bg-white shadow-xl z-40 lg:hidden"
          >
            <div className="flex flex-col p-6 gap-5">

              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-700 font-medium"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="tel:+15616604145"
                className="flex items-center gap-2 text-sky-700 font-semibold"
              >
                <Phone size={18} />
                (561) 660-4145
              </a>

              <Link
                href="/intake"
                onClick={() => setMobileOpen(false)}
                className="bg-sky-600 text-white rounded-xl py-3 text-center"
              >
                Schedule Consultation
              </Link>

            </div>
          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}