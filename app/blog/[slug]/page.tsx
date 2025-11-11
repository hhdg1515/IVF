'use client'

import Link from 'next/link'
import { use } from 'react'
import { useLanguage } from '@/lib/context'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/blog-data'

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'
  const { slug } = use(params)
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  const relatedPosts = Object.values(blogPosts)
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2)

  return (
    <main className="bg-[#fdf7f2]">
      <article>
        <header className="relative overflow-hidden bg-gradient-to-br from-[#f7ebe5] via-[#f3e0d8] to-[#f7ebe5] py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(166,54,85,0.08),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(200,107,121,0.12),_transparent_55%)]" />

          <div className="relative mx-auto max-w-4xl px-4 lg:px-0">
            <ScrollInView>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a63655] transition hover:text-[#c86b79]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                {isEn ? 'Back to Blog' : '返回博客'}
              </Link>

              <h1 className="mt-6 text-[42px] leading-tight text-[#2f2b33] md:text-[52px]">
                {isEn ? post.titleEn : post.titleZh}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-[12px] uppercase tracking-[0.24em] text-[#5a555d]">
                <span>{isEn ? post.authorEn : post.authorZh}</span>
                <span className="h-1 w-1 rounded-full bg-[#c86b79]" />
                <span>{isEn ? post.dateEn : post.dateZh}</span>
                <span className="h-1 w-1 rounded-full bg-[#c86b79]" />
                <span>{isEn ? post.readTimeEn : post.readTimeZh}</span>
              </div>

              <p className="mt-4 text-[13px] italic text-[#8b858d]">
                {isEn ? post.authorTitleEn : post.authorTitleZh}
              </p>
            </ScrollInView>
          </div>
        </header>

        <div className="relative -mt-12 pb-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-0">
            <ScrollInView>
              <div className="overflow-hidden rounded-[24px] shadow-[0_24px_70px_rgba(45,28,36,0.16)]">
                <img
                  src={post.image}
                  alt={isEn ? post.titleEn : post.titleZh}
                  className="h-[400px] w-full object-cover md:h-[500px]"
                />
              </div>
            </ScrollInView>

            <ScrollInView delay={0.2}>
              <div className="mx-auto mt-16 max-w-4xl">
                <div className="space-y-6 text-[16px] leading-relaxed text-[#2f2b33]">
                  <p className="text-[18px] font-medium leading-relaxed text-[#5a555d]">
                      {isEn ? post.excerptEn : post.excerptZh}
                  </p>

                  {post.category === 'patient-stories' && (
                    <div className="space-y-6 mt-12">
                      <h2 className="text-[28px] font-semibold text-[#2f2b33]">
                          {isEn ? 'Our Journey' : '我们的旅程'}
                        </h2>
                        <p>
                          {isEn
                            ? 'This is a real patient success story from IVY Fertility Center. Every fertility journey is unique, and we are honored to have been part of this family\'s path to parenthood.'
                            : '这是来自 IVY 生育中心的真实患者成功故事。每个生育之旅都是独特的,我们很荣幸成为这个家庭通往为人父母之路的一部分。'}
                        </p>
                        <div className="rounded-lg bg-[#f7eee7] p-6">
                          <h3 className="text-[20px] font-semibold text-[#2f2b33]">
                            {isEn ? 'Key Success Factors' : '关键成功因素'}
                          </h3>
                          <ul className="mt-4 space-y-3 text-[15px]">
                            <li className="flex gap-3">
                              <span className="text-[#c86b79]">✓</span>
                              <span>{isEn ? 'Personalized treatment protocol' : '个性化治疗方案'}</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-[#c86b79]">✓</span>
                              <span>{isEn ? 'Integrative whole-person approach' : '整合全人疗法'}</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-[#c86b79]">✓</span>
                              <span>{isEn ? 'Comprehensive support team' : '全方位支持团队'}</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-[#c86b79]">✓</span>
                              <span>{isEn ? 'Emotional and nutritional guidance' : '情绪与营养指导'}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                  {post.category === 'clinical' && (
                    <div className="space-y-6 mt-12">
                        <h2 className="text-[28px] font-semibold text-[#2f2b33]">
                          {isEn ? 'Clinical Overview' : '临床概述'}
                        </h2>
                        <p>
                          {isEn
                            ? 'Preparing your body for IVF treatment involves optimizing nutrition, managing stress, and addressing any underlying health concerns. Our physicians recommend a comprehensive 6-8 week preparation period before starting ovarian stimulation.'
                            : '为 IVF 治疗做好身体准备包括优化营养、管理压力和解决任何潜在健康问题。我们的医生建议在开始卵巢刺激之前进行全面的6-8周准备期。'}
                        </p>
                        <div className="rounded-lg bg-[#f7eee7] p-6">
                          <h3 className="text-[20px] font-semibold text-[#2f2b33]">
                            {isEn ? 'Key Preparation Areas' : '关键准备领域'}
                          </h3>
                          <ul className="mt-4 space-y-3 text-[15px]">
                            <li className="flex gap-3">
                              <span className="text-[#c86b79]">•</span>
                              <span>{isEn ? 'Comprehensive lab testing and baseline assessment' : '全面化验检测与基线评估'}</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-[#c86b79]">•</span>
                              <span>{isEn ? 'Anti-inflammatory nutrition and supplementation' : '抗炎营养与补充剂'}</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-[#c86b79]">•</span>
                              <span>{isEn ? 'Sleep optimization and stress management' : '睡眠优化与压力管理'}</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-[#c86b79]">•</span>
                              <span>{isEn ? 'Environmental toxin reduction' : '减少环境毒素'}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                  {post.category === 'nutrition' && (
                    <div className="space-y-6 mt-12">
                        <h2 className="text-[28px] font-semibold text-[#2f2b33]">
                          {isEn ? 'Nutrition Fundamentals' : '营养基础'}
                        </h2>
                        <p>
                          {isEn
                            ? 'The Fertility Plate is our evidence-based nutritional framework designed to optimize egg quality, support implantation, and create the ideal environment for conception. Our registered dietitians work with each patient to create personalized meal plans.'
                            : '生育力餐盘是我们基于循证的营养框架,旨在优化卵子质量、支持着床并为受孕创造理想环境。我们的注册营养师与每位患者合作制定个性化膳食计划。'}
                        </p>
                        <div className="rounded-lg bg-[#f7eee7] p-6">
                          <h3 className="text-[20px] font-semibold text-[#2f2b33]">
                            {isEn ? 'Essential Nutrients' : '必需营养素'}
                          </h3>
                          <ul className="mt-4 space-y-3 text-[15px]">
                            <li className="flex gap-3">
                              <span className="text-[#c86b79]">•</span>
                              <span>{isEn ? 'Folate (methylfolate) for DNA synthesis' : '叶酸(甲基叶酸)用于DNA合成'}</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-[#c86b79]">•</span>
                              <span>{isEn ? 'Omega-3 fatty acids for inflammation reduction' : 'Omega-3脂肪酸减少炎症'}</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-[#c86b79]">•</span>
                              <span>{isEn ? 'Vitamin D for hormone regulation' : '维生素D用于激素调节'}</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-[#c86b79]">•</span>
                              <span>{isEn ? 'Antioxidants to protect egg quality' : '抗氧化剂保护卵子质量'}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                  {post.category === 'mind-body' && (
                    <div className="space-y-6 mt-12">
                        <h2 className="text-[28px] font-semibold text-[#2f2b33]">
                          {isEn ? 'Mind-Body Connection' : '身心连接'}
                        </h2>
                        <p>
                          {isEn
                            ? 'Fertility treatment is as much an emotional journey as it is a physical one. Our licensed counselors provide evidence-based psychological support to help you manage stress, anxiety, and the emotional ups and downs of treatment.'
                            : '生育治疗既是身体旅程也是情感旅程。我们的执照咨询师提供基于循证的心理支持,帮助您管理压力、焦虑和治疗的情绪起伏。'}
                        </p>
                        <div className="rounded-lg bg-[#f7eee7] p-6">
                          <h3 className="text-[20px] font-semibold text-[#2f2b33]">
                            {isEn ? 'Coping Strategies' : '应对策略'}
                          </h3>
                          <ul className="mt-4 space-y-3 text-[15px]">
                            <li className="flex gap-3">
                              <span className="text-[#c86b79]">•</span>
                              <span>{isEn ? 'Daily mindfulness meditation practice' : '每日正念冥想练习'}</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-[#c86b79]">•</span>
                              <span>{isEn ? 'Cognitive reframing techniques' : '认知重构技巧'}</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-[#c86b79]">•</span>
                              <span>{isEn ? 'Breathing exercises for anxiety' : '焦虑缓解呼吸练习'}</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-[#c86b79]">•</span>
                              <span>{isEn ? 'Support group connections' : '支持小组联系'}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                  <div className="mt-12">
                    <p className="text-[15px] italic text-[#5a555d]">
                      {isEn
                        ? 'Every fertility journey is unique. This content is for educational purposes and should not replace personalized medical advice from your physician.'
                        : '每个生育之旅都是独特的。此内容仅供教育目的,不应取代您医生的个性化医疗建议。'}
                    </p>
                    <p className="mt-4 text-[14px] font-medium text-[#2f2b33]">
                      — {isEn ? post.authorEn : post.authorZh}
                    </p>
                    <p className="text-[13px] text-[#8b858d]">
                      {isEn ? post.authorTitleEn : post.authorTitleZh}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollInView>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-4 lg:px-0">
            <ScrollInView>
              <div className="mb-12 text-center">
                <span className="font-serif italic text-3xl text-[#c86b79]">
                  {isEn ? 'Continue Reading' : '继续阅读'}
                </span>
                <h2 className="mt-3 text-[36px] text-[#2f2b33]">
                  {isEn ? 'Related Articles' : '相关文章'}
                </h2>
              </div>
            </ScrollInView>

            <div className="grid gap-8 md:grid-cols-2">
              {relatedPosts.map((relatedPost, idx) => (
                <ScrollInView key={relatedPost.slug} delay={idx * 0.1}>
                  <Link href={`/blog/${relatedPost.slug}`} className="group block h-full">
                    <Card className="flex h-full flex-col overflow-hidden">
                      <div className="relative h-56 w-full overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={isEn ? relatedPost.titleEn : relatedPost.titleZh}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col px-7 py-7">
                        <span className="text-[11px] uppercase tracking-[0.26em] text-[#8b858d]">
                          {isEn ? relatedPost.categoryLabelEn : relatedPost.categoryLabelZh}
                        </span>
                        <h3 className="mt-3 text-[22px] leading-tight text-[#2f2b33] transition duration-300 group-hover:text-[#a63655]">
                          {isEn ? relatedPost.titleEn : relatedPost.titleZh}
                        </h3>
                        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-[#5a555d]">
                          {isEn ? relatedPost.excerptEn : relatedPost.excerptZh}
                        </p>
                      </div>
                    </Card>
                  </Link>
                </ScrollInView>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#f7ebe5] py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-serif italic text-3xl text-[#c86b79]">
            {isEn ? 'Ready to start your journey?' : '准备开始您的旅程吗?'}
          </span>
          <h2 className="text-[38px] leading-tight text-[#2f2b33]">
            {isEn
              ? 'Schedule a complimentary consultation'
              : '预约免费咨询'}
          </h2>
          <p className="max-w-xl text-[16px] leading-relaxed text-[#5a555d]">
            {isEn
              ? 'Our patient concierge team is here to answer your questions and design a personalized fertility plan for you.'
              : '我们的患者礼宾团队随时为您解答疑问,并为您设计个性化生育计划。'}
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              {isEn ? 'Book Consultation' : '预约咨询'}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
