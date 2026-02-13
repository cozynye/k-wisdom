# K-Wisdom Project Guidelines

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
