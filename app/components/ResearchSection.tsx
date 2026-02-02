"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FlaskConical, Presentation, MapPin } from "lucide-react";

const research = {
  theme: "DMDを用いたネットワーク上の流行過程の分析",
  method: "データ駆動型のダイナミクスを捉える手法を用いた解析",
  outcomes: [
    "IA workshop（タイ）でポスター発表",
    "CQ研究会（別府）で発表",
  ],
};

export default function ResearchSection() {
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
    <section id="research" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">研究</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              ネットワーク科学×データ駆動解析に関する研究内容と成果をまとめています。
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-foreground/5 rounded-2xl p-8 shadow-lg"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <div className="flex items-start gap-3">
                  <FlaskConical className="text-foreground mt-1" size={20} />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">テーマ</h3>
                    <p className="text-foreground/70">{research.theme}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FlaskConical className="text-foreground mt-1" size={20} />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">手法</h3>
                    <p className="text-foreground/70">{research.method}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Presentation size={18} className="text-foreground" />
                  <h3 className="text-lg font-semibold">成果</h3>
                </div>
                <ul className="space-y-2">
                  {research.outcomes.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-foreground/70 flex items-start gap-2"
                    >
                      <span className="text-foreground/40 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <MapPin size={16} />
                  <span>発表実績あり</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
