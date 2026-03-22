"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: '株式会社クイックネットワーク（SellCa）',
    position: 'ソフトウェアエンジニア（長期インターン）',
    period: '2023/10 - 2026/02',
    location: '神戸市',
    description:
      '自社サービス『SellCa』における開発全般に従事。開発部だけでなく、マーケティング部やカスタマーサクセス部など他部署とも連携しながら、課題のヒアリング、実装方針の検討、開発、テストまでを一気通貫で担当。',
    achievements: [
      '査定士向けモバイルアプリケーションの開発・テスト実装を担当',
      'LP / CMS のデザイン改修や UI 改善を通じて、運用効率とユーザー体験を向上',
      '保守・運用に加えて、SEO 改善を目的としたリファクタリングやフロントエンド改善を実施',
    ],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'CSS',
      'Git',
    ],
    url: null,
  },
  {
    id: 2,
    company: 'SalesBrain',
    position: 'ソフトウェアエンジニア（業務委託）',
    period: '2025/09 - 2026/01',
    location: 'リモート',
    description:
      '企業データ基盤に関わる開発に従事。スクレイピングおよびデータ正規化パイプラインの改善、住所・電話番号などのクレンジング、ログ整備や例外処理の強化を通じて、データ品質と運用安定性の向上に取り組んでいる。',
    achievements: [
      '企業情報スクレイピングのカバレッジと安定性を改善',
      '電話番号・住所・資本金・経験年数などの正規化ロジックを改善し、データ品質を向上',
      'ログ整備・並列化・例外処理の強化により、運用時の調査コストと手戻りを削減',
    ],
    technologies: ['TypeScript', 'Node.js', 'Docker', 'SQL', 'AWS'],
    url: null,
  },
  {
    id: 3,
    company: '個人開発',
    position: 'Webアプリ / AIアプリ開発',
    period: '2024/01 - 現在',
    location: '自宅',
    description:
      'Next.js / TypeScript を中心に、業務効率化や日常課題の解決をテーマとした Web アプリケーションを継続的に開発。Google Calendar 自動登録アプリや就活管理アプリなど、実利用を意識したプロダクト設計・実装を行っている。',
    achievements: [
      '認証、投稿、コメント、Kanban UI などを含むアプリケーションを設計から実装まで一貫して開発',
      'OpenAI API や Google API などの外部サービスと連携した機能を実装',
      'Docker や DB 設計を含め、デプロイ・運用を見据えた構成でプロトタイプを継続的に開発',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Go',
      'MySQL',
      'PostgreSQL',
      'Docker',
      'OpenAI API',
    ],
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
