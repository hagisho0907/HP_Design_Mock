"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-6">
            Technology
            <br />
            <span className="text-white/60">Simplified</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 leading-relaxed">
            We create minimalist digital solutions that push the boundaries of modern technology while maintaining elegant simplicity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/works"
              className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 text-white/70 hover:text-white transition-colors duration-300"
            >
              Get in Touch →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Innovation",
              description: "Pushing boundaries with cutting-edge technology",
            },
            {
              title: "Minimalism",
              description: "Clean, focused solutions without complexity",
            },
            {
              title: "Excellence",
              description: "Uncompromising quality in every project",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-l border-white/20 pl-6 py-4"
            >
              <h3 className="text-xl font-light mb-2">{item.title}</h3>
              <p className="text-white/60">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to start your project?
          </h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors duration-300"
          >
            Let&apos;s Talk
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
