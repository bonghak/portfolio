/**
 * 개인 정보 및 Hero / About / Contact 문구
 * ─ 이름, 연락처, 링크는 실제 값으로 교체하세요.
 */
export const profile = {
  name: '오봉학', // TODO: 실제 이름으로 변경
  role: 'Developer · Data & AI',
  tagline: '업무의 문제를 데이터와 기술로 해결하는 개발자',
  intro:
    '금융 IT 시스템 운영 경험을 바탕으로 업무 데이터를 이해하고, 웹 서비스와 AI 기술을 활용해 반복적인 문제를 개선해왔습니다.',

  // Hero 하단에 표시되는 키워드
  keywords: ['Data Analysis', 'Generative AI', 'Web Service', 'System Operation'],

  // About Me 섹션
  about: {
    heading: '문제를 발견하고, 데이터로 확인하고, 기술로 해결합니다.',
    paragraphs: [
      '금융 IT 시스템 운영 현장에서 출입통제시스템을 관리하며 매일 쌓이는 로그와 권한 데이터를 다뤘습니다. 반복적으로 사람이 확인해야 하는 업무가 있다면, 그것은 데이터로 정의하고 자동화할 수 있는 문제라고 생각합니다.',
      '대학 시절 학생회 활동에서 흩어진 정보를 한곳에 모으는 웹서비스를 만들었고, 운영 현장에서는 출입 로그를 AI가 분석해 이상 여부를 즉시 알려주는 도구를 구현했습니다. 두 경험의 공통점은 기술보다 먼저 “누가 어떤 불편을 겪는가”를 관찰했다는 점입니다.',
      '기술 스택을 나열하는 개발자가 아니라, 업무와 사용자 경험 속의 문제를 데이터로 분석하고 웹 서비스와 AI로 해결하는 개발자로 성장하고자 합니다.',
    ],
    // 일하는 방식 (About 우측 카드)
    principles: [
      {
        title: 'Observe',
        desc: '현장의 반복 업무와 사용자의 불편을 먼저 관찰합니다.',
      },
      {
        title: 'Analyze',
        desc: '로그·기록·설문 등 실제 데이터로 문제의 원인과 범위를 확인합니다.',
      },
      {
        title: 'Build',
        desc: '웹 서비스와 AI 기술을 활용해 운영 환경에서 바로 쓰이는 해결책을 만듭니다.',
      },
      {
        title: 'Measure',
        desc: '개선 결과를 수치로 확인하고 다음 개선 지점을 찾습니다.',
      },
    ],
  },


  contact: {
    email: 'gkdlfhd5428@naver.com', // TODO
    github: 'https://github.com/bonghak', // TODO
    linkedin: '', // 없으면 빈 문자열로 두면 표시되지 않습니다.
    blog: '', // 선택
    location: 'Seoul, Korea',
    message:
      '데이터와 기술로 업무 문제를 함께 해결할 기회를 기다리고 있습니다. 편하게 연락 주세요.',
  },
}
