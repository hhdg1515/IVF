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
    { value: 'all', labelEn: 'All', labelZh: '全部' },
    { value: 'patient-stories', labelEn: 'Stories', labelZh: '故事' },
    { value: 'clinical', labelEn: 'Insights', labelZh: '洞见' },
    { value: 'nutrition', labelEn: 'Nutrition', labelZh: '营养指导' },
    { value: 'mind-body', labelEn: 'Wellness', labelZh: '身心健康' }
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
            <span className="font-serif italic text-3xl text-[#c86b79] md:text-4xl">
              {isEn ? 'IVY Fertility Insights' : 'IVY 生育资讯'}
            </span>
            <h1 className="mt-5 text-[44px] leading-tight text-[#2f2b33] md:text-[52px]">
              {isEn
                ? 'Stories, insights, and guidance'
                : '故事、洞见与指引'}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-[#5a555d]">
              {isEn
                ? 'Real patient stories and expert wellness guidance from our care team.'
                : '护理团队带来的真实故事与专业健康指引。'}
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
                    </div>
                    <div className="flex flex-1 flex-col px-7 py-7">
                      <h3 className="text-[14px] font-medium leading-tight text-[#2f2b33] transition duration-300 group-hover:text-[#a63655]">
                        {isEn ? post.titleEn : post.titleZh}
                      </h3>
                      <p
                        className="mt-4 flex-1 text-[14px] leading-relaxed text-[#5a555d]"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          lineHeight: '1.5',
                          minHeight: '3em',
                          maxHeight: '3em',
                        }}
                      >
                        {isEn ? post.excerptEn : post.excerptZh}
                      </p>
                      <div className="mt-auto pt-6 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#a63655]">
                        <span>{isEn ? 'View' : '查看'}</span>
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
          <span className="font-serif italic text-3xl text-[#c86b79]">
            {isEn ? 'Ready to begin?' : '准备好开始了吗?'}
          </span>
          <h2 className="text-[38px] leading-tight text-[#2f2b33]">
            {isEn ? 'Schedule your appointment' : '预约您的到诊时间'}
          </h2>
          <p className="max-w-xl text-[16px] leading-relaxed text-[#5a555d]">
            {isEn
              ? 'Our team reviews your history and creates a personalized fertility plan.'
              : '团队将梳理您的病史并制定个性化生育方案。'}
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
