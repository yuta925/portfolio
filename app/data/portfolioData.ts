export const navigationItems = [
  { name: 'プロフィール', href: '#about' },
  { name: '就活軸', href: '#job-focus' },
  { name: '実績', href: '#highlights' },
  { name: '成果物', href: '#projects' },
  { name: '経歴', href: '#experience' },
  { name: '研究', href: '#research' },
  { name: 'スキル', href: '#skills' },
  { name: 'コンタクト', href: '#contact' },
] as const;

export const heroCtaLinks = {
  github: 'https://github.com/yuta925',
  contact: '#contact',
  resume:
    'mailto:yutarou041@gmail.com?subject=%E5%B1%A5%E6%AD%B4%E6%9B%B8%E9%80%81%E4%BB%98%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87',
} as const;

export const jobFocus = {
  summary:
    '研究・実務・個人開発で得た知見を、ユーザー価値につながるプロダクト改善に還元できる環境を志望しています。',
  categories: [
    {
      title: '希望する業種・業界',
      items: ['自社開発企業', 'Web / モバイルプロダクト領域'],
    },
    {
      title: '志望職種',
      items: [
        'Webエンジニア',
        'モバイルエンジニア',
        'フルスタック寄りの開発職',
      ],
    },
    {
      title: '大事にしている価値観',
      items: [
        'ユーザー価値に向き合える環境',
        'コミュニケーションが活発で成長できるチーム',
        '長期的にプロダクト改善に関われる環境',
      ],
    },
  ],
} as const;

export const achievementHighlights = [
  {
    title: '実務経験',
    metric: '2社',
    role: '業務委託 / インターン',
    outcome: 'データ基盤・Webフロントで改善施策を継続実装',
  },
  {
    title: '研究成果',
    metric: '2件',
    role: '学会・研究会発表',
    outcome: 'DMDを用いたネットワーク拡散解析を発表',
  },
  {
    title: '個人開発',
    metric: '3件',
    role: '企画〜実装〜公開',
    outcome: '就活支援/ポートフォリオなどの実用アプリを開発',
  },
] as const;

export const projectItems = [
  {
    name: 'job-tracker',
    summary: '就活の応募先・選考状況・次アクションを一元管理できるWebアプリ。',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    innovation:
      '選考フェーズを見える化し、漏れや遅延を防ぐためにステータス駆動のUIと絞り込み導線を設計。',
    githubUrl: 'https://github.com/yuta925/job-tracker',
    imagePath: '/job-tracker.webp',
    thumbnailLabel: 'Job Search Progress Dashboard',
  },
  {
    name: 'KnockPrompt',
    summary:
      'AI生成画像を使って遊ぶ、アイスブレイク向けのオンライン伝言ゲーム。',
    technologies: [
      'Next.js',
      'TypeScript',
      'WebSocket',
      'CSS Modules',
      'OpenAI API',
    ],
    innovation:
      'AI画像生成とリアルタイム通信を組み合わせ、会話のきっかけになるゲーム体験をオンラインで成立させた。',
    githubUrl: 'https://github.com/YoshitakaKyougoku/REALRAID_team3/',
    imagePath: '/knockprompt.webp',
    thumbnailLabel: 'AI-powered Online Party Game',
  },
  {
    name: 'Tender',
    summary:
      '旅行先を絞り込むアキネイター形式の質問にスワイプで答えることで、ユーザーに最適な旅行先を提案する旅のマッチングアプリ。',
    technologies: [
      'Flutter',
      'Cloud Functions for Firebase',
      'OpenAI API',
      'Unsplash API',
      'Firebase',
    ],
    innovation:
      'OpenAI API と Unsplash API を活用した旅行先レコメンド機能を実装。加えて、短期間のハッカソンでも完成度を高められるよう、API実装とタスク管理の両面から開発を牽引した。',
    githubUrl: 'https://github.com/team-tender/geek-hackathon',
    imagePath: '/tender.webp',
    thumbnailLabel: 'Personalized Travel Matching App',
  },
] as const;

export const profileKeywords = [
  '情報工学専攻',
  '研究 × 実務 × 個人開発',
  '自社開発志向',
  'ユーザー価値重視',
] as const;

export const axisCards = [
  {
    title: '研究',
    detail:
      'ネットワーク科学とDMDを用いた拡散現象の解析。仮説検証と説明可能性を意識した取り組み。',
  },
  {
    title: '実務',
    detail:
      'データ基盤・Web開発での改善実装。品質と運用負荷の両立を意識して継続的に改善。',
  },
  {
    title: '個人開発',
    detail:
      '課題設定から実装、公開までを短いサイクルで回し、ユーザー目線でプロダクトを磨く。',
  },
] as const;
