/**
 * Experience — 경력 (최신순)
 * period 는 실제 기간으로 수정하세요.
 */
export const experiences = [
  {
    id: 'finance-it-ops',
    title: '금융 IT 시스템 운영',
    organization: '금융 IT', // TODO: 실제 기관/회사명
    period: '2026 – Now', // TODO
    type: '시스템 운영',
    summary:
      '출입통제시스템을 운영하며 권한 관리, 상태 점검, 로그 기반 오류 분석을 담당. 이 과정에서 반복 업무를 발견해 AI 기반 이상 로그 탐지 도구를 구현했습니다.',
    duties: [
      '출입통제시스템 관리',
      '사용자 출입 권한 관리',
      '권한 변경 요청 처리',
      '시스템 상태 점검',
      '출입 관련 오류 원인 분석',
      '로그 기반 문제 확인',
    ],
    highlight: '운영 데이터(로그)를 다루며 문제를 분석한 경험이 AI 기반 출입 이상 로그 탐지 프로젝트로 이어짐',
    relatedProject: 'access-anomaly-ai',
  },
  {
    id: 'post-office-intern',
    title: '우체국 청년인턴',
    organization: '우체국',
    period: '2025', // TODO
    type: '인턴',
    summary:
      '고객 응대와 행정 업무를 지원하며, 정해진 업무 절차에 따라 데이터와 문서를 정확하게 관리하는 경험을 쌓았습니다.',
    duties: ['고객 안내', '행정 업무 지원', '데이터 및 문서 관리', '업무 절차에 따른 정확한 처리'],
    highlight: '절차와 정확성이 중요한 공공 업무 환경에서 데이터·문서를 다룬 경험',
  },
]
