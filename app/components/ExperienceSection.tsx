"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Quick Network株式会社（SellCa）",
    position: "ソフトウェアエンジニア（業務委託 / インターン）",
    period: "2023/10 - 現在",
    location: "リモート",
    description:
      "企業データ基盤に関わる開発に従事。スクレイピング/正規化パイプラインの改善や、住所・電話番号などのデータクレンジング、運用改善を担当。",
    achievements: [
      "データ正規化（電話番号・住所など）の品質向上と欠損/重複の削減",
      "スクレイピングのカバレッジ/安定性向上（例外処理・ログ整備・正規化ルール追加）",
      "運用フローのドキュメント化と手戻り削減",
    ],
    technologies: ["TypeScript", "Node.js", "Docker", "SQL", "AWS"],
    url: null,
  },
  {
    id: 2,
    company: "SalesBrain",
    position: "ソフトウェアエンジニア（業務委託）",
    period: "—",
    location: "リモート",
    description:
      "Next.js/TypeScript を中心としたWeb開発に従事。コンテンツ基盤（CMS）連携やUI改善、モノレポの保守（依存関係更新・CI改善）などを担当。",
    achievements: [
      "Next.js / Node のアップデートに伴うビルド・Lint・CIの整備",
      "コンテンツ取得/表示ロジックの改善（型安全性の向上・例外系の強化）",
      "コンポーネントの再利用性向上と実装の標準化",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "pnpm"],
    url: null,
  },
  {
    id: 3,
    company: "個人開発",
    position: "Webアプリ開発",
    period: "—",
    location: "リモート",
    description:
      "生活習慣改善/コミュニティ活性化などをテーマに、Next.js/TypeScript・Go・MySQL・Docker などでプロトタイピングと機能開発を継続。",
    achievements: [
      "設計→実装→運用まで一気通貫での開発（認証、投稿、コメント等）",
      "外部API連携（例：画像/コンテンツ生成系）の検証と実装",
      "デプロイ・運用を見据えた構成（Docker/環境変数/ログ）",
    ],
    technologies: ["Next.js", "TypeScript", "Go", "MySQL", "Docker"],
    url: null,
  },
];

const education = [
  {
    id: 1,
    institution: "関西学院大学",
    degree: "情報工学課程（学士）",
    period: "2022年 - 2026年（予定）",
    location: "兵庫, 日本",
    description:
      "ネットワーク科学・データ駆動解析を中心に学習。卒業研究では、ネットワーク上の拡散/流行過程（nSIR等）に対して Dynamic Mode Decomposition（DMD）を用いた解析・予測・解釈に取り組む。",
    achievements: [
      "SBM生成ネットワーク上の流行シミュレーションと解析パイプラインを構築",
      "DMDの固有値/モードの解釈を通じたクラスタ構造とダイナミクスの関係分析",
      "国内・国外の学会での研究発表・原稿作成（ポスター/論文）",
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
