"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Nexus Reality",
    description: "An immersive AR experience that bridges physical and digital retail environments",
    category: "Augmented Reality",
    year: "2024",
    imageUrl: "https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Nexus+Reality"
  },
  {
    id: 2,
    title: "Quantum Interface",
    description: "Revolutionary gesture-based control system for next-generation computing",
    category: "Human Interface",
    year: "2024",
    imageUrl: "https://via.placeholder.com/800x600/0a0a0a/ffffff?text=Quantum+Interface"
  },
  {
    id: 3,
    title: "Ethereal Spaces",
    description: "Virtual architecture platform for collaborative spatial design",
    category: "Virtual Reality",
    year: "2023",
    imageUrl: "https://via.placeholder.com/800x600/2a2a2a/ffffff?text=Ethereal+Spaces"
  },
  {
    id: 4,
    title: "Neural Canvas",
    description: "AI-powered creative tool that transforms thoughts into visual art",
    category: "Artificial Intelligence",
    year: "2023",
    imageUrl: "https://via.placeholder.com/800x600/151515/ffffff?text=Neural+Canvas"
  },
  {
    id: 5,
    title: "Horizon OS",
    description: "Spatial operating system designed for mixed reality environments",
    category: "Operating System",
    year: "2023",
    imageUrl: "https://via.placeholder.com/800x600/0f0f0f/ffffff?text=Horizon+OS"
  },
  {
    id: 6,
    title: "Echo Mind",
    description: "Biometric-driven personalization engine for immersive experiences",
    category: "Machine Learning",
    year: "2023",
    imageUrl: "https://via.placeholder.com/800x600/1f1f1f/ffffff?text=Echo+Mind"
  }
];

export default function WorksPage() {
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
            Works
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Explore our portfolio of immersive digital experiences and cutting-edge technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-white/5 aspect-[4/3] mb-6">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-light transition-colors duration-300 group-hover:text-white/90">
                    {project.title}
                  </h3>
                  <span className="text-sm text-white/50">{project.year}</span>
                </div>
                
                <p className="text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/80">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-white/40 uppercase tracking-wider">
                    {project.category}
                  </span>
                  
                  <motion.div
                    className="flex items-center text-sm text-white/60 transition-colors duration-300 group-hover:text-white"
                    whileHover={{ x: 5 }}
                  >
                    <span>View Project</span>
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
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}