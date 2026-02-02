"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Lightbulb, Users, Target } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "クリーンコード",
    description: "保守性が高く、可読性のあるコードを書くことを心がけています。",
  },
  {
    icon: Lightbulb,
    title: "問題解決力",
    description: "複雑な問題を分析し、効率的な解決策を提案します。",
  },
  {
    icon: Users,
    title: "チームワーク",
    description: "チームメンバーとのコミュニケーションを大切にします。",
  },
  {
    icon: Target,
    title: "ユーザー体験",
    description: "ユーザーが使いやすいインターフェースの設計を心がけています。",
  },
];

export default function AboutSection() {
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
    <section id="about" className="py-20 bg-foreground/5">
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
              プロフィール
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Webエンジニア / モバイルエンジニアとして、自社開発でユーザー価値を磨くことを志望しています。
            </p>
          </motion.div>

          {/* メインコンテンツ */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* プロフィール画像エリア */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="w-80 h-80 rounded-2xl bg-gradient-to-br from-foreground/10 to-foreground/20 flex items-center justify-center"
                >
                  <div className="text-6xl text-foreground/40">👨‍💻</div>
                </motion.div>
                {/* フローティングエレメント */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-foreground/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-foreground/30"
                />
              </div>
            </motion.div>

            {/* テキストコンテンツ */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">西岡 優太</h3>
                <p className="text-lg text-foreground/70">
                  Web / モバイル領域のエンジニアとして、ReactやNext.jsを用いた開発に取り組んでいます。
                </p>
                <p className="text-foreground/60">
                  使いやすさと価値提供を重視し、プロダクトの成長に長期で関われる環境を求めています。
                </p>
              </div>

              {/* スキルタグ */}
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Next.js", "Tailwind CSS"].map(
                  (skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-foreground/10 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  )
                )}
              </div>
            </motion.div>
          </div>

          {/* 特徴グリッド */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                  className="bg-background rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-foreground/10 mb-4">
                    <Icon size={24} className="text-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-foreground/60">
                    {feature.description}
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
