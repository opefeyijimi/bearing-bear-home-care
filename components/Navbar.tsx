"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Phone,
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
      {/* =====================================================
          DESKTOP / MAIN NAVBAR
      ===================================================== */}

      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white py-3 shadow-lg"
            : "bg-white/80 py-5 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="Bearing Bear"
              width={100}
              height={50}
              loading="eager"
              priority
            />

            <div>
              <h2 className="font-heading text-xl font-bold text-brand-green-dark">
                Bearing Bear
              </h2>

              <p className="text-xs text-gray-500">
                Companion Care
              </p>
            </div>
          </Link>

          {/* =================================================
              DESKTOP MENU
          ================================================= */}

          <nav className="hidden items-center gap-8 lg:flex">

            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-medium text-gray-700 transition-colors duration-300 hover:text-brand-green"
              >
                {item.label}
              </Link>
            ))}

            {/* Phone */}

            <a
              href="tel:+15616602005"
              className="flex items-center gap-2 font-semibold text-brand-green-dark transition-colors hover:text-brand-green"
            >
              <Phone size={18} />
              (561) 660-2005
            </a>

            {/* Primary CTA */}

            <Link
              href="/intake"
              className="rounded-xl bg-brand-green px-5 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-green-dark hover:shadow-lg"
            >
              Schedule Consultation
            </Link>

          </nav>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-brand-green-dark transition-colors hover:bg-brand-green-pale lg:hidden"
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>

        </div>
      </motion.header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -40,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed left-0 top-[78px] z-40 w-full bg-white shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-5 p-6">

              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-medium text-gray-700 transition-colors hover:text-brand-green"
                >
                  {item.label}
                </Link>
              ))}

              {/* Phone */}

              <a
                href="tel:+15616602005"
                className="flex items-center gap-2 font-semibold text-brand-green-dark"
              >
                <Phone size={18} />
                (561) 660-4145
              </a>

              {/* Mobile CTA */}

              <Link
                href="/intake"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl bg-brand-green py-3 text-center font-semibold text-white transition-colors hover:bg-brand-green-dark"
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