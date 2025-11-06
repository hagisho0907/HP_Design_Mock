"use client";

import { motion } from "framer-motion";

const newsItems = [
  {
    id: 1,
    date: "2024.03.15",
    title: "Launching Our Revolutionary AR Platform",
    category: ["Technology", "Innovation"],
    excerpt: "TechVision Inc. unveils a groundbreaking augmented reality platform that transforms how we interact with digital content."
  },
  {
    id: 2,
    date: "2024.03.08",
    title: "Partnership with Global Tech Leaders",
    category: ["Partnership", "Business"],
    excerpt: "Strategic collaboration to accelerate immersive technology adoption across enterprise solutions."
  },
  {
    id: 3,
    date: "2024.02.28",
    title: "Series B Funding Announcement",
    category: ["Funding", "Growth"],
    excerpt: "TechVision Inc. secures $50M in Series B funding to expand our immersive technology solutions."
  },
  {
    id: 4,
    date: "2024.02.15",
    title: "New Office in Silicon Valley",
    category: ["Company", "Expansion"],
    excerpt: "Opening our fourth global office to better serve our North American clients and partners."
  },
  {
    id: 5,
    date: "2024.02.01",
    title: "Award for Best Immersive Experience",
    category: ["Award", "Recognition"],
    excerpt: "Our flagship VR solution wins the prestigious International Digital Innovation Award 2024."
  },
  {
    id: 6,
    date: "2024.01.20",
    title: "Tech Talk: The Future of Mixed Reality",
    category: ["Event", "Technology"],
    excerpt: "Join our CTO as they explore the convergence of physical and digital realities at TechSummit 2024."
  }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            News
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Latest updates and announcements from TechVision Inc.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              <div className="border-t border-white/20 pt-6 transition-all duration-300 hover:border-white/40">
                <time className="text-sm text-white/60">{item.date}</time>
                <h2 className="text-2xl font-light mt-4 mb-3 transition-colors duration-300 group-hover:text-white/90">
                  {item.title}
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.category.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs uppercase tracking-wider text-white/50 border border-white/20 px-3 py-1 rounded-full transition-all duration-300 group-hover:border-white/40 group-hover:text-white/70"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <p className="text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/80">
                  {item.excerpt}
                </p>
                <div className="mt-6 flex items-center text-sm text-white/60 transition-colors duration-300 group-hover:text-white">
                  <span>Read more</span>
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}