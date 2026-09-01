"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  subject: z.string().min(3, "Please enter a subject."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactForm = z.infer<typeof schema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactForm) => {
    console.log(data);

    // Email integration can be connected later.

    alert("Message sent successfully!");

    reset();
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-brand-green-pale py-24"
    >

      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-green-light/10 blur-3xl" />

      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brand-green-light/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-block rounded-full bg-white px-4 py-2 font-medium text-brand-green-dark shadow-sm">
            Contact Us
          </span>

          <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
            We're Here to Help
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Reach out today to discuss your family's care needs.
            We'd love to answer your questions and help you get started.
          </p>

        </motion.div>

        {/* =====================================================
            CONTACT CONTENT
        ===================================================== */}

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-5">

          {/* ===================================================
              LEFT — CONTACT INFORMATION
          =================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5 lg:col-span-2"
          >

            {/* Phone */}

            <a
              href="tel:+15616602005"
              className="group flex gap-5 rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-green-pale">
                <Phone className="text-brand-green" size={23} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Business Phone
                </h3>

                <p className="mt-2 text-gray-600 transition group-hover:text-brand-green">
                  (561) 660-2005
                </p>
              </div>

            </a>

            {/* Email */}

            <a
              href="mailto:totalcare@bearingbears.com"
              className="group flex gap-5 rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-green-pale">
                <Mail className="text-brand-green" size={23} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Email
                </h3>

                <p className="mt-2 break-all text-gray-600 transition group-hover:text-brand-green">
                  totalcare@bearingbears.com
                </p>
              </div>

            </a>

            {/* Office */}

            <div className="flex gap-5 rounded-3xl bg-white p-6 shadow-sm">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-green-pale">
                <MapPin className="text-brand-green" size={23} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Office
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  In-Home Service
                  <br />
                  Phone & Online Support
                </p>
              </div>

            </div>

            {/* Business Hours */}

            <div className="rounded-3xl bg-brand-green p-7 text-white shadow-xl">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                  <Clock size={22} />
                </div>

                <h3 className="text-lg font-bold">
                  Business Hours
                </h3>

              </div>

              <div className="mt-6 space-y-3 text-sm leading-6 text-white/90">

                <p className="flex justify-between gap-4">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-white">
                    8:00 AM - 6:00 PM
                  </span>
                </p>

                <p className="flex justify-between gap-4">
                  <span>Saturday</span>
                  <span className="font-medium text-white">
                    9:00 AM - 3:00 PM
                  </span>
                </p>

                <p className="flex justify-between gap-4">
                  <span>Sunday</span>
                  <span className="font-medium text-white">
                    By Appointment
                  </span>
                </p>

              </div>

            </div>

          </motion.div>

          {/* ===================================================
              RIGHT — CONTACT FORM
          =================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-100 bg-white p-7 shadow-xl sm:p-10 lg:col-span-3"
          >

            <div className="mb-8">

              <h3 className="font-heading text-3xl font-bold text-gray-900">
                Send Us a Message
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Tell us a little about what you need. Our team will be happy
                to help.
              </p>

            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >

              {/* Name + Phone */}

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>

                  <input
                    {...register("name")}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 outline-none transition focus:border-brand-green focus:bg-white focus:ring-2 focus:ring-brand-green/10"
                  />

                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>

                  <input
                    {...register("phone")}
                    placeholder="Your phone number"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 outline-none transition focus:border-brand-green focus:bg-white focus:ring-2 focus:ring-brand-green/10"
                  />

                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

              </div>

              {/* Email */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  {...register("email")}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 outline-none transition focus:border-brand-green focus:bg-white focus:ring-2 focus:ring-brand-green/10"
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Subject
                </label>

                <input
                  {...register("subject")}
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 outline-none transition focus:border-brand-green focus:bg-white focus:ring-2 focus:ring-brand-green/10"
                />

                {errors.subject && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows={6}
                  {...register("message")}
                  placeholder="Tell us about your care needs..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-4 outline-none transition focus:border-brand-green focus:bg-white focus:ring-2 focus:ring-brand-green/10"
                />

                {errors.message && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-xl bg-brand-green px-8 py-4 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-brand-green-dark hover:shadow-lg"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>

          </motion.div>

        </div>

        {/* =====================================================
            MAP
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-3xl border border-gray-100 bg-white p-2 shadow-xl"
        >

          <iframe
            src="https://www.google.com/maps?q=500+S+Australian+Ave+Suite+600+West+Palm+Beach,+FL+33401&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            title="Bearing Bear service area"
            className="rounded-2xl border-0"
          />

        </motion.div>

      </div>

    </section>
  );
}