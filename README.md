AWS FE 소모임에서 next-auth와 AWS cognito를 통합해
서버사이드(Server Side)에서 인증 처리를 하는 법에 대해 설명하고자 합니다.
이 레포지토리는 위의 과정을 설명하기 위한 테스트 레포지토리 입니다.

## 커맨드

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 버전
- react : 18
- typeScript : 5
- next.js :14.0.4
- next-auth : 4.24.5
- react-hook-form : 7.49.2
- tailwind : 3.3.0
- amazon-cognito-identity-js : 6.3.7

## UI

- 로그인 화면
 
![스크린샷 2024-01-03 오전 2 13 32](https://github.com/Imjurney/next-auth-cognito/assets/102623672/674ec577-ac67-42fb-8a12-ee6f253bb36c)

- 로그인 실패시
  
![스크린샷 2024-01-03 오전 2 14 29](https://github.com/Imjurney/next-auth-cognito/assets/102623672/e20833a4-44d4-47ab-b9c9-2ccfa932e8e2)

- 로그인 성공 시
  
![스크린샷 2024-01-03 오전 2 14 40](https://github.com/Imjurney/next-auth-cognito/assets/102623672/bb160af7-de82-41eb-b299-e1edb5dbb718)
