/**
 * Featured Projects
 *
 * 모든 프로젝트는 Problem → Analysis → Solution → Result 구조를 따릅니다.
 *  - problem  : 어떤 업무/사용자 문제가 있었는가
 *  - analysis : 데이터·프로세스 관점에서 문제를 어떻게 정의했는가
 *  - solution : 무엇을 어떻게 구현했는가 (pipeline: 흐름도로 표시)
 *  - result   : 어떤 변화가 있었는가 (metrics: 강조 지표)
 *  - roles    : 내가 맡은 역할
 *  - message  : 핵심 메시지 (카드 하단 인용 문구)
 */
export const projects = [
  {
    id: 'access-anomaly-ai',
    featured: true,
    title: 'AI 기반 출입 이상 로그 탐지',
    period: '2025',
    type: '업무 자동화 · AI',
    tags: ['Python', 'Claude Code', 'Excel', 'Windows Alert', 'Log Analysis'],
    summary:
      '출입통제시스템의 출입 로그를 AI가 분석해 이상 출입을 자동으로 판단하고, 운영 담당자에게 즉시 알림을 보내는 도구.',
    problem: {
      title: '담당자가 매번 로그를 직접 확인하는 반복 업무',
      body:
        '출입통제시스템 운영 과정에서 출입 관련 로그를 담당자가 직접 확인하며 이상 여부를 판단해야 하는 반복적인 업무가 존재했습니다. 로그 양이 많아질수록 확인이 늦어지고 누락 가능성도 커졌습니다.',
    },
    analysis: {
      title: '이상 출입을 3가지 유형으로 정의',
      body:
        '출입통제 업무 프로세스를 분석해 “사람이 판단하던 기준”을 데이터로 확인 가능한 규칙으로 정리했습니다.',
      points: ['권한이 없는 출입', '유효기간이 지난 출입증 사용', '등록되지 않은 출입증 사용'],
    },
    solution: {
      title: 'Excel 로그 → AI 분석 → 즉시 알림 파이프라인',
      body:
        '출입 로그 Excel 파일을 입력으로 받아 Claude Code 기반 AI가 출입 권한·유효기간·등록 여부를 대조해 이상 출입을 판단하고, 결과를 Windows Alert로 담당자에게 바로 알려주도록 구현했습니다.',
      pipeline: ['출입 로그 Excel', 'Claude Code 기반 AI 분석', '이상 출입 여부 판단', 'Windows Alert 알림'],
    },
    result: {
      title: '운영 환경에서 바로 쓰이는 AI 판단 도구',
      body:
        '담당자가 로그를 하나씩 확인하던 업무가 AI 분석 결과를 확인하는 업무로 바뀌었고, 이상 출입을 놓치지 않고 즉시 인지할 수 있게 되었습니다.',
      metrics: [
        { value: '3', label: '자동 탐지 이상 유형' },
        { value: '실시간', label: 'Windows Alert 알림' },
        { value: '수동 → 자동', label: '로그 확인 방식' },
      ],
    },
    roles: [
      '출입통제 업무 프로세스 분석',
      '이상 출입 유형 정의',
      '출입 로그 데이터 기반 AI 분석 방식 적용',
      'AI 자동 판단 기능 구현',
      'Windows Alert 기반 알림 구성',
    ],
    message:
      '실제 업무 데이터를 AI가 분석하고, 분석 결과를 운영 환경에서 바로 활용할 수 있도록 구현한 경험',
    links: {
      github: '', // 있으면 URL 입력
      demo: '',
    },
  },
  {
    id: 'mtland',
    featured: true,
    title: 'MTLAND',
    period: '대학 재학 중',
    type: '웹 서비스',
    tags: ['Web Service', 'React', 'Spring Boot', 'MySQL'],
    summary:
      '대학교 학생회의 MT 준비 정보를 한곳에서 확인하고 관리할 수 있는 MT 전용 웹서비스.',
    problem: {
      title: '여러 자료와 담당자에게 흩어진 MT 준비 업무',
      body:
        '대학교 학생회 활동 과정에서 MT 준비 업무가 여러 자료와 담당자에게 분산되어 있었습니다. 같은 정보를 반복해서 묻고 전달하는 과정에서 시간이 낭비되고 실수가 발생했습니다.',
    },
    analysis: {
      title: '반복되는 4가지 비효율 지점 파악',
      body:
        '학생회 구성원들이 실제로 겪는 불편을 정리해 정보가 중복·분산되는 지점을 구체화했습니다.',
      points: [
        '참가자 정보 반복 확인',
        '일정 공유 과정의 비효율',
        '방 배정 정보 관리',
        '담당자 간 반복적인 정보 전달',
      ],
    },
    solution: {
      title: '정보를 한곳에 모은 MT 전용 웹서비스',
      body:
        '학생회 구성원이 참가자·일정·방 배정 정보를 한곳에서 확인하고 관리할 수 있는 MT 전용 웹서비스를 개발했습니다. 담당자별로 흩어져 있던 정보를 단일 화면으로 통합해 전달 과정을 없앴습니다.',
      pipeline: ['참가자 정보 등록', '일정 공유', '방 배정 관리', '구성원 공동 확인'],
    },
    result: {
      title: 'MT 준비 업무 효율 약 15% 향상',
      body:
        '반복 확인과 전달에 쓰이던 시간이 줄어 MT 준비 업무 효율이 약 15% 향상되었습니다.',
      metrics: [
        { value: '+15%', label: 'MT 준비 업무 효율' },
        { value: '1곳', label: '통합된 정보 확인 창구' },
        { value: '4개', label: '해소한 비효율 지점' },
      ],
    },
    roles: ['사용자 불편 조사 및 요구사항 정리', '서비스 기획 및 화면 설계', '웹서비스 개발'],
    message: '사용자의 불편을 발견하고 웹서비스로 해결한 경험',
    links: {
      github: '',
      demo: '',
    },
  },
  {
    id: 'gaonje-dasion',
    featured: true,
    title: '가온제 / 다시ON',
    period: '대학 재학 중',
    type: '풀스택 웹 서비스',
    tags: ['React', 'Spring Boot', 'JDK 21', 'Gradle', 'MySQL', 'Docker', 'GCP VM', 'ML/OCR'],
    summary:
      'React + Spring Boot 기반의 풀스택 웹 서비스. Docker로 컨테이너화하여 GCP VM에 배포하고 ML/OCR 기능을 연동했습니다.',
    // TODO: 프로젝트의 실제 배경/문제/결과 내용으로 보완하세요.
    problem: {
      title: '사용자에게 필요한 정보와 기능이 하나의 서비스로 제공되지 않던 상황',
      body:
        '서비스 이용자가 필요한 정보를 확인하고 처리하는 과정이 여러 채널로 나뉘어 있어, 이를 하나의 웹 서비스로 통합할 필요가 있었습니다.',
    },
    analysis: {
      title: '프론트·백엔드·인프라를 아우르는 서비스 구조 설계',
      body:
        '요구 기능을 정리해 화면(React), API(Spring Boot), 데이터(MySQL), 배포(Docker · GCP VM) 계층으로 나누고, 이미지 기반 정보 처리를 위해 ML/OCR 기능 연동을 검토했습니다.',
      points: ['화면과 API 책임 분리', 'MySQL 기반 데이터 모델 설계', '컨테이너 기반 배포 환경 구성', 'ML/OCR 기능 연동 지점 정의'],
    },
    solution: {
      title: 'React + Spring Boot 풀스택 구현과 클라우드 배포',
      body:
        'React로 사용자 화면을, Spring Boot(JDK 21, Gradle)로 REST API를 구현하고 MySQL에 데이터를 저장했습니다. Docker 이미지로 패키징해 GCP VM에 배포하고, ML/OCR 기능을 서비스에 연동했습니다.',
      pipeline: ['React UI', 'Spring Boot API', 'MySQL', 'Docker · GCP VM'],
    },
    result: {
      title: '실제 배포까지 완료한 풀스택 개발 경험',
      body:
        '설계부터 개발, 컨테이너 배포까지 서비스 전 과정을 경험하고, ML/OCR과 같은 외부 기능을 웹 서비스에 연동하는 방법을 익혔습니다.',
      metrics: [
        { value: 'Full-stack', label: 'React · Spring Boot · MySQL' },
        { value: 'GCP VM', label: 'Docker 기반 배포' },
        { value: 'ML/OCR', label: '기능 연동' },
      ],
    },
    stack: {
      Frontend: ['React'],
      Backend: ['Spring Boot', 'Gradle', 'JDK 21'],
      Database: ['MySQL'],
      Infrastructure: ['Docker', 'GCP VM'],
      기타: ['ML/OCR 기능 연동 경험'],
    },
    roles: ['React 기반 화면 개발', 'Spring Boot REST API 개발', 'Docker · GCP VM 배포 환경 구성', 'ML/OCR 기능 연동'],
    message: '설계부터 배포까지, 서비스 전 과정을 직접 구현한 경험',
    links: {
      github: '',
      demo: '',
    },
  },
]
