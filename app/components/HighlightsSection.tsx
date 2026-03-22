"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { achievementHighlights } from "../data/portfolioData";

export default function HighlightsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="highlights" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">実績サマリー</h2>
            <p className="text-foreground/65 max-w-3xl mx-auto">
              インターン・研究発表・個人開発を、役割と成果が伝わる形で整理しています。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {achievementHighlights.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="rounded-2xl border border-foreground/10 bg-foreground/5 p-6"
              >
                <p className="text-sm text-foreground/60 mb-2">{item.title}</p>
                <p className="text-4xl font-semibold mb-4">{item.metric}</p>
                <p className="text-sm font-medium text-foreground/80 mb-2">{item.role}</p>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.outcome}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
