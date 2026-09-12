/**
 * Education — 학력 및 추가 교육
 */
export const education = {
  degree: {
    school: '○○대학교', // TODO: 실제 학교명
    major: '컴퓨터공학 전공',
    period: '', // 예) 2019.03 – 2025.02
    courses: [
      { name: '데이터베이스', grade: 'B+' },
      { name: '고급파이썬프로그래밍', grade: 'B0' },
      { name: '객체지향프로그래밍', grade: 'B+' },
      { name: '알고리즘', grade: '' },
      { name: '프로그래밍언어', grade: '' },
      { name: '영상통신', grade: '' },
    ],
  },
  trainings: [
    {
      id: 'pseudonym',
      title: '가명정보 전문인력 양성 교육과정',
      provider: '개인정보보호위원회',
      hours: 49,
      topics: ['가명정보 처리', '개인정보 보호'],
      note: '금융·공공 데이터를 다룰 때 필요한 개인정보 보호 관점을 학습',
    },
    {
      id: 'bigdata',
      title: 'Python/R 기반 빅데이터 수집·분석 교육',
      provider: '더조은컴퓨터아카데미',
      hours: 25,
      topics: ['데이터 수집', '데이터 분석', '데이터 시각화'],
      note: '데이터 수집부터 시각화까지 분석 파이프라인 전반을 실습',
    },
  ],
}
