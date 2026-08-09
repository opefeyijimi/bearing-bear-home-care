import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const services = [
  "Personal Care",
  "Companionship",
  "Meal Preparation",
  "Medication Reminders",
  "Respite Care",
  "24-Hour Care",
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
  { name: "Client Intake", href: "/intake" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Top */}

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold text-sky-400">

              Bearing Bear Home Care

            </h2>

            <p className="mt-6 leading-8 text-slate-300">

              Compassionate, reliable and professional home care
              services that empower seniors to live safely,
              comfortably and independently at home.

            </p>

            <div className="mt-8 flex gap-4">

              <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-slate-800 p-3 transition hover:bg-sky-600"
  >
    <FaFacebookF size={18} />
  </a>

               <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-slate-800 p-3 transition hover:bg-sky-600"
  >
    <FaInstagram size={18} />
  </a>


             <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-slate-800 p-3 transition hover:bg-sky-600"
  >
    <FaLinkedinIn size={18} />
  </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold">

              Quick Links

            </h3>

            <ul className="mt-6 space-y-4">

              {quickLinks.map((link) => (

                <li key={link.name}>

                  <Link
                    href={link.href}
                    className="text-slate-300 transition hover:text-sky-400"
                  >
                    {link.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold">

              Our Services

            </h3>

            <ul className="mt-6 space-y-4">

              {services.map((service) => (

                <li
                  key={service}
                  className="text-slate-300"
                >
                  {service}
                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold">

              Contact Us

            </h3>

            <div className="mt-6 space-y-6">

              <div className="flex gap-4">

                <Phone className="text-sky-400" />

                <div>

                  <p className="font-semibold">

                    Phone

                  </p>

                  <p className="text-slate-300">

                    (555) 123-4567

                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Mail className="text-sky-400" />

                <div>

                  <p className="font-semibold">

                    Email

                  </p>

                  <p className="text-slate-300">

                    info@bearingbearhomecare.com

                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <MapPin className="text-sky-400" />

                <div>

                  <p className="font-semibold">

                    Address

                  </p>

                  <p className="text-slate-300">

                    123 Main Street

                    <br />

                    City, State ZIP

                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Clock className="text-sky-400" />

                <div>

                  <p className="font-semibold">

                    Office Hours

                  </p>

                  <p className="text-slate-300">

                    Mon – Fri

                    <br />

                    8:00 AM – 6:00 PM

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">

          <p className="text-slate-400">

            © {new Date().getFullYear()} Bearing Bear Home Care.
            All rights reserved.

          </p>

          <div className="flex gap-6">

            <Link
              href="/privacy"
              className="text-slate-400 hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-slate-400 hover:text-white"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}