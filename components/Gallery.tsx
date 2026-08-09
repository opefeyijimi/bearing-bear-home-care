"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/images/gallery/gallery1.jpg",
    title: "Compassionate Companion Care",
  },
  {
    src: "/images/gallery/gallery2.jpg",
    title: "Meaningful Conversations",
  },
  {
    src: "/images/gallery/gallery3.jpg",
    title: "Daily Living Assistance",
  },
  {
    src: "/images/gallery/gallery4.jpg",
    title: "Supporting Independence",
  },
  {
    src: "/images/gallery/gallery5.jpg",
    title: "Quality Time Together",
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

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="inline-block rounded-full bg-sky-100 px-4 py-2 text-sky-700 font-medium">

            Gallery

          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold">

            Moments That Matter

          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">

            Every interaction is built on compassion, dignity,
            respect, and meaningful companionship.

          </p>

        </motion.div>

        {/* Gallery */}

        <div className="grid mt-16 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {images.map((image, index) => (

            <motion.div
              key={image.src}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * .1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >

              <Image
                src={image.src}
                alt={image.title}
                width={600}
                height={700}
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="absolute bottom-6 left-6 right-6 opacity-0 transition duration-500 group-hover:opacity-100">

                <h3 className="text-white text-2xl font-bold">

                  {image.title}

                </h3>

              </div>

              <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition">

                <Expand className="text-sky-600" />

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* Lightbox */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-8"
          >

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white"
            >
              <X size={40} />
            </button>

            <motion.div
              initial={{
                scale: .8,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: .8,
              }}
              className="max-w-5xl w-full"
            >

              <Image
                src={selectedImage}
                alt="Gallery"
                width={1200}
                height={900}
                className="rounded-3xl object-contain w-full max-h-[85vh]"
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}