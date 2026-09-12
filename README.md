# Developer Portfolio

> **업무의 문제를 데이터와 기술로 해결하는 개발자**

React + Vite 기반의 개발자 포트폴리오 웹사이트입니다.
순수 블랙 배경에 블루 포인트 컬러를 사용한 다크 테마이며, 모든 프로젝트를 **Problem → Analysis → Solution → Result** 구조로 소개합니다.

## 섹션 구성

| # | 섹션 | 컴포넌트 | 데이터 파일 |
|---|------|----------|-------------|
| 1 | Hero | `src/components/Hero.jsx` | `src/data/profile.js` |
| 2 | About Me | `src/components/About.jsx` | `src/data/profile.js` |
| 3 | Core Skills | `src/components/Skills.jsx` | `src/data/skills.js` |
| 4 | Featured Projects | `src/components/Projects.jsx`, `ProjectCard.jsx` | `src/data/projects.js` |
| 5 | Experience | `src/components/Experience.jsx` | `src/data/experience.js` |
| 6 | Education | `src/components/Education.jsx` | `src/data/education.js` |
| 7 | Certificates | `src/components/Certificates.jsx` | `src/data/certificates.js` |
| 8 | Contact | `src/components/Contact.jsx` | `src/data/profile.js` |

## 프로젝트 구조

```
portfolio/
├── .github/workflows/deploy.yml   # GitHub Pages 자동 배포 워크플로
├── .env.production                # 배포용 base path (VITE_BASE_PATH)
├── index.html
├── vite.config.js                 # base path 설정
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx                    # 섹션 조립
    ├── styles/index.css           # 디자인 토큰 + 전체 스타일 + 애니메이션
    ├── hooks/
    │   ├── useReveal.js           # 스크롤 진입 감지 (IntersectionObserver)
    │   └── useActiveSection.js    # 현재 섹션 감지 (내비 활성 표시)
    ├── components/                # 섹션별 컴포넌트
    │   ├── Navbar.jsx
    │   ├── ScrollProgress.jsx     # 상단 스크롤 진행 바
    │   ├── Reveal.jsx             # 스크롤 리빌 래퍼 (up/left/right/scale + delay)
    │   ├── DataField.jsx          # Hero 배경 데이터 노드 네트워크 (canvas)
    │   ├── Section.jsx            # 공통 섹션 래퍼
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Skills.jsx
    │   ├── Projects.jsx
    │   ├── ProjectCard.jsx        # Problem → Analysis → Solution → Result 카드
    │   ├── Experience.jsx
    │   ├── Education.jsx
    │   ├── Certificates.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    └── data/                      # 콘텐츠는 모두 여기서 관리
        ├── profile.js
        ├── skills.js
        ├── projects.js
        ├── experience.js
        ├── education.js
        └── certificates.js
```

## 실행 방법

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행 (http://localhost:5173)
npm run dev

# 3. 프로덕션 빌드 (dist/ 생성)
npm run build

# 4. 빌드 결과 미리보기
npm run preview
```

> Node.js 18 이상을 권장합니다.

## 콘텐츠 수정하기

컴포넌트를 건드리지 않고 `src/data/` 의 파일만 수정하면 됩니다.

- **이름 · 소개 · 연락처** → `src/data/profile.js` (`// TODO` 로 표시된 값을 실제 정보로 교체)
- **프로젝트 추가** → `src/data/projects.js` 배열에 항목 추가.
  `problem / analysis / solution / result` 네 필드를 채우면 카드가 자동으로 렌더링됩니다.
  `solution.pipeline` 은 흐름도, `result.metrics` 는 강조 지표로 표시됩니다.
- **경력 · 학력 · 자격증** → 각각 `experience.js`, `education.js`, `certificates.js`

## GitHub Pages 배포 방법

### 1. base path 설정

GitHub Pages 는 `https://<username>.github.io/<repo>/` 형태의 하위 경로에 배포되므로,
Vite 의 `base` 를 저장소 이름에 맞춰야 합니다.

`.env.production` 파일을 열어 저장소 이름으로 변경하세요.

```bash
# .env.production
VITE_BASE_PATH=/<repo-name>/
```

| 배포 대상 | VITE_BASE_PATH |
|-----------|----------------|
| 프로젝트 페이지 `username.github.io/portfolio/` | `/portfolio/` |
| 사용자 페이지 `username.github.io/` | `/` |
| 커스텀 도메인 | `/` |

빌드 시 환경변수로 직접 지정할 수도 있습니다.

```bash
VITE_BASE_PATH=/my-repo/ npm run build
```

### 2-A. GitHub Actions 로 자동 배포 (권장)

1. 코드를 GitHub 저장소의 `main` 브랜치에 push 합니다.
2. 저장소 **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 선택합니다.
3. 이후 `main` 에 push 할 때마다 `.github/workflows/deploy.yml` 이 실행되어 자동으로 배포됩니다.
   (Actions 탭에서 진행 상황을 확인할 수 있습니다.)

> 저장소 이름을 바꿔도 base path 가 자동으로 따라가게 하려면
> `deploy.yml` 의 `VITE_BASE_PATH: /${{ github.event.repository.name }}/` 주석을 해제하세요.

### 2-B. gh-pages 패키지로 수동 배포

```bash
npm run build      # dist/ 생성
npm run deploy     # dist/ 를 gh-pages 브랜치에 push
```

그 다음 **Settings → Pages → Source** 를 **Deploy from a branch** → `gh-pages` / `/ (root)` 로 설정합니다.

### 배포 후 화면이 비어 보인다면

- `.env.production` 의 `VITE_BASE_PATH` 가 실제 저장소 이름과 일치하는지 확인하세요 (앞뒤 `/` 포함).
- 브라우저 개발자 도구 Network 탭에서 `assets/*.js` 가 404 라면 base path 문제입니다.

## 애니메이션

- Hero: 텍스트 순차 등장, 그라데이션 흐름, 배경 데이터 노드 네트워크(canvas), 스크롤 힌트
- 섹션/카드: 스크롤 진입 시 페이드·슬라이드 인 (`<Reveal variant="up|left|right|scale" delay={ms}>`)
- 카드 내부 항목: `.stagger-item` + `--i` 로 순차 등장
- 인터랙션: 카드 호버 리프트, 프로젝트 카드 테두리 광원, 내비 활성 밑줄, 스크롤 진행 바
- 시스템의 "동작 줄이기(prefers-reduced-motion)" 설정을 켠 사용자에게는 모든 애니메이션이 꺼집니다.

색상은 `src/styles/index.css` 상단 `:root` 토큰(`--bg`, `--blue`, `--surface` 등)만 바꾸면 전체에 반영됩니다.

애니메이션 강도를 줄이고 싶다면 `src/styles/index.css` 의 `Motion` 블록에서 `--dur` 값이나 개별 keyframes 를 조정하세요.

## 기술 스택

- React 19, Vite 6
- 순수 CSS (CSS 변수 기반 디자인 토큰, 반응형 그리드)
- Pretendard / JetBrains Mono 웹폰트

## 라이선스

개인 포트폴리오 용도로 자유롭게 수정해 사용하세요.
