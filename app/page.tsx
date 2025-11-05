'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { SectionWithNumber } from '@/components/ui/SectionWithNumber'

type CopyBlock = {
  titleEn: string
  titleZh: string
  descEn: string
  descZh: string
}

const methodSteps: Array<CopyBlock & { labelEn: string; labelZh: string }> = [
  {
    labelEn: 'Step 01',
    labelZh: '步骤 01',
    titleEn: 'Remove fertility threats',
    titleZh: '排除生育风险',
    descEn:
      'Detailed diagnostics uncover hormonal, metabolic, and lifestyle factors that may be impacting your fertility. We design clear, targeted actions to remove each obstacle.',
    descZh:
      '通过详细的诊断找出影响您生育力的激素、代谢和生活方式因素，并针对每个障碍制定明确的行动方案。'
  },
  {
    labelEn: 'Step 02',
    labelZh: '步骤 02',
    titleEn: 'Nourish your whole self',
    titleZh: '滋养您的身心',
    descEn:
      'Medical treatment is paired with evidence-backed nutrition, mindfulness, and restorative techniques so your body is primed for conception.',
    descZh:
      '我们将医学治疗与循证营养、正念与身心调养结合，让您的身体为受孕做好充分准备。'
  },
  {
    labelEn: 'Step 03',
    labelZh: '步骤 03',
    titleEn: 'Sustain success together',
    titleZh: '携手巩固成果',
    descEn:
      'Your care team stays by your side with close monitoring, emotional support, and adjustments through pregnancy confirmation and beyond.',
    descZh:
      '从治疗到验孕成功，您的护理团队全程陪伴，持续监测、提供情绪支持，并根据需要调整方案。'
  }
]

const pillarHighlights: CopyBlock[] = [
  {
    titleEn: 'Board-certified fertility specialists',
    titleZh: '经认证的生育专科医生',
    descEn:
      'Our physicians blend reproductive endocrinology expertise with integrative medicine to create tailored protocols.',
    descZh:
      '我们的医生结合生殖内分泌与整合医学经验，为您定制个性化治疗方案。'
  },
  {
    titleEn: 'In-house embryology laboratory',
    titleZh: '自有胚胎实验室',
    descEn:
      'State-of-the-art laboratory, vitrification technology, andrology suite, and genetic testing under one roof.',
    descZh:
      '先进的实验室、玻璃化冷冻技术、男科实验室与遗传检测全部在中心内完成。'
  },
  {
    titleEn: 'Whole-person support team',
    titleZh: '全人关怀团队',
    descEn:
      'Licensed counselors, nutritionists, and care coordinators guide you through every milestone of the journey.',
    descZh:
      '执照咨询师、营养师与护理协调员为您的每一个阶段提供指导。'
  }
]

const testimonials: Array<{
  nameEn: string
  nameZh: string
  quoteEn: string
  quoteZh: string
  resultEn: string
  resultZh: string
}> = [
  {
    nameEn: 'Jennifer & Michael',
    nameZh: '詹妮弗与迈克尔',
    quoteEn:
      'The IVY team listened to every concern and coordinated our care with such compassion. We felt genuinely supported from our first consultation through our twins’ arrival.',
    quoteZh:
      'IVY 团队倾听我们每一个担忧，并以真切的同理心协调治疗。从第一次面诊到双胞胎的诞生，我们始终感到被全心支持。',
    resultEn: 'IVF with PGT-A • Twin boys',
    resultZh: 'PGT-A 体外受精 · 双胞胎男孩'
  },
  {
    nameEn: 'Sarah Chen',
    nameZh: '陈莎拉',
    quoteEn:
      'Their integrative approach helped me balance my hormones naturally while preparing for my embryo transfer. I finally felt confident in my own body again.',
    quoteZh:
      '他们的整合疗法帮助我自然调节激素，同时准备胚胎移植。我重新找回了对自己身体的信心。',
    resultEn: 'Frozen embryo transfer • First cycle success',
    resultZh: '冻胚移植 · 首周期成功'
  },
  {
    nameEn: 'David & Lisa',
    nameZh: '大卫与丽莎',
    quoteEn:
      'We were not just a case number—every appointment was thoughtful. The bilingual staff made our family feel seen and understood.',
    quoteZh:
      '我们从不只是病例编号——每次就诊都周到细致。双语团队让我们的家庭真正被理解与尊重。',
    resultEn: 'ICSI + Immune protocol • Healthy baby girl',
    resultZh: 'ICSI 联合免疫方案 · 健康女婴'
  }
]

const articles: Array<{
  titleEn: string
  titleZh: string
  excerptEn: string
  excerptZh: string
  href: string
  category: string
  image: string
}> = [
  {
    titleEn: 'How to prepare your body for IVF in 6 weeks',
    titleZh: '六周内调理身体迎接 IVF 的完整指南',
    excerptEn:
      'Implement the same evidence-based plan our physicians use with patients before ovarian stimulation.',
    excerptZh:
      '采用与我们的医生一致、基于循证医学的调理计划，为卵巢刺激做好准备。',
    href: '/blog',
    category: 'Clinical Insights',
    image: 'https://www.ovulifemd.com/wp-content/uploads/2022/08/Fertility-Optimization-Guide-resized-e1663926750752.jpg'
  },
  {
    titleEn: 'The fertility plate: nutrition that supports implantation',
    titleZh: '助力胚胎着床的营养餐盘指南',
    excerptEn:
      'Discover the micronutrients and meal structure our nutritionists recommend throughout the OvuMethod.',
    excerptZh:
      '了解我们的营养师在 OvuMethod 中推荐的微量营养素与膳食结构。',
    href: '/blog',
    category: 'Nutrition',
    image: 'https://www.ovulifemd.com/wp-content/uploads/2019/12/blog_nutrition.jpg'
  },
  {
    titleEn: 'Staying grounded emotionally during treatment',
    titleZh: '治疗期间保持情绪稳定的实用方式',
    excerptEn:
      'Emotional resilience practices from our licensed counselors to help you stay centered between appointments.',
    excerptZh:
      '来自执照心理咨询师的情绪韧性练习，帮助您在治疗间隙保持平衡。',
    href: '/blog',
    category: 'Mind-Body',
    image: 'https://www.ovulifemd.com/wp-content/uploads/2019/12/blog_mindfulness.jpg'
  }
]

export default function Home() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'Integrative Fertility Medicine' : '整合医学生育护理'}
        backgroundImage="https://www.ovulifemd.com/wp-content/uploads/2019/12/shutterstock_1012695904.jpg"
        title={
          isEn
            ? 'Personalized fertility care for the path that is uniquely yours'
            : '为您量身打造的个性化生育之旅'
        }
        subtitle={
          isEn
            ? 'Board-certified reproductive endocrinologists, bilingual specialists, and a whole-person support team partnering with you at every step.'
            : '认证生殖内分泌专家、双语医疗团队与全人支持体系，在旅程的每一步与您并肩同行。'
        }
        primaryCtaText={isEn ? 'Book Consultation' : '预约咨询'}
        primaryCtaHref="/contact"
        secondaryCtaText={isEn ? 'Explore The OvuMethod' : '了解 OvuMethod'}
        secondaryCtaHref="/the-ovumethod"
        showScrollIndicator
      />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3 md:gap-10 lg:px-0">
          {pillarHighlights.map(({ titleEn, titleZh, descEn, descZh }, idx) => (
            <ScrollInView key={idx} delay={idx * 0.1}>
              <Card className="h-full px-8 py-10">
                <span className="font-script text-2xl text-[#c86b79]">
                  {isEn ? 'OvuLife Promise' : 'OvuLife 承诺'}
                </span>
                <h3 className="mt-3 text-2xl text-[#2f2b33]">
                  {isEn ? titleEn : titleZh}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#5a555d]">
                  {isEn ? descEn : descZh}
                </p>
              </Card>
            </ScrollInView>
          ))}
        </div>
      </section>

      <section className="bg-[#f7eee7] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-script text-3xl text-[#c86b79]">
                {isEn ? 'The OvuMethod™' : 'OvuMethod™'}
              </span>
              <h2 className="mt-4 text-[44px] leading-tight text-[#2f2b33]">
                {isEn
                  ? 'A science-backed framework for natural and assisted fertility'
                  : '融合科学与整合医学的生育优化框架'}
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-[#5a555d]">
                {isEn
                  ? 'Designed by reproductive endocrinologists and integrative medicine specialists to support your mind, body, and future family.'
                  : '由生殖内分泌专家与整合医学专家共同设计，全面支持您的身心与未来的家庭。'}
              </p>
            </div>
          </ScrollInView>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {methodSteps.map(({ labelEn, labelZh, titleEn, titleZh, descEn, descZh }, idx) => (
              <ScrollInView key={idx} delay={idx * 0.1}>
                <Card className="h-full px-7 py-10">
                  <span className="font-script text-2xl text-[#c86b79]">
                    {isEn ? labelEn : labelZh}
                  </span>
                  <h3 className="mt-4 text-2xl text-[#2f2b33]">
                    {isEn ? titleEn : titleZh}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#5a555d]">
                    {isEn ? descEn : descZh}
                  </p>
                </Card>
              </ScrollInView>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-[#8b858d]">
              {isEn
                ? 'Download the detailed OvuMethod roadmap'
                : '下载完整 OvuMethod 路线图'}
            </p>
            <Button variant="outline" size="lg">
              {isEn ? 'Get the guide' : '获取指南'}
            </Button>
          </div>
        </div>
      </section>

      <SectionWithNumber
        number={1}
        title={isEn ? 'Whole-person fertility medicine' : '全人整合医学生育护理'}
        subtitle={
          isEn
            ? 'We treat the root causes, not just the symptoms'
            : '关注根源，而不仅仅是症状'
        }
        content={
          <div className="space-y-4">
            <p>
              {isEn
                ? 'Every treatment plan begins with a deep understanding of your story, labs, imaging, and lifestyle. We combine reproductive endocrinology, Traditional Chinese Medicine principles, and precision nutrition to help your body thrive.'
                : '每一份治疗方案都从深入了解您的故事、化验、影像与生活方式开始。我们结合生殖内分泌学、传统中医理念与精准营养，帮助您的身体焕发最佳状态。'}
            </p>
            <p>
              {isEn
                ? 'Our bilingual team ensures you never have to translate complicated medical language or advocate for yourself alone.'
                : '双语医疗团队让您无须再自行翻译复杂医学术语，也不必独自奔走。'}
            </p>
          </div>
        }
        imageSrc="https://www.ovulifemd.com/wp-content/uploads/2019/12/about-us_hero.jpg"
        imageAlt="Fertility specialist consulting with patient"
        backgroundColor="white"
        ctaText={isEn ? 'Meet the physicians' : '认识医生团队'}
        ctaHref="/about"
      />

      <SectionWithNumber
        number={2}
        title={isEn ? 'A clinic built for belonging' : '让您安心归属的诊所环境'}
        subtitle={
          isEn
            ? 'Serene spaces, spa-inspired recovery lounges, and leading-edge equipment'
            : '静谧空间、疗愈休息室与先进设备'
        }
        content={
          <div className="space-y-4">
            <p>
              {isEn
                ? 'Egg retrieval suites, embryology laboratory, andrology lab, and procedure rooms are all onsite. That means consistent standards, tightly controlled environments, and your care team by your side.'
                : '取卵手术室、胚胎实验室、男科实验室与治疗室均位于中心内部，确保标准一致、环境可控，您的护理团队始终陪伴左右。'}
            </p>
            <p>
              {isEn
                ? 'Flexible scheduling, discreet VIP pathways, and partnerships with top maternal-fetal medicine specialists ensure the transition to pregnancy care is seamless.'
                : '灵活的预约安排、私密尊享通道，以及与顶尖母胎医学专家的合作，让孕期衔接顺畅安心。'}
            </p>
          </div>
        }
        imageSrc="https://www.ovulifemd.com/wp-content/uploads/2019/12/about_clinic.jpg"
        imageAlt="IVY Fertility Center interior"
        backgroundColor="cream"
        reversed
        ctaText={isEn ? 'Tour the facility' : '参观诊所'}
        ctaHref="/services"
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-script text-3xl text-[#c86b79]">
                {isEn ? 'What patients share about IVY' : '患者对 IVY 的心声'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'Real stories from families who trusted the journey'
                  : '来自信任之旅家庭的真实故事'}
              </h2>
            </div>
          </ScrollInView>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map(({ nameEn, nameZh, quoteEn, quoteZh, resultEn, resultZh }, idx) => (
              <ScrollInView key={idx} delay={idx * 0.1}>
                <Card className="h-full px-8 py-10">
                  <div className="flex gap-1 text-[#f5c86d]">
                    {Array.from({ length: 5 }).map((_, starIdx) => (
                      <span key={starIdx}>★</span>
                    ))}
                  </div>
                  <blockquote className="mt-4 text-[15px] leading-relaxed text-[#5a555d]">
                    “{isEn ? quoteEn : quoteZh}”
                  </blockquote>
                  <div className="mt-6">
                    <p className="text-sm uppercase tracking-[0.26em] text-[#8b858d]">
                      {isEn ? resultEn : resultZh}
                    </p>
                    <p className="mt-2 text-[15px] font-semibold text-[#2f2b33]">
                      {isEn ? nameEn : nameZh}
                    </p>
                  </div>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.2fr_1fr] lg:px-0">
          <ScrollInView>
            <div className="rounded-[24px] bg-white/90 px-8 py-10 shadow-[0_24px_70px_rgba(45,28,36,0.12)] backdrop-blur">
              <span className="font-script text-3xl text-[#c86b79]">
                {isEn ? 'Stay informed' : '保持掌握最新资讯'}
              </span>
              <h2 className="mt-4 text-[38px] text-[#2f2b33]">
                {isEn
                  ? 'Guides and insights to support every stage'
                  : '覆盖旅程每一阶段的指南与洞见'}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#5a555d]">
                {isEn
                  ? 'Explore the latest research-backed tips from our physicians, nutritionists, and counselors.'
                  : '查阅我们的医生、营养师与心理咨询师提供的最新循证建议。'}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button variant="primary" size="md">
                  {isEn ? 'Visit the blog' : '访问博客'}
                </Button>
                <Button variant="ghost" size="md">
                  {isEn ? 'Download free resources' : '下载免费资源'}
                </Button>
              </div>
            </div>
          </ScrollInView>

          <ScrollInView delay={0.1}>
            <div className="grid gap-6">
              {articles.slice(0, 2).map(({ titleEn, titleZh, excerptEn, excerptZh, category, href, image }, idx) => (
                <Link key={idx} href={href} className="group">
                  <Card className="overflow-hidden">
                    <div className="relative h-44 w-full overflow-hidden">
                      <img
                        src={image}
                        alt={titleEn}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="px-6 py-6">
                      <span className="text-xs uppercase tracking-[0.26em] text-[#c86b79]">
                        {category}
                      </span>
                      <h3 className="mt-3 text-xl text-[#2f2b33]">
                        {isEn ? titleEn : titleZh}
                      </h3>
                      <p className="mt-3 text-[14px] leading-relaxed text-[#5a555d]">
                        {isEn ? excerptEn : excerptZh}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </ScrollInView>
        </div>
      </section>

      <section className="bg-[#2a1a22] py-24 text-[#f4e7df]">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-script text-3xl text-[#f6c7bd]">
            {isEn ? 'Your story is only beginning' : '您的故事正要展开'}
          </span>
          <h2 className="text-[42px] leading-tight">
            {isEn
              ? 'Let’s design a fertility plan that reflects your values, culture, and dreams'
              : '我们一起打造符合您价值观与梦想的生育计划'}
          </h2>
          <p className="max-w-2xl text-[16px] leading-relaxed text-[#f4e7df]/80">
            {isEn
              ? 'Schedule a complimentary consultation with our patient concierge team. We will review your history, answer every question, and map out next steps together.'
              : '预约与我们的患者礼宾团队进行免费咨询。我们将梳理您的病史、解答所有疑问，并与您一起规划下一步。'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg">
              {isEn ? 'Speak with a concierge' : '联系礼宾团队'}
            </Button>
            <Button variant="outline-light" size="lg">
              {isEn ? 'Start your intake form' : '填写初诊表'}
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
