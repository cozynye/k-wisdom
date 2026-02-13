# K-Wisdom Project Guidelines

## 📱 모바일 우선 개발 원칙 (CRITICAL)

**이 프로젝트는 모바일 기기에서 주로 사용됩니다. 모든 개발은 모바일 우선으로 진행해야 합니다.**

### 핵심 원칙

#### 1. 모바일 퍼스트 디자인
- **설계 순서**: 모바일(375px) → 태블릿(768px) → 데스크톱(1024px+)
- **Tailwind CSS**: 기본값(모바일) → `md:` → `lg:`
- **예시**:
  ```tsx
  // ✅ GOOD: 모바일 기본, 데스크톱 확장
  <div className="px-4 md:px-8 lg:px-12">

  // ❌ BAD: 데스크톱 기본, 모바일 축소
  <div className="px-12 md:px-8 sm:px-4">
  ```

#### 2. 터치 친화적 인터랙션
- **터치 타겟 최소 크기**: 44x44px (Apple HIG 기준)
- **버튼 간격**: 최소 8px
- **활성 영역**: 시각적 영역보다 터치 영역이 더 커야 함
- **예시**:
  ```tsx
  // ✅ GOOD: 충분한 터치 영역
  <button className="p-4 min-h-[44px] min-w-[44px]">

  // ❌ BAD: 작은 터치 영역
  <button className="p-1 text-sm">
  ```

#### 3. 앱과 같은 UX
- **네이티브 앱 느낌**:
  - 부드러운 애니메이션 (transition-all duration-300)
  - 즉각적인 피드백 (active 상태, 터치 피드백)
  - 스켈레톤 로딩 (로딩 상태 명확히)
- **레이아웃**:
  - 하단 네비게이션 (엄지손가락 도달 영역)
  - 고정 헤더 (스크롤 시에도 접근 가능)
  - 풀스크린 경험 (불필요한 여백 최소화)
- **제스처**: 스와이프, 롱프레스, 풀투리프레시 고려

#### 4. 성능 최적화 (모바일 네트워크)
- **목표**:
  - 초기 로딩 시간: < 3초 (3G 기준)
  - First Load JS: < 200KB
  - Lighthouse 모바일 점수: > 90
- **최적화 기법**:
  - 이미지 최적화 (WebP, lazy loading)
  - 코드 스플리팅
  - 폰트 서브셋팅

#### 5. 접근성 (모바일)
- **폰트 크기**: 최소 16px (iOS Safari 줌 방지)
- **고대비**: WCAG AA 이상 (4.5:1)
- **다크모드**: 필수 지원 (배터리 절약)
- **화면 리더**: ARIA 라벨, 시맨틱 HTML

### 모바일 테스트 체크리스트

✅ **필수 테스트 환경:**
- [ ] iPhone Safari (iOS 16+)
- [ ] Android Chrome (Android 12+)
- [ ] 모바일 화면 크기 (320px ~ 768px)

✅ **UI/UX 체크리스트:**
- [ ] 모바일 화면(375px)에서 UI가 깨지지 않는가?
- [ ] 터치 타겟이 44x44px 이상인가?
- [ ] 가로/세로 모드 모두 지원하는가?
- [ ] 키보드가 UI를 가리지 않는가?
- [ ] 네이티브 앱처럼 부드럽게 동작하는가?

✅ **성능 체크리스트:**
- [ ] 3G 네트워크에서 3초 내 로딩되는가?
- [ ] 오프라인에서도 작동하는가? (PWA)
- [ ] 스크롤이 부드러운가? (60fps)

### 모바일 우선 코딩 패턴

```tsx
// ✅ GOOD: 모바일 우선 반응형
export default function Component() {
  return (
    <div className="
      // 모바일 기본
      flex flex-col gap-4 p-4
      // 태블릿 이상
      md:flex-row md:gap-6 md:p-6
      // 데스크톱
      lg:gap-8 lg:p-8
    ">
      {/* 모바일에서 먼저 테스트 */}
    </div>
  );
}

// ❌ BAD: 데스크톱 우선
export default function Component() {
  return (
    <div className="flex-row gap-8 p-8 sm:flex-col sm:gap-4 sm:p-4">
      {/* 데스크톱 기준으로 설계 */}
    </div>
  );
}
```

---

## 🔴 CRITICAL: 코드 작성 후 테스트 규칙

**모든 코드 작성 및 수정 후에는 반드시 다음 테스트를 수행해야 합니다:**

### 1. 빌드 테스트 (MANDATORY)
```bash
npm run build
```
- **목적**: TypeScript 타입 오류, 빌드 오류 확인
- **시기**: 모든 코드 변경 후
- **실패 시**: 오류를 수정하고 다시 빌드

### 2. 개발 서버 실행 테스트 (MANDATORY)
```bash
npm run dev
```
- **목적**: 런타임 오류 확인, 기능 동작 검증
- **시기**: 새로운 기능 추가 또는 기존 기능 수정 후
- **확인 사항**:
  - [ ] 페이지가 정상적으로 로드되는가?
  - [ ] 콘솔에 에러가 없는가?
  - [ ] 변경한 기능이 정상 작동하는가?

### 3. 프로덕션 빌드 테스트 (중요 변경 시)
```bash
npm run build
npm run start
```
- **목적**: 프로덕션 환경에서의 동작 확인
- **시기**: 배포 전, 주요 기능 변경 후
- **확인 사항**:
  - [ ] 프로덕션 빌드가 성공하는가?
  - [ ] 최적화가 제대로 적용되었는가?
  - [ ] PWA 기능이 정상 작동하는가?

### 4. PWA 기능 테스트 (PWA 관련 변경 시)
```bash
npm run build
npm start
# Chrome DevTools > Application > Manifest 확인
# Chrome DevTools > Application > Service Workers 확인
```
- **확인 사항**:
  - [ ] Manifest 파일이 올바르게 로드되는가?
  - [ ] Service Worker가 등록되는가?
  - [ ] 오프라인에서도 작동하는가?

### 5. 브라우저 호환성 테스트
- **Chrome**: 기본 테스트 브라우저
- **Safari** (iOS): 모바일 대상이므로 필수
- **Firefox**: 크로스 브라우저 호환성
- **확인 사항**:
  - [ ] TTS (Web Speech API) 작동하는가?
  - [ ] PWA 설치가 가능한가?
  - [ ] UI가 깨지지 않는가?

---

## 프로젝트 특징

### 기술 스택
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **PWA**: next-pwa
- **Fonts**: Nanum Myeongjo (한글), Lora (영문)

### 데이터 구조
- **위치**: `public/data/proverbs.json`
- **타입**: TypeScript (`src/types/proverb.ts`)
- **언어**: 8개 언어 지원 (en, ja, zh, es, fr, id, th, vi)

### 핵심 기능
1. **일일 속담**: 매일 자정(00:00) 기준 새 속담 노출
2. **TTS**: Web Speech API로 한글 발음 듣기
3. **다국어**: 8개 언어 번역 제공
4. **PWA**: 오프라인 지원, 홈 화면 추가 가능

---

## 개발 워크플로우

### 1. 새 기능 개발
```bash
# 1. Git 브랜치 생성
git checkout -b feature/new-feature

# 2. 코드 작성
# ...

# 3. 테스트 (MANDATORY)
npm run build
npm run dev

# 4. 커밋
git add .
git commit -m "feat: Add new feature"

# 5. 푸시
git push origin feature/new-feature
```

### 2. 버그 수정
```bash
# 1. Git 브랜치 생성
git checkout -b fix/bug-name

# 2. 버그 수정
# ...

# 3. 테스트 (MANDATORY)
npm run build
npm run dev
# 버그가 수정되었는지 확인

# 4. 커밋
git add .
git commit -m "fix: Fix bug description"

# 5. 푸시
git push origin fix/bug-name
```

---

## 코드 스타일 가이드

### TypeScript
- **엄격 모드**: `strict: true`
- **타입 정의**: 모든 함수에 타입 명시
- **인터페이스**: 객체 타입은 interface 사용

### React 컴포넌트
- **함수형 컴포넌트**: 화살표 함수 사용 금지, `export default function` 사용
- **Hooks**: `use` 접두사 사용
- **Props 타입**: 모든 컴포넌트에 Props 인터페이스 정의

### Tailwind CSS
- **클래스 순서**: 레이아웃 → 스타일 → 애니메이션
- **커스텀 클래스**: `tailwind.config.ts`에서 정의
- **반응형**: 모바일 퍼스트 (기본값 → `md:` → `lg:`)

---

## 금지 사항

❌ **절대 하지 말 것:**
1. 테스트 없이 커밋하지 않기
2. 빌드 에러 상태로 푸시하지 않기
3. TypeScript 타입 체크 무시(`@ts-ignore`) 남용하지 않기
4. 콘솔 에러 무시하지 않기
5. 프로덕션에 `console.log` 남기지 않기

---

## 배포 체크리스트

- [ ] `npm run build` 성공
- [ ] `npm run lint` 통과
- [ ] 타입 에러 없음
- [ ] 콘솔 에러 없음
- [ ] PWA 기능 테스트 완료
- [ ] 모바일 반응형 확인
- [ ] TTS 기능 동작 확인
- [ ] Git 커밋 메시지 명확
- [ ] CHANGELOG 업데이트 (major 변경 시)

---

**Last Updated**: 2025-02-13
