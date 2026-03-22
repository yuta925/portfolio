"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BriefcaseBusiness, HeartHandshake } from "lucide-react";
import { jobFocus } from "../data/portfolioData";

export default function JobFocusSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="job-focus" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-foreground/15 bg-foreground/5 text-sm text-foreground/70 mb-4">
              <BriefcaseBusiness size={16} />
              就活軸
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">志望と価値観</h2>
            <p className="text-foreground/70 leading-relaxed">{jobFocus.summary}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {jobFocus.categories.map((category, index) => (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 18 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
                }
                transition={{ duration: 0.45, delay: 0.1 * index }}
                className="rounded-2xl border border-foreground/10 bg-foreground/5 p-6"
              >
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <HeartHandshake size={18} className="text-foreground/70" />
                  {category.title}
                </h3>
                <ul className="space-y-2 text-sm text-foreground/70 leading-relaxed">
                  {category.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-foreground/40">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
