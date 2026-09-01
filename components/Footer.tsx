import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    name: "Companion Care",
    href: "/#services",
  },
  {
    name: "Homemaker Services",
    href: "/#services",
  },
  {
    name: "Meal Preparation",
    href: "/#services",
  },
  {
    name: "Medication Reminders",
    href: "/#services",
  },
  {
    name: "Transportation Assistance",
    href: "/#services",
  },
  {
    name: "Personal Care Support",
    href: "/#services",
  },
];

const quickLinks = [
  { name: "Home", href: "/#hero" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Gallery", href: "/#gallery" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
  { name: "Client Intake", href: "/intake" },
];

export default function Footer() {
  return (
    <footer className="bg-[#16351d] text-white">

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* =================================================
              COMPANY
          ================================================= */}

          <div>

            <Link href="/" className="inline-block">

              <h2 className="font-heading text-3xl font-bold text-white">
                Bearing Bear
              </h2>

              <p className="mt-1 text-sm font-semibold tracking-wide text-[#8bcf8f]">
                Companion Care
              </p>

            </Link>

            <p className="mt-6 max-w-sm leading-8 text-white/75">
              Compassionate, dependable companion and homemaker services
              designed to help seniors and adults live comfortably,
              safely, and independently at home.
            </p>

            {/* Brand Accent */}

            <div className="mt-8 h-1 w-16 rounded-full bg-[#f8dc05]" />

          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div>

            <h3 className="font-heading text-2xl font-bold">
              Quick Links
            </h3>

            <ul className="mt-7 space-y-4">

              {quickLinks.map((link) => (

                <li key={link.name}>

                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-white/70 transition-colors duration-300 hover:text-[#8bcf8f]"
                  >
                    {link.name}

                    {link.name === "Client Intake" && (
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    )}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* =================================================
              SERVICES
          ================================================= */}

          <div>

            <h3 className="font-heading text-2xl font-bold">
              Our Services
            </h3>

            <ul className="mt-7 space-y-4">

              {services.map((service) => (

                <li key={service.name}>

                  <Link
                    href={service.href}
                    className="text-white/70 transition-colors duration-300 hover:text-[#8bcf8f]"
                  >
                    {service.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div>

            <h3 className="font-heading text-2xl font-bold">
              Contact Us
            </h3>

            <div className="mt-7 space-y-6">

              {/* Phone */}

              <a
                href="tel:+15616602005"
                className="group flex gap-4"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Phone
                    size={20}
                    className="text-[#8bcf8f]"
                  />
                </div>

                <div>

                  <p className="font-semibold">
                    Phone
                  </p>

                  <p className="mt-1 text-white/70 transition group-hover:text-[#8bcf8f]">
                    (561) 660-2005
                  </p>

                </div>

              </a>

              {/* Email */}

              <a
                href="mailto:totalcare@bearingbears.com"
                className="group flex gap-4"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Mail
                    size={20}
                    className="text-[#8bcf8f]"
                  />
                </div>

                <div className="min-w-0">

                  <p className="font-semibold">
                    Email
                  </p>

                  <p className="mt-1 break-all text-white/70 transition group-hover:text-[#8bcf8f]">
                    totalcare@bearingbears.com
                  </p>

                </div>

              </a>

              {/* Service */}

              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <MapPin
                    size={20}
                    className="text-[#8bcf8f]"
                  />
                </div>

                <div>

                  <p className="font-semibold">
                    Service
                  </p>

                  <p className="mt-1 leading-6 text-white/70">
                    In-Home Service
                    <br />
                    Phone & Online Support
                  </p>

                </div>

              </div>

              {/* Hours */}

              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Clock
                    size={20}
                    className="text-[#8bcf8f]"
                  />
                </div>

                <div>

                  <p className="font-semibold">
                    Office Hours
                  </p>

                  <p className="mt-1 leading-6 text-white/70">
                    Monday – Friday
                    <br />
                    8:00 AM – 6:00 PM
                  </p>

                  <p className="mt-1 leading-6 text-white/70">
                    Saturday
                    <br />
                    9:00 AM – 3:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          CTA STRIP
      ===================================================== */}

      <div className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-8">

          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-white/5 px-6 py-6 md:flex-row">

            <div>

              <h3 className="font-heading text-2xl font-bold">
                Need Companion Care?
              </h3>

              <p className="mt-1 text-white/65">
                We're here to help you take the next step.
              </p>

            </div>

            <Link
              href="/intake"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#f8dc05] px-6 py-3 font-semibold text-[#243128] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff06a]"
            >
              Schedule a Consultation
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </div>

      {/* =====================================================
          COPYRIGHT
      ===================================================== */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-7 text-sm md:flex-row">

          <p className="text-white/50">
            © {new Date().getFullYear()} Bearing Bear LLC. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link
              href="/privacy"
              className="text-white/50 transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-white/50 transition hover:text-white"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}