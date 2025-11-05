'use client'

import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { SectionWithNumber } from '@/components/ui/SectionWithNumber'
import { Card } from '@/components/ui/Card'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const frameworkSteps = [
  {
    number: 1,
    titleEn: 'Remove fertility threats',
    titleZh: 'æŽ’é™¤ç”Ÿè‚²é£Žé™©',
    subtitleEn: 'Identify and resolve root causes',
    subtitleZh: 'è¯†åˆ«å¹¶è§£å†³æ ¹æºé—®é¢˜',
    pointsEn: [
      'Functional diagnostics for hormones, metabolism, immune and environmental factors',
      'Cycle mapping and ultrasound imaging to understand reproductive timing',
      'Personalized detox, endocrine balancing, and lifestyle adjustments',
    ],
    pointsZh: [
      'é’ˆå¯¹æ¿€ç´ ã€ä»£è°¢ã€å…ç–«åŠçŽ¯å¢ƒå› ç´ è¿›è¡ŒåŠŸèƒ½æ€§è¯Šæ–­',
      'å‘¨æœŸå›¾ç»˜åˆ¶ä¸Žè¶…å£°æˆåƒï¼ŒæŽŒæ¡ç”Ÿæ®–èŠ‚å¥',
      'å®šåˆ¶åŒ–æŽ’æ¯’ã€å†…åˆ†æ³Œè°ƒç†ä¸Žç”Ÿæ´»æ–¹å¼è°ƒæ•´',
    ],
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1400&q=80',
    ctaEn: 'Explore diagnostics',
    ctaZh: 'äº†è§£è¯Šæ–­é¡¹ç›®',
  },
  {
    number: 2,
    titleEn: 'Nourish the whole person',
    titleZh: 'æ»‹å…»å…¨äºº',
    subtitleEn: 'Support body, mind, and spirit',
    subtitleZh: 'èº«å¿ƒçµåŒæ­¥æ”¯æŒ',
    pointsEn: [
      'Evidence-based nutrition, supplementation, and acupuncture tailored to your biomarkers',
      'Mind-body therapiesâ€”mindfulness, counseling, and community circles',
      'Sleep optimization and gentle movement plans to restore energy',
    ],
    pointsZh: [
      'æ ¹æ®ç”Ÿç†æŒ‡æ ‡å®šåˆ¶è¥å…»ã€è¡¥å……ä¸Žé’ˆç¸æ–¹æ¡ˆ',
      'æ­£å¿µã€å¿ƒç†å’¨è¯¢ä¸Žæ”¯æŒåœˆç­‰èº«å¿ƒç–—æ³•',
      'ç¡çœ ä¼˜åŒ–åŠæ¸©å’Œè¿åŠ¨è®¡åˆ’ï¼Œæ¢å¤èƒ½é‡',
    ],
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80',
    ctaEn: 'Meet our integrative team',
    ctaZh: 'è®¤è¯†æ•´åˆæŠ¤ç†å›¢é˜Ÿ',
  },
  {
    number: 3,
    titleEn: 'Sustain success together',
    titleZh: 'æŒç»­æºæ‰‹æˆåŠŸ',
    subtitleEn: 'Navigate treatment and beyond',
    subtitleZh: 'é™ªä¼´å®Œæˆæ²»ç–—ä¸Žäº§åŽ',
    pointsEn: [
      'Custom fertility protocols (IUI, IVF, donor, surrogacy) executed by our physicians',
      'Cycle concierge monitoring, medication coaching, and travel coordination',
      'Pregnancy handoff to maternal-fetal partners plus postpartum wellness plans',
    ],
    pointsZh: [
      'ç”±åŒ»å¸ˆæ‰§è¡Œçš„å®šåˆ¶ç”Ÿè‚²æ–¹æ¡ˆï¼šIUIã€IVFã€æèµ ä¸Žä»£å­•',
      'å‘¨æœŸç¤¼å®¾ç›‘æµ‹ã€ç”¨è¯æŒ‡å¯¼ä¸Žè¡Œç¨‹åè°ƒ',
      'ä¸Žæ¯èƒŽåŒ»å­¦ä¼™ä¼´çš„å­•æœŸè¡”æŽ¥åŠäº§åŽå¥åº·è®¡åˆ’',
    ],
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=80',
    ctaEn: 'See success stories',
    ctaZh: 'æŸ¥çœ‹æˆåŠŸæ¡ˆä¾‹',
  },
]

const pillars = [
  {
    titleEn: 'Clinically precise',
    titleZh: 'ä¸´åºŠç²¾å‡†',
    descEn:
      'Board-certified reproductive endocrinologists interpret every lab and design each protocol.',
    descZh: 'ç»è®¤è¯çš„ç”Ÿæ®–å†…åˆ†æ³ŒåŒ»å¸ˆè§£è¯»æ‰€æœ‰æ£€æµ‹ï¼Œå¹¶äº²è‡ªè®¾è®¡æ¯é¡¹æ–¹æ¡ˆã€‚',
  },
  {
    titleEn: 'Whole-person partnership',
    titleZh: 'å…¨äººä¼™ä¼´',
    descEn:
      'Licensed counselors, acupuncturists, and dietitians collaborate weekly to support your progress.',
    descZh: 'æ‰§ç…§å¿ƒç†å¸ˆã€é’ˆç¸å¸ˆä¸Žè¥å…»å¸ˆæ¯å‘¨åä½œï¼Œæ”¯æŒæ‚¨çš„æ¯ä¸€æ­¥è¿›å±•ã€‚',
  },
  {
    titleEn: 'Bilingual advocacy',
    titleZh: 'åŒè¯­å€¡å¯¼',
    descEn:
      'Our Mandarin- and English-speaking team ensures you never navigate complex decisions alone.',
    descZh: 'ä¸­è‹±åŒè¯­å›¢é˜Ÿé™ªä¼´å·¦å³ï¼Œå¸®åŠ©æ‚¨ä»Žå®¹åº”å¯¹æ¯ä¸ªå…³é”®å†³ç­–ã€‚',
  },
]

const timeline = [
  {
    phaseEn: 'Weeks 1-3 Â· Discover',
    phaseZh: 'ç¬¬ 1-3 å‘¨ Â· äº†è§£è‡ªå·±',
    descEn:
      'Consultation, fertility testing, and OvuMethod blueprint delivered with lifestyle homework.',
    descZh: 'é¢è¯Šã€æ£€æµ‹ä¸Ž OvuMethod è“å›¾åˆ¶å®šï¼ŒåŒæ—¶æä¾›ç”Ÿæ´»æ–¹å¼ä½œä¸šã€‚',
  },
  {
    phaseEn: 'Weeks 4-8 Â· Balance',
    phaseZh: 'ç¬¬ 4-8 å‘¨ Â· å¹³è¡¡è°ƒç†',
    descEn:
      'Nutrition upgrades, hormone optimization, and integrative therapies prepare your body.',
    descZh: 'è¥å…»å‡çº§ã€æ¿€ç´ ä¼˜åŒ–ä¸Žæ•´åˆç–—æ³•ï¼Œä¸ºèº«ä½“åšå¥½å‡†å¤‡ã€‚',
  },
  {
    phaseEn: 'Weeks 9-12 Â· Treatment',
    phaseZh: 'ç¬¬ 9-12 å‘¨ Â· è¿›å…¥æ²»ç–—',
    descEn:
      'IVF/IUI/donor protocols with daily concierge guidance, medication coaching, and lab support.',
    descZh: 'åœ¨ç¤¼å®¾å›¢é˜Ÿæ¯æ—¥æŒ‡å¯¼ä¸‹è¿›è¡Œ IVF/IUI/æèµ ç­‰æ–¹æ¡ˆï¼Œå¹¶è¾…ä»¥ç”¨è¯ä¸Žå®žéªŒå®¤æ”¯æŒã€‚',
  },
  {
    phaseEn: 'Beyond Â· Thrive',
    phaseZh: 'æŒç»­é˜¶æ®µ Â· æŒç»­ç¹ç››',
    descEn:
      'Pregnancy confirmation, trimester plans, and postpartum wellness resources for lasting health.',
    descZh: 'æˆåŠŸéªŒå­•åŽæä¾›å­•æœŸè®¡åˆ’ï¼Œä»¥åŠäº§åŽå¥åº·èµ„æºï¼ŒæŒç»­å®ˆæŠ¤æ‚¨çš„å®¶åº­ã€‚',
  },
]

export default function OvuMethodPage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'The OvuMethodâ„¢' : 'OvuMethodâ„¢'}
        backgroundImage="https://images.unsplash.com/photo-1511407397940-d57f68e81203?auto=format&fit=crop&w=2000&q=80"
        title={
          isEn
            ? 'A three-part framework guiding every IVY Fertility journey'
            : 'å¼•é¢† IVY ç”Ÿè‚²æ—…ç¨‹çš„ä¸‰å¤§æ¡†æž¶'
        }
        subtitle={
          isEn
            ? 'Designed by board-certified physicians and integrative specialists to remove threats, nourish your whole self, and sustain lasting fertility success.'
            : 'ç”±è®¤è¯åŒ»å¸ˆä¸Žæ•´åˆä¸“å®¶å…±åŒæ‰“é€ ï¼ŒæŽ’é™¤é£Žé™©ã€æ»‹å…»å…¨äººï¼Œå¹¶å®ˆæŠ¤é•¿æœŸç”Ÿè‚²æˆæžœã€‚'
        }
        primaryCtaText={isEn ? 'Start your OvuMethod plan' : 'å¯åŠ¨ OvuMethod è®¡åˆ’'}
        primaryCtaHref="/contact"
        secondaryCtaText={isEn ? 'View method overview' : '查看方法概览'}
        secondaryCtaHref="#method-overview"
        stats={[
          { value: '3', label: isEn ? 'Core phases' : '3 å¤§é˜¶æ®µ' },
          { value: '12+', label: isEn ? 'Weeks of guided care' : '12+ å‘¨å…¨ç¨‹æŒ‡å¯¼' },
          { value: '360Â°', label: isEn ? 'Whole-person support' : '360Â° å…¨äººæ”¯æŒ' },
        ]}
        highlight={{
          title: isEn ? 'Rooted in science, delivered with heart' : 'ç§‘å­¦ä¸ºåŸºï¼Œæ¸©åº¦ä¸ºä¼´',
          description: isEn
            ? 'You receive bilingual coaching, concierge monitoring, and integrative therapies every step of the way.'
            : 'å…¨ç¨‹åŒè¯­é™ªä¼´ã€ç¤¼å®¾ç›‘æµ‹ä¸Žæ•´åˆç–—æ³•ï¼Œä¸Žæ‚¨åŒè¡Œã€‚',
        }}
      />

      <div id="method-overview">
        {frameworkSteps.map(
          (
            {
              number,
            titleEn,
            titleZh,
            subtitleEn,
            subtitleZh,
            pointsEn,
            pointsZh,
            image,
            ctaEn,
            ctaZh,
          },
          idx
        ) => (
          <SectionWithNumber
            key={number}
            number={number}
            title={isEn ? titleEn : titleZh}
            subtitle={isEn ? subtitleEn : subtitleZh}
            content={
              <ul className="space-y-3 text-[15px] text-[#5a555d]">
                {(isEn ? pointsEn : pointsZh).map((item, pointIdx) => (
                  <li key={pointIdx}>â€¢ {item}</li>
                ))}
              </ul>
            }
            imageSrc={image}
            imageAlt={titleEn}
            reversed={idx % 2 === 1}
            backgroundColor={idx % 2 === 0 ? 'white' : 'cream'}
            ctaText={isEn ? ctaEn : ctaZh}
            ctaHref={idx === 0 ? '/services' : idx === 1 ? '/about' : '/faq'}
          />
          )
        )}
      </div>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-script text-3xl text-[#c86b79]">
                {isEn ? 'Why the OvuMethod works' : 'OvuMethod çš„ç‹¬åˆ°ä¹‹å¤„'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'Precision medicine meets compassionate, bilingual care'
                  : 'ç²¾å‡†åŒ»ç–—ä¸ŽåŒè¯­å…³æ€€çš„èžåˆ'}
              </h2>
            </div>
          </ScrollInView>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pillars.map(({ titleEn, titleZh, descEn, descZh }, idx) => (
              <ScrollInView key={titleEn} delay={idx * 0.1}>
                <Card className="h-full px-8 py-10">
                  <h3 className="text-xl text-[#2f2b33]">
                    {isEn ? titleEn : titleZh}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#5a555d]">
                    {isEn ? descEn : descZh}
                  </p>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-script text-3xl text-[#c86b79]">
                {isEn ? 'Your 12-week roadmap' : '12 å‘¨è·¯çº¿å›¾'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'What happens when you enroll in the OvuMethod'
                  : 'åŠ å…¥ OvuMethod åŽä¼šç»åŽ†ä»€ä¹ˆ'}
              </h2>
            </div>
          </ScrollInView>

          <div className="mt-12 space-y-10 border-l border-[#e2d0c1] pl-8 md:pl-12">
            {timeline.map(({ phaseEn, phaseZh, descEn, descZh }, idx) => (
              <ScrollInView key={phaseEn} delay={idx * 0.1} className="relative pl-6">
                <span className="absolute -left-8 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#a63655] bg-[#fdf7f2] text-sm font-semibold text-[#a63655]">
                  {idx + 1}
                </span>
                <h3 className="text-xl text-[#2f2b33]">
                  {isEn ? phaseEn : phaseZh}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5a555d]">
                  {isEn ? descEn : descZh}
                </p>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:px-0">
          <ScrollInView>
            <div className="rounded-[24px] bg-[#f7eee7] px-8 py-10 shadow-[0_24px_60px_rgba(45,28,36,0.12)]">
              <span className="font-script text-3xl text-[#c86b79]">
                {isEn ? 'Patient spotlight' : 'æ‚£è€…æ•…äº‹'}
              </span>
              <p className="mt-4 text-[16px] leading-relaxed text-[#5a555d]">
                {isEn
                  ? 'â€œAfter years of unanswered questions, the OvuMethod finally stringed everything together. The integrative protocols helped me balance my hormones before IVF, and the cycle concierge made daily injections feel effortless. Weâ€™re expecting our baby girl in a few months.â€'
                  : 'â€œå¤šå¹´æ²¡æœ‰ç­”æ¡ˆçš„å›°æƒ‘ï¼ŒOvuMethod ç»ˆäºŽæ›¿æˆ‘ä¸²è”èµ·æ¥ã€‚æ•´åˆæ–¹æ¡ˆå¸®åŠ©æˆ‘åœ¨ IVF å‰è°ƒèŠ‚æ¿€ç´ ï¼Œå‘¨æœŸç¤¼å®¾å›¢é˜Ÿè®©æ¯æ—¥æ³¨å°„ä¹Ÿå˜å¾—è½»æ¾ã€‚å†è¿‡å‡ ä¸ªæœˆï¼Œæˆ‘ä»¬å°±è¦è¿ŽæŽ¥å¥³å„¿çš„åˆ°æ¥äº†ã€‚â€'}
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.28em] text-[#8b858d]">
                {isEn ? 'Lily & Daniel â€” IVF + OvuMethod Graduate' : 'Lily ä¸Ž Daniel â€” IVF + OvuMethod æˆåŠŸæ¡ˆä¾‹'}
              </p>
            </div>
          </ScrollInView>
          <ScrollInView delay={0.1}>
            <Card className="h-full px-8 py-10">
              <h3 className="text-xl text-[#2f2b33]">
                {isEn ? 'What you receive when enrolling' : 'åŠ å…¥è®¡åˆ’å¯äº«å†…å®¹'}
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-[#5a555d]">
                <li>
                  {isEn
                    ? 'Weekly integrative sessions (nutrition, acupuncture, counseling)'
                    : 'æ¯å‘¨æ•´åˆæŠ¤ç†ä¼šï¼ˆè¥å…»ã€é’ˆç¸ã€å¿ƒç†å’¨è¯¢ï¼‰'}
                </li>
                <li>
                  {isEn
                    ? 'All diagnostic labs and hormone testing performed on-site'
                    : 'æ‰€æœ‰è¯Šæ–­åŒ–éªŒä¸Žæ¿€ç´ æ£€æµ‹å‡åœ¨é™¢å†…å®Œæˆ'}
                </li>
                <li>
                  {isEn
                    ? 'Cycle concierge hotline with same-day responses'
                    : 'å‘¨æœŸç¤¼å®¾çƒ­çº¿ï¼Œå½“æ—¥å›žå¤'}
                </li>
                <li>
                  {isEn
                    ? 'Detailed progress reports and next-step playbooks'
                    : 'è¯¦ç»†è¿›ç¨‹æŠ¥å‘Šä¸Žä¸‹ä¸€æ­¥æ“ä½œæŒ‡å—'}
                </li>
                <li>
                  {isEn
                    ? 'Post-program prenatal + postpartum wellness plan'
                    : 'è®¡åˆ’ç»“æŸåŽçš„å­•å‰åŠäº§åŽå¥åº·æ–¹æ¡ˆ'}
                </li>
              </ul>
            </Card>
          </ScrollInView>
        </div>
      </section>

      <section className="bg-[#2a1a22] py-24 text-[#f4e7df]">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-script text-3xl text-[#f6c7bd]">
            {isEn ? 'Ready to begin the OvuMethod?' : 'å‡†å¤‡å¼€å¯ OvuMethod å—ï¼Ÿ'}
          </span>
          <h2 className="text-[40px] leading-tight">
            {isEn
              ? 'Schedule a discovery call or join our next virtual workshop'
              : 'é¢„çº¦äº†è§£ç”µè¯æˆ–åŠ å…¥åœ¨çº¿å·¥ä½œåŠ'}
          </h2>
          <p className="max-w-3xl text-[16px] leading-relaxed text-[#f4e7df]/80">
            {isEn
              ? 'Weâ€™ll review your history, map out the three phases specific to your body, and outline the timeline and investment that fit your goals.'
              : 'æˆ‘ä»¬å°†å…±åŒæ¢³ç†æ‚¨çš„ç—…å²ï¼Œè§„åˆ’é€‚åˆæ‚¨çš„ä¸‰å¤§é˜¶æ®µï¼Œå¹¶è¯´æ˜Žå¯¹åº”çš„æ—¶é—´ä¸ŽæŠ•å…¥ã€‚'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg">
              {isEn ? 'Book discovery call' : 'é¢„çº¦äº†è§£ç”µè¯'}
            </Button>
            <Link href="/start-here" className="inline-flex">
              <Button variant="outline-light" size="lg">
                {isEn ? 'Join the next workshop' : 'æŠ¥åä¸‹ä¸€åœºå·¥ä½œåŠ'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
