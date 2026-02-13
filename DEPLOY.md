# Vercel 자동 배포 설정 가이드

## 1. Vercel 계정 생성/로그인
https://vercel.com/signup

**GitHub 계정으로 로그인** (권장)

---

## 2. 프로젝트 Import

1. Vercel Dashboard 접속
2. **"Add New..." → "Project"** 클릭
3. GitHub 저장소 `cozynye/k-wisdom` 선택
4. **"Import"** 클릭

---

## 3. 프로젝트 설정

**Framework Preset**: Next.js (자동 감지됨)

**Build Settings** (기본값 사용):
- Build Command: `next build`
- Output Directory: `.next`
- Install Command: `npm install`

**Environment Variables**: (필요 없음)

**"Deploy"** 클릭!

---

## 4. 배포 완료! 🎉

약 1-2분 후:
- ✅ 프로덕션 URL 생성 (예: `k-wisdom.vercel.app`)
- ✅ HTTPS 자동 적용
- ✅ PWA 완벽 작동

---

## 5. 자동 배포 확인

이제 코드를 수정하고:

```bash
git add .
git commit -m "feat: Add new feature"
git push
```

→ **Vercel이 자동으로 감지하고 배포!** (10초 내)

Vercel Dashboard에서 배포 진행 상황 실시간 확인 가능.

---

## 추가 설정 (선택)

### 커스텀 도메인 연결
1. Vercel Dashboard → Settings → Domains
2. 도메인 입력 (예: `k-wisdom.com`)
3. DNS 설정 안내에 따라 설정

### 환경 변수 추가
1. Vercel Dashboard → Settings → Environment Variables
2. Key-Value 추가
3. 다음 배포부터 자동 적용

---

## 배포 상태 확인

**Production URL**: https://k-wisdom.vercel.app (배포 후 확인)

**배포 로그**: Vercel Dashboard → Deployments 탭

**빌드 성공 여부**:
- ✅ 초록색 = 성공
- ❌ 빨간색 = 실패 (로그 확인)

---

## 문제 해결

### 빌드 실패 시
1. Vercel 로그 확인
2. 로컬에서 `npm run build` 테스트
3. 오류 수정 후 `git push`

### PWA가 작동하지 않을 때
- HTTPS 확인 (Vercel은 자동 제공)
- `manifest.json` 경로 확인
- Service Worker 등록 확인

---

**현재 상태**: v1.0.0 배포 준비 완료 ✅
**다음 단계**: Vercel 연동 → 자동 배포 활성화
