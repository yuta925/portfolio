"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Presentation, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "業務委託 / インターン",
    description:
      "Quick Network株式会社にて企業データ基盤の開発に従事。スクレイピング/正規化/クレンジングを担当。",
  },
  {
    icon: Presentation,
    title: "研究発表",
    description:
      "DMDを用いたネットワーク上の流行過程分析でポスター発表（IA workshop in タイ）。",
  },
  {
    icon: GraduationCap,
    title: "研究会発表",
    description:
      "CQ研究会（別府）にて研究発表。データ駆動のダイナミクス解析手法を紹介。",
  },
];

export default function HighlightsSection() {
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
    <section id="highlights" className="py-20 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ハイライト
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              就活向けに、重要な実績と活動を簡潔にまとめています。
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                  className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-foreground/10 mb-4">
                    <Icon size={24} className="text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
