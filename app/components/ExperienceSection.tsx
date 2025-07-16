"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "株式会社Example",
    position: "シニアフロントエンドエンジニア",
    period: "2022年 - 現在",
    location: "東京, 日本",
    description:
      "新規サービスのフロントエンド開発をリード。React、TypeScript、Next.jsを用いたモダンなWebアプリケーションの設計・開発・保守を担当。",
    achievements: [
      "ユーザー体験の改善によりコンバーション猧30%改善",
      "コンポーネントライブラリの構築により開発効率が40%向上",
      "パフォーマンス最適化でページ読み込み速度が50%改善",
    ],
    technologies: ["React", "TypeScript", "Next.js", "GraphQL", "AWS"],
    url: "https://example.com",
  },
  {
    id: 2,
    company: "株式会社Startup",
    position: "フロントエンドエンジニア",
    period: "2020年 - 2022年",
    location: "東京, 日本",
    description:
      "スタートアップ企業でのフロントエンド開発。限られたリソースの中で、迅速なプロダクト開発とユーザーフィードバックをもとにした改善を実施。",
    achievements: [
      "0からのプロダクト開発でMVPを短期間でリリース",
      "ユーザーインターフェースのデザインシステムを構築",
      "モバイルファーストなレスポンシブデザインを実装",
    ],
    technologies: ["Vue.js", "Nuxt.js", "Vuetify", "Firebase", "Node.js"],
    url: "https://startup.com",
  },
  {
    id: 3,
    company: "フリーランス",
    position: "フリーランスエンジニア",
    period: "2018年 - 2020年",
    location: "リモート",
    description:
      "様々なクライアントとのプロジェクトを通じて幅広い技術スタックを習得。エンドツーエンドのプロジェクトに多数参加し、クライアントとのコミュニケーションスキルを磨く。",
    achievements: [
      "20以上のプロジェクトを成功裏に納品",
      "クライアント満足度95%以上を維持",
      "リピーター率が80%と高い信頼を獲得",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
    url: null,
  },
];

const education = [
  {
    id: 1,
    institution: "関西学院大学",
    degree: "情報工学課程",
    period: "2022年 - 2026年",
    location: "東京, 日本",
    description:
      "コンピューターサイエンス、アルゴリズム、データベース設計などを学習。卒業研究ではWebアプリケーションのユーザビリティについて研究。",
    achievements: [
      "学部全体で成績上位10%を維持",
      "プログラミングコンテストで入賞経験あり",
      "コンピューターサイエンス学会で研究発表",
    ],
  },
];

export default function ExperienceSection() {
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
    <section id="experience" className="py-20 bg-background">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">経歴</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              これまでのキャリアと学習経験を紹介します。各経験で得たスキルと成果をお伝えします。
            </p>
          </motion.div>

          {/* 経歴タイムライン */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-center">仕事経験</h3>
            <div className="relative">
              {/* タイムラインライン */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-foreground/20" />

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                    }
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* タイムラインポイント */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-foreground rounded-full border-4 border-background shadow-lg z-10" />

                    {/* コンテンツカード */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                        index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                      }`}
                    >
                      <div className="bg-foreground/5 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h4 className="text-xl font-bold mb-1">
                              {exp.position}
                            </h4>
                            <div className="flex items-center gap-2 text-lg font-semibold text-foreground/80 mb-2">
                              <span>{exp.company}</span>
                              {exp.url && (
                                <a
                                  href={exp.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-foreground/60 hover:text-foreground transition-colors"
                                >
                                  <ExternalLink size={16} />
                                </a>
                              )}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-foreground/60 mb-3">
                              <div className="flex items-center gap-1">
                                <Calendar size={16} />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin size={16} />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-foreground/70 mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* 成果 */}
                        <div className="mb-4">
                          <h5 className="font-semibold mb-2">主な成果:</h5>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-foreground/70 flex items-start gap-2"
                              >
                                <span className="text-foreground/40 mt-1">
                                  •
                                </span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 技術スタック */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-foreground/10 rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 学歴セクション */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-center">学歴</h3>
            <div className="max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-foreground/5 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-1">
                        {edu.institution}
                      </h4>
                      <div className="text-lg font-semibold text-foreground/80 mb-2">
                        {edu.degree}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-foreground/60 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <h5 className="font-semibold mb-2">主な成果:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-foreground/70 flex items-start gap-2"
                        >
                          <span className="text-foreground/40 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
