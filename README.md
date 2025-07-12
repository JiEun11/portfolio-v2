# Portfolio 프로젝트

이 프로젝트는 포트폴리오 웹사이트를 구축하기 위한 모던 프론트엔드 애플리케이션입니다.

## 주요 특징

-   **심플하고 모던한 디자인**
-   **프로젝트(Works) 중심의 구조**
-   **반응형 UI** (모바일/PC 모두 지원)
-   **Vite 기반의 빠른 개발 환경**

## 기술 스택 및 주요 버전

이 프로젝트는 아래 명시된 버전 환경에서 개발 및 테스트되었습니다. 원활한 개발 환경 구성을 위해 버전을 맞춰주는 것을 강력히 권장합니다.

| 분류                | 기술 / 라이브러리      | 버전                   | 비고                                   |
| :------------------ | :--------------------- | :--------------------- | :------------------------------------- |
| **Runtime**         | **Node.js**            | `22.17.0`              | `.nvmrc` 파일로 버전 관리 권장         |
| **Package Manager** | **npm**                | `10.9.2`               |                                        |
| **Version Manager** | nvm                    | `0.3.7`                | 개발 환경 도구 (선택 사항)             |
| **Build Tool**      | **Vite**               | `^4.6.0`               | `package.json` 참고                    |
| **Framework**       | **React**              | `^18.2.0`              | `package.json` 참고                    |
| **Language**        | **TypeScript**         | `^5.2.2`               | `package.json` 참고                    |
| **Backend**         | Node.js, Express.js    | -                      | (서버 구현 시 명시)                    |
| **Database**        | MongoDB                | -                      | (DB 연동 시 명시)                      |
| **Deployment**      | AWS S3, CloudFront     | -                      |                                        |
| **CI/CD**           | Jenkins                | -                      |                                        |


## 설치 및 실행 방법

### 1. 개발 환경 준비

-   **Node.js**: `v22.17.0` 버전 사용을 권장합니다. `nvm`을 사용하고 있다면, `nvm use` 명령으로 버전을 맞출 수 있습니다.
-   **npm**: `v10.9.2` 버전 이상 사용을 권장합니다.
-   **의존성 설치**: 프로젝트 루트에서 아래 명령어를 실행하세요.

    ```
    npm install
    ```

### 2. 개발 서버 실행

-   서버가 실행되면 브라우저에서 **`http://localhost:5173`** 주소로 접속하여 확인합니다.



## 폴더/파일 설명

- **/src/assets**: 이미지, 폰트 등 정적 리소스  
- **/src/components**: 프로젝트 전반에서 재사용하는 공용 컴포넌트  
- **/src/sections**: 페이지를 구성하는 주요 섹션 단위 컴포넌트  
- **/src/hooks**: 커스텀 React Hook  
- **/src/styles**: 전역 및 모듈 스타일 파일  
- **App.tsx**: 메인 애플리케이션 컴포넌트  
- **main.tsx**: React 진입점  
- **.eslintrc.cjs**: ESLint 설정 파일  
- **.nvmrc**: Node.js 버전 관리 파일  
- **package.json**: 프로젝트 메타 정보 및 의존성  
- **README.md**: 프로젝트 설명서  
- **tsconfig.json**: TypeScript 설정  
- **vite.config.ts**: Vite 빌드/개발 환경 설정


## 주요 명령어

| 명령어          | 설명                               |
| :-------------- | :--------------------------------- |
| `npm run dev`   | 개발 서버 실행                     |
| `npm run build` | 프로덕션용으로 프로젝트 빌드       |
| `npm run lint`  | ESLint로 코드 품질 검사            |
| `npm run preview`| 빌드 결과물을 로컬에서 미리보기   |

