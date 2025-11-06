'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/lib/context'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { blogPosts as blogPostsData } from '@/lib/blog-data'

type BlogCategory = 'all' | 'patient-stories' | 'clinical' | 'nutrition' | 'mind-body'

const blogPosts = Object.values(blogPostsData).map(post => ({
  ...post,
  category: post.category as BlogCategory
})) as Array<{
  slug: string
  titleEn: string
  titleZh: string
  excerptEn: string
  excerptZh: string
  category: BlogCategory
  categoryLabelEn: string
  categoryLabelZh: string
  image: string
  dateEn: string
  dateZh: string
  readTimeEn: string
  readTimeZh: string
}>

export default function BlogPage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('all')

  const categories: Array<{ value: BlogCategory; labelEn: string; labelZh: string }> = [
    { value: 'all', labelEn: 'All Posts', labelZh: '全部文章' },
    { value: 'patient-stories', labelEn: 'Patient Stories', labelZh: '患者故事' },
    { value: 'clinical', labelEn: 'Clinical Insights', labelZh: '临床洞见' },
    { value: 'nutrition', labelEn: 'Nutrition', labelZh: '营养指导' },
    { value: 'mind-body', labelEn: 'Mind-Body', labelZh: '身心健康' }
  ]

  const filteredPosts =
    activeCategory === 'all'
      ? blogPosts
      : blogPosts.filter(post => post.category === activeCategory)

  return (
    <main className="bg-[#fdf7f2]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f7ebe5] via-[#f3e0d8] to-[#f7ebe5] py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(166,54,85,0.08),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(200,107,121,0.12),_transparent_55%)]" />

        <div className="relative mx-auto max-w-5xl px-4 text-center lg:px-0">
          <ScrollInView>
            <span className="font-script text-3xl text-[#c86b79] md:text-4xl">
              {isEn ? 'IVY Fertility Insights' : 'IVY 生育资讯'}
            </span>
            <h1 className="mt-5 text-[44px] leading-tight text-[#2f2b33] md:text-[52px]">
              {isEn
                ? 'Stories, insights, and guidance for your fertility journey'
                : '为您的生育之旅提供故事、洞见与指导'}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-[#5a555d]">
              {isEn
                ? 'Real patient experiences, evidence-based clinical advice, and whole-person wellness tips from our team of reproductive specialists, nutritionists, and counselors.'
                : '来自我们的生殖专家、营养师与咨询师团队的真实患者经历、循证临床建议与全人健康贴士。'}
            </p>
          </ScrollInView>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(({ value, labelEn, labelZh }) => (
                <button
                  key={value}
                  onClick={() => setActiveCategory(value)}
                  className={`rounded-sm px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] transition duration-300 ${
                    activeCategory === value
                      ? 'bg-[#a63655] text-white shadow-[0_6px_16px_rgba(166,54,85,0.28)]'
                      : 'bg-[#f7eee7] text-[#5a555d] hover:bg-[#f3e6dd]'
                  }`}
                >
                  {isEn ? labelEn : labelZh}
                </button>
              ))}
            </div>
          </ScrollInView>
        </div>
      </section>

      <section className="bg-[#fdf7f2] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, idx) => (
              <ScrollInView key={post.slug} delay={idx * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <Card className="flex h-full flex-col overflow-hidden">
                    <div className="relative h-56 w-full overflow-hidden">
                      <img
                        src={post.image}
                        alt={isEn ? post.titleEn : post.titleZh}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute left-4 top-4">
                        <span className="rounded-sm bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#a63655] shadow-lg backdrop-blur">
                          {isEn ? post.categoryLabelEn : post.categoryLabelZh}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col px-7 py-7">
                      <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-[#8b858d]">
                        <span>{isEn ? post.dateEn : post.dateZh}</span>
                        <span className="h-1 w-1 rounded-full bg-[#c86b79]" />
                        <span>{isEn ? post.readTimeEn : post.readTimeZh}</span>
                      </div>
                      <h3 className="text-[22px] leading-tight text-[#2f2b33] transition duration-300 group-hover:text-[#a63655]">
                        {isEn ? post.titleEn : post.titleZh}
                      </h3>
                      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-[#5a555d]">
                        {isEn ? post.excerptEn : post.excerptZh}
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#a63655]">
                        <span>{isEn ? 'Read More' : '阅读全文'}</span>
                        <svg
                          className="h-4 w-4 transition duration-300 group-hover:translate-x-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </Card>
                </Link>
              </ScrollInView>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-[17px] text-[#5a555d]">
                {isEn
                  ? 'No posts found in this category yet.'
                  : '此分类暂无文章。'}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#f7ebe5] py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-script text-3xl text-[#c86b79]">
            {isEn ? 'Ready to begin?' : '准备好开始了吗?'}
          </span>
          <h2 className="text-[38px] leading-tight text-[#2f2b33]">
            {isEn
              ? 'Schedule your complimentary consultation'
              : '预约您的免费咨询'}
          </h2>
          <p className="max-w-xl text-[16px] leading-relaxed text-[#5a555d]">
            {isEn
              ? 'Let our patient concierge team review your history, answer your questions, and design a fertility plan tailored to your needs.'
              : '让我们的患者礼宾团队梳理您的病史、解答疑问,并为您量身定制生育计划。'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {isEn ? 'Book Consultation' : '预约咨询'}
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">
                {isEn ? 'Explore Services' : '探索服务'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
