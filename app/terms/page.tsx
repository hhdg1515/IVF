'use client'

import { useLanguage } from '@/lib/context'
import { ScrollInView } from '@/components/ui/ScrollInView'
import Link from 'next/link'

export default function TermsPage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  return (
    <main className="bg-[#fdf7f2]">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#e8d5d0] to-[#fdf7f2] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-0">
          <ScrollInView>
            <h1 className="text-[48px] font-serif leading-tight text-[#2f2b33] md:text-[64px]">
              {isEn ? 'Terms of Service' : '服务条款'}
            </h1>
            <p className="mt-4 text-[16px] text-[#5a555d]">
              {isEn ? 'Effective Date: January 1, 2025' : '生效日期: 2025年1月1日'}
            </p>
            <p className="mt-2 text-[16px] text-[#5a555d]">
              {isEn ? 'Last Updated: January 1, 2025' : '最后更新: 2025年1月1日'}
            </p>
          </ScrollInView>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-0">
          <div className="prose prose-lg max-w-none">
            <ScrollInView>
              <div className="space-y-12">
                {/* Introduction */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '1. Introduction' : '1. 介绍'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'Welcome to IVY Fertility Center ("IVY Fertility," "we," "us," or "our"). These Terms of Service ("Terms") constitute a legally binding agreement between you and IVY Fertility Center governing your access to and use of our website, services, and facilities located in Los Angeles, California. By accessing our website or utilizing our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.'
                      : '欢迎访问 IVY Fertility Center（以下简称"IVY Fertility"、"我们"或"本机构"）。本服务条款（以下简称"条款"）是您与 IVY Fertility Center 之间的法律约束性协议，管辖您对我们位于加州洛杉矶的网站、服务及设施的访问和使用。访问我们的网站或使用我们的服务，即表示您已阅读、理解并同意受本条款的约束。'}
                  </p>
                </div>

                {/* Scope of Services */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '2. Scope of Services' : '2. 服务范围'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33] mb-4">
                    {isEn
                      ? 'IVY Fertility provides comprehensive reproductive health services, including but not limited to:'
                      : 'IVY Fertility 提供全面的生殖健康服务，包括但不限于：'}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#2f2b33]">
                    <li>{isEn ? 'In Vitro Fertilization (IVF) treatments' : '体外受精（IVF）治疗'}</li>
                    <li>{isEn ? 'Egg freezing (oocyte cryopreservation)' : '冻卵（卵母细胞冷冻保存）'}</li>
                    <li>{isEn ? 'Fertility consultations and diagnostic testing' : '生育咨询及诊断测试'}</li>
                    <li>{isEn ? 'Donor egg and sperm services' : '卵子和精子捐赠服务'}</li>
                    <li>{isEn ? 'Gestational surrogacy coordination' : '妊娠代孕协调'}</li>
                    <li>{isEn ? 'Embryo genetic testing and storage' : '胚胎基因检测及储存'}</li>
                    <li>{isEn ? 'Fertility preservation for medical reasons' : '医疗原因的生育力保存'}</li>
                  </ul>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33] mt-4">
                    {isEn
                      ? 'All medical services are provided by licensed physicians and healthcare professionals in accordance with California medical practice standards and applicable federal regulations.'
                      : '所有医疗服务均由持证医师及医疗专业人员按照加州医疗执业标准及适用的联邦法规提供。'}
                  </p>
                </div>

                {/* Patient Responsibilities */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '3. Patient Responsibilities' : '3. 患者责任'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33] mb-4">
                    {isEn ? 'As a patient or prospective patient, you agree to:' : '作为患者或潜在患者，您同意：'}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#2f2b33]">
                    <li>
                      {isEn
                        ? 'Provide accurate, complete, and current information about your medical history, current health status, and medications'
                        : '提供准确、完整和最新的病史、健康状况及用药信息'}
                    </li>
                    <li>
                      {isEn
                        ? 'Attend all scheduled appointments or provide at least 24 hours advance notice for cancellations'
                        : '参加所有预约或至少提前24小时通知取消'}
                    </li>
                    <li>
                      {isEn
                        ? 'Follow treatment protocols, medication schedules, and medical instructions provided by your care team'
                        : '遵循护理团队提供的治疗方案、用药时间表及医疗指导'}
                    </li>
                    <li>
                      {isEn
                        ? 'Maintain confidentiality of your account credentials and immediately notify us of any unauthorized access'
                        : '保管账户凭据的机密性，并立即通知我们任何未经授权的访问'}
                    </li>
                    <li>
                      {isEn
                        ? 'Promptly fulfill all financial obligations, including payment for services rendered'
                        : '及时履行所有财务义务，包括支付已提供服务的费用'}
                    </li>
                    <li>
                      {isEn
                        ? 'Treat all staff members, healthcare providers, and other patients with respect and dignity'
                        : '尊重对待所有员工、医疗服务提供者及其他患者'}
                    </li>
                  </ul>
                </div>

                {/* Medical Disclaimer */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '4. Medical Disclaimer' : '4. 医疗免责声明'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33] mb-4">
                    {isEn
                      ? 'While we strive to provide the highest quality fertility care, you understand and acknowledge that:'
                      : '虽然我们努力提供最高质量的生育护理，但您理解并承认：'}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#2f2b33]">
                    <li>
                      {isEn
                        ? 'Fertility treatments carry inherent medical risks, and success cannot be guaranteed'
                        : '生育治疗存在固有的医疗风险，无法保证成功'}
                    </li>
                    <li>
                      {isEn
                        ? 'Individual outcomes vary based on numerous biological, environmental, and lifestyle factors beyond our control'
                        : '个人结果因生物、环境及生活方式等多种不可控因素而异'}
                    </li>
                    <li>
                      {isEn
                        ? 'Information provided on our website is for educational purposes only and does not constitute medical advice'
                        : '我们网站上提供的信息仅供教育目的，不构成医疗建议'}
                    </li>
                    <li>
                      {isEn
                        ? 'You should consult directly with our physicians for personalized medical recommendations'
                        : '您应直接咨询我们的医生以获得个性化的医疗建议'}
                    </li>
                    <li>
                      {isEn
                        ? 'Statistics and success rates presented reflect aggregated historical data and may not predict your individual results'
                        : '所展示的统计数据及成功率反映历史汇总数据，可能无法预测您的个人结果'}
                    </li>
                  </ul>
                </div>

                {/* Appointment and Cancellation Policy */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '5. Appointment and Cancellation Policy' : '5. 预约及取消政策'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'Appointments may be scheduled through our patient portal, by phone, or via email. We require at least 24 hours advance notice for appointment cancellations or rescheduling. Failure to provide adequate notice or missing scheduled appointments without notification may result in a cancellation fee of up to $150. Repeated no-shows may impact your ability to schedule future appointments. Time-sensitive procedures (such as egg retrieval or embryo transfer) require strict adherence to scheduled times due to biological constraints.'
                      : '预约可通过患者门户、电话或电子邮件进行。我们要求至少提前24小时通知取消或重新安排预约。未能提供充分通知或未通知而错过预约可能导致最高$150的取消费。反复缺席可能影响您安排未来预约的能力。由于生物限制，时间敏感的程序（如取卵或胚胎移植）要求严格遵守预定时间。'}
                  </p>
                </div>

                {/* Payment and Financial Terms */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '6. Payment and Financial Terms' : '6. 付款及财务条款'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33] mb-4">
                    {isEn
                      ? 'Payment is due at the time services are rendered unless alternative arrangements have been made in advance. We accept major credit cards, debit cards, health savings account (HSA) cards, and electronic bank transfers. Payment plans may be available for qualifying patients. You are responsible for:'
                      : '除非已预先作出其他安排，否则在提供服务时应付款。我们接受主要信用卡、借记卡、健康储蓄账户（HSA）卡及电子银行转账。符合条件的患者可能可以使用分期付款计划。您负责：'}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#2f2b33]">
                    <li>
                      {isEn
                        ? 'Understanding your insurance coverage and obtaining pre-authorizations when required'
                        : '了解您的保险范围并在需要时获得预先授权'}
                    </li>
                    <li>
                      {isEn
                        ? 'Paying all deductibles, co-payments, and non-covered services as determined by your insurance plan'
                        : '支付所有免赔额、共付额及保险计划确定的非承保服务费用'}
                    </li>
                    <li>
                      {isEn
                        ? 'Settling any balance not covered by insurance within 30 days of receiving a statement'
                        : '在收到账单后30天内结清保险未承保的任何余额'}
                    </li>
                    <li>
                      {isEn
                        ? 'Paying applicable late fees (1.5% per month) on overdue balances after 30 days'
                        : '对30天后逾期余额支付适用的滞纳金（每月1.5%）'}
                    </li>
                  </ul>
                </div>

                {/* Intellectual Property */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '7. Intellectual Property Rights' : '7. 知识产权'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'All content on this website, including text, graphics, logos, images, videos, software, and educational materials (the "OvuMethod" and related resources), is the exclusive property of IVY Fertility Center and is protected by United States and international copyright, trademark, and intellectual property laws. You may not reproduce, distribute, modify, create derivative works from, publicly display, or commercially exploit any content without our prior written consent. Limited use for personal, non-commercial purposes is permitted provided you maintain all copyright and proprietary notices.'
                      : '本网站上的所有内容，包括文本、图形、徽标、图像、视频、软件及教育材料（"OvuMethod"及相关资源），均为 IVY Fertility Center 的专有财产，受美国及国际版权、商标及知识产权法保护。未经我们事先书面同意，您不得复制、分发、修改、创建衍生作品、公开展示或商业利用任何内容。允许有限的个人、非商业用途，前提是您保留所有版权及专有权声明。'}
                  </p>
                </div>

                {/* Website Usage Terms */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '8. Website Usage and Prohibited Conduct' : '8. 网站使用及禁止行为'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33] mb-4">
                    {isEn ? 'When using our website, you agree not to:' : '使用我们的网站时，您同意不：'}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#2f2b33]">
                    <li>
                      {isEn
                        ? 'Attempt to gain unauthorized access to our systems, servers, or databases'
                        : '试图未经授权访问我们的系统、服务器或数据库'}
                    </li>
                    <li>
                      {isEn
                        ? 'Use automated tools (bots, scrapers, spiders) to collect data from our website'
                        : '使用自动化工具（机器人、爬虫、蜘蛛）从我们的网站收集数据'}
                    </li>
                    <li>
                      {isEn
                        ? 'Transmit viruses, malware, or other harmful code'
                        : '传输病毒、恶意软件或其他有害代码'}
                    </li>
                    <li>
                      {isEn
                        ? 'Impersonate any person or entity, or misrepresent your affiliation'
                        : '冒充任何个人或实体，或虚报您的附属关系'}
                    </li>
                    <li>
                      {isEn
                        ? 'Interfere with or disrupt the operation of our website or servers'
                        : '干扰或破坏我们网站或服务器的运营'}
                    </li>
                    <li>
                      {isEn
                        ? 'Upload or transmit content that is unlawful, defamatory, or infringes on others\' rights'
                        : '上传或传输非法、诽谤或侵犯他人权利的内容'}
                    </li>
                  </ul>
                </div>

                {/* Privacy and Confidentiality */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '9. Privacy and Confidentiality' : '9. 隐私及保密性'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'We are committed to protecting your privacy and maintaining the confidentiality of your medical information in accordance with the Health Insurance Portability and Accountability Act (HIPAA), the California Confidentiality of Medical Information Act (CMIA), and other applicable privacy laws. Please review our Privacy Policy for detailed information about how we collect, use, and protect your personal and medical information.'
                      : '我们致力于根据《健康保险流通与责任法》（HIPAA）、《加州医疗信息保密法》（CMIA）及其他适用的隐私法律保护您的隐私并维护您的医疗信息的机密性。请查看我们的隐私政策，了解有关我们如何收集、使用和保护您的个人及医疗信息的详细信息。'}
                  </p>
                  <Link href="/privacy" className="inline-block mt-4 text-[#a63655] hover:text-[#8a2c3e] underline">
                    {isEn ? 'View Privacy Policy →' : '查看隐私政策 →'}
                  </Link>
                </div>

                {/* Limitation of Liability */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '10. Limitation of Liability' : '10. 责任限制'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'To the maximum extent permitted by California law, IVY Fertility Center, its physicians, employees, and affiliates shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from your use of our services or website, including but not limited to loss of income, emotional distress, or unsuccessful treatment outcomes, except in cases of gross negligence or willful misconduct. Our total liability for any claim shall not exceed the amount you paid for services during the six months preceding the claim. Some jurisdictions do not allow the limitation of certain damages, so these limitations may not apply to you.'
                      : '在加州法律允许的最大范围内，IVY Fertility Center、其医生、员工及附属机构对因您使用我们的服务或网站而产生的任何间接、附带、后果性、特殊或惩罚性损害不承担责任，包括但不限于收入损失、精神困扰或治疗失败的结果，除非存在严重过失或故意不当行为。我们对任何索赔的总责任不超过您在索赔前六个月内支付的服务金额。某些司法管辖区不允许限制某些损害，因此这些限制可能不适用于您。'}
                  </p>
                </div>

                {/* Dispute Resolution */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '11. Dispute Resolution and Arbitration' : '11. 争议解决及仲裁'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'Any dispute, controversy, or claim arising out of or relating to these Terms or your use of our services shall first be attempted to be resolved through good-faith negotiations. If negotiations fail, disputes shall be resolved through binding arbitration conducted under the rules of the American Arbitration Association in Los Angeles County, California. Each party shall bear its own costs and attorneys\' fees unless otherwise determined by the arbitrator. You waive your right to participate in class action lawsuits or class-wide arbitration. This arbitration provision does not apply to medical malpractice claims, which shall be governed by California medical malpractice laws and procedures.'
                      : '因本条款或您使用我们的服务而引起的任何争议、纠纷或索赔应首先尝试通过善意谈判解决。如果谈判失败，争议应通过在加州洛杉矶县按照美国仲裁协会规则进行的具有约束力的仲裁解决。除非仲裁员另有决定，否则各方应承担自己的费用和律师费。您放弃参与集体诉讼或集体仲裁的权利。本仲裁条款不适用于医疗事故索赔，该索赔应受加州医疗事故法律及程序管辖。'}
                  </p>
                </div>

                {/* Governing Law */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '12. Governing Law' : '12. 适用法律'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the state and federal courts located in Los Angeles County, California for the resolution of any disputes not subject to arbitration.'
                      : '本条款应受加州法律管辖并按其解释，不考虑其法律冲突原则。您同意就不受仲裁约束的任何争议的解决，接受位于加州洛杉矶县的州法院和联邦法院的专属管辖。'}
                  </p>
                </div>

                {/* Age Restrictions */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '13. Age Restrictions' : '13. 年龄限制'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'Our services are intended for individuals who are at least 18 years of age. By using our website or services, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms. Minors seeking fertility preservation for medical reasons must be accompanied by a parent or legal guardian who consents to treatment on their behalf.'
                      : '我们的服务面向至少18岁的个人。使用我们的网站或服务，即表示您声明并保证您至少年满18岁并具有订立本条款的法律行为能力。因医疗原因寻求生育力保存的未成年人必须由父母或法定监护人陪同，由其代表同意治疗。'}
                  </p>
                </div>

                {/* Third-Party Links */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '14. Third-Party Links and Services' : '14. 第三方链接及服务'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'Our website may contain links to third-party websites, services, or resources (such as egg donor agencies, surrogacy matching services, or genetic testing laboratories) that are not owned or controlled by IVY Fertility. We do not endorse or assume responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be liable for any damage or loss caused by your use of any third-party content or services.'
                      : '我们的网站可能包含指向非 IVY Fertility 拥有或控制的第三方网站、服务或资源（如卵子捐赠机构、代孕匹配服务或基因检测实验室）的链接。我们不为任何第三方网站或服务的内容、隐私政策或做法背书或承担责任。您承认并同意，我们不对您使用任何第三方内容或服务造成的任何损害或损失承担责任。'}
                  </p>
                </div>

                {/* Modifications to Terms */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '15. Modifications to Terms' : '15. 条款修改'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'We reserve the right to modify these Terms at any time. Material changes will be communicated via email to registered patients or through a prominent notice on our website at least 30 days before the effective date. Your continued use of our services after the effective date of any modifications constitutes your acceptance of the revised Terms. If you do not agree to the modified Terms, you must discontinue use of our services and may terminate your patient relationship in accordance with our standard procedures.'
                      : '我们保留随时修改本条款的权利。重大变更将在生效日期前至少30天通过电子邮件通知已注册患者或在我们网站上显著通知。在任何修改生效日期后继续使用我们的服务即表示您接受修订后的条款。如果您不同意修改后的条款，则必须停止使用我们的服务，并可按照我们的标准程序终止您的患者关系。'}
                  </p>
                </div>

                {/* Severability */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '16. Severability' : '16. 可分割性'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid and enforceable. If modification is not possible, the provision shall be severed from these Terms, and the remaining provisions shall continue in full force and effect.'
                      : '如果有管辖权的法院认定本条款的任何条款无效、非法或不可执行，则该条款应在必要的最小范围内进行修改，以使其有效和可执行。如果无法修改，则该条款应从本条款中剔除，其余条款应继续完全有效。'}
                  </p>
                </div>

                {/* Entire Agreement */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '17. Entire Agreement' : '17. 完整协议'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'These Terms, together with our Privacy Policy and any treatment-specific consent forms you sign, constitute the entire agreement between you and IVY Fertility Center regarding your use of our website and services, and supersede all prior agreements, understandings, and communications, whether written or oral.'
                      : '本条款与我们的隐私政策及您签署的任何特定治疗同意书一起，构成您与 IVY Fertility Center 之间关于您使用我们网站和服务的完整协议，并取代所有先前的协议、理解和沟通，无论是书面还是口头的。'}
                  </p>
                </div>

                {/* Contact Information */}
                <div className="border-t border-[#ead9ca] pt-12">
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '18. Contact Information' : '18. 联系信息'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33] mb-4">
                    {isEn
                      ? 'If you have questions, concerns, or comments about these Terms of Service, please contact us:'
                      : '如果您对本服务条款有任何疑问、顾虑或意见，请联系我们：'}
                  </p>
                  <div className="bg-[#f7eee7] p-6 rounded-[16px] text-[16px] text-[#2f2b33]">
                    <p className="font-semibold mb-2">IVY Fertility Center</p>
                    <p>123 Fertility Lane</p>
                    <p>Los Angeles, CA 90001</p>
                    <p className="mt-4">
                      {isEn ? 'Phone:' : '电话:'} <a href="tel:+14155551234" className="text-[#a63655] hover:text-[#8a2c3e]">+1 (415) 555-1234</a>
                    </p>
                    <p>
                      {isEn ? 'Email:' : '电子邮件:'} <a href="mailto:legal@ivyfertility.com" className="text-[#a63655] hover:text-[#8a2c3e]">legal@ivyfertility.com</a>
                    </p>
                    <p className="mt-4 text-[14px] text-[#5a555d]">
                      {isEn
                        ? 'For medical emergencies, please call 911 or visit your nearest emergency room.'
                        : '如遇医疗紧急情况，请拨打911或前往最近的急诊室。'}
                    </p>
                  </div>
                </div>

                {/* Acknowledgment */}
                <div className="bg-[#e8d5d0] p-8 rounded-[16px] text-center">
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.'
                      : '使用我们的网站和服务，即表示您已阅读、理解并同意受本服务条款的约束。'}
                  </p>
                  <p className="mt-4 text-[14px] text-[#5a555d]">
                    {isEn ? 'Thank you for choosing IVY Fertility Center.' : '感谢您选择 IVY Fertility Center。'}
                  </p>
                </div>
              </div>
            </ScrollInView>
          </div>
        </div>
      </section>
    </main>
  )
}
