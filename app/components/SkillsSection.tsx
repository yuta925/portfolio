"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { clsx } from "clsx";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
      { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-700" },
      { name: "Next.js", level: 80, color: "from-gray-800 to-gray-900" },
      { name: "Tailwind CSS", level: 90, color: "from-teal-500 to-blue-600" },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git", level: 85, color: "from-orange-500 to-red-500" },
      { name: "Docker", level: 70, color: "from-blue-400 to-blue-600" },
      { name: "Figma", level: 80, color: "from-purple-500 to-pink-500" },
      { name: "Node.js", level: 75, color: "from-green-600 to-green-700" },
    ],
  },
];

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

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

  const SkillBar = ({
    skill,
    index,
  }: {
    skill: (typeof skillCategories)[0]["skills"][0];
    index: number;
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6, delay: 0.1 * index }}
        className="space-y-2"
      >
        <div className="flex justify-between items-center">
          <span className="font-medium">{skill.name}</span>
          <span className="text-sm text-foreground/60">{skill.level}%</span>
        </div>
        <div className="w-full bg-foreground/10 rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: 0.2 * index, ease: "easeOut" }}
            className={clsx(
              "h-full rounded-full bg-gradient-to-r",
              skill.color
            )}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-background">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">スキル</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              日々の業務で使用している技術スタックと、その習熟度を紹介します。
            </p>
          </motion.div>

          {/* カテゴリータブ */}
          <motion.div className="flex justify-center" variants={itemVariants}>
            <div className="flex bg-foreground/5 rounded-full p-1">
              {skillCategories.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(index)}
                  className={clsx(
                    "px-6 py-3 rounded-full font-medium transition-all duration-300",
                    activeCategory === index
                      ? "bg-foreground text-background shadow-lg"
                      : "text-foreground/60 hover:text-foreground"
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* スキルグリッド */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* スキルバー */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-6">
                {skillCategories[activeCategory].name} Skills
              </h3>
              <div className="space-y-4">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>

            {/* スキルカード */}
            <div className="grid grid-cols-2 gap-4">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-foreground/5 rounded-lg p-6 text-center border border-foreground/10 hover:border-foreground/20 transition-all duration-300"
                >
                  <div
                    className={clsx(
                      "w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r flex items-center justify-center text-white font-bold text-xl",
                      skill.color
                    )}
                  >
                    {skill.name.charAt(0)}
                  </div>
                  <h4 className="font-semibold mb-2">{skill.name}</h4>
                  <div className="text-sm text-foreground/60">
                    {skill.level}% proficient
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 追加情報 */}
          <motion.div
            variants={itemVariants}
            className="bg-foreground/5 rounded-2xl p-8 text-center"
          >
            <h3 className="text-xl font-bold mb-4">現在学習中</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Python", "Go", "Swift"].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-foreground/10 rounded-full text-sm font-medium border border-foreground/20 hover:border-foreground/40 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
