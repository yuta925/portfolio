"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { axisCards } from "../data/portfolioData";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">プロフィール</h2>
            <p className="text-lg text-foreground/75 leading-relaxed">
              情報工学を専攻し、研究で培った分析力を実務と個人開発に接続しながら、
              ユーザー価値につながるWeb / モバイルプロダクト開発に取り組んでいます。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {axisCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.45, delay: 0.08 * index }}
                className="rounded-2xl bg-background border border-foreground/10 p-6"
              >
                <p className="text-xs tracking-wider text-foreground/55 mb-2">AXIS 0{index + 1}</p>
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{card.detail}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
