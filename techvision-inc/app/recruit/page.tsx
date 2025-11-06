"use client";

import { motion } from "framer-motion";

const positions = [
  {
    id: 1,
    title: "Senior AR/VR Engineer",
    department: "Engineering",
    location: "San Francisco / Remote",
    type: "Full-time"
  },
  {
    id: 2,
    title: "Product Designer - Immersive Experiences",
    department: "Design",
    location: "New York / Remote",
    type: "Full-time"
  },
  {
    id: 3,
    title: "Machine Learning Research Scientist",
    department: "Research",
    location: "Tokyo / Remote",
    type: "Full-time"
  },
  {
    id: 4,
    title: "Creative Director",
    department: "Creative",
    location: "London / Hybrid",
    type: "Full-time"
  },
  {
    id: 5,
    title: "Backend Engineer - Cloud Infrastructure",
    department: "Engineering",
    location: "Berlin / Remote",
    type: "Full-time"
  }
];

const benefits = [
  {
    title: "Innovation First",
    description: "Work on cutting-edge technology that shapes the future of human-computer interaction"
  },
  {
    title: "Global Impact",
    description: "Your work reaches millions of users worldwide through our immersive platforms"
  },
  {
    title: "Creative Freedom",
    description: "Experiment, innovate, and bring your boldest ideas to life"
  },
  {
    title: "Growth Culture",
    description: "Continuous learning opportunities with access to the latest tech and conferences"
  },
  {
    title: "Work-Life Harmony",
    description: "Flexible schedules and remote options to suit your lifestyle"
  },
  {
    title: "Comprehensive Benefits",
    description: "Health, dental, vision, and wellness programs for you and your family"
  }
];

export default function RecruitPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Header */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            Careers
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Join our team of visionaries and help create the next generation of immersive digital experiences.
          </p>
        </motion.div>
      </section>

      {/* Company Culture */}
      <section className="container mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="border-t border-white/20 pt-24"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-12">Our Culture</h2>
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl">
            <div>
              <p className="text-white/70 leading-relaxed mb-6">
                At TechVision Inc., we believe in pushing the boundaries of what&apos;s possible. Our team consists of dreamers, innovators, and builders who are passionate about creating technology that transforms how people interact with the digital world.
              </p>
              <p className="text-white/70 leading-relaxed">
                We foster a culture of experimentation, where failure is seen as a stepping stone to breakthrough innovation. Every voice matters, every idea has potential, and every team member shapes our future.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-light mb-2">Our Mission</h3>
                <p className="text-white/60">To create immersive technologies that blur the line between imagination and reality.</p>
              </div>
              <div>
                <h3 className="text-xl font-light mb-2">Our Values</h3>
                <p className="text-white/60">Innovation, Collaboration, Excellence, and Human-Centered Design guide everything we do.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Open Positions */}
      <section className="container mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-12">Open Positions</h2>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                className="group cursor-pointer border border-white/20 p-6 transition-all duration-300 hover:border-white/40 hover:bg-white/5"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-light mb-2 transition-colors duration-300 group-hover:text-white/90">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-white/60">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <motion.div
                    className="mt-4 md:mt-0 flex items-center text-sm text-white/60 transition-colors duration-300 group-hover:text-white"
                    whileHover={{ x: 5 }}
                  >
                    <span>View Position</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-12">Why Join TechVision</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                className="border-l border-white/20 pl-6"
              >
                <h3 className="text-xl font-light mb-3">{benefit.title}</h3>
                <p className="text-white/60 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="border-t border-white/20 pt-24 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Shape the Future?</h2>
          <p className="text-white/70 mb-12 max-w-2xl mx-auto">
            Even if you don&apos;t see a perfect match, we&apos;re always looking for exceptional talent. Send us your portfolio and tell us how you can contribute to our mission.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-white/20 text-white/80 transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}