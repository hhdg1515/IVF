'use client'

import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { Card } from '@/components/ui/Card'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { Button } from '@/components/ui/Button'
import { featuredTeamMembers, allTeamMembers } from '@/lib/team-data'
import Link from 'next/link'

export default function OurTeamPage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'Meet Your Care Team' : '认识您的护理团队'}
        backgroundImage="/images/service.jpg"
        title={isEn ? 'World-class expertise with compassionate care' : '世界级专业知识与富有同情心的护理'}
        subtitle={isEn ? 'Board-certified specialists, experienced embryologists, and dedicated support staff—all working together for you.' : '委员会认证的专家、经验丰富的胚胎学家和专职支持人员——共同为您服务。'}
        primaryCtaText={isEn ? 'Schedule consultation' : '预约咨询'}
        primaryCtaHref="/contact"
        stats={[
          { value: '50+', label: isEn ? 'Years combined experience' : '年累计经验' },
          { value: '2,000+', label: isEn ? 'Families helped' : '帮助的家庭' },
          { value: '5', label: isEn ? 'Languages spoken' : '种语言服务' },
        ]}
        priority
      />

      {/* Featured Leadership */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Leadership team' : '领导团队'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Led by pioneers in reproductive medicine' : '由生殖医学先驱领导'}
              </h2>
            </div>
          </ScrollInView>

          <div className="space-y-16">
            {featuredTeamMembers.map((member, idx) => (
              <ScrollInView key={member.id} delay={idx * 0.1}>
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-[300px_1fr] gap-8">
                    {/* Photo */}
                    <div className="bg-[#e8d5d0] h-[400px] md:h-auto">
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="h-32 w-32 text-[#c86b79]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-8 py-8">
                      <h3 className="text-3xl font-serif text-[#2f2b33] mb-2">
                        {isEn ? member.name : member.nameZh}
                      </h3>
                      <p className="text-lg text-[#a63655] font-medium mb-4">
                        {isEn ? member.role : member.roleZh}
                      </p>
                      <p className="text-sm text-[#5a555d] mb-6">{member.credentials}</p>

                      {/* Education */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-[#2f2b33] uppercase tracking-wide mb-3">
                          {isEn ? 'Education & Training' : '教育与培训'}
                        </h4>
                        <ul className="space-y-2">
                          {(isEn ? member.bio.education : member.bio.educationZh).map((edu, eduIdx) => (
                            <li key={eduIdx} className="text-[15px] text-[#5a555d] flex items-start gap-2">
                              <span className="text-[#a63655] mt-1">•</span>
                              <span>{edu}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Philosophy */}
                      <div className="bg-[#f7ebe5] p-6 rounded-lg mb-6">
                        <p className="text-[15px] leading-relaxed text-[#2f2b33] italic">
                          "{isEn ? member.bio.philosophy : member.bio.philosophyZh}"
                        </p>
                      </div>

                      {/* Achievements */}
                      {member.achievements && (
                        <div className="flex flex-wrap gap-6 text-sm">
                          {member.achievements.publications && (
                            <div>
                              <span className="text-2xl font-semibold text-[#a63655]">{member.achievements.publications}</span>
                              <p className="text-[#5a555d]">{isEn ? 'Publications' : '发表论文'}</p>
                            </div>
                          )}
                          {member.achievements.yearsOfPractice && (
                            <div>
                              <span className="text-2xl font-semibold text-[#a63655]">{member.achievements.yearsOfPractice}+</span>
                              <p className="text-[#5a555d]">{isEn ? 'Years Experience' : '年经验'}</p>
                            </div>
                          )}
                          {member.achievements.patientsHelped && (
                            <div>
                              <span className="text-2xl font-semibold text-[#a63655]">{member.achievements.patientsHelped.toLocaleString()}+</span>
                              <p className="text-[#5a555d]">{isEn ? 'Families Helped' : '帮助的家庭'}</p>
                            </div>
                          )}
                          {member.achievements.languages && (
                            <div>
                              <p className="text-[15px] text-[#5a555d]">
                                <span className="font-semibold text-[#2f2b33]">{isEn ? 'Languages:' : '语言：'}</span>{' '}
                                {member.achievements.languages.join(', ')}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Full Team */}
      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Complete care team' : '完整护理团队'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Every specialist you need, all in one place' : '您需要的每位专家，都在同一个地方'}
              </h2>
            </div>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allTeamMembers.filter(m => !m.featured).map((member, idx) => (
              <ScrollInView key={member.id} delay={idx * 0.1}>
                <Card className="px-6 py-8 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-[#e8d5d0] flex items-center justify-center mb-4">
                      <svg className="h-12 w-12 text-[#c86b79]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-[#2f2b33] mb-1">
                      {isEn ? member.name : member.nameZh}
                    </h3>
                    <p className="text-sm text-[#a63655] font-medium mb-4">
                      {isEn ? member.role : member.roleZh}
                    </p>
                    <p className="text-[14px] text-[#5a555d] leading-relaxed mb-4">
                      {isEn ? member.bio.experience : member.bio.experienceZh}
                    </p>
                    {member.achievements?.languages && (
                      <p className="text-[13px] text-[#5a555d]">
                        <span className="font-semibold">{isEn ? 'Languages:' : '语言：'}</span>{' '}
                        {member.achievements.languages.join(', ')}
                      </p>
                    )}
                  </div>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-0">
          <ScrollInView>
            <div className="text-center mb-12">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Our approach' : '我们的方法'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'How we work together for you' : '我们如何为您共同努力'}
              </h2>
            </div>
          </ScrollInView>

          <div className="grid gap-6 md:grid-cols-3">
            <ScrollInView delay={0.1}>
              <Card className="px-6 py-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#f7ebe5] flex items-center justify-center">
                    <svg className="h-8 w-8 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#2f2b33] mb-3">
                  {isEn ? 'Collaborative Care' : '协作护理'}
                </h3>
                <p className="text-[14px] text-[#5a555d] leading-relaxed">
                  {isEn
                    ? 'Your case is reviewed by our entire team—physicians, embryologists, and counselors—to ensure comprehensive planning.'
                    : '您的病例由我们的整个团队审查——医生、胚胎学家和咨询师——以确保全面的规划。'}
                </p>
              </Card>
            </ScrollInView>

            <ScrollInView delay={0.2}>
              <Card className="px-6 py-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#f7ebe5] flex items-center justify-center">
                    <svg className="h-8 w-8 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#2f2b33] mb-3">
                  {isEn ? 'Evidence-Based' : '循证医学'}
                </h3>
                <p className="text-[14px] text-[#5a555d] leading-relaxed">
                  {isEn
                    ? 'We stay current with the latest research and adjust our protocols based on proven outcomes, not trends.'
                    : '我们紧跟最新研究，并根据经过验证的结果调整我们的方案，而非趋势。'}
                </p>
              </Card>
            </ScrollInView>

            <ScrollInView delay={0.3}>
              <Card className="px-6 py-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#f7ebe5] flex items-center justify-center">
                    <svg className="h-8 w-8 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#2f2b33] mb-3">
                  {isEn ? 'Patient-Centered' : '以患者为中心'}
                </h3>
                <p className="text-[14px] text-[#5a555d] leading-relaxed">
                  {isEn
                    ? 'You are never just a number. We listen, adapt to your needs, and support you emotionally every step of the way.'
                    : '您永远不只是一个数字。我们倾听、适应您的需求，并在每一步为您提供情感支持。'}
                </p>
              </Card>
            </ScrollInView>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e8d5d0] py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-serif italic text-3xl text-[#c86b79]">
            {isEn ? 'Ready to meet your care team?' : '准备认识您的护理团队？'}
          </span>
          <h2 className="text-[40px] leading-tight text-[#2f2b33]">
            {isEn ? 'Schedule your first consultation' : '预约您的初次咨询'}
          </h2>
          <p className="max-w-3xl text-[16px] leading-relaxed text-[#5a555d]">
            {isEn
              ? 'Meet with our physicians to discuss your fertility goals and create a personalized treatment plan.'
              : '与我们的医生会面，讨论您的生育目标并制定个性化治疗计划。'}
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              {isEn ? 'Book consultation' : '预约咨询'}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
