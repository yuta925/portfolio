"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import { clsx } from "clsx";

const projects = [
  {
    id: 1,
    title: "タスク管理アプリ",
    description:
      "ReactとTypeScriptで作成したタスク管理アプリケーション。ドラッグ&ドロップ、リアルタイム同期機能を実装。",
    image: "/api/placeholder/400/300",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Prisma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "Web App",
  },
  {
    id: 2,
    title: "Eコマースサイト",
    description:
      "Vue.jsとNuxt.jsで構築したレスポンシブモダンサイト。決済機能、在庫管理システムを組み込み。",
    image: "/api/placeholder/400/300",
    tech: ["Vue.js", "Nuxt.js", "Vuetify", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "E-commerce",
  },
  {
    id: 3,
    title: "リアルタイムチャット",
    description:
      "Socket.ioとReactで作成したリアルタイムチャットアプリ。ルーム機能、ファイル共有に対応。",
    image: "/api/placeholder/400/300",
    tech: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "Web App",
  },
  {
    id: 4,
    title: "ダッシュボードアプリ",
    description:
      "データ可視化と分析ツールを統合したダッシュボード。Chart.jsとD3.jsでインタラクティブグラフを実装。",
    image: "/api/placeholder/400/300",
    tech: ["React", "Chart.js", "D3.js", "Material-UI", "Python"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "Dashboard",
  },
  {
    id: 5,
    title: "モバイルアプリ",
    description:
      "React Nativeで開発したクロスプラットフォームアプリ。ネイティブコンポーネントとデバイスAPIを活用。",
    image: "/api/placeholder/400/300",
    tech: ["React Native", "TypeScript", "Expo", "Firebase", "Redux"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "Mobile App",
  },
];

const categories = ["All", "Web App", "E-commerce", "Dashboard", "Mobile App"];

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
    <section id="projects" className="py-20 bg-foreground/5">
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
              プロジェクト
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              これまでに手がけたプロジェクトの一部を紹介します。デザインから実装まで、細部にこだわって作成しました。
            </p>
          </motion.div>

          {/* フィルターボタン */}
          <motion.div className="flex justify-center" variants={itemVariants}>
            <div className="flex flex-wrap gap-2 bg-background rounded-full p-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={clsx(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    selectedCategory === category
                      ? "bg-foreground text-background shadow-lg"
                      : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* プロジェクトグリッド */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* プロジェクト画像 */}
                <div className="relative group overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-foreground/10 to-foreground/20 flex items-center justify-center">
                    <div className="text-4xl text-foreground/40">💻</div>
                  </div>
                  {/* ホバーオーバーレイ */}
                  <div className="absolute inset-0 bg-foreground/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-background rounded-full text-foreground hover:bg-foreground/10 transition-colors"
                      >
                        <Eye size={20} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-background rounded-full text-foreground hover:bg-foreground/10 transition-colors"
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* プロジェクト情報 */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="px-2 py-1 bg-foreground/10 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* 技術スタック */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-foreground/5 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* アクションボタン */}
                  <div className="flex gap-2 pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/80 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      ライブデモ
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 border border-foreground/20 rounded-lg hover:border-foreground/40 transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      コード
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
