"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  Check,
} from "lucide-react";
import { clsx } from "clsx";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: "メール",
    value: "yutarou041@gmail.com",
    href: "mailto:yutarou041@gmail.com",
  },
  {
    icon: Phone,
    label: "電話",
    value: "+81-70-8903-1674",
    href: "tel:+81-70-8903-1674",
  },
  {
    icon: MapPin,
    label: "住所",
    value: "兵庫, 日本",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com/yuta925",
    color: "hover:text-gray-600",
  },
  {
    icon: Twitter,
    name: "Twitter",
    url: "https://twitter.com/uYuta925",
    color: "hover:text-blue-400",
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // シミュレーション: 実際のプロジェクトではサーバーにPOSTする
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("フォームデータ:", data);

    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();

    // 3秒後に成功メッセージを非表示
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

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
    <section id="contact" className="py-20 bg-foreground/5">
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
              お問い合わせ
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              プロジェクトのご相談やご質問がありましたら、お気軽にお声がけください。
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* コンタクトフォーム */}
            <motion.div variants={itemVariants}>
              <div className="bg-background rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">メッセージを送る</h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* 名前 */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      お名前 *
                    </label>
                    <input
                      {...register("name", {
                        required: "お名前を入力してください",
                      })}
                      type="text"
                      id="name"
                      className={clsx(
                        "w-full px-4 py-3 rounded-lg border transition-colors",
                        "bg-background text-foreground",
                        "border-foreground/20 focus:border-foreground/40",
                        "focus:outline-none focus:ring-2 focus:ring-foreground/10",
                        errors.name && "border-red-500"
                      )}
                      placeholder="山田 太郎"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* メールアドレス */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      メールアドレス *
                    </label>
                    <input
                      {...register("email", {
                        required: "メールアドレスを入力してください",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "有効なメールアドレスを入力してください",
                        },
                      })}
                      type="email"
                      id="email"
                      className={clsx(
                        "w-full px-4 py-3 rounded-lg border transition-colors",
                        "bg-background text-foreground",
                        "border-foreground/20 focus:border-foreground/40",
                        "focus:outline-none focus:ring-2 focus:ring-foreground/10",
                        errors.email && "border-red-500"
                      )}
                      placeholder="example@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* 件名 */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      件名 *
                    </label>
                    <input
                      {...register("subject", {
                        required: "件名を入力してください",
                      })}
                      type="text"
                      id="subject"
                      className={clsx(
                        "w-full px-4 py-3 rounded-lg border transition-colors",
                        "bg-background text-foreground",
                        "border-foreground/20 focus:border-foreground/40",
                        "focus:outline-none focus:ring-2 focus:ring-foreground/10",
                        errors.subject && "border-red-500"
                      )}
                      placeholder="プロジェクトのご相談"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* メッセージ */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      メッセージ *
                    </label>
                    <textarea
                      {...register("message", {
                        required: "メッセージを入力してください",
                      })}
                      id="message"
                      rows={6}
                      className={clsx(
                        "w-full px-4 py-3 rounded-lg border transition-colors resize-none",
                        "bg-background text-foreground",
                        "border-foreground/20 focus:border-foreground/40",
                        "focus:outline-none focus:ring-2 focus:ring-foreground/10",
                        errors.message && "border-red-500"
                      )}
                      placeholder="こちらにメッセージを入力してください..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* 送信ボタン */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={clsx(
                      "w-full py-3 px-6 rounded-lg font-medium transition-all duration-300",
                      "flex items-center justify-center gap-2",
                      isSubmitted
                        ? "bg-green-500 text-white"
                        : "bg-foreground text-background hover:bg-foreground/80",
                      isSubmitting && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        送信中...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <Check size={20} />
                        送信完了！
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        メッセージを送信
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* コンタクト情報 */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* 連絡先情報 */}
              <div className="bg-background rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">連絡先情報</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    const content = (
                      <div className="flex items-center gap-4 p-4 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-foreground/10">
                          <Icon size={24} className="text-foreground" />
                        </div>
                        <div>
                          <div className="font-medium">{info.label}</div>
                          <div className="text-foreground/70">{info.value}</div>
                        </div>
                      </div>
                    );

                    return info.href ? (
                      <a key={info.label} href={info.href} className="block">
                        {content}
                      </a>
                    ) : (
                      <div key={info.label}>{content}</div>
                    );
                  })}
                </div>
              </div>

              {/* ソーシャルリンク */}
              <div className="bg-background rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">ソーシャルリンク</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={clsx(
                          "flex items-center justify-center w-12 h-12 rounded-full",
                          "bg-foreground/10 hover:bg-foreground/20 transition-all duration-300",
                          "text-foreground",
                          social.color
                        )}
                      >
                        <Icon size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* 追加情報 */}
              <div className="bg-background rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">お気軽にどうぞ！</h3>
                <p className="text-foreground/70 leading-relaxed">
                  新しいプロジェクトのご相談、コラボレーションのお話、技術的な質問など、何でもお気軽にお声がけください。通常24時間以内に返信いたします。
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
