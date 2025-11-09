# React Blog Starter (React + Tailwind UI + GitHub Pages)

React 19, Vite, Tailwind CSS 기반으로 만든 마크다운 블로그 스타터입니다. GitHub Pages로 바로 배포할 수 있고, 카테고리(대/중분류), 태그, 검색, 댓글(Giscus)을 지원합니다.

## 주요 기능

- 🔖 대분류/중분류 기반 카테고리 + 태그 시스템
- 🔍 클라이언트 사이드 검색 (제목/요약/태그 대상)
- 📄 `src/content/posts` 내부의 마크다운을 자동으로 파싱
- 💬 Giscus 댓글(옵션)
- 🌓 Tailwind UI 기반의 미니멀 레이아웃
- 🚀 GitHub Pages 배포를 위한 `base`/`gh-pages` 설정

## 디렉터리 구조

```
src/
├─ components/       # UI 컴포넌트
├─ config/           # 사이트 메타 및 GitHub Pages 설정
├─ content/posts/    # 마크다운 포스트(대분류/중분류 디렉터리)
├─ lib/              # 마크다운 파서, 검색 유틸
├─ routes/           # 페이지 단위 라우트
└─ types/            # 타입 정의
```

## 시작하기

```bash
npm install   # 의존성 설치
npm run dev   # 개발 서버 (http://localhost:5173)
npm run lint  # ESLint
npm run build # 프로덕션 빌드 (dist/)
```

### 사이트 메타 업데이트
`src/config/siteConfig.ts`에서 제목, 소개글, GitHub 사용자명, Giscus 설정 등을 바꿀 수 있습니다. 기본 `base` 경로는 `/`이므로 로컬에서 `npm run dev`를 실행하면 바로 미리보기 할 수 있습니다. GitHub Pages 리포지토리명이 `react-blog`가 아니라면 `githubPages.repositoryName`을 바꾸고, 빌드 시 `VITE_BASE_PATH=/your-repo/ npm run build`(또는 `.env.production` 파일에 `VITE_BASE_PATH` 지정)를 통해 배포용 경로를 맞춰 주세요.

### 마크다운 작성 규칙
`src/content/posts/<대분류>/<중분류>/<slug>.md` 형태로 파일을 추가합니다. Front Matter 예시는 아래와 같습니다.

```md
---
title: Spring으로 웹 API 시작하기
excerpt: 간단한 소개
date: 2025-02-01
tags:
  - Spring
  - Backend
category: 웹 개발        # 대분류
subcategory: Spring      # 중분류
heroImage: https://...
readingTime: 8           # (선택) 직접 지정 가능, 없으면 자동 계산
---

## 본문
```

`category`와 `subcategory`는 필수이며, 태그는 쉼표 혹은 배열 형태 모두 허용됩니다. 새 파일을 커밋/푸시하고 `npm run build`로 정적 파일을 생성하면 곧바로 반영됩니다.

### 검색 동작
- `filterPosts` 유틸이 제목/요약/태그를 기준으로 필터링합니다.
- 카테고리 탭(대분류) + 서브카테고리 칩(중분류)을 조합해 원하는 글을 좁혀볼 수 있습니다.

### 댓글(Giscus)
`siteConfig.giscus.enabled`를 `true`로 바꾸고, Giscus 설치 페이지에서 repo / repoId / categoryId 등을 발급받아 입력하면 됩니다. 끄고 싶다면 `enabled: false`로 유지하세요.

## GitHub Pages 배포

1. `VITE_BASE_PATH=/react-blog/ npm run build` 처럼 배포용 base 경로를 설정한 뒤 빌드를 실행하고 `dist/` 폴더가 생성되면
2. `gh-pages` 브랜치를 만들고 `dist` 내용을 push (`git subtree push --prefix dist origin gh-pages` 등)
3. GitHub Pages 설정에서 `gh-pages` 브랜치의 `/`를 선택합니다.

> 추후 자동화를 원하면 [`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages)를 사용하는 GitHub Actions 워크플로를 추가하면 됩니다.

## 자주 하는 커스터마이징

- **다크 모드**: `tailwind.config.js`에서 `darkMode: 'class'`를 활성화하고, 헤더에 토글을 추가하세요.
- **검색 고도화**: 현재는 간단한 필터 방식입니다. 대규모 컨텐츠라면 `lunr`나 `MiniSearch` 등을 붙여 인덱스를 생성할 수 있습니다.
- **콘텐츠 위치 변경**: 마크다운을 다른 폴더로 옮기면 `src/lib/posts.ts`의 `import.meta.glob` 경로도 함께 수정해야 합니다.

필요한 기능이나 개선 아이디어가 있다면 자유롭게 확장해 주세요. 즐거운 블로깅 되세요!
