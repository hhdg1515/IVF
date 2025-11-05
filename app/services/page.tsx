'use client'

import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { Card } from '@/components/ui/Card'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { SectionWithNumber } from '@/components/ui/SectionWithNumber'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

type CopyBlock = {
  titleEn: string
  titleZh: string
  descEn: string
  descZh: string
}

const primaryPrograms: CopyBlock[] = [
  {
    titleEn: 'IVF & Embryology Programs',
    titleZh: 'ä½“å¤–å—ç²¾ä¸ŽèƒšèƒŽå®žéªŒå®¤æ–¹æ¡ˆ',
    descEn:
      'Personalized stimulation protocols, gentle retrievals, and in-house embryology with PGT-A/PGT-M screening.',
    descZh:
      'ä¸ªæ€§åŒ–ä¿ƒæŽ’æ–¹æ¡ˆã€æ¸©å’Œå–åµï¼Œå¹¶åœ¨é™¢å†…å®ŒæˆèƒšèƒŽåŸ¹å…»ä¸Ž PGT-A/PGT-M é—ä¼ æ£€æµ‹ã€‚',
  },
  {
    titleEn: 'Egg Freezing & Fertility Preservation',
    titleZh: 'å†»åµä¸Žç”Ÿè‚²ä¿å­˜',
    descEn:
      'Rapid-start cycles for career, personal, or medical reasons, supported by holistic hormone preparation.',
    descZh:
      'ä¸ºèŒä¸šã€ä¸ªäººæˆ–åŒ»ç–—éœ€æ±‚æä¾›å¿«é€Ÿå¯åŠ¨å‘¨æœŸï¼Œå¹¶è¾…ä»¥å…¨æ–¹ä½çš„æ¿€ç´ è°ƒç†æ”¯æŒã€‚',
  },
  {
    titleEn: 'Donor & Gestational Carriers',
    titleZh: 'æèµ ä¸Žä»£å­•åè°ƒ',
    descEn:
      'Dedicated coordinators manage matching, screening, and legal guidance with transparent financial planning.',
    descZh:
      'ä¸“å±žåè°ƒå›¢é˜Ÿè´Ÿè´£åŒ¹é…ã€ç­›æŸ¥ä¸Žæ³•å¾‹æŒ‡å¼•ï¼Œå¹¶æä¾›æ¸…æ™°é€æ˜Žçš„è´¹ç”¨è§„åˆ’ã€‚',
  },
  {
    titleEn: 'Male Fertility & Andrology',
    titleZh: 'ç”·æ€§ç”Ÿè‚²ä¸Žç”·ç§‘æœåŠ¡',
    descEn:
      'Comprehensive semen analysis, DNA fragmentation testing, and on-site ICSI/IMSI expertise.',
    descZh:
      'å®Œæ•´çš„ç²¾æ¶²åˆ†æžã€DNA æ–­è£‚æ£€æµ‹ä»¥åŠé™¢å†… ICSI/IMSI ä¸“ä¸šæ“ä½œã€‚',
  },
]

const supportiveCare: CopyBlock[] = [
  {
    titleEn: 'Endocrine & Metabolic Optimization',
    titleZh: 'å†…åˆ†æ³Œä¸Žä»£è°¢ä¼˜åŒ–',
    descEn: 'Thyroid, PCOS, insulin-sensitivity, and immune protocols tailored to your biomarkers.',
    descZh: 'é’ˆå¯¹ç”²çŠ¶è…ºã€PCOSã€èƒ°å²›ç´ æ•æ„Ÿåº¦ä¸Žå…ç–«çŠ¶å†µåˆ¶å®šä¸ªæ€§åŒ–æ–¹æ¡ˆã€‚',
  },
  {
    titleEn: 'Integrative Mind-Body Support',
    titleZh: 'èº«å¿ƒæ•´åˆæ”¯æŒ',
    descEn: 'Licensed counselors, acupuncture, and restorative nutrition sessions every step of the way.',
    descZh: 'æ‰§ç…§å¿ƒç†å’¨è¯¢ã€é’ˆç¸ä¸Žè°ƒå…»è¥å…»è¯¾ç¨‹è´¯ç©¿å…¨ç¨‹ã€‚',
  },
  {
    titleEn: 'Concierge Travel & Remote Monitoring',
    titleZh: 'ç¤¼å®¾è¡Œç¨‹ä¸Žè¿œç¨‹ç›‘æµ‹',
    descEn: 'Seamless coordination for international patients with secure telemedicine check-ins.',
    descZh: 'ä¸ºå¤–åœ°æ‚£è€…æä¾›æ— ç¼è¡Œç¨‹å®‰æŽ’ä¸Žå®‰å…¨çš„è¿œç¨‹è¯Šç–—è·Ÿè¿›ã€‚',
  },
]

const serviceJourney: Array<{
  stepEn: string
  stepZh: string
  descEn: string
  descZh: string
}> = [
  {
    stepEn: 'Comprehensive Intake & Testing',
    stepZh: 'å…¨é¢åˆè¯Šä¸Žæ£€æµ‹',
    descEn:
      'History review, hormone panel, ultrasound, and partner screening to map a precise starting point.',
    descZh:
      'è¯¦å°½ç—…å²ã€æ¿€ç´ æ£€æµ‹ã€è¶…å£°ä¸Žä¼´ä¾£ç­›æŸ¥ï¼Œä¸ºåŽç»­æ²»ç–—å»ºç«‹ç²¾å‡†èµ·ç‚¹ã€‚',
  },
  {
    stepEn: 'Personalized Treatment Blueprint',
    stepZh: 'ä¸ªæ€§åŒ–æ²»ç–—è“å›¾',
    descEn:
      'Our physicians craft a cycle calendar, medication plan, and integrative care schedule matched to your goals.',
    descZh:
      'åŒ»ç”Ÿå›¢é˜Ÿåˆ¶å®šå‘¨æœŸæ—¥ç¨‹ã€ç”¨è¯è®¡åˆ’ä¸Žæ•´åˆæŠ¤ç†å®‰æŽ’ï¼Œä»¥ç¬¦åˆæ‚¨çš„ç›®æ ‡ã€‚',
  },
  {
    stepEn: 'Dedicated Cycle Coaching',
    stepZh: 'ä¸“å±žå‘¨æœŸé™ªä¼´',
    descEn:
      'Concierge check-ins, symptom tracking, and nutrition adjustments keep you supported every day.',
    descZh:
      'ç¤¼å®¾å›¢é˜Ÿæ¯æ—¥è·Ÿè¿›ã€è®°å½•ç—‡çŠ¶å¹¶è°ƒæ•´è¥å…»æ–¹æ¡ˆï¼Œè®©æ‚¨æ¯å¤©éƒ½æ„Ÿåˆ°è¢«æ”¯æŒã€‚',
  },
  {
    stepEn: 'Ongoing Pregnancy & Wellness Care',
    stepZh: 'æŒç»­å­•æœŸä¸Žå¥åº·æŠ¤ç†',
    descEn:
      'Positive outcome handoffs to OB partners, trimester-specific plans, and postnatal resources.',
    descZh:
      'æˆåŠŸæ€€å­•åŽä¸Žäº§ç§‘åˆä½œä¼™ä¼´é¡ºåˆ©è¡”æŽ¥ï¼Œå¹¶æä¾›åˆ†æœŸè®¡åˆ’ä¸Žäº§åŽèµ„æºã€‚',
  },
]

export default function ServicesPage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'Specialized Fertility Programs' : 'ä¸“ä¸šç”Ÿè‚²æ–¹æ¡ˆ'}
        backgroundImage="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=2000&q=80"
        title={
          isEn
            ? 'Comprehensive fertility services tailored to your pathway to parenthood'
            : 'ä¸ºæ‚¨çš„ä¸ºäººçˆ¶æ¯ä¹‹æ—…é‡èº«æ‰“é€ çš„å…¨é¢ç”Ÿè‚²æœåŠ¡'
        }
        subtitle={
          isEn
            ? 'From diagnostics to advanced IVF and integrative support, every service is delivered in-house by the team you already trust.'
            : 'ä»Žè¯„ä¼°åˆ°å…ˆè¿›çš„ä½“å¤–å—ç²¾ä¸Žæ•´åˆæ”¯æŒï¼Œæ‰€æœ‰æœåŠ¡å‡ç”±æ‚¨ä¿¡èµ–çš„é™¢å†…å›¢é˜Ÿäº²è‡ªæä¾›ã€‚'
        }
        primaryCtaText={isEn ? 'Plan your consultation' : 'é¢„çº¦åˆè¯Š'}
        primaryCtaHref="/contact"
        secondaryCtaText={isEn ? 'Meet the physicians' : 'è®¤è¯†åŒ»ç”Ÿå›¢é˜Ÿ'}
        secondaryCtaHref="/about"
        stats={[
          { value: '12', label: isEn ? 'Core treatment programs' : '12 é¡¹æ ¸å¿ƒæ–¹æ¡ˆ' },
          { value: '24/7', label: isEn ? 'Cycle concierge support' : 'å…¨å¤©å€™å‘¨æœŸç¤¼å®¾æ”¯æŒ' },
          { value: '100%', label: isEn ? 'On-site lab & procedures' : 'é™¢å†…å®žéªŒå®¤ä¸Žæ‰‹æœ¯' },
        ]}
        highlight={{
          title: isEn ? 'Care designed around you' : 'å›´ç»•æ‚¨è®¾è®¡çš„æŠ¤ç†',
          description: isEn
            ? 'Every service includes bilingual coaching, integrative wellness, and transparent pricing.'
            : 'æ¯é¡¹æœåŠ¡å‡åŒ…å«åŒè¯­é™ªä¼´ã€æ•´åˆå¥åº·æ”¯æŒä¸Žé€æ˜Žè´¹ç”¨è¯´æ˜Žã€‚',
        }}
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-script text-3xl text-[#c86b79]">
                {isEn ? 'Primary treatment programs' : 'æ ¸å¿ƒç”Ÿè‚²æ²»ç–—é¡¹ç›®'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'A dedicated pathway for every stage of your fertility journey'
                  : 'é’ˆå¯¹ç”Ÿè‚²æ—…ç¨‹æ¯ä¸ªé˜¶æ®µçš„ä¸“å±žæ–¹æ¡ˆ'}
              </h2>
            </div>
          </ScrollInView>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {primaryPrograms.map(({ titleEn, titleZh, descEn, descZh }, idx) => (
              <ScrollInView key={titleEn} delay={idx * 0.1}>
                <Card className="h-full px-8 py-10">
                  <span className="font-script text-2xl text-[#c86b79]">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
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
        </div>
      </section>

      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-script text-3xl text-[#c86b79]">
                {isEn ? 'Support beyond the procedure' : 'è¶…è¶Šæ²»ç–—çš„å…¨ç¨‹æ”¯æŒ'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'Integrative care woven into every service package'
                  : 'æ¯é¡¹æœåŠ¡å‡èžå…¥æ•´åˆæŠ¤ç†'}
              </h2>
            </div>
          </ScrollInView>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {supportiveCare.map(({ titleEn, titleZh, descEn, descZh }, idx) => (
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

      <SectionWithNumber
        number={1}
        title={isEn ? 'How we personalize your cycle' : 'æˆ‘ä»¬å¦‚ä½•ä¸ªæ€§åŒ–æ‚¨çš„æ²»ç–—å‘¨æœŸ'}
        subtitle={
          isEn
            ? 'A four-part framework ensures continuity from consultation to pregnancy confirmation'
            : 'å››ä¸ªé˜¶æ®µçš„æ¡†æž¶ç¡®ä¿ä»Žåˆè¯Šåˆ°éªŒå­•çš„è¿žç»­æ€§'
        }
        content={
          <ul className="space-y-3 text-[15px] text-[#5a555d]">
            <li>
              {isEn
                ? 'Detailed hormone interpretation and ultrasound mapping guide your protocol design.'
                : 'è¯¦ç»†çš„æ¿€ç´ è§£è¯»ä¸Žè¶…å£°å›¾è°±å¼•å¯¼æ–¹æ¡ˆè®¾è®¡ã€‚'}
            </li>
            <li>
              {isEn
                ? 'Our bilingual nurses review medications with you via video and in-person sessions.'
                : 'åŒè¯­æŠ¤ç†å›¢é˜Ÿé€šè¿‡è§†é¢‘ä¸Žé¢è¯Šï¼Œå…±åŒç¡®è®¤ç”¨è¯ç»†èŠ‚ã€‚'}
            </li>
            <li>
              {isEn
                ? 'In-house lab means your samples never leave our care and results are delivered quickly.'
                : 'é™¢å†…å®žéªŒå®¤ç¡®ä¿æ ‡æœ¬å…¨ç¨‹ç•™åœ¨ä¸­å¿ƒï¼Œç»“æžœåé¦ˆè¿…é€Ÿå¯é ã€‚'}
            </li>
            <li>
              {isEn
                ? 'Weekly integrative check-ins adapt nutrition, acupuncture, and counseling to your needs.'
                : 'æ¯å‘¨æ•´åˆæŠ¤ç†ä¼šè®®ï¼Œéšæ—¶è°ƒæ•´è¥å…»ã€é’ˆç¸ä¸Žå¿ƒç†æ”¯æŒã€‚'}
            </li>
          </ul>
        }
        imageSrc="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80"
        imageAlt={isEn ? 'IVY Fertility lab' : 'IVY ç”Ÿè‚²å®žéªŒå®¤'}
        backgroundColor="white"
        ctaText={isEn ? 'View sample cycle calendar' : '查看示例周期日程'}
        ctaHref="/start-here#readiness-checklist"
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-script text-3xl text-[#c86b79]">
                {isEn ? 'Your service journey' : 'æ‚¨çš„æœåŠ¡æ—…ç¨‹'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'What to expect from consultation to ongoing wellness'
                  : 'ä»Žåˆè¯Šåˆ°æŒç»­å¥åº·çš„å®Œæ•´ä½“éªŒ'}
              </h2>
            </div>
          </ScrollInView>

          <div className="mt-14 space-y-10 border-l border-[#e2d0c1] pl-8 md:pl-12">
            {serviceJourney.map(({ stepEn, stepZh, descEn, descZh }, idx) => (
              <ScrollInView key={stepEn} delay={idx * 0.1} className="relative pl-6">
                <span className="absolute -left-8 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#a63655] bg-[#fdf7f2] text-sm font-semibold text-[#a63655]">
                  {idx + 1}
                </span>
                <h3 className="text-xl text-[#2f2b33]">
                  {isEn ? stepEn : stepZh}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5a555d]">
                  {isEn ? descEn : descZh}
                </p>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-script text-3xl text-[#c86b79]">
            {isEn ? 'Letâ€™s plan the right service for you' : 'ä¸€èµ·è§„åˆ’æœ€é€‚åˆæ‚¨çš„æœåŠ¡'}
          </span>
          <h2 className="text-[40px] leading-tight text-[#2f2b33]">
            {isEn
              ? 'Book a complimentary consultation or explore our starter resources'
              : 'é¢„çº¦å…è´¹å’¨è¯¢ï¼Œæˆ–å…ˆæµè§ˆæˆ‘ä»¬çš„å…¥é—¨èµ„æº'}
          </h2>
          <p className="max-w-3xl text-[16px] leading-relaxed text-[#5a555d]">
            {isEn
              ? 'We will review your medical history, discuss goals, and recommend the services and support bundles that align with your timeline.'
              : 'æˆ‘ä»¬ä¼šä¸€èµ·å›žé¡¾æ‚¨çš„ç—…å²ï¼Œæ˜Žç¡®ç›®æ ‡ï¼Œå¹¶æŽ¨èç¬¦åˆæ‚¨æ—¶é—´è§„åˆ’çš„æœåŠ¡ä¸Žæ”¯æŒç»„åˆã€‚'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg">
              {isEn ? 'Schedule consultation' : 'é¢„çº¦å’¨è¯¢'}
            </Button>
            <Link href="/start-here" className="inline-flex">
              <Button variant="outline" size="lg">
                {isEn ? 'View starter resources' : 'æŸ¥çœ‹å…¥é—¨èµ„æº'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
