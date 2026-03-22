"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import { clsx } from "clsx";
import Image from "next/image";
import { projectItems } from "../data/portfolioData";

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = projectItems.length - 1;

  const moveSlide = (direction: "prev" | "next") => {
    setCurrentIndex((prev) => {
      if (direction === "prev") {
        return prev === 0 ? maxIndex : prev - 1;
      }
      return prev === maxIndex ? 0 : prev + 1;
    });
  };

  return (
    <section id="projects" className="py-20 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">成果物</h2>
            <p className="text-foreground/65 max-w-3xl mx-auto">
              課題設定から実装までを行ったプロジェクトを、技術選定と工夫点まで確認できる形式で掲載しています。
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <motion.div
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              className="flex"
            >
              {projectItems.map((project) => (
                <article
                  key={project.name}
                  className="w-full shrink-0 rounded-2xl border border-foreground/10 bg-background p-6 md:p-8"
                >
                  <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
                    <div className="lg:col-span-2 relative h-44 sm:h-56 rounded-xl border border-foreground/10 overflow-hidden">
                      <Image
                        src={project.imagePath}
                        alt={`${project.name} のイメージ`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 30vw"
                        className="object-cover"
                        priority={project.name === "job-tracker"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent" />
                      <p className="absolute bottom-3 left-3 right-3 text-xs sm:text-sm text-white/90 leading-relaxed">
                        {project.thumbnailLabel}
                      </p>
                    </div>

                    <div className="lg:col-span-3 space-y-4">
                      <h3 className="text-2xl font-semibold">{project.name}</h3>
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">概要</p>
                        <p className="text-foreground/80 leading-relaxed">{project.summary}</p>
                      </div>

                      <div>
                        <p className="text-sm text-foreground/60 mb-2">使用技術</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-full bg-foreground/10 text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-foreground/60 mb-1">工夫した点</p>
                        <p className="text-foreground/80 leading-relaxed">{project.innovation}</p>
                      </div>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity"
                      >
                        <Github size={18} />
                        GitHubリンク
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {projectItems.map((project, index) => (
                <button
                  key={project.name}
                  onClick={() => setCurrentIndex(index)}
                  className={clsx(
                    "h-2 rounded-full transition-all",
                    currentIndex === index
                      ? "w-8 bg-foreground"
                      : "w-2 bg-foreground/30"
                  )}
                  aria-label={`${project.name}へ移動`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => moveSlide("prev")}
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-foreground/20 hover:border-foreground/40 transition-colors"
                aria-label="前のプロジェクト"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => moveSlide("next")}
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-foreground/20 hover:border-foreground/40 transition-colors"
                aria-label="次のプロジェクト"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
