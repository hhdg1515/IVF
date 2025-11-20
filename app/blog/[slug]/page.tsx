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

                  {post.category === 'mind-body' && post.slug === 'calm-breathing-3min' && (
                    <div className="space-y-8 mt-12">
                      <div>
                        <h2 className="text-[28px] font-semibold text-[#2f2b33]">
                          {isEn ? 'Why This Practice Works' : '为什么这个练习有效'}
                        </h2>
                        <p className="mt-4">
                          {isEn
                            ? 'During IVF treatment, anxiety often manifests as rapid breathing and an activated nervous system. The 4-6 breathing technique (4 seconds in, 6 seconds out) activates your parasympathetic nervous system, which counters the stress response. Research shows this breathing pattern can reduce cortisol levels by up to 30% within just 3 minutes.'
                            : '在IVF治疗期间，焦虑通常表现为快速呼吸和神经系统激活。4-6呼吸技巧（吸气4秒，呼气6秒）能激活您的副交感神经系统，对抗压力反应。研究表明，这种呼吸模式可以在短短3分钟内将皮质醇水平降低多达30%。'}
                        </p>
                      </div>

                      <div className="rounded-lg bg-[#f7eee7] p-8">
                        <h3 className="text-[24px] font-semibold text-[#2f2b33] mb-6">
                          {isEn ? 'Step-by-Step Practice' : '分步练习指南'}
                        </h3>
                        <div className="space-y-6">
                          <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#a63655] text-white flex items-center justify-center font-semibold">1</div>
                            <div>
                              <h4 className="font-semibold text-[#2f2b33] mb-2">{isEn ? 'Find Your Position' : '找到舒适位置'}</h4>
                              <p className="text-[15px] text-[#5a555d]">
                                {isEn
                                  ? 'Sit comfortably with your feet flat on the ground, or lie down. Place one hand on your chest and one on your belly to feel your breath.'
                                  : '舒适地坐着，双脚平放在地面上，或躺下。一只手放在胸前，一只手放在腹部，感受您的呼吸。'}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#a63655] text-white flex items-center justify-center font-semibold">2</div>
                            <div>
                              <h4 className="font-semibold text-[#2f2b33] mb-2">{isEn ? 'Inhale (4 seconds)' : '吸气（4秒）'}</h4>
                              <p className="text-[15px] text-[#5a555d]">
                                {isEn
                                  ? 'Breathe in slowly through your nose for 4 counts. Feel your belly expand like a balloon. Count: 1... 2... 3... 4...'
                                  : '通过鼻子缓慢吸气，数4下。感受腹部像气球一样膨胀。数：1...2...3...4...'}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#a63655] text-white flex items-center justify-center font-semibold">3</div>
                            <div>
                              <h4 className="font-semibold text-[#2f2b33] mb-2">{isEn ? 'Exhale (6 seconds)' : '呼气（6秒）'}</h4>
                              <p className="text-[15px] text-[#5a555d]">
                                {isEn
                                  ? 'Breathe out slowly through your mouth for 6 counts. Let your belly gently deflate. Count: 1... 2... 3... 4... 5... 6...'
                                  : '通过嘴巴缓慢呼气，数6下。让腹部轻轻收缩。数：1...2...3...4...5...6...'}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#a63655] text-white flex items-center justify-center font-semibold">4</div>
                            <div>
                              <h4 className="font-semibold text-[#2f2b33] mb-2">{isEn ? 'Repeat 10 Times' : '重复10次'}</h4>
                              <p className="text-[15px] text-[#5a555d]">
                                {isEn
                                  ? 'Continue this pattern for 10 full breath cycles (about 3 minutes). If your mind wanders, gently bring your attention back to counting.'
                                  : '继续这个模式进行10个完整的呼吸循环（约3分钟）。如果您的思绪游离，温柔地将注意力带回到计数上。'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-[#c86b79] pl-6 py-2">
                        <h3 className="text-[20px] font-semibold text-[#2f2b33] mb-3">
                          {isEn ? 'Best Times to Practice' : '最佳练习时机'}
                        </h3>
                        <ul className="space-y-2 text-[15px]">
                          <li className="flex items-start gap-2">
                            <span className="text-[#c86b79] mt-1">•</span>
                            <span>{isEn ? 'Before egg retrieval or embryo transfer procedures' : '取卵或胚胎移植手术前'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#c86b79] mt-1">•</span>
                            <span>{isEn ? 'During the two-week wait after transfer' : '移植后两周等待期间'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#c86b79] mt-1">•</span>
                            <span>{isEn ? 'Before medical appointments that cause stress' : '引起压力的医疗预约之前'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#c86b79] mt-1">•</span>
                            <span>{isEn ? 'Anytime you notice racing thoughts or tension' : '任何时候注意到思绪混乱或紧张时'}</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="text-[18px] font-semibold text-blue-900 mb-3">
                          {isEn ? '💡 Pro Tip' : '💡 专业提示'}
                        </h3>
                        <p className="text-[15px] text-blue-800">
                          {isEn
                            ? 'Set a daily reminder on your phone to practice at the same time each day. Consistency builds the skill so it becomes automatic when you need it most during stressful moments.'
                            : '在手机上设置每日提醒，在每天同一时间练习。持续性练习会建立这个技能，使其在您最需要的压力时刻自动发挥作用。'}
                        </p>
                      </div>

                      <div className="mt-8 bg-gradient-to-r from-[#a63655] to-[#c86b79] rounded-2xl p-8 text-center text-white shadow-lg">
                        <h3 className="text-[24px] font-semibold mb-3">
                          {isEn ? '🎯 Ready to Practice?' : '🎯 准备开始练习？'}
                        </h3>
                        <p className="text-[16px] mb-6 opacity-90">
                          {isEn
                            ? 'Try our interactive 3-minute guided breathing exercise now'
                            : '立即尝试我们的3分钟交互式引导呼吸练习'}
                        </p>
                        <Link href="/practice/calm-breathing">
                          <Button variant="outline" size="lg" className="bg-white text-[#a63655] hover:bg-gray-50 border-0 text-lg px-8 py-4">
                            {isEn ? '▶ Start Interactive Practice' : '▶ 开始交互式练习'}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )}

                  {post.category === 'mind-body' && post.slug === 'bedtime-relaxation' && (
                    <div className="space-y-8 mt-12">
                      <div>
                        <h2 className="text-[28px] font-semibold text-[#2f2b33]">
                          {isEn ? 'The Sleep Challenge During IVF' : 'IVF期间的睡眠挑战'}
                        </h2>
                        <p className="mt-4">
                          {isEn
                            ? 'Up to 70% of women undergoing IVF report sleep disturbances. Hormone fluctuations, medication side effects, and anxiety about outcomes can make restful sleep difficult. This progressive muscle relaxation practice combines breathing, body awareness, and gentle visualization to prepare your body and mind for deep, restorative sleep.'
                            : '多达70%接受IVF的女性报告睡眠障碍。激素波动、药物副作用和对结果的焦虑会使恢复性睡眠变得困难。这个渐进式肌肉放松练习结合了呼吸、身体觉察和温和的可视化，为您的身心准备深度、恢复性睡眠。'}
                        </p>
                      </div>

                      <div className="rounded-lg bg-[#f7eee7] p-8">
                        <h3 className="text-[24px] font-semibold text-[#2f2b33] mb-6">
                          {isEn ? '20-Minute Bedtime Routine' : '20分钟睡前流程'}
                        </h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-[#2f2b33] mb-2 flex items-center gap-2">
                              <span className="text-[#c86b79]">⏰</span>
                              {isEn ? 'Minutes 1-5: Breathing Foundation' : '第1-5分钟：呼吸基础'}
                            </h4>
                            <p className="text-[15px] text-[#5a555d] ml-7">
                              {isEn
                                ? 'Lie in bed, close your eyes. Breathe in for 4 counts, out for 6 counts. Let each exhale release the day\'s tension. Focus only on the rhythm of your breath.'
                                : '躺在床上，闭上眼睛。吸气4下，呼气6下。让每次呼气释放一天的紧张。只专注于呼吸的节奏。'}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#2f2b33] mb-2 flex items-center gap-2">
                              <span className="text-[#c86b79]">⏰</span>
                              {isEn ? 'Minutes 6-15: Progressive Muscle Relaxation' : '第6-15分钟：渐进式肌肉放松'}
                            </h4>
                            <div className="text-[15px] text-[#5a555d] ml-7 space-y-3">
                              <p>{isEn ? 'Gently tense and release each muscle group for 5 seconds:' : '轻轻收紧并释放每个肌肉群5秒：'}</p>
                              <ul className="space-y-2">
                                <li>• {isEn ? 'Feet and toes → curl tight, then release' : '脚和脚趾 → 紧紧蜷缩，然后释放'}</li>
                                <li>• {isEn ? 'Legs and thighs → squeeze, then soften' : '腿和大腿 → 挤压，然后放松'}</li>
                                <li>• {isEn ? 'Hands and arms → make fists, then open' : '手和手臂 → 握拳，然后张开'}</li>
                                <li>• {isEn ? 'Shoulders → lift toward ears, then drop' : '肩膀 → 向耳朵方向提起，然后放下'}</li>
                                <li>• {isEn ? 'Face → scrunch all facial muscles, then release' : '面部 → 皱起所有面部肌肉，然后释放'}</li>
                              </ul>
                              <p className="italic">{isEn ? 'Notice how relaxed each area feels after releasing.' : '注意释放后每个区域的放松感。'}</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#2f2b33] mb-2 flex items-center gap-2">
                              <span className="text-[#c86b79]">⏰</span>
                              {isEn ? 'Minutes 16-20: Guided Visualization' : '第16-20分钟：引导可视化'}
                            </h4>
                            <p className="text-[15px] text-[#5a555d] ml-7">
                              {isEn
                                ? 'Imagine yourself in a peaceful place—perhaps a quiet beach at sunset or a cozy cabin in the woods. Engage all five senses: What do you see? Hear? Feel? Smell? Let yourself sink deeper into this safe, restful space with each breath.'
                                : '想象自己在一个平静的地方——也许是日落时分的安静海滩，或森林中的温馨小屋。调动五感：您看到什么？听到什么？感觉到什么？闻到什么？随着每次呼吸，让自己更深地沉入这个安全、宁静的空间。'}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-[#c86b79] pl-6 py-2">
                        <h3 className="text-[20px] font-semibold text-[#2f2b33] mb-3">
                          {isEn ? 'Creating the Ideal Sleep Environment' : '创造理想的睡眠环境'}
                        </h3>
                        <ul className="space-y-2 text-[15px]">
                          <li className="flex items-start gap-2">
                            <span className="text-[#c86b79] mt-1">•</span>
                            <span>{isEn ? 'Dim lights 30 minutes before bed' : '睡前30分钟调暗灯光'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#c86b79] mt-1">•</span>
                            <span>{isEn ? 'Keep bedroom temperature cool (65-68°F / 18-20°C)' : '保持卧室温度凉爽（65-68°F / 18-20°C）'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#c86b79] mt-1">•</span>
                            <span>{isEn ? 'Avoid screens for 1 hour before practice' : '练习前1小时避免使用屏幕'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#c86b79] mt-1">•</span>
                            <span>{isEn ? 'Use lavender essential oil or calming scents' : '使用薰衣草精油或舒缓香味'}</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h3 className="text-[18px] font-semibold text-purple-900 mb-3">
                          {isEn ? '💤 What If I Fall Asleep During Practice?' : '💤 如果我在练习中睡着了怎么办？'}
                        </h3>
                        <p className="text-[15px] text-purple-800">
                          {isEn
                            ? 'Perfect! That\'s exactly the goal. This practice is designed to guide you into sleep naturally. You don\'t need to complete all 20 minutes—falling asleep at any point means your body is responding beautifully to the relaxation.'
                            : '完美！这正是目标。这个练习旨在自然地引导您进入睡眠。您不需要完成全部20分钟——在任何时候睡着都意味着您的身体对放松有美好的反应。'}
                        </p>
                      </div>

                      <div className="mt-8 bg-gradient-to-r from-[#a63655] to-[#c86b79] rounded-2xl p-8 text-center text-white shadow-lg">
                        <h3 className="text-[24px] font-semibold mb-3">
                          {isEn ? '🎯 Ready for Better Sleep?' : '🎯 准备改善睡眠？'}
                        </h3>
                        <p className="text-[16px] mb-6 opacity-90">
                          {isEn
                            ? 'Try our interactive 20-minute bedtime relaxation practice tonight'
                            : '今晚尝试我们的20分钟睡前放松交互式练习'}
                        </p>
                        <Link href="/practice/bedtime-relaxation">
                          <Button variant="outline" size="lg" className="bg-white text-[#a63655] hover:bg-gray-50 border-0 text-lg px-8 py-4">
                            {isEn ? '▶ Start Bedtime Practice' : '▶ 开始睡前练习'}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )}

                  {post.category === 'mind-body' && post.slug === 'gratitude-practice' && (
                    <div className="space-y-8 mt-12">
                      <div>
                        <h2 className="text-[28px] font-semibold text-[#2f2b33]">
                          {isEn ? 'The Science of Gratitude' : '感恩的科学'}
                        </h2>
                        <p className="mt-4">
                          {isEn
                            ? 'Studies show that a daily gratitude practice can reduce depression by 35%, lower stress hormones, and even improve sleep quality. For women in IVF treatment, gratitude exercises help shift focus from what feels uncertain to what is present and positive, building emotional resilience during a challenging time.'
                            : '研究表明，每日感恩练习可以减少35%的抑郁，降低压力激素，甚至改善睡眠质量。对于接受IVF治疗的女性，感恩练习有助于将注意力从不确定的事物转移到当下和积极的事物上，在充满挑战的时期建立情绪韧性。'}
                        </p>
                      </div>

                      <div className="rounded-lg bg-[#f7eee7] p-8">
                        <h3 className="text-[24px] font-semibold text-[#2f2b33] mb-6">
                          {isEn ? 'Your 5-Minute Daily Practice' : '您的5分钟每日练习'}
                        </h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-[#2f2b33] mb-3">{isEn ? '📝 The Three Good Things' : '📝 三件好事'}</h4>
                            <p className="text-[15px] text-[#5a555d] mb-3">
                              {isEn
                                ? 'Each morning or evening, write down three specific things you\'re grateful for. Be detailed—don\'t just write "my partner," write "my partner making me tea this morning without me asking."'
                                : '每天早上或晚上，写下您感恩的三件具体事情。要详细——不要只写"我的伴侣"，要写"我的伴侣今早没等我开口就为我泡茶"。'}
                            </p>
                            <div className="bg-white rounded-lg p-4 space-y-3">
                              <p className="text-[14px] font-semibold text-[#2f2b33]">{isEn ? 'Example Entry:' : '示例条目：'}</p>
                              <div className="space-y-2 text-[14px]">
                                <p>1. {isEn ? 'The sunshine through my window that warmed my face while I meditated' : '阳光透过窗户温暖我的脸庞，当时我正在冥想'}</p>
                                <p>2. {isEn ? 'My nurse taking extra time to explain the next steps clearly' : '我的护士花额外时间清楚地解释下一步'}</p>
                                <p>3. {isEn ? 'My body\'s strength in showing up for another day of this journey' : '我的身体坚强地迎接这段旅程的又一天'}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="border-l-4 border-[#c86b79] pl-6 py-2">
                          <h3 className="text-[18px] font-semibold text-[#2f2b33] mb-3">
                            {isEn ? 'What to Focus On' : '关注什么'}
                          </h3>
                          <ul className="space-y-2 text-[15px]">
                            <li className="flex items-start gap-2">
                              <span className="text-[#c86b79] mt-1">✓</span>
                              <span>{isEn ? 'Small sensory moments' : '小的感官时刻'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#c86b79] mt-1">✓</span>
                              <span>{isEn ? 'Acts of kindness from others' : '他人的善意行为'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#c86b79] mt-1">✓</span>
                              <span>{isEn ? 'Your body\'s resilience' : '您身体的韧性'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#c86b79] mt-1">✓</span>
                              <span>{isEn ? 'Unexpected positive moments' : '意外的积极时刻'}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="border-l-4 border-red-300 pl-6 py-2">
                          <h3 className="text-[18px] font-semibold text-[#2f2b33] mb-3">
                            {isEn ? 'What to Avoid' : '避免什么'}
                          </h3>
                          <ul className="space-y-2 text-[15px]">
                            <li className="flex items-start gap-2">
                              <span className="text-red-400 mt-1">✗</span>
                              <span>{isEn ? 'Forcing positivity about treatment' : '强迫对治疗持积极态度'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-red-400 mt-1">✗</span>
                              <span>{isEn ? 'Repeating the same generic items' : '重复相同的笼统项目'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-red-400 mt-1">✗</span>
                              <span>{isEn ? 'Comparing to others\' journeys' : '与他人的旅程比较'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-red-400 mt-1">✗</span>
                              <span>{isEn ? 'Judging yourself for difficult days' : '因困难的日子而评判自己'}</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                        <h3 className="text-[18px] font-semibold text-amber-900 mb-3">
                          {isEn ? '🌟 Gratitude During Setbacks' : '🌟 挫折中的感恩'}
                        </h3>
                        <p className="text-[15px] text-amber-800">
                          {isEn
                            ? 'On difficult days—after disappointing news or a failed cycle—gratitude practice isn\'t about denying pain. It\'s about acknowledging that hardship and small goodness can coexist. Even writing "I\'m grateful I allowed myself to cry today" is valid and powerful.'
                            : '在困难的日子——收到令人失望的消息或周期失败后——感恩练习不是否认痛苦。而是承认困难和小小的美好可以共存。即使写下"我感恩今天允许自己哭泣"也是有效且有力的。'}
                        </p>
                      </div>

                      <div className="mt-8 bg-gradient-to-r from-[#a63655] to-[#c86b79] rounded-2xl p-8 text-center text-white shadow-lg">
                        <h3 className="text-[24px] font-semibold mb-3">
                          {isEn ? '🎯 Start Your Gratitude Journey' : '🎯 开始感恩之旅'}
                        </h3>
                        <p className="text-[16px] mb-6 opacity-90">
                          {isEn
                            ? 'Begin a 5-minute gratitude breathing practice to cultivate positive mindset'
                            : '开始5分钟感恩呼吸练习，培养积极心态'}
                        </p>
                        <Link href="/practice/gratitude-breathing">
                          <Button variant="outline" size="lg" className="bg-white text-[#a63655] hover:bg-gray-50 border-0 text-lg px-8 py-4">
                            {isEn ? '▶ Start Gratitude Practice' : '▶ 开始感恩练习'}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )}

                  {post.category === 'mind-body' && post.slug === 'loving-breath' && (
                    <div className="space-y-8 mt-12">
                      <div>
                        <h2 className="text-[28px] font-semibold text-[#2f2b33]">
                          {isEn ? 'The Two-Week Wait: A Time for Connection' : '两周等待期：建立连接的时刻'}
                        </h2>
                        <p className="mt-4">
                          {isEn
                            ? 'After embryo transfer, the waiting period can feel agonizing. This loving-breath meditation helps you shift from anxious anticipation to peaceful presence. By combining breathwork with gentle visualization, you create a sense of connection with the potential life within while honoring your own emotional needs.'
                            : '胚胎移植后，等待期可能感觉痛苦。这个爱的呼吸冥想帮助您从焦虑的期待转向平和的当下。通过结合呼吸练习和温和的可视化，您与内在的潜在生命建立连接感，同时尊重自己的情感需求。'}
                        </p>
                      </div>

                      <div className="rounded-lg bg-[#f7eee7] p-8">
                        <h3 className="text-[24px] font-semibold text-[#2f2b33] mb-6">
                          {isEn ? '7-Minute Loving-Breath Practice' : '7分钟爱的呼吸练习'}
                        </h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-[#2f2b33] mb-2 flex items-center gap-2">
                              <span className="text-[#c86b79]">1.</span>
                              {isEn ? 'Settle In (1 minute)' : '安顿下来（1分钟）'}
                            </h4>
                            <p className="text-[15px] text-[#5a555d] ml-7">
                              {isEn
                                ? 'Find a quiet place to sit or lie down. Place both hands gently over your lower abdomen. Close your eyes and take three slow, deep breaths.'
                                : '找一个安静的地方坐下或躺下。双手轻轻放在下腹部。闭上眼睛，做三次缓慢的深呼吸。'}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#2f2b33] mb-2 flex items-center gap-2">
                              <span className="text-[#c86b79]">2.</span>
                              {isEn ? 'Begin the Breath Pattern (3 minutes)' : '开始呼吸模式（3分钟）'}
                            </h4>
                            <div className="text-[15px] text-[#5a555d] ml-7 space-y-2">
                              <p><strong>{isEn ? 'Inhale (5 counts):' : '吸气（5下）：'}</strong> {isEn ? 'As you breathe in, imagine breathing in warmth, light, and love.' : '吸气时，想象吸入温暖、光明和爱。'}</p>
                              <p><strong>{isEn ? 'Hold (2 counts):' : '屏息（2下）：'}</strong> {isEn ? 'Hold the breath gently, feeling that warmth fill your belly.' : '轻轻屏息，感受温暖充满您的腹部。'}</p>
                              <p><strong>{isEn ? 'Exhale (5 counts):' : '呼气（5下）：'}</strong> {isEn ? 'Breathe out any worry, tension, or fear. Release it fully.' : '呼出任何担忧、紧张或恐惧。完全释放它。'}</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#2f2b33] mb-2 flex items-center gap-2">
                              <span className="text-[#c86b79]">3.</span>
                              {isEn ? 'Add the Loving Intention (2 minutes)' : '加入爱的意图（2分钟）'}
                            </h4>
                            <p className="text-[15px] text-[#5a555d] ml-7 mb-3">
                              {isEn
                                ? 'With each inhale, silently say one of these phrases (or create your own):'
                                : '每次吸气时，默默说出以下短语之一（或创建您自己的）：'}
                            </p>
                            <div className="ml-7 bg-white rounded-lg p-4 space-y-2 text-[14px] italic">
                              <p>• {isEn ? '"I am creating a safe space within me."' : '"我正在内心创造一个安全的空间。"'}</p>
                              <p>• {isEn ? '"My body knows how to nurture life."' : '"我的身体知道如何孕育生命。"'}</p>
                              <p>• {isEn ? '"I send love to the cells growing within."' : '"我向内在生长的细胞发送爱。"'}</p>
                              <p>• {isEn ? '"Whatever happens, I am enough."' : '"无论发生什么，我已足够。"'}</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#2f2b33] mb-2 flex items-center gap-2">
                              <span className="text-[#c86b79]">4.</span>
                              {isEn ? 'Close with Gratitude (1 minute)' : '以感恩结束（1分钟）'}
                            </h4>
                            <p className="text-[15px] text-[#5a555d] ml-7">
                              {isEn
                                ? 'Place one hand on your heart, one on your belly. Take three final deep breaths. Thank your body for all it\'s doing. Slowly open your eyes when ready.'
                                : '一只手放在心脏上，一只手放在腹部。做三次最后的深呼吸。感谢您的身体所做的一切。准备好时慢慢睁开眼睛。'}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-[#c86b79] pl-6 py-2">
                        <h3 className="text-[20px] font-semibold text-[#2f2b33] mb-3">
                          {isEn ? 'When to Practice' : '何时练习'}
                        </h3>
                        <ul className="space-y-2 text-[15px]">
                          <li className="flex items-start gap-2">
                            <span className="text-[#c86b79] mt-1">•</span>
                            <span>{isEn ? 'Daily during the two-week wait after transfer' : '移植后两周等待期间每天练习'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#c86b79] mt-1">•</span>
                            <span>{isEn ? 'Before bed to promote restful sleep' : '睡前练习以促进恢复性睡眠'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#c86b79] mt-1">•</span>
                            <span>{isEn ? 'Anytime you feel disconnected or overwhelmed' : '任何时候感到疏离或不知所措时'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#c86b79] mt-1">•</span>
                            <span>{isEn ? 'In the morning to set a peaceful intention for the day' : '早上为一天设定平和的意图'}</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-rose-50 border border-rose-200 rounded-lg p-6">
                        <h3 className="text-[18px] font-semibold text-rose-900 mb-3">
                          {isEn ? '💗 A Note on Hope and Realism' : '💗 关于希望和现实的说明'}
                        </h3>
                        <p className="text-[15px] text-rose-800">
                          {isEn
                            ? 'This practice is not about "willing" a pregnancy to happen or feeling guilty if it doesn\'t. It\'s about honoring the present moment, caring for yourself, and finding peace regardless of the outcome. Your worth is not determined by any test result.'
                            : '这个练习不是关于"意愿"怀孕发生，或如果没有发生就感到内疚。而是关于尊重当下时刻，照顾自己，无论结果如何都找到平静。您的价值不由任何测试结果决定。'}
                        </p>
                      </div>

                      <div className="mt-8 bg-gradient-to-r from-[#a63655] to-[#c86b79] rounded-2xl p-8 text-center text-white shadow-lg">
                        <h3 className="text-[24px] font-semibold mb-3">
                          {isEn ? '🎯 Connect with Hope' : '🎯 与希望连接'}
                        </h3>
                        <p className="text-[16px] mb-6 opacity-90">
                          {isEn
                            ? 'Try the 7-minute loving-breath meditation for your waiting period'
                            : '尝试7分钟爱的呼吸冥想，适合等待期'}
                        </p>
                        <Link href="/practice/loving-breath">
                          <Button variant="outline" size="lg" className="bg-white text-[#a63655] hover:bg-gray-50 border-0 text-lg px-8 py-4">
                            {isEn ? '▶ Start Loving-Breath Practice' : '▶ 开始爱的呼吸练习'}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )}

                  {post.category === 'mind-body' && post.slug === 'anxiety-assessment-gad7' && (
                    <div className="space-y-8 mt-12">
                      <div>
                        <h2 className="text-[28px] font-semibold text-[#2f2b33]">
                          {isEn ? 'What is the GAD-7?' : '什么是GAD-7？'}
                        </h2>
                        <p className="mt-4">
                          {isEn
                            ? 'The Generalized Anxiety Disorder-7 (GAD-7) is a validated clinical tool used by mental health professionals worldwide to measure anxiety levels. It consists of 7 simple questions about how you\'ve felt over the past two weeks. For IVF patients, regular self-assessment helps you track your emotional well-being and identify when you might benefit from additional support.'
                            : '广泛性焦虑障碍-7（GAD-7）是全球心理健康专业人员使用的经过验证的临床工具，用于测量焦虑水平。它包含7个简单问题，关于您在过去两周的感受。对于IVF患者，定期自我评估帮助您追踪情绪健康，并识别何时可能受益于额外支持。'}
                        </p>
                      </div>

                      <div className="rounded-lg bg-[#f7eee7] p-8">
                        <h3 className="text-[24px] font-semibold text-[#2f2b33] mb-6">
                          {isEn ? 'Understanding Your Score' : '理解您的评分'}
                        </h3>
                        <div className="space-y-4">
                          <div className="bg-green-50 border-l-4 border-green-500 p-4">
                            <h4 className="font-semibold text-green-900 mb-2">{isEn ? '0-4 Points: Minimal Anxiety' : '0-4分：最小焦虑'}</h4>
                            <p className="text-[15px] text-green-800">
                              {isEn
                                ? 'You\'re managing well emotionally. Continue your current coping strategies and self-care practices.'
                                : '您在情绪上管理得很好。继续您当前的应对策略和自我照顾实践。'}
                            </p>
                          </div>
                          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                            <h4 className="font-semibold text-yellow-900 mb-2">{isEn ? '5-9 Points: Mild Anxiety' : '5-9分：轻度焦虑'}</h4>
                            <p className="text-[15px] text-yellow-800">
                              {isEn
                                ? 'You\'re experiencing some anxiety symptoms. This is common during IVF. Consider adding daily breathing exercises and gratitude practices to your routine.'
                                : '您正在经历一些焦虑症状。这在IVF期间很常见。考虑在日常中添加每日呼吸练习和感恩实践。'}
                            </p>
                          </div>
                          <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                            <h4 className="font-semibold text-orange-900 mb-2">{isEn ? '10-14 Points: Moderate Anxiety' : '10-14分：中度焦虑'}</h4>
                            <p className="text-[15px] text-orange-800">
                              {isEn
                                ? 'Your anxiety is affecting daily life. We recommend speaking with our licensed counselor who specializes in fertility-related stress. They can provide targeted coping strategies.'
                                : '您的焦虑正在影响日常生活。我们建议与专门处理生育相关压力的执照咨询师交谈。他们可以提供针对性的应对策略。'}
                            </p>
                          </div>
                          <div className="bg-red-50 border-l-4 border-red-500 p-4">
                            <h4 className="font-semibold text-red-900 mb-2">{isEn ? '15-21 Points: Severe Anxiety' : '15-21分：重度焦虑'}</h4>
                            <p className="text-[15px] text-red-800">
                              {isEn
                                ? 'You\'re experiencing significant anxiety that requires professional support. Please contact our patient concierge immediately to schedule an urgent counseling session. You don\'t have to navigate this alone.'
                                : '您正在经历需要专业支持的严重焦虑。请立即联系我们的患者礼宾团队安排紧急咨询会议。您不必独自应对这一切。'}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="border rounded-lg p-6">
                          <h3 className="text-[20px] font-semibold text-[#2f2b33] mb-4">
                            {isEn ? 'Common IVF Anxiety Triggers' : '常见IVF焦虑触发因素'}
                          </h3>
                          <ul className="space-y-2 text-[15px]">
                            <li className="flex items-start gap-2">
                              <span className="text-[#c86b79] mt-1">•</span>
                              <span>{isEn ? 'Waiting for test results' : '等待测试结果'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#c86b79] mt-1">•</span>
                              <span>{isEn ? 'Fear of treatment failure' : '对治疗失败的恐惧'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#c86b79] mt-1">•</span>
                              <span>{isEn ? 'Financial stress' : '财务压力'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#c86b79] mt-1">•</span>
                              <span>{isEn ? 'Hormone medication side effects' : '激素药物副作用'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#c86b79] mt-1">•</span>
                              <span>{isEn ? 'Social pressure and questions' : '社会压力和问题'}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-6">
                          <h3 className="text-[20px] font-semibold text-[#2f2b33] mb-4">
                            {isEn ? 'When to Seek Help' : '何时寻求帮助'}
                          </h3>
                          <ul className="space-y-2 text-[15px]">
                            <li className="flex items-start gap-2">
                              <span className="text-[#c86b79] mt-1">•</span>
                              <span>{isEn ? 'Anxiety interferes with daily tasks' : '焦虑干扰日常任务'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#c86b79] mt-1">•</span>
                              <span>{isEn ? 'Persistent sleep problems' : '持续的睡眠问题'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#c86b79] mt-1">•</span>
                              <span>{isEn ? 'Physical symptoms (racing heart, nausea)' : '身体症状（心跳加速、恶心）'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#c86b79] mt-1">•</span>
                              <span>{isEn ? 'Avoiding social situations' : '避免社交场合'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#c86b79] mt-1">•</span>
                              <span>{isEn ? 'Thoughts of self-harm' : '自我伤害的想法'}</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="text-[18px] font-semibold text-blue-900 mb-3">
                          {isEn ? '📞 IVY Mental Health Support' : '📞 IVY心理健康支持'}
                        </h3>
                        <p className="text-[15px] text-blue-800 mb-4">
                          {isEn
                            ? 'Every IVY patient has access to our licensed clinical psychologist, Dr. Lisa Thompson, who specializes in fertility-related anxiety and depression. Counseling sessions can be scheduled in-person or via telehealth.'
                            : '每位IVY患者都可以接触我们的执照临床心理学家丽莎·汤普森博士，她专门处理与生育相关的焦虑和抑郁。咨询会议可以面对面或通过远程医疗安排。'}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <Link href="/contact">
                            <Button variant="primary">
                              {isEn ? 'Schedule Counseling' : '安排咨询'}
                            </Button>
                          </Link>
                        </div>
                      </div>

                      <div className="border-l-4 border-[#c86b79] pl-6 py-2">
                        <h3 className="text-[20px] font-semibold text-[#2f2b33] mb-3">
                          {isEn ? 'Recommended Self-Care Practices' : '推荐的自我照顾实践'}
                        </h3>
                        <p className="text-[15px] mb-3">
                          {isEn
                            ? 'Based on your anxiety level, we recommend incorporating these evidence-based practices:'
                            : '根据您的焦虑水平，我们建议加入这些基于证据的实践：'}
                        </p>
                        <div className="grid md:grid-cols-2 gap-3 text-[14px]">
                          <div className="bg-white rounded p-3">
                            <strong>{isEn ? 'Daily:' : '每日：'}</strong> {isEn ? 'Calm Breathing (3 min)' : '平静呼吸（3分钟）'}
                          </div>
                          <div className="bg-white rounded p-3">
                            <strong>{isEn ? 'Daily:' : '每日：'}</strong> {isEn ? 'Gratitude Practice (5 min)' : '感恩练习（5分钟）'}
                          </div>
                          <div className="bg-white rounded p-3">
                            <strong>{isEn ? 'Nightly:' : '每晚：'}</strong> {isEn ? 'Bedtime Relaxation (20 min)' : '睡前放松（20分钟）'}
                          </div>
                          <div className="bg-white rounded p-3">
                            <strong>{isEn ? 'As needed:' : '按需：'}</strong> {isEn ? 'Loving-Breath Meditation (7 min)' : '爱的呼吸冥想（7分钟）'}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {post.category === 'mind-body' && !['calm-breathing-3min', 'bedtime-relaxation', 'gratitude-practice', 'loving-breath', 'anxiety-assessment-gad7'].includes(post.slug) && (
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
