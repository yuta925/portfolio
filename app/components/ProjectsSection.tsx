"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* セクションタイトル */}
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              プロジェクト
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              公開可能な実プロジェクトを整理中です。準備が整い次第、詳細を掲載します。
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-background rounded-2xl p-8 shadow-lg text-center space-y-4"
          >
            <div className="text-5xl">🛠️</div>
            <h3 className="text-2xl font-bold">現在準備中</h3>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              公開可能な実プロジェクトを整理中です。公開準備が整い次第、こちらに掲載します。
            </p>
            <a
              href="https://github.com/yuta925"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/80 transition-colors text-sm font-medium"
            >
              <Github size={18} />
              GitHubを見る
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
