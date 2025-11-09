---
title: 풀스택 Observability 파이프라인 구성하기
excerpt: 로그, 메트릭, 트레이스를 하나의 뷰로 묶는 OpenTelemetry 기반 파이프라인을 소개합니다.
date: 2025-02-10
tags:
  - Observability
  - OpenTelemetry
  - DevOps
category: 데브옵스
subcategory: Observability
heroImage: https://images.unsplash.com/photo-1485827404703-89b55fcc595e
---

## 수집 계층

- OpenTelemetry Collector를 게이트웨이 모드로 배포
- 리소스 속성에 `service.name`, `deployment.environment`를 필수로 추가

## 처리 파이프라인

```yaml
processors:
  batch:
    timeout: 5s
  tail_sampling:
    policies:
      - name: errors
        type: status_code
        status_code:
          status_codes: [ERROR]
```

## 시각화

- 메트릭: Grafana
- 로그: Loki
- 트레이스: Tempo

## 운영 팁

1. 샘플링 비율을 환경별로 나눕니다.
2. 장애 시 Collector의 힙 메모리를 우선 확인합니다.
3. 대시보드는 팀별 KPI와 연결해 과도한 위젯을 줄입니다.

이 구성만으로도 멀티 서비스 환경에서 공통 모니터링 언어를 만들 수 있습니다.
