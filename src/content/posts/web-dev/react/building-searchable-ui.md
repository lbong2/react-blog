---
title: React + Tailwind로 검색 가능한 UI 설계하기
excerpt: 컴포넌트 아키텍처, 상태 분리, 접근성까지 고려해 검색 중심 인터페이스를 만드는 과정을 공유합니다.
date: 2025-01-18
tags:
  - React
  - TailwindCSS
  - UX
category: 웹 개발
subcategory: React
heroImage: https://images.unsplash.com/photo-1555066931-4365d14bab8c
---

검색 경험은 단순히 인풋 박스를 제공하는 것을 넘어, **검색어를 입력하기 전에 어떤 선택지를 줄 것인지**까지 고민해야 합니다.

## 컴포넌트 분리

1. `SearchField`: 텍스트 입력과 제안 UI
2. `FilterChips`: 태그/카테고리 필터
3. `ResultList`: 스켈레톤 + 빈 상태 처리

## 상태 관리 전략

```tsx
const [query, setQuery] = useState('');
const [filters, setFilters] = useState<string[]>([]);

const payload = useMemo(
  () => buildPayload({ query, filters, page }),
  [query, filters, page]
);
```

`useMemo`로 파생 데이터를 만들고, API 호출 훅에서는 `payload`를 의존성으로 사용합니다.

## 접근성 체크

- `aria-expanded`와 `aria-controls`로 제안 드롭다운을 연결
- 로딩 상태를 `aria-live="polite"` 영역에 노출
- 키보드 탐색 시 focus trap을 피하기 위해 `Combobox` 패턴 준수

## 스타일 가이드

- Tailwind의 `@layer components`를 활용해 토큰화합니다.
- 다크 모드를 class 전략으로 전환해 페이지별로 제어하기 쉽게 합니다.

이러한 패턴은 콘텐츠 검색뿐 아니라 내부 Admin 도구에도 그대로 적용할 수 있습니다.
