# PPP

Programmer Planner for P

## 기획 배경

데브코스를 시작하면서 일정 관리의 중요성을 실감하게 되었고, 특히 여러 과제와 학습 내용을 효율적으로 관리할 필요가 있음을 느꼈습니다.

다양한 일정 관리 애플리케이션을 찾아보았지만, 사용성이나 기능 면에서 기대를 충족하지 못하는 부분이 많았습니다. 어떤 애플리케이션은 너무 복잡해서 간단한 작업에 적합하지 않았고, 다른 애플리케이션은 커스터마이징이나 유연성이 부족했습니다.

결국 필요에 완벽히 맞는 애플리케이션을 찾지 못했고, 이 기회에 직접 사용자 친화적이면서도 기능적으로 유연한 일정 관리 애플리케이션을 기획해보기로 결심하게 되었습니다.

## 타겟 사용자

- 전국 4년제 컴퓨터 학부 졸업 후 개발자를 준비하는 취업 준비생 25,388명 (2024 기준)
  그리고 매년 2만 명 정도 지속적으로 생겨나는 사용자들
      ![출처: [SPRi Software Stat - SW 전공 졸업자 현황](https://stat.spri.kr/posts/view/22272?code=stat_sw_human_resources)](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/30bb6f04-126e-4fa0-9d10-d9ab04b84fb1/image.png)

      출처: [SPRi Software Stat - SW 전공 졸업자 현황](https://stat.spri.kr/posts/view/22272?code=stat_sw_human_resources)

## 핵심 서비스

1. 유저 친화 적인 캘린더 UI를 이용한 일정 관리 기능
2. 데드라인 지정 기능을 포함한 할 일(Todo)기능
3. 프로그래머에게 필요한 여러 외부 정보들을 한 곳에서 확인할 수 있는 기능

   (트렌드 git repo , dev.to 포스팅 , 사람인 채용공고 정보 제공)

## 컨텐츠 및 사이트 운영 벤치마킹

1. todoist
   - https://todoist.com/ko
2. 구글 캘린더
   - https://calendar.google.com/calendar/u/0/r?pli=1
3. MBTI P를 위한 플래너 예시
   - https://ctee.kr/item/store/12960
   - https://tumblbug.com/dailyprescription

## 특징 및 강점

- 다른 플래너들과 다르게 인기 있는 블로그 포스팅 + 채용 공고들을 볼 수 있는 화면등을 제공

## 향후 계획

1. 일정의 데드라인이 다가올 때 알림 주는 기능 추가 예정(카톡, 슬랙 등)
2. TIL 등을 기록할 수 있는 혼자 쓰는 게시판 기능 추가 예정

## 선정 API 정보

- https://oapi.saramin.co.kr/guide/job-search
  **용도** : **개발자 위주의 채용 공고 확인하는 용도**
  응답: 현재 키 발급 중이라 자세한 응답은 확인 불가. ( API 호출수는 일 최대 500건으로 제한**)**
- https://docs.github.com/ko/rest/search/search?apiVersion=2022-11-28
  **용도 : 최근에 인기가 상승하는 git hub 레포에 대한 리스트 표시 (최근 생성일 기준으로 star가 특정 개수 이상인 레포 검색)**
  응답 : https://api.github.com/search/repositories?q=language:JavaScript+stars:>100+created:>2024-09-04&sort=stars&order=desc
- https://developers.forem.com/api/v1#tag/articles/operation/getArticles
  **용도 : Dev.to플랫폼에서 인기 있는 블로그 포스트와 질문을 가져오기**
  응답: https://dev.to/api/articles?tag=javascript
- https://www.data.go.kr/data/15012690/openapi.do#tab_layer_detail_function
  **용도 : 캘린더 내 한국 공휴일 정보 등록 용도로 사용 ( 사이트에는 없지만 JSON 되는 것 확인 )**
  응답: 아래 처럼 request 날린 경우(10월의 공휴일,)
  getHoliDeInfo?solYear=2024&solMonth=10&\_type=json
      ```json
      {
          "response": {
              "header": {
                  "resultCode": "00",
                  "resultMsg": "NORMAL SERVICE."
              },
              "body": {
                  "items": {
                      "item": [
                          {
                              "dateKind": "01",
                              "dateName": "임시공휴일",
                              "isHoliday": "Y",
                              "locdate": 20241001,
                              "seq": 2
                          },
                          {
                              "dateKind": "01",
                              "dateName": "개천절",
                              "isHoliday": "Y",
                              "locdate": 20241003,
                              "seq": 1
                          },
                          {
                              "dateKind": "01",
                              "dateName": "한글날",
                              "isHoliday": "Y",
                              "locdate": 20241009,
                              "seq": 1
                          }
                      ]
                  },
                  "numOfRows": 10,
                  "pageNo": 1,
                  "totalCount": 3
              }
          }
      }
      ```

## 사이트맵

https://www.figma.com/board/rABy13QjbE2yanjU8qYdNc/PPP?node-id=0-1&node-type=canvas&t=19Aw5x7fbnjYVQmD-0

## 와이어프레임

https://www.figma.com/design/oWN5AXFZRhXZnMKtmvWC3b/PPP?node-id=0-1&node-type=canvas&t=RpUYiuE9GikM7Gpe-0

## 디자인 시안

https://www.figma.com/design/oWN5AXFZRhXZnMKtmvWC3b/PPP?node-id=11-5445&node-type=canvas&t=h2KDtvaWdLR13wWs-0
