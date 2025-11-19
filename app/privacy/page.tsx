'use client'

import { useLanguage } from '@/lib/context'
import { ScrollInView } from '@/components/ui/ScrollInView'
import Link from 'next/link'

export default function PrivacyPage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  return (
    <main className="bg-[#fdf7f2]">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#e8d5d0] to-[#fdf7f2] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-0">
          <ScrollInView>
            <h1 className="text-[48px] font-serif leading-tight text-[#2f2b33] md:text-[64px]">
              {isEn ? 'Privacy Policy' : '隐私政策'}
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
                      ? 'IVY Fertility Center ("we," "us," or "our") is committed to protecting the privacy and confidentiality of your personal and medical information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information in compliance with the Health Insurance Portability and Accountability Act (HIPAA), the California Confidentiality of Medical Information Act (CMIA), the California Consumer Privacy Act as amended by the California Privacy Rights Act (CCPA/CPRA), and other applicable privacy laws. This policy applies to information collected through our website, patient portal, clinic facilities, and all interactions with our staff and healthcare providers.'
                      : 'IVY Fertility Center（以下简称"我们"或"本机构"）致力于保护您个人及医疗信息的隐私和机密性。本隐私政策说明我们如何收集、使用、披露和保护您的信息，以符合《健康保险流通与责任法》（HIPAA）、《加州医疗信息保密法》（CMIA）、经《加州隐私权法案》修订的《加州消费者隐私法》（CCPA/CPRA）及其他适用的隐私法律。本政策适用于通过我们的网站、患者门户、诊所设施以及与我们员工及医疗服务提供者的所有互动收集的信息。'}
                  </p>
                </div>

                {/* Information We Collect */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '2. Information We Collect' : '2. 我们收集的信息'}
                  </h2>

                  <h3 className="text-[24px] font-serif text-[#2f2b33] mb-3 mt-6">
                    {isEn ? '2.1 Protected Health Information (PHI)' : '2.1 受保护的健康信息（PHI）'}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33] mb-4">
                    {isEn
                      ? 'In the course of providing fertility care, we collect and maintain Protected Health Information as defined by HIPAA, including:'
                      : '在提供生育护理的过程中，我们收集并维护 HIPAA 定义的受保护健康信息，包括：'}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#2f2b33]">
                    <li>{isEn ? 'Personal identifiers (name, date of birth, Social Security number, address, phone number, email)' : '个人标识符（姓名、出生日期、社会安全号、地址、电话号码、电子邮件）'}</li>
                    <li>{isEn ? 'Medical history, including previous pregnancies, surgeries, and chronic conditions' : '病史，包括既往妊娠、手术及慢性疾病'}</li>
                    <li>{isEn ? 'Fertility diagnostic test results (hormone panels, genetic screening, semen analysis, ultrasound imaging)' : '生育诊断测试结果（激素检查、基因筛查、精液分析、超声成像）'}</li>
                    <li>{isEn ? 'Treatment records (IVF cycle data, medication protocols, embryology reports)' : '治疗记录（IVF 周期数据、用药方案、胚胎学报告）'}</li>
                    <li>{isEn ? 'Insurance information and billing records' : '保险信息及账单记录'}</li>
                    <li>{isEn ? 'Photographs and videos for medical documentation purposes (with explicit consent)' : '用于医疗文档目的的照片及视频（经明确同意）'}</li>
                  </ul>

                  <h3 className="text-[24px] font-serif text-[#2f2b33] mb-3 mt-6">
                    {isEn ? '2.2 Personal Information (Non-Medical)' : '2.2 个人信息（非医疗）'}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33] mb-4">
                    {isEn ? 'We also collect non-medical personal information, including:' : '我们还收集非医疗个人信息，包括：'}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#2f2b33]">
                    <li>{isEn ? 'Contact form submissions through our website' : '通过我们网站提交的联系表单'}</li>
                    <li>{isEn ? 'Patient portal login credentials and account information' : '患者门户登录凭据及账户信息'}</li>
                    <li>{isEn ? 'Communication preferences (email, SMS, phone call)' : '沟通偏好（电子邮件、短信、电话）'}</li>
                    <li>{isEn ? 'Language preferences (English, Mandarin Chinese)' : '语言偏好（英语、普通话）'}</li>
                    <li>{isEn ? 'Emergency contact information' : '紧急联系人信息'}</li>
                  </ul>

                  <h3 className="text-[24px] font-serif text-[#2f2b33] mb-3 mt-6">
                    {isEn ? '2.3 Technical and Usage Data' : '2.3 技术及使用数据'}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33] mb-4">
                    {isEn
                      ? 'When you visit our website, we automatically collect certain technical information:'
                      : '当您访问我们的网站时，我们会自动收集某些技术信息：'}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#2f2b33]">
                    <li>{isEn ? 'IP address and approximate geographic location' : 'IP 地址及大致地理位置'}</li>
                    <li>{isEn ? 'Browser type, version, and operating system' : '浏览器类型、版本及操作系统'}</li>
                    <li>{isEn ? 'Pages visited, time spent on pages, and navigation patterns' : '访问的页面、在页面上花费的时间及导航模式'}</li>
                    <li>{isEn ? 'Referring website or source of traffic' : '引荐网站或流量来源'}</li>
                    <li>{isEn ? 'Device identifiers and mobile network information' : '设备标识符及移动网络信息'}</li>
                  </ul>
                </div>

                {/* How We Use Your Information */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '3. How We Use Your Information' : '3. 我们如何使用您的信息'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33] mb-4">
                    {isEn ? 'We use your information for the following purposes:' : '我们将您的信息用于以下目的：'}
                  </p>

                  <h3 className="text-[24px] font-serif text-[#2f2b33] mb-3 mt-6">
                    {isEn ? '3.1 Treatment, Payment, and Healthcare Operations (TPO)' : '3.1 治疗、付款及医疗运营（TPO）'}
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#2f2b33]">
                    <li>{isEn ? 'Providing and coordinating your fertility treatment' : '提供及协调您的生育治疗'}</li>
                    <li>{isEn ? 'Communicating with you about appointments, test results, and treatment plans' : '就预约、测试结果及治疗计划与您沟通'}</li>
                    <li>{isEn ? 'Processing insurance claims and billing for services' : '处理保险索赔及服务账单'}</li>
                    <li>{isEn ? 'Maintaining medical records and quality assurance' : '维护医疗记录及质量保证'}</li>
                    <li>{isEn ? 'Training staff and improving clinical protocols' : '培训员工及改进临床方案'}</li>
                    <li>{isEn ? 'Complying with legal and regulatory requirements' : '遵守法律及监管要求'}</li>
                  </ul>

                  <h3 className="text-[24px] font-serif text-[#2f2b33] mb-3 mt-6">
                    {isEn ? '3.2 Communication and Engagement' : '3.2 沟通及参与'}
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#2f2b33]">
                    <li>{isEn ? 'Responding to your inquiries submitted through contact forms' : '回复您通过联系表单提交的咨询'}</li>
                    <li>{isEn ? 'Sending appointment reminders and follow-up instructions' : '发送预约提醒及后续指导'}</li>
                    <li>{isEn ? 'Providing educational resources about fertility treatments' : '提供有关生育治疗的教育资源'}</li>
                    <li>{isEn ? 'Conducting patient satisfaction surveys (with your consent)' : '进行患者满意度调查（经您同意）'}</li>
                  </ul>

                  <h3 className="text-[24px] font-serif text-[#2f2b33] mb-3 mt-6">
                    {isEn ? '3.3 Website Functionality and Security' : '3.3 网站功能及安全'}
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#2f2b33]">
                    <li>{isEn ? 'Maintaining and improving website performance and user experience' : '维护和改进网站性能及用户体验'}</li>
                    <li>{isEn ? 'Preventing fraud, unauthorized access, and security threats' : '防止欺诈、未经授权访问及安全威胁'}</li>
                    <li>{isEn ? 'Analyzing website traffic to optimize content and navigation' : '分析网站流量以优化内容及导航'}</li>
                    <li>{isEn ? 'Troubleshooting technical issues and providing customer support' : '排查技术问题并提供客户支持'}</li>
                  </ul>
                </div>

                {/* How We Share Your Information */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '4. How We Share Your Information' : '4. 我们如何共享您的信息'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33] mb-4">
                    {isEn
                      ? 'We do not sell your personal or medical information. We may share your information only in the following limited circumstances:'
                      : '我们不出售您的个人或医疗信息。我们仅在以下有限情况下共享您的信息：'}
                  </p>

                  <h3 className="text-[24px] font-serif text-[#2f2b33] mb-3 mt-6">
                    {isEn ? '4.1 Healthcare Providers and Business Associates' : '4.1 医疗服务提供者及业务伙伴'}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'We share PHI with our Business Associates (as defined by HIPAA) who assist with treatment, payment, and healthcare operations. These entities include: embryology laboratories, genetic testing facilities, pharmacy providers, billing and coding services, electronic health record (EHR) vendors, and cloud storage providers. All Business Associates are required to sign HIPAA-compliant agreements to safeguard your information.'
                      : '我们与协助治疗、付款及医疗运营的业务伙伴（根据 HIPAA 定义）共享 PHI。这些实体包括：胚胎学实验室、基因检测设施、药房提供商、账单及编码服务、电子健康记录（EHR）供应商及云存储提供商。所有业务伙伴均需签署符合 HIPAA 的协议以保护您的信息。'}
                  </p>

                  <h3 className="text-[24px] font-serif text-[#2f2b33] mb-3 mt-6">
                    {isEn ? '4.2 Legal and Regulatory Compliance' : '4.2 法律及监管合规'}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33] mb-4">
                    {isEn ? 'We may disclose your information when required by law:' : '我们可能在法律要求时披露您的信息：'}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#2f2b33]">
                    <li>{isEn ? 'In response to court orders, subpoenas, or legal proceedings' : '响应法院命令、传票或法律程序'}</li>
                    <li>{isEn ? 'To comply with public health reporting requirements (infectious diseases, adverse events)' : '遵守公共卫生报告要求（传染病、不良事件）'}</li>
                    <li>{isEn ? 'To report suspected abuse, neglect, or domestic violence as mandated by law' : '根据法律规定报告疑似虐待、忽视或家庭暴力'}</li>
                    <li>{isEn ? 'To law enforcement in cases of criminal activity or threats to public safety' : '在刑事活动或对公共安全的威胁情况下向执法部门披露'}</li>
                    <li>{isEn ? 'For workers\' compensation claims and disability determinations' : '用于工伤索赔及残疾认定'}</li>
                  </ul>

                  <h3 className="text-[24px] font-serif text-[#2f2b33] mb-3 mt-6">
                    {isEn ? '4.3 With Your Explicit Consent' : '4.3 经您明确同意'}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'We obtain your written authorization before sharing your PHI for purposes not related to treatment, payment, or healthcare operations. This includes: marketing communications (fertility webinars, promotional offers), research studies requiring identifiable information, sharing information with family members or partners, and testimonials or success stories for promotional purposes.'
                      : '在为与治疗、付款或医疗运营无关的目的共享您的 PHI 之前，我们会获得您的书面授权。这包括：营销传播（生育网络研讨会、促销优惠）、需要可识别信息的研究、与家庭成员或伴侣共享信息，以及用于促销目的的推荐或成功故事。'}
                  </p>

                  <h3 className="text-[24px] font-serif text-[#2f2b33] mb-3 mt-6">
                    {isEn ? '4.4 Third-Party Services' : '4.4 第三方服务'}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'Our website uses limited third-party services that may collect non-medical data: Upstash Redis for rate limiting (stores temporary IP address hashes), Resend for email delivery (processes contact form submissions), and web hosting providers. These services do not have access to your Protected Health Information.'
                      : '我们的网站使用可能收集非医疗数据的有限第三方服务：Upstash Redis 用于速率限制（存储临时 IP 地址哈希）、Resend 用于电子邮件传递（处理联系表单提交）及网络托管提供商。这些服务无法访问您的受保护健康信息。'}
                  </p>
                </div>

                {/* Your Privacy Rights */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '5. Your Privacy Rights' : '5. 您的隐私权利'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33] mb-4">
                    {isEn
                      ? 'Under HIPAA, CMIA, and CCPA/CPRA, you have the following rights regarding your personal and medical information:'
                      : '根据 HIPAA、CMIA 及 CCPA/CPRA，您对您的个人及医疗信息享有以下权利：'}
                  </p>

                  <h3 className="text-[24px] font-serif text-[#2f2b33] mb-3 mt-6">
                    {isEn ? '5.1 Right to Access' : '5.1 访问权'}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'You have the right to inspect and obtain a copy of your medical records. Requests must be submitted in writing to our Medical Records Department. We will respond within 30 days and may charge a reasonable fee for copying and mailing costs.'
                      : '您有权检查并获得您的医疗记录副本。请求必须书面提交给我们的医疗记录部门。我们将在30天内回复，并可能对复制和邮寄费用收取合理费用。'}
                  </p>

                  <h3 className="text-[24px] font-serif text-[#2f2b33] mb-3 mt-6">
                    {isEn ? '5.2 Right to Amendment' : '5.2 修改权'}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'If you believe information in your medical record is incorrect or incomplete, you may request an amendment. We will review your request and either make the amendment or provide a written explanation of denial. You have the right to submit a statement of disagreement that will be included in your record.'
                      : '如果您认为医疗记录中的信息不正确或不完整，您可以要求修改。我们将审查您的请求，并进行修改或提供书面拒绝说明。您有权提交异议声明，该声明将被包含在您的记录中。'}
                  </p>

                  <h3 className="text-[24px] font-serif text-[#2f2b33] mb-3 mt-6">
                    {isEn ? '5.3 Right to Accounting of Disclosures' : '5.3 披露记录权'}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'You may request a list of certain disclosures of your PHI made by IVY Fertility during the past six years (excluding disclosures for treatment, payment, and healthcare operations). We will provide this accounting free of charge once per year; additional requests may incur a fee.'
                      : '您可以要求获得 IVY Fertility 在过去六年中对您 PHI 的某些披露清单（不包括治疗、付款及医疗运营的披露）。我们将每年免费提供一次此记录；额外请求可能产生费用。'}
                  </p>

                  <h3 className="text-[24px] font-serif text-[#2f2b33] mb-3 mt-6">
                    {isEn ? '5.4 Right to Request Restrictions' : '5.4 限制请求权'}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'You may request that we limit how we use or disclose your PHI for treatment, payment, or healthcare operations. We are not required to agree to your request except when you pay out-of-pocket in full and request that we not disclose information to your health plan. If we agree to a restriction, we will honor it unless emergency treatment is necessary.'
                      : '您可以要求我们限制如何使用或披露您的 PHI 用于治疗、付款或医疗运营。除非您全额自费并要求我们不向您的健康计划披露信息，否则我们不需要同意您的请求。如果我们同意限制，我们将遵守，除非需要紧急治疗。'}
                  </p>

                  <h3 className="text-[24px] font-serif text-[#2f2b33] mb-3 mt-6">
                    {isEn ? '5.5 Right to Confidential Communications' : '5.5 保密通信权'}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'You have the right to request that we communicate with you about your medical matters through alternative means or at alternative locations (for example, sending appointment reminders to a specific email address or phone number). We will accommodate reasonable requests.'
                      : '您有权要求我们通过替代方式或在替代地点与您就您的医疗事务进行沟通（例如，将预约提醒发送到特定电子邮件地址或电话号码）。我们将满足合理的请求。'}
                  </p>

                  <h3 className="text-[24px] font-serif text-[#2f2b33] mb-3 mt-6">
                    {isEn ? '5.6 California-Specific Rights (CCPA/CPRA)' : '5.6 加州特定权利（CCPA/CPRA）'}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33] mb-4">
                    {isEn ? 'As a California resident, you have additional privacy rights:' : '作为加州居民，您享有额外的隐私权利：'}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#2f2b33]">
                    <li>{isEn ? 'Right to know what personal information is collected and how it is used' : '知情权：了解收集了哪些个人信息以及如何使用'}</li>
                    <li>{isEn ? 'Right to delete personal information (subject to legal and medical record retention requirements)' : '删除权：删除个人信息（受法律及医疗记录保留要求的约束）'}</li>
                    <li>{isEn ? 'Right to opt-out of the sale of personal information (we do not sell personal information)' : '选择退出权：选择退出个人信息的销售（我们不出售个人信息）'}</li>
                    <li>{isEn ? 'Right to non-discrimination for exercising your privacy rights' : '非歧视权：因行使隐私权而不受歧视'}</li>
                    <li>{isEn ? 'Right to correct inaccurate personal information' : '更正权：更正不准确的个人信息'}</li>
                  </ul>
                </div>

                {/* Data Security */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '6. Data Security Measures' : '6. 数据安全措施'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33] mb-4">
                    {isEn
                      ? 'We implement comprehensive administrative, physical, and technical safeguards to protect your information:'
                      : '我们实施全面的管理、物理及技术保障措施以保护您的信息：'}
                  </p>

                  <h3 className="text-[24px] font-serif text-[#2f2b33] mb-3 mt-6">
                    {isEn ? '6.1 Technical Safeguards' : '6.1 技术保障'}
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#2f2b33]">
                    <li>{isEn ? 'End-to-end encryption for data transmission (TLS 1.3)' : '数据传输的端到端加密（TLS 1.3）'}</li>
                    <li>{isEn ? 'Encryption of data at rest in databases and file storage' : '数据库及文件存储中静态数据的加密'}</li>
                    <li>{isEn ? 'Multi-factor authentication for patient portal access' : '患者门户访问的多因素身份验证'}</li>
                    <li>{isEn ? 'Regular security audits and penetration testing' : '定期安全审计及渗透测试'}</li>
                    <li>{isEn ? 'Automated backup systems with secure offsite storage' : '具有安全异地存储的自动备份系统'}</li>
                    <li>{isEn ? 'Firewall protection and intrusion detection systems' : '防火墙保护及入侵检测系统'}</li>
                  </ul>

                  <h3 className="text-[24px] font-serif text-[#2f2b33] mb-3 mt-6">
                    {isEn ? '6.2 Administrative Safeguards' : '6.2 管理保障'}
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#2f2b33]">
                    <li>{isEn ? 'Mandatory HIPAA training for all staff members' : '所有员工的强制性 HIPAA 培训'}</li>
                    <li>{isEn ? 'Role-based access controls limiting data access to authorized personnel only' : '基于角色的访问控制，仅限授权人员访问数据'}</li>
                    <li>{isEn ? 'Confidentiality agreements signed by all employees and contractors' : '所有员工及承包商签署的保密协议'}</li>
                    <li>{isEn ? 'Incident response plan for potential data breaches' : '潜在数据泄露的事件响应计划'}</li>
                    <li>{isEn ? 'Regular review and updates of security policies' : '定期审查及更新安全政策'}</li>
                  </ul>

                  <h3 className="text-[24px] font-serif text-[#2f2b33] mb-3 mt-6">
                    {isEn ? '6.3 Physical Safeguards' : '6.3 物理保障'}
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#2f2b33]">
                    <li>{isEn ? 'Secure facility access with keycard authentication' : '使用钥匙卡身份验证的安全设施访问'}</li>
                    <li>{isEn ? 'Locked medical record storage areas with restricted access' : '具有限制访问的锁定医疗记录存储区域'}</li>
                    <li>{isEn ? 'Video surveillance in common areas (not treatment rooms)' : '公共区域的视频监控（非治疗室）'}</li>
                    <li>{isEn ? 'Secure disposal of paper records through shredding' : '通过粉碎安全处置纸质记录'}</li>
                    <li>{isEn ? 'Private consultation rooms for confidential discussions' : '用于保密讨论的私人咨询室'}</li>
                  </ul>
                </div>

                {/* Cookies and Tracking */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '7. Cookies and Tracking Technologies' : '7. Cookie 及跟踪技术'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33] mb-4">
                    {isEn
                      ? 'Our website uses minimal tracking technologies to improve functionality and user experience:'
                      : '我们的网站使用最少的跟踪技术来改进功能及用户体验：'}
                  </p>

                  <h3 className="text-[24px] font-serif text-[#2f2b33] mb-3 mt-6">
                    {isEn ? '7.1 Essential Cookies' : '7.1 必要 Cookie'}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'These cookies are necessary for basic website functionality: session management for the patient portal, language preference (English/Chinese), security features including CSRF protection, and rate limiting to prevent spam on contact forms.'
                      : '这些 Cookie 对于基本网站功能是必需的：患者门户的会话管理、语言偏好（英语/中文）、包括 CSRF 保护的安全功能，以及防止联系表单垃圾邮件的速率限制。'}
                  </p>

                  <h3 className="text-[24px] font-serif text-[#2f2b33] mb-3 mt-6">
                    {isEn ? '7.2 We Do Not Use' : '7.2 我们不使用'}
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#2f2b33]">
                    <li>{isEn ? 'Google Analytics or other third-party analytics platforms' : 'Google Analytics 或其他第三方分析平台'}</li>
                    <li>{isEn ? 'Advertising cookies or retargeting pixels' : '广告 Cookie 或重定向像素'}</li>
                    <li>{isEn ? 'Social media tracking pixels (Facebook Pixel, etc.)' : '社交媒体跟踪像素（Facebook Pixel 等）'}</li>
                    <li>{isEn ? 'Cross-site tracking or data sharing with advertisers' : '跨站跟踪或与广告商共享数据'}</li>
                  </ul>

                  <p className="text-[16px] leading-relaxed text-[#2f2b33] mt-4">
                    {isEn
                      ? 'You can control cookies through your browser settings. Disabling essential cookies may affect website functionality, including access to the patient portal.'
                      : '您可以通过浏览器设置控制 Cookie。禁用必要 Cookie 可能影响网站功能，包括访问患者门户。'}
                  </p>
                </div>

                {/* Data Retention */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '8. Data Retention' : '8. 数据保留'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33] mb-4">
                    {isEn ? 'We retain your information according to the following schedules:' : '我们根据以下时间表保留您的信息：'}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#2f2b33]">
                    <li>
                      {isEn
                        ? 'Adult medical records: Minimum 7 years from the date of last treatment (California law), or longer if required for ongoing care'
                        : '成人医疗记录：自最后治疗日期起至少7年（加州法律），或因持续护理需要更长时间'}
                    </li>
                    <li>
                      {isEn
                        ? 'Minor medical records: Until the patient reaches 18 years of age, plus 7 years'
                        : '未成年人医疗记录：直到患者年满18岁，再加7年'}
                    </li>
                    <li>
                      {isEn
                        ? 'Embryology records and cryopreservation data: Maintained for the duration of storage plus 10 years after disposition'
                        : '胚胎学记录及冷冻保存数据：在储存期间及处置后保留10年'}
                    </li>
                    <li>
                      {isEn
                        ? 'Billing and insurance records: 7 years from the date of service'
                        : '账单及保险记录：自服务日期起7年'}
                    </li>
                    <li>
                      {isEn
                        ? 'Contact form submissions (non-patients): 2 years or until request is fulfilled'
                        : '联系表单提交（非患者）：2年或直到请求完成'}
                    </li>
                    <li>
                      {isEn
                        ? 'Website access logs: 90 days for security monitoring'
                        : '网站访问日志：90天用于安全监控'}
                    </li>
                  </ul>
                </div>

                {/* International Patients */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '9. International Patients' : '9. 国际患者'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'If you are accessing our services from outside the United States, please be aware that your information will be transferred to, stored, and processed in the United States where our servers and central database are located. The United States may not have the same data protection laws as your country of residence. By using our services, you consent to the transfer of your information to the United States and our use of your information as described in this Privacy Policy.'
                      : '如果您从美国境外访问我们的服务，请注意您的信息将被传输到、存储并在我们的服务器及中央数据库所在的美国进行处理。美国可能没有与您居住国相同的数据保护法律。使用我们的服务，即表示您同意将您的信息传输到美国，并按照本隐私政策中所述使用您的信息。'}
                  </p>
                </div>

                {/* Children's Privacy */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '10. Children\'s Privacy' : '10. 儿童隐私'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'Our website and services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children through our website. If you are a parent or guardian and believe we have inadvertently collected information from a child, please contact us immediately so we can delete the information. Fertility preservation services for minors are provided only with parental consent and in accordance with California medical consent laws.'
                      : '我们的网站和服务不针对18岁以下的个人。我们不会通过我们的网站故意收集儿童的个人信息。如果您是父母或监护人，并认为我们无意中收集了儿童的信息，请立即联系我们，以便我们删除该信息。未成年人的生育力保存服务仅在获得父母同意并符合加州医疗同意法律的情况下提供。'}
                  </p>
                </div>

                {/* Breach Notification */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '11. Data Breach Notification' : '11. 数据泄露通知'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'In the unlikely event of a data breach involving your Protected Health Information, we will notify you in accordance with HIPAA and California breach notification laws. Notification will be provided without unreasonable delay and no later than 60 days after discovery of the breach. We will inform you of what information was compromised, steps we are taking to investigate and mitigate the breach, and actions you can take to protect yourself. We will also notify the U.S. Department of Health and Human Services and, if applicable, prominent media outlets as required by law.'
                      : '在不太可能发生涉及您受保护健康信息的数据泄露事件时，我们将根据 HIPAA 及加州泄露通知法律通知您。通知将在发现泄露后不超过60天内及时提供。我们将告知您哪些信息被泄露、我们正在采取哪些步骤调查和缓解泄露，以及您可以采取哪些行动保护自己。我们还将通知美国卫生与公众服务部，并在适用的情况下按照法律要求通知知名媒体。'}
                  </p>
                </div>

                {/* Changes to Privacy Policy */}
                <div>
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '12. Changes to This Privacy Policy' : '12. 本隐私政策的变更'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other operational needs. Material changes will be communicated to active patients via email at least 30 days before the effective date. We will also post the updated policy on our website with a revised "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we protect your information.'
                      : '我们可能定期更新本隐私政策，以反映我们实践、技术、法律要求或其他运营需求的变更。重大变更将在生效日期前至少30天通过电子邮件通知现有患者。我们还将在我们的网站上发布更新的政策，并附上修订的"最后更新"日期。我们鼓励您定期查看本政策，以了解我们如何保护您的信息。'}
                  </p>
                </div>

                {/* Contact Information */}
                <div className="border-t border-[#ead9ca] pt-12">
                  <h2 className="text-[32px] font-serif text-[#a63655] mb-4">
                    {isEn ? '13. Contact Information and Privacy Officer' : '13. 联系信息及隐私官'}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33] mb-4">
                    {isEn
                      ? 'If you have questions about this Privacy Policy, wish to exercise your privacy rights, or need to file a complaint about our privacy practices, please contact our Privacy Officer:'
                      : '如果您对本隐私政策有疑问、希望行使您的隐私权利或需要就我们的隐私实践提出投诉，请联系我们的隐私官：'}
                  </p>
                  <div className="bg-[#f7eee7] p-6 rounded-[16px] text-[16px] text-[#2f2b33]">
                    <p className="font-semibold mb-2">{isEn ? 'Privacy Officer' : '隐私官'}</p>
                    <p>IVY Fertility Center</p>
                    <p>123 Fertility Lane</p>
                    <p>Los Angeles, CA 90001</p>
                    <p className="mt-4">
                      {isEn ? 'Phone:' : '电话:'} <a href="tel:+14155551234" className="text-[#a63655] hover:text-[#8a2c3e]">+1 (415) 555-1234</a>
                    </p>
                    <p>
                      {isEn ? 'Email:' : '电子邮件:'} <a href="mailto:privacy@ivyfertility.com" className="text-[#a63655] hover:text-[#8a2c3e]">privacy@ivyfertility.com</a>
                    </p>
                    <p className="mt-4 text-[14px] text-[#5a555d]">
                      {isEn
                        ? 'You also have the right to file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights or the California Attorney General if you believe your privacy rights have been violated.'
                        : '如果您认为您的隐私权利受到侵犯，您还有权向美国卫生与公众服务部民权办公室或加州总检察长提出投诉。'}
                    </p>
                  </div>
                </div>

                {/* Notice of Privacy Practices */}
                <div className="bg-[#e8d5d0] p-8 rounded-[16px]">
                  <h3 className="text-[24px] font-serif text-[#a63655] mb-4">
                    {isEn ? 'HIPAA Notice of Privacy Practices' : 'HIPAA 隐私实践通知'}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-[#2f2b33]">
                    {isEn
                      ? 'This Privacy Policy serves as our Notice of Privacy Practices as required by HIPAA. You have the right to receive a paper copy of this notice upon request. Please ask any staff member at our clinic, or contact our Privacy Officer using the information above.'
                      : '本隐私政策作为 HIPAA 要求的隐私实践通知。您有权应要求获得本通知的纸质副本。请向我们诊所的任何员工询问，或使用上述信息联系我们的隐私官。'}
                  </p>
                  <p className="mt-4 text-[14px] text-[#5a555d] text-center">
                    {isEn
                      ? 'Your trust in us is paramount. We are committed to protecting your privacy and maintaining the highest standards of confidentiality.'
                      : '您对我们的信任至关重要。我们致力于保护您的隐私并保持最高的保密标准。'}
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
