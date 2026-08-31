"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/images/gallery/gallery1.png",
    title: "Compassionate Companion Care",
  },
  {
    src: "/images/gallery/gallery2.png",
    title: "Meaningful Conversations",
  },
  {
    src: "/images/gallery/gallery3.png",
    title: "Daily Living Assistance",
  },
  {
    src: "/images/gallery/gallery4.png",
    title: "Supporting Independence",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", close);

    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <section id="gallery" className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-block rounded-full bg-brand-green-pale px-4 py-2 font-medium text-brand-green-dark">
            Gallery
          </span>

          <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
            Moments That Matter
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every interaction is built on compassion, dignity,
            respect, and meaningful companionship.
          </p>

        </motion.div>

        {/* =====================================================
            GALLERY GRID
        ===================================================== */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {images.map((image, index) => (

            <motion.div
              key={image.src}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-xl"
              onClick={() => setSelectedImage(image.src)}
            >

              {/* Image */}

              <div className="relative aspect-[16/10] w-full">

                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* Dark overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Image title */}

              <div className="absolute bottom-6 left-6 right-6 opacity-0 transition duration-500 group-hover:opacity-100">

                <h3 className="font-heading text-2xl font-bold text-white">
                  {image.title}
                </h3>

              </div>

              {/* Expand button */}

              <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">

                <Expand className="text-brand-green" size={20} />

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-8"
            onClick={() => setSelectedImage(null)}
          >

            {/* Close button */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute right-8 top-8 text-white transition hover:text-brand-green-light"
              aria-label="Close gallery"
            >
              <X size={40} />
            </button>

            {/* Image */}

            <motion.div
              initial={{
                scale: 0.8,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 0.8,
              }}
              className="w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >

              <Image
                src={selectedImage}
                alt="Bearing Bear companion care"
                width={1600}
                height={1000}
                className="max-h-[85vh] w-full rounded-3xl object-contain"
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}