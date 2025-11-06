"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            Contact
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mb-20">
            Let&apos;s create something extraordinary together. Reach out to discuss your vision for immersive digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-wider text-white/60 mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 transition-colors duration-300 focus:border-white focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm uppercase tracking-wider text-white/60 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 transition-colors duration-300 focus:border-white focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm uppercase tracking-wider text-white/60 mb-3">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 transition-colors duration-300 focus:border-white focus:outline-none"
                  placeholder="Your company (optional)"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm uppercase tracking-wider text-white/60 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 transition-colors duration-300 focus:border-white focus:outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/20 text-white/80 transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Company Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl font-light mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-white/60 mb-2">Email</h3>
                  <a href="mailto:hello@techvision.inc" className="text-white/80 hover:text-white transition-colors">
                    hello@techvision.inc
                  </a>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-white/60 mb-2">Phone</h3>
                  <a href="tel:+15551234567" className="text-white/80 hover:text-white transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-8">Our Offices</h2>
              <div className="space-y-8">
                <div className="border-l border-white/20 pl-6">
                  <h3 className="text-lg font-light mb-2">San Francisco HQ</h3>
                  <address className="text-white/60 not-italic">
                    123 Innovation Drive<br />
                    Tech District<br />
                    San Francisco, CA 94107<br />
                    United States
                  </address>
                </div>
                <div className="border-l border-white/20 pl-6">
                  <h3 className="text-lg font-light mb-2">Tokyo Office</h3>
                  <address className="text-white/60 not-italic">
                    456 Digital Avenue<br />
                    Shibuya District<br />
                    Tokyo 150-0001<br />
                    Japan
                  </address>
                </div>
                <div className="border-l border-white/20 pl-6">
                  <h3 className="text-lg font-light mb-2">London Office</h3>
                  <address className="text-white/60 not-italic">
                    789 Tech Square<br />
                    Shoreditch<br />
                    London EC2A 3EJ<br />
                    United Kingdom
                  </address>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">Follow Us</h3>
              <div className="flex gap-6">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}