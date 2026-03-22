"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, Mail } from "lucide-react";
import { heroCtaLinks, profileKeywords } from "../data/portfolioData";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 hero-surface" />

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="inline-flex items-center rounded-full border border-foreground/15 bg-background/70 px-3 py-1 text-xs sm:text-sm text-foreground/75 mb-6">
            Web / Mobile Engineer Candidate
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            西岡 優太
          </h1>

          <p className="mt-4 text-xl sm:text-2xl text-foreground/80 leading-relaxed">
            情報工学専攻 / 研究 × 実務 × 個人開発
            <br className="hidden sm:block" />
            自社開発志向・ユーザー価値重視
          </p>

          <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
            {profileKeywords.map((keyword) => (
              <span
                key={keyword}
                className="px-3 py-1.5 rounded-full text-sm border border-foreground/15 bg-background/70"
              >
                {keyword}
              </span>
            ))}
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
            >
              成果物を見る
              <ArrowRight size={18} />
            </button>
            <a
              href={heroCtaLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-foreground/20 hover:border-foreground/35 transition-colors"
            >
              <Github size={18} />
              GitHubを見る
            </a>
            <a
              href={heroCtaLinks.resume}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-foreground/20 hover:border-foreground/35 transition-colors"
            >
              <FileText size={18} />
              Resumeの相談
            </a>
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="mt-4 inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            <Mail size={16} />
            連絡する
          </button>
        </motion.div>
      </div>
    </section>
  );
}
