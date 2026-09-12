/**
 * Core Skills — 카테고리별 기술 스택
 * accent: 카테고리 컬러 (CSS 변수 이름)
 */
export const skillGroups = [
  {
    category: 'Data & AI',
    accent: 'cyan',
    description: '업무 데이터를 분석하고 생성형 AI를 실제 업무 흐름에 적용',
    items: ['Python', 'SQL', 'Data Analysis', 'Generative AI'],
  },
  {
    category: 'Backend',
    accent: 'lime',
    description: '안정적인 서버 API와 비즈니스 로직 구현',
    items: ['Java', 'Spring Boot'],
  },
  {
    category: 'Frontend',
    accent: 'violet',
    description: '사용자가 필요한 정보를 한눈에 볼 수 있는 웹 화면 구현',
    items: ['React', 'JavaScript'],
  },
  {
    category: 'Database',
    accent: 'amber',
    description: '데이터 모델링과 조회 성능을 고려한 스키마 설계',
    items: ['MySQL'],
  },
  {
    category: 'Infrastructure',
    accent: 'sky',
    description: '컨테이너 기반 배포와 클라우드 VM 운영',
    items: ['Docker', 'GCP'],
  },
]
