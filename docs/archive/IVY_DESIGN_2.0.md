# 🎨 IVY Fertility Design 2.0 - 完整升级指南

## 📌 项目概述

本文档规划了 **IVY Fertility 网站的全面设计升级**，目标是达到 **90% 相似 OvulifeMD 的视觉风格和交互体验**，在 **2 周内完成**。

### 核心目标
- ✅ 视觉风格升级 - 90% 临摹 OvulifeMD
- ✅ 时间限制 - 14 天完成
- ✅ 优先级 - 视觉优先 (Quiz/计算器后置)
- ✅ 素材方案 - 全部使用免费资源 (Unsplash/Pexels/Canva)
- ✅ 照片方案 - 不使用真实医生/诊所照片，用插图替代

---

## 🎯 设计灵感来源对标

### OvulifeMD (主要参考 - 90% 相似度目标)
**官网**: https://www.ovulifemd.com/

**设计精髓**:
- 温暖大地色系 (米色、深棕色、勃艮第红)
- 圆形 pill 按钮 (`border-radius: 9999px`)
- 数字化章节设计 (01-08 引导用户旅程)
- 左右交替图文排版，形成视觉节奏
- 大字号标题 (36-42px)，给予视觉冲击
- Section 间距 50-80px，创造呼吸感
- 临床 + wellness 混合美学
- 高质量摄影 (温暖色调、女性为主、wellness 风格)
- 微妙的悬停动画和过渡效果
- 深色 footer (#37272a)

### GenPrime (参考功能组织)
**官网**: https://www.genprime.com/

**借鉴要点**:
- 3 栏网格系统 (高效的信息展示)
- 多语言支持 (启发双语设计)
- 服务卡片 + 图片组合
- 双 CTA 策略 (预约 + 其他)

### Chiyo (参考女性化元素)
**官网**: https://wearechiyo.com/

**借鉴要点**:
- 酒红色调 (#531e44) 和奶油背景 (#fff4ee)
- Serif 字体标题 (优雅感)
- 色块分区设计
- 女性化的暖色调

---

## 🎨 视觉设计系统

### 1. 色彩系统

#### 主色调 (温暖大地色系 - OvulifeMD风格)

```css
/* 品牌色 */
--color-primary: #e33479;              /* IVY 品牌粉 - 保留 */
--color-primary-dark: #d01e6d;         /* 深粉 - 悬停状态 */

/* 大地色系 (新增 - OvulifeMD风格) */
--color-burgundy: #531e44;             /* 深勃艮第 - 点缀和标题 */
--color-brown-dark: #37272a;           /* 深棕 - 边框和强调 */
--color-brown-light: #9a442c;          /* 温暖棕 - 次级强调 */
--color-cream: #fff4ee;                /* 奶油色 - 背景 */
--color-cream-light: #f5f5f5;          /* 浅灰白 - 卡片背景 */

/* 中性色 */
--color-charcoal: #32373c;             /* 深灰 - 主文字 */
--color-gray-medium: #495057;          /* 中灰 - 次级文字 */
--color-gray-light: #6c757d;           /* 浅灰 - 辅助文字 */
--color-white: #ffffff;                /* 白 */

/* 功能色 */
--color-success: #28a745;              /* 成功绿 */
--color-warning: #f59e0b;              /* 警告橙 */
--color-error: #dc3545;                /* 错误红 */
--color-info: #0dcaf0;                 /* 信息青 */
```

#### Tailwind 配置

```typescript
// tailwind.config.ts
export const colors = {
  // 品牌色
  primary: '#e33479',
  'primary-dark': '#d01e6d',

  // 大地色系
  burgundy: '#531e44',
  'brown-dark': '#37272a',
  'brown-light': '#9a442c',
  cream: '#fff4ee',
  'cream-light': '#f5f5f5',

  // 中性色
  charcoal: '#32373c',
  'gray-medium': '#495057',
  'gray-light': '#6c757d',

  // 继承 Tailwind 默认中性色
  slate: { /* ... */ },
  gray: { /* ... */ },
}
```

#### 使用原则

- **背景**: cream (#fff4ee) 或白色，确保温暖感
- **卡片**: cream-light (#f5f5f5) 或白色
- **文字主色**: charcoal (#32373c)
- **强调色**: primary pink (#e33479) 或 burgundy (#531e44)
- **CTA按钮**: 深色背景 (charcoal 或 burgundy) + 白字
- **边框**: brown-dark (#37272a) 或 gray-light

---

### 2. 字体系统

#### 字体族

```typescript
// tailwind.config.ts
export const fontFamily = {
  sans: [
    'Inter',                           /* 现代无衬线 - 正文 */
    'Poppins',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'sans-serif'
  ],
  serif: [
    'Lora',                            /* 优雅衬线 - 标题 */
    'Georgia',
    'serif'
  ],
  mono: [
    'Geist Mono',
    'Monaco',
    'monospace'
  ]
}
```

#### 排版层级

```css
/* 页面标题 */
h1 {
  font-family: 'Lora', serif;
  font-size: 42px;                    /* 桌面: 42px, 移动: 32px */
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.5px;
  color: var(--color-charcoal);
}

/* Section 标题 */
h2 {
  font-family: 'Lora', serif;
  font-size: 36px;                    /* 桌面: 36px, 移动: 28px */
  font-weight: 600;
  line-height: 1.3;
  color: var(--color-charcoal);
}

/* 小标题 */
h3 {
  font-family: 'Lora', serif;
  font-size: 24px;                    /* 桌面: 24px, 移动: 20px */
  font-weight: 500;
  line-height: 1.4;
  color: var(--color-charcoal);
}

/* 正文 */
body, p {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-charcoal);
}

/* 小文字/标签 */
small, .text-sm {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-gray-light);
}
```

#### 字体引入

```typescript
// 在 app/layout.tsx 中
import { Inter, Lora, Geist_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata = {
  // ...
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} ${geistMono.variable}`}>
      {/* ... */}
    </html>
  )
}
```

---

### 3. 间距系统

#### 8px 网格系统

```css
/* Section 间距 - OvulifeMD风格 */
--space-section-mobile: 48px;          /* 移动端 */
--space-section-tablet: 64px;          /* 平板 */
--space-section-desktop: 80px;         /* 桌面 */

/* 基础间距 */
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-6: 48px;
--space-8: 64px;

/* 边距示例 */
section {
  padding: var(--space-section-desktop) 0;  /* 上下 80px */
  padding-left: var(--space-4);             /* 左右 32px */
  padding-right: var(--space-4);

  @media (max-width: 768px) {
    padding: var(--space-section-mobile) 0;
  }
}
```

---

### 4. 圆角系统

```css
/* OvulifeMD 风格 */
--radius-pill: 9999px;                /* CTA 按钮 */
--radius-lg: 12px;                    /* 卡片 */
--radius-md: 8px;                     /* 输入框 */
--radius-sm: 4px;                     /* 小元素 */
```

---

### 5. 阴影系统

```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
--shadow-md: 0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.1);
--shadow-hover: 0 8px 24px rgba(0, 0, 0, 0.12);
```

---

## 📐 核心设计模式

### 1. Hero 区域 (OvulifeMD风格)

```tsx
// components/HeroSection.tsx
<section className="relative w-full h-screen overflow-hidden">
  {/* 背景图/视频 */}
  <div className="absolute inset-0 bg-cover bg-center">
    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
      <source src="/hero-background.mp4" type="video/mp4" />
    </video>
    {/* 深色 overlay */}
    <div className="absolute inset-0 bg-black/30"></div>
  </div>

  {/* 内容 */}
  <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 max-w-3xl">
      Your Journey to Parenthood Starts Here
    </h1>

    <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
      Expert fertility care with Chinese-speaking specialists
    </p>

    {/* 双 CTA */}
    <div className="flex gap-4 justify-center flex-wrap">
      <button className="px-8 py-4 bg-primary rounded-full text-white font-semibold hover:bg-primary-dark transition">
        Book Free Consultation
      </button>
      <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition">
        Watch Our Story
      </button>
    </div>
  </div>

  {/* 滚动提示 */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</section>
```

**特点**:
- 全屏高度 (h-screen)
- 视频背景或高分辨率图
- 深色 overlay (black/30)
- 居中文本
- 双按钮 CTA (一主一副)
- 圆形按钮 (rounded-full)

---

### 2. 数字章节布局 (OvulifeMD核心)

```tsx
// components/SectionWithNumber.tsx
interface SectionWithNumberProps {
  number: number;                      /* 01-08 */
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;                  /* 左右反转 */
  backgroundColor?: string;
}

export function SectionWithNumber({
  number,
  title,
  subtitle,
  content,
  imageSrc,
  imageAlt,
  reversed = false,
}: SectionWithNumberProps) {
  return (
    <section className={`py-20 md:py-28 ${reversed ? 'bg-white' : 'bg-cream'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center ${reversed ? 'md:auto-cols-fr md:grid-flow-col-dense' : ''}`}>

          {/* 左侧: 文本内容 */}
          <div className={reversed ? 'md:col-start-2' : ''}>
            {/* 数字标题 */}
            <div className="flex items-start gap-4 mb-6">
              <span className="text-6xl md:text-7xl font-serif font-bold text-burgundy/30">
                {String(number).padStart(2, '0')}
              </span>
            </div>

            {/* 标题和内容 */}
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
              {title}
            </h2>

            {subtitle && (
              <p className="text-lg text-gray-medium mb-6">{subtitle}</p>
            )}

            <div className="prose prose-lg max-w-none text-gray-medium">
              {content}
            </div>

            {/* CTA 按钮 */}
            <button className="mt-8 px-8 py-4 bg-charcoal text-white font-semibold rounded-full hover:shadow-hover transition">
              Learn More
            </button>
          </div>

          {/* 右侧: 图片 */}
          <div className={reversed ? 'md:col-start-1 md:row-start-1' : ''}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full rounded-xl shadow-lg object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

**特点**:
- 01-08 大数字显示 (灰显/背景色)
- 左右交替布局 (reversed 属性)
- 大标题 (serif 字体，32-40px)
- 描述性文本
- 图片配合文字
- pill 形按钮
- 背景色交替 (white/cream)

---

### 3. CTA 按钮组件

```tsx
// components/ui/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  [key: string]: any;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-full transition duration-300 font-sans';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-burgundy text-white hover:bg-burgundy/90',
    outline: 'border-2 border-charcoal text-charcoal hover:bg-charcoal/5',
    ghost: 'text-charcoal hover:bg-cream/50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
```

**使用示例**:
```tsx
<Button variant="primary" size="lg">Book Consultation</Button>
<Button variant="secondary" size="md">Learn More</Button>
<Button variant="outline" size="lg">Explore Services</Button>
```

---

### 4. 卡片组件

```tsx
// components/ui/Card.tsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  colorAccent?: string;  /* 顶部彩色条纹 */
}

export function Card({ children, className = '', hover = true, colorAccent }: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-xl overflow-hidden
        ${colorAccent ? 'border-t-4' : ''}
        shadow-md
        ${hover ? 'hover:shadow-hover hover:-translate-y-2 transition duration-300' : ''}
        ${className}
      `}
      style={colorAccent ? { borderTopColor: colorAccent } : {}}
    >
      {children}
    </div>
  );
}
```

**使用示例**:
```tsx
<Card colorAccent="#e33479">
  <div className="p-6">
    <h3 className="text-xl font-bold mb-2">IVF Treatment</h3>
    <p className="text-gray-medium">Comprehensive fertility treatment...</p>
  </div>
</Card>
```

---

### 5. 章节标题组件

```tsx
// components/SectionTitle.tsx
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  number?: number;
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  number,
}: SectionTitleProps) {
  return (
    <div className={centered ? 'text-center mb-12' : 'mb-12'}>
      {number && (
        <div className="text-6xl font-serif font-bold text-burgundy/30 mb-2">
          {String(number).padStart(2, '0')}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-medium max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
```

---

## 📄 页面结构与内容框架

### 1. 首页结构 (app/page.tsx)

```
┌─────────────────────────────────────┐
│        Hero Section (全屏)          │
│  视频背景 + 大标题 + 双CTA按钮      │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│    01. Starting Your Fertility      │
│       Journey (问题陈述)             │
│    [图] [文]                        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│    02. Founded by IVF Specialists   │
│       (创始人故事)                   │
│    [文] [图]                        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│    03. Our Core Beliefs             │
│       (6个信念卡片)                  │
│    [图标+文] [图标+文] ...          │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│    04. Our Services (8个服务)       │
│    3栏网格卡片                      │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│    05. Personalized Treatment       │
│       Plans (治疗流程)               │
│    [图] [步骤列表]                  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│    06. Patient Success Stories      │
│       (3个成功案例轮播)              │
│    [轮播组件]                       │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│    07. Why Choose IVY?              │
│       (6个差异化点 vs Life IVF)     │
│    [对比表格/卡片]                  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│    08. Start Your Journey Today     │
│       (最终CTA + 预约表单)           │
│    [大按钮] [表单]                  │
└─────────────────────────────────────┘
```

---

### 2. 服务页面结构 (app/services/page.tsx)

```
┌──────────────────────────────────┐
│  Hero Banner (服务概览)           │
│  背景图 + 标题                    │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│  8个服务卡片 (3栏网格)             │
│  - 顶部彩色条纹                   │
│  - 图标/插图                      │
│  - 服务名称                       │
│  - 简述 + "Learn More" 链接       │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│  底部CTA区域                      │
│  "Ready to take the next step?"   │
│  [预约按钮]                       │
└──────────────────────────────────┘
```

---

### 3. 服务详情页面结构 (app/services/[id]/page.tsx)

```
┌──────────────────────────────────┐
│  01. What is [Service]?           │
│  [定义 + 为什么需要]                │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│  02. Treatment Process            │
│  6-8个步骤 (时间线或卡片)          │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│  03. Success Rates & Outcomes     │
│  (图表 + 数据展示)                  │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│  04. Pricing & Investment         │
│  (透明定价表)                      │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│  05. Next Steps                   │
│  [预约按钮]                       │
└──────────────────────────────────┘
```

---

### 4. 关于页面结构 (app/about/page.tsx)

```
┌──────────────────────────────────┐
│  Hero: Mission Statement          │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│  01. Our Story                    │
│  创诊所故事 + 创始人背景            │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│  02. Our Facilities (轮播)         │
│  6张设施/实验室图片                │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│  03. Our Medical Team             │
│  4个医生卡片 (插图 + 资历)         │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│  04. Our Differentiators          │
│  6个差异化优势                    │
└──────────────────────────────────┘
```

---

### 5. 联系页面结构 (app/contact/page.tsx)

```
┌──────────────────────────────────┐
│  Hero: 诊所外观图 + 标题           │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│  左侧: 联系信息卡片 (3个)           │
│  - 地址 + 地图                    │
│  - 电话 + WhatsApp                │
│  - 工作时间                       │
│  右侧: 预约表单                    │
└──────────────────────────────────┘
```

---

## 🎬 动画与交互规范

### 1. 滚动触发动画 (Fade-in on Scroll)

```typescript
// 使用 Intersection Observer 或 Framer Motion
// components/ScrollInView.tsx

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function ScrollInView({ children, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}
```

### 2. 按钮悬停效果

```css
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
  background-color: var(--color-primary-dark);
}

button:active {
  transform: translateY(0);
}
```

### 3. 卡片悬停效果

```css
.card {
  transition: all 0.3s ease;
  transform: translateY(0);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
}
```

### 4. 数字计数动画

```typescript
// 使用 framer-motion 的 AnimatedCounter
import { motion } from 'framer-motion'

export function AnimatedCounter({ value }: { value: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {value}
      </motion.span>
    </motion.div>
  )
}
```

---

## 📸 素材与图片规范

### 1. 素材来源

#### Unsplash 关键词搜索
```
Hero 背景:
- "fertility wellness meditation woman"
- "pregnant woman yoga"
- "couple planning family"
- "woman health happiness"

章节配图:
- "modern medical clinic"
- "laboratory science"
- "wellness woman"
- "doctor consultation"
- "medical technology"
```

#### Pexels 关键词搜索
```
- "ivf treatment"
- "hospital modern interior"
- "health technology"
- "medical professional"
```

#### Canva 素材
```
插图类型:
- 医疗角色插图 (抽象无具体脸部)
- 医疗图标集 (线条风格)
- 流程图模板
- 数据可视化 (图表/统计)
```

### 2. 图片规范

#### 分辨率
- **Hero 背景**: 1920×1080px 或更大 (桌面优先)
- **Section 配图**: 600×600px (正方形) 或 1200×800px (横向)
- **卡片图**: 400×400px (头像) 或 500×300px (缩略图)

#### 格式
- 优先使用 WebP (更小的文件)
- 备选 JPG/PNG
- 确保文件大小 < 200KB (单张)

#### 风格指南
- **色调**: 温暖 (橙黄色调) + 清爽
- **光线**: 自然光，柔和，无强对比
- **构图**: 简洁背景，不抢镜
- **人物**: 多元化女性 (30-45岁) + 医疗专业人士
- **医疗**: 显示设备专业性，但避免医疗sterile感

#### 使用位置及数量

| 位置 | 数量 | 类型 | 优先级 |
|------|------|------|--------|
| Hero 背景 | 1 | 视频或高分辨率图 | P0 |
| 章节01-08 配图 | 8 | 不同主题插图 | P0 |
| 服务卡片 | 8 | 服务相关插图 | P1 |
| 设施轮播 | 6 | 医疗环境/实验室 | P1 |
| 医生卡片 | 4 | 医疗专业人士/抽象插图 | P2 |

---

## 🔧 技术实施检查表

### 配置文件

- [ ] **tailwind.config.ts**
  - 自定义色彩系统
  - 导入自定义字体 (Inter, Lora)
  - 配置间距系统
  - 扩展圆角系统
  - 扩展阴影系统

- [ ] **app/globals.css**
  - 定义 CSS 变量
  - 全局字体导入
  - base 样式重置
  - 自定义工具类

- [ ] **postcss.config.mjs**
  - 确保 Tailwind v4 配置正确

### 组件创建/修改

#### 新建组件
- [ ] `components/ui/Button.tsx` (CTA 按钮)
- [ ] `components/ui/Card.tsx` (卡片基础)
- [ ] `components/SectionWithNumber.tsx` (数字章节)
- [ ] `components/SectionTitle.tsx` (章节标题)
- [ ] `components/HeroSection.tsx` (Hero 区域)
- [ ] `components/ScrollInView.tsx` (滚动动画)

#### 修改/重构组件
- [ ] `components/Navigation.tsx` (更新样式)
- [ ] `components/Footer.tsx` (更新样式)

### 页面修改

#### 优先级 P0 (第1-2周)
- [ ] `app/page.tsx` (首页 - 完全重写，8个章节)
- [ ] `app/globals.css` (全局样式)
- [ ] `tailwind.config.ts` (色彩+字体系统)

#### 优先级 P1 (第2-3周)
- [ ] `app/services/page.tsx` (服务列表重设计)
- [ ] `app/services/[id]/page.tsx` (服务详情重设计)
- [ ] `app/about/page.tsx` (关于页重设计)
- [ ] `app/contact/page.tsx` (联系页重设计)
- [ ] `components/Navigation.tsx`
- [ ] `components/Footer.tsx`

#### 优先级 P2 (可选/第3周)
- [ ] `app/faq/page.tsx` (FAQ 改进)
- [ ] 滚动动画效果
- [ ] 性能优化

### 依赖项

```bash
# 新增
npm install framer-motion
npm install swiper
npm install lucide-react
npm install clsx
npm install tailwind-merge

# 更新
npm install -D @types/node @types/react @types/react-dom

# 可选
npm install react-hook-form              # 如果要重构表单
npm install sharp                        # Next.js Image 优化
```

---

## 📊 质量检查清单 (90% 相似度目标)

### 视觉设计
- [ ] ✅ 温暖大地色系应用到所有背景/文字
- [ ] ✅ 圆形 pill 按钮 (border-radius: 9999px)
- [ ] ✅ 01-08 数字章节标题展示
- [ ] ✅ 左右交替布局 (图文)
- [ ] ✅ 大字号标题 (36-42px)
- [ ] ✅ Section 间距 50-80px
- [ ] ✅ Serif 字体用于标题
- [ ] ✅ Sans-serif 字体用于正文

### 交互效果
- [ ] ✅ 按钮悬停效果 (lift + shadow)
- [ ] ✅ 卡片悬停效果 (lift + shadow)
- [ ] ✅ 平滑过渡 (duration 300ms)
- [ ] ✅ 滚动 Fade-in 动画

### 响应式
- [ ] ✅ 移动端布局测试 (< 640px)
- [ ] ✅ 平板布局测试 (640-1024px)
- [ ] ✅ 桌面布局测试 (> 1024px)
- [ ] ✅ 图片响应式加载

### 性能
- [ ] ✅ Lighthouse 分数 > 80
- [ ] ✅ 图片优化 (WebP 格式)
- [ ] ✅ 字体子集化
- [ ] ✅ 代码分割

### 跨浏览器
- [ ] ✅ Chrome/Edge (最新)
- [ ] ✅ Firefox (最新)
- [ ] ✅ Safari (最新)
- [ ] ✅ Mobile Chrome/Safari

---

## 📅 2周实施时间表

### 第1周: 基础 + 首页

**Day 1-2: 设计系统**
- 色彩/字体/间距系统配置
- 基础组件创建 (Button, Card, SectionTitle)

**Day 3: Hero 区域**
- Hero 组件实现
- 视频/图片背景
- 双 CTA 按钮

**Day 4-5: 首页核心 (章节01-04)**
- 数字章节组件完成
- 问题陈述 / 团队故事 / 信念 / 服务概览

**Day 6-7: 首页收尾 (章节05-08)**
- 治疗流程 / 成功案例 / 差异化 / 最终 CTA
- 动画效果集成
- 移动端测试

### 第2周: 其他页面 + 抛光

**Day 8-9: 服务页面**
- 服务列表重设计 (3 栏网格)
- 服务详情页模板

**Day 10: 关于 + 联系页**
- About 页面重构
- Contact 页面重构

**Day 11: Navigation + Footer**
- 导航栏样式更新
- Footer 样式更新

**Day 12-14: 最终抛光**
- 全站图片替换完成
- 动画效果微调
- 响应式测试
- 性能优化
- Build 测试

---

## 🎯 成功标准

### 设计相似度
- **90%+ 相似 OvulifeMD** 的视觉风格
- 色彩系统完全迁移
- 布局结构相同
- 交互效果一致

### 功能保留
- ✅ 双语切换 (中/英)
- ✅ 导航菜单
- ✅ 服务详情页
- ✅ 预约表单 (Contact 页)
- ✅ FAQ 页面
- ✅ 响应式设计

### 性能目标
- Lighthouse Core Web Vitals > 80
- 首页加载时间 < 3s
- 移动端 FCP < 2s

### 跨浏览器兼容
- Chrome/Edge ✅
- Firefox ✅
- Safari ✅
- 移动浏览器 ✅

---

## 📌 重要注意事项

### 素材替换
- **不使用真实医生/诊所照片** → 用高质量插图替代
- 所有素材从 Unsplash/Pexels/Canva 免费下载
- 确保图片版权清晰 (CC0 或商用)

### 色彩保留
- 保留 IVY 品牌粉色 (#e33479) 作为主 CTA 色
- 新增大地色系作为背景/装饰

### 性能优先
- 使用 Next.js Image 优化
- 图片压缩到 < 200KB
- 移动端优先加载

### 模块化设计
- 每个组件单独可测试
- Props 清晰，易于复用
- 样式与逻辑分离

---

## 📞 补充说明

本文档为 **IVY Fertility 设计升级 2.0 版** 的完整指南。

- **目标**: 在 2 周内达到 90% OvulifeMD 相似度
- **重点**: 视觉设计优先于新功能
- **方法**: 参考竞品设计模式，结合 IVY 品牌特色
- **素材**: 全部免费资源，无版权问题
- **照片**: 不使用真实医疗从业者照片

祝您设计升级顺利! 🚀

---

**文档版本**: v1.0
**最后更新**: 2025-11-04
**维护者**: Design Team
