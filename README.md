# 📿 Daily K-Wisdom

> 매일 만나는 한국의 지혜 • Discover Korean wisdom through daily proverbs

외국인(K-POP, K-Drama 팬)을 대상으로 한국의 속담, 명언, 고전 문구를 매일 하나씩 소개하는 **Progressive Web App (PWA)** 서비스입니다.

## ✨ Features

- 📅 **Daily Wisdom**: 매일 자정(00:00) 기준으로 새로운 속담 노출
- 🌍 **8개 언어 지원**: English, 日本語, 中文, Español, Français, Indonesia, ไทย, Tiếng Việt
- 🔊 **TTS (Text-to-Speech)**: 한글 발음 듣기 기능
- 📱 **PWA**: 오프라인 지원, 홈 화면 추가 가능
- 🎨 **미니멀 디자인**: 한지 텍스처, 세리프 폰트
- 📲 **모바일 퍼스트**: 반응형 디자인 (최대 800px)

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router, React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **PWA**: next-pwa
- **Fonts**: Nanum Myeongjo (나눔명조), Lora
- **Deployment**: Vercel

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/cozynye/k-wisdom.git
cd k-wisdom

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
k-wisdom/
├── public/
│   ├── data/
│   │   └── proverbs.json      # 속담 데이터 (5개)
│   ├── icons/                 # PWA 아이콘
│   │   ├── icon-192x192.png
│   │   └── icon-512x512.png
│   └── manifest.json          # PWA Manifest
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root Layout
│   │   ├── page.tsx           # 메인 페이지
│   │   └── globals.css        # 전역 스타일
│   ├── components/
│   │   ├── DailyQuote.tsx     # 일일 문구 카드
│   │   └── AudioButton.tsx    # TTS 버튼
│   ├── lib/
│   │   ├── getProverb.ts      # 날짜 기반 속담 선택
│   │   └── useTTS.ts          # Web Speech API 훅
│   └── types/
│       └── proverb.ts         # TypeScript 타입
├── next.config.js             # Next.js + PWA 설정
├── tailwind.config.ts         # Tailwind 커스텀 설정
└── package.json
```

## 🎨 PWA Icons Setup

PWA 기능을 위해 아이콘 이미지가 필요합니다:

### Option 1: Online Icon Generator (Recommended)

1. [Favicon.io](https://favicon.io/) 또는 [RealFaviconGenerator](https://realfavicongenerator.net/) 방문
2. 텍스트 또는 이미지로 아이콘 생성:
   - **Text**: "智" (지혜), "K", "知"
   - **Font**: Nanum Myeongjo 또는 Serif 계열
   - **Colors**: Background `#F9F9F9`, Text `#C62828` or `#1A237E`
3. 192x192px, 512x512px PNG 다운로드
4. `public/icons/` 디렉토리에 저장

### Option 2: Design Tools

**Figma/Canva/Photoshop**:
1. 512x512px 캔버스 생성
2. 한국 전통 문양 또는 붓글씨 스타일로 디자인
3. Export as PNG (192x192, 512x512)
4. `public/icons/` 디렉토리에 저장

### Option 3: Temporary Placeholder

개발용 임시 아이콘:

```bash
# Create simple colored squares (macOS/Linux)
convert -size 192x192 xc:'#C62828' public/icons/icon-192x192.png
convert -size 512x512 xc:'#C62828' public/icons/icon-512x512.png

# Or use online tool: https://placeholder.com
```

## 🔧 Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint check
```

## 📚 Data Structure

속담 데이터는 `public/data/proverbs.json`에 저장됩니다:

```json
{
  "id": 1,
  "type": "proverb",
  "tags": ["speech", "kindness"],
  "source": {
    "text": "가는 말이 고와야 오는 말이 곱다.",
    "romanization": "Ganeun mari gowaya oneun mari gopda.",
    "author": null
  },
  "translations": {
    "en": {
      "text": "Nice words for nice words.",
      "meaning": "If you speak nicely to others, they will speak nicely to you."
    }
    // ... 8개 언어
  }
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. GitHub에 코드 푸시
2. [Vercel](https://vercel.com/) 로그인
3. "Import Project" → GitHub 저장소 선택
4. 자동 배포 완료! 🎉

PWA는 HTTPS에서만 작동하며, Vercel은 자동으로 HTTPS를 제공합니다.

## ✅ Verification Checklist

로컬 테스트:
- [ ] `npm run dev` 실행 후 http://localhost:3000 접속
- [ ] 오늘의 속담이 화면에 표시되는가?
- [ ] 스피커 아이콘 클릭 시 한글 TTS 재생되는가?
- [ ] 언어 전환 버튼이 작동하는가?
- [ ] 모바일 반응형 디자인 확인 (DevTools)

PWA 검증:
- [ ] `npm run build && npm start` 실행
- [ ] Chrome DevTools > Application > Manifest 확인
- [ ] Service Worker 등록 확인
- [ ] "설치" 버튼이 브라우저에 표시되는가?
- [ ] 홈 화면에 추가 후 앱처럼 실행되는가?

## 🎯 Next Steps (2차 개발)

- [ ] 푸시 알림 구현 (매일 자정 새 문구 알림)
- [ ] 즐겨찾기 기능 (LocalStorage)
- [ ] 공유 기능 (Web Share API)
- [ ] 다크 모드
- [ ] 속담 데이터 확장 (5개 → 100개+)

## 📄 License

MIT License

## 👥 Contributors

Made with ❤️ for Korean culture lovers worldwide.

---

**Start Date**: 2025-02-13
**Status**: 🚧 Under Development (MVP Phase)
