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

    // EmailJS integration later

    alert("Message sent successfully!");

    reset();
  };

  return (
    <section id="contact" className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="rounded-full bg-sky-100 px-4 py-2 text-sky-700 font-medium">

            Contact Us

          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold">

            We're Here to Help

          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">

            Reach out today to discuss your family's care needs.
            We'd love to answer your questions and help you get started.

          </p>

        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 mt-20">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >

            {/* Phone */}

            <div className="rounded-3xl bg-sky-50 p-6 flex gap-5">

              <Phone className="text-sky-600 mt-1" />

              <div>

                <h3 className="font-bold text-lg">

                  Phone

                </h3>

                <p className="text-gray-600 mt-2">

                  (561) 660-4145

                </p>

              </div>

            </div>

            {/* Email */}

            <div className="rounded-3xl bg-sky-50 p-6 flex gap-5">

              <Mail className="text-sky-600 mt-1" />

              <div>

                <h3 className="font-bold text-lg">

                  Email

                </h3>

                <p className="text-gray-600 mt-2">

                  totalcare@bearingbears.com

                </p>

              </div>

            </div>

            {/* Address */}

            <div className="rounded-3xl bg-sky-50 p-6 flex gap-5">

              <MapPin className="text-sky-600 mt-1" />

              <div>

                <h3 className="font-bold text-lg">

                  Office

                </h3>

                <p className="text-gray-600 mt-2">

                  500 S Australian Ave

                  <br />

                  Suite 600

                  <br />

                  West Palm Beach, FL 33401

                </p>

              </div>

            </div>

            {/* Hours */}

            <div className="rounded-3xl bg-sky-600 text-white p-6">

              <div className="flex gap-3">

                <Clock />

                <h3 className="font-bold text-lg">

                  Business Hours

                </h3>

              </div>

              <div className="mt-6 space-y-2">

                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>

                <p>Saturday: 9:00 AM - 3:00 PM</p>

                <p>Sunday: By Appointment</p>

              </div>

            </div>

          </motion.div>

          {/* FORM */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-3xl shadow-xl border border-gray-100 p-10"
          >

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >

              <div className="grid md:grid-cols-2 gap-6">

                <div>

                  <input
                    {...register("name")}
                    placeholder="Full Name"
                    className="w-full rounded-xl border p-4 outline-none focus:border-sky-600"
                  />

                  <p className="text-red-500 text-sm mt-2">

                    {errors.name?.message}

                  </p>

                </div>

                <div>

                  <input
                    {...register("phone")}
                    placeholder="Phone Number"
                    className="w-full rounded-xl border p-4 outline-none focus:border-sky-600"
                  />

                  <p className="text-red-500 text-sm mt-2">

                    {errors.phone?.message}

                  </p>

                </div>

              </div>

              <input
                {...register("email")}
                placeholder="Email Address"
                className="w-full rounded-xl border p-4 outline-none focus:border-sky-600"
              />

              <p className="text-red-500 text-sm">

                {errors.email?.message}

              </p>

              <input
                {...register("subject")}
                placeholder="Subject"
                className="w-full rounded-xl border p-4 outline-none focus:border-sky-600"
              />

              <p className="text-red-500 text-sm">

                {errors.subject?.message}

              </p>

              <textarea
                rows={6}
                {...register("message")}
                placeholder="Tell us about your care needs..."
                className="w-full rounded-xl border p-4 outline-none focus:border-sky-600"
              />

              <p className="text-red-500 text-sm">

                {errors.message?.message}

              </p>

              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-xl bg-sky-600 px-8 py-4 text-white font-semibold transition hover:bg-sky-700"
              >

                <Send size={18} />

                Send Message

              </button>

            </form>

          </motion.div>

        </div>

        {/* Google Map */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-3xl shadow-xl"
        >

          <iframe
            src="https://www.google.com/maps?q=500+S+Australian+Ave+Suite+600+West+Palm+Beach,+FL+33401&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            className="border-0"
          />

        </motion.div>

      </div>

    </section>
  );
}