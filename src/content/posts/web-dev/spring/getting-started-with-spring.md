---
title: Spring으로 웹 API 시작하기
excerpt: Spring Boot 3와 Record 기반 DTO를 활용해서 REST API를 만드는 방법을 아키텍처 관점에서 정리했습니다.
date: 2025-02-01
tags:
  - Spring
  - Backend
  - REST
category: 웹 개발
subcategory: Spring
heroImage: https://images.unsplash.com/photo-1518770660439-4636190af475
readingTime: 8
---

## 왜 Spring인가?

Java 진영에서 Spring Boot는 표준으로 자리 잡았습니다. 자동 설정, Actuator, 그리고 풍부한 생태계 덕분에 **초기 부트스트랩 비용이 낮고 운영에 강합니다.**

## 프로젝트 구조

```
└─ com.example.demo
   ├─ api
   │  └─ ArticleController
   ├─ application
   │  └─ ArticleService
   └─ domain
      └─ Article
```

핵심은 계층 간 의존성을 단방향으로 유지하는 것입니다. Controller는 Service에만, Service는 Domain에만 접근합니다.

## DTO 설계 팁

- Java 21의 `record` 타입으로 DTO를 정의하면 boilerplate를 줄일 수 있습니다.
- `@JsonInclude(JsonInclude.Include.NON_NULL)`을 통해 직렬화 크기를 줄입니다.

## CRUD 예시

```java
@RestController
@RequestMapping("/api/articles")
class ArticleController {
  private final ArticleService service;

  @GetMapping
  List<ArticleResponse> findAll() {
    return service.findAll();
  }
}
```

서비스 레이어에서는 `@Transactional(readOnly = true)`를 기본으로 두고, 데이터 변경이 필요한 메서드에서만 `readOnly = false`를 사용하면 됩니다.

## 운영 체크리스트

1. actuator + prometheus exporter
2. SpringDoc으로 OpenAPI 문서 자동화
3. flyway로 스키마 버전 관리
4. multi-stage Dockerfile로 이미지 경량화

필요한 부분만 골라 적용해도 충분히 생산적인 Spring 프로젝트를 설계할 수 있습니다.
