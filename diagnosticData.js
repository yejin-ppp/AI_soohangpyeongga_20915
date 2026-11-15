/**
 * 2026 고2 전국연합학력평가 3월·6월·9월 오답률 Top 15 (총 45문항)
 * 2022 개정 수학과 교육과정 성취기준 1:1 진단 데이터베이스
 * 
 * 출처:
 * 1) 2026학년도 3월·6월·9월 전국연합학력평가 수학영역 문제지 및 해설지
 * 2) 교육부 고시 제2022-33호 [별책 8] 수학과 교육과정 성취기준 체계
 */

const DIAGNOSTIC_DB = {
  // =========================================================================
  // [1] 2026학년도 9월 모의고사 (고2) 오답률 Top 15 문항
  // =========================================================================
  "9-30": {
    id: "9-30",
    examMonth: "9",
    examMonthName: "9월 모의고사",
    questionNumber: 30,
    subject: "미적분Ⅰ",
    curriculumDomain: "함수의 극한과 연속",
    topicTitle: "함수의 극한과 연속성을 활용한 그래프 추론",
    difficulty: "오답률 1위 (95.8%)",
    score: 4,
    questionSummary: "구간별 함수 f(x)와 실수 t에 대하여 교점 개수 함수 g(t)의 불연속 조건 및 극한값 조건을 만족하는 미지수 a, b를 구하는 최고난도 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "집합 A의 조건 f(k)·f(-k)=0 (k≠0)에서 원소 s∈A이면 -s∈A라는 대칭성을 파악하고 f(1)>0을 통해 b>1임을 추론했나요?",
        conceptCode: "[10공수2-02-01]",
        conceptName: "집합의 개념과 원소의 성질",
        curriculumSubject: "공통수학2 > 집합과 명제",
        deficiencyTitle: "집합의 대칭 조건 및 함숫값 부호 해석 결손",
        deficiencyDesc: "조건에 주어진 집합의 원소 조건과 함숫값 부호를 연계하여 미지수 b의 범위를 좁히는 기본 논리 추론이 부족합니다.",
        prescription: "1) 조건제시법으로 주어진 집합의 원소 조건 분석 훈련\n2) 함수의 대칭성과 부등식 판정 복습",
        coreKeywords: ["집합의 원소", "조건제시법", "함숫값 부호", "대칭성"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "x<0에서 이차함수의 대칭축 위치에 따라 x축과의 교점 개수(1개 또는 2개)를 기준으로 그래프의 개형을 케이스 분류했나요?",
        conceptCode: "[12미적Ⅰ-02-08]",
        conceptName: "함수의 그래프의 개형 그리기",
        curriculumSubject: "미적분Ⅰ > 미분",
        deficiencyTitle: "구간별 이차함수 개형의 케이스 분류 결손",
        deficiencyDesc: "대칭축의 위치(-2+a)/2의 부호에 따라 x<0에서 축과 만나는 교점 개수가 달라지는 상황을 빠짐없이 분류하지 못했습니다.",
        prescription: "1) 이차함수의 축의 방정식과 제한된 범위에서의 근의 위치 판정 복습\n2) 경우 나누기를 통한 그래프 개형 분석 연습",
        coreKeywords: ["이차함수 축의 방정식", "근의 분리", "케이스 분류"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "직선 y=t와의 교점 개수 함수 g(t)가 불연속이 되는 t의 값들이 극댓값과 극솟값임을 파악하고 조건 (나)의 좌우극한 곱 조건을 적용했나요?",
        conceptCode: "[12미적Ⅰ-01-03]",
        conceptName: "함수의 연속과 극한값의 성질",
        curriculumSubject: "미적분Ⅰ > 함수의 극한과 연속",
        deficiencyTitle: "교점 개수 함수의 불연속점 판정 및 극한 곱 조건 해석 결손",
        deficiencyDesc: "함수 g(t)의 값이 도약하는 지점이 각 구간 함수의 꼭짓점(극값)과 경계점이라는 점과, g(α)와 우극한의 차이를 연결하는 극한 해석 능력이 부족합니다.",
        prescription: "1) 직선 y=t를 움직이며 교점 개수 함수 g(t) 그래프 작성하기 연습\n2) 불연속점에서의 좌극한, 우극한, 함숫값 비교 훈련",
        coreKeywords: ["교점 개수 함수 g(t)", "불연속점", "극값", "우극한과 좌극한"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "만족 가능한 케이스(b=2, a=-11/2)를 특정하고 최종 함숫값 f(-8)을 오차 없이 계산했나요?",
        conceptCode: "[12미적Ⅰ-01-04]",
        conceptName: "연속함수의 성질을 활용한 문제 해결",
        curriculumSubject: "미적분Ⅰ > 함수의 극한과 연속",
        deficiencyTitle: "조건 부합성 판별 및 최종 함숫값 대입 계산 결손",
        deficiencyDesc: "도출된 후보 상수 중 조건 f(1)>0 및 극한 일치 조건을 만족하는 해를 검증하고 식에 정확히 대입하는 마무리가 부족합니다.",
        prescription: "1) 구한 미지수의 조건 부합성 역검증 훈련\n2) 분수 계수 다항함수의 대입 연산 집중 연습",
        coreKeywords: ["조건 부합성 검증", "함숫값 대입", "대수적 연립"]
      }
    ]
  },
  "9-29": {
    id: "9-29",
    examMonth: "9",
    examMonthName: "9월 모의고사",
    questionNumber: 29,
    subject: "대수",
    curriculumDomain: "수열",
    topicTitle: "귀납적으로 정의된 수열 추론 (0이 되는 항의 주기성)",
    difficulty: "오답률 2위 (92.3%)",
    score: 4,
    questionSummary: "첫째항 a₁=0 및 분기 점화식에서 a_m=0을 만족시키는 50 이하의 자연수 m의 개수가 4가 되도록 하는 모든 k의 합을 구하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "첫째항 a₁=0에서 출발하여 점화식에 따라 항들을 순차적으로 대입하며 a_n이 변하는 규칙을 손으로 나열해 보았나요?",
        conceptCode: "[12대수03-01]",
        conceptName: "수열의 뜻과 귀납적 탐색",
        curriculumSubject: "대수 > 수열",
        deficiencyTitle: "수열의 직접 대입 및 귀납적 탐색 시도 결손",
        deficiencyDesc: "점화식이 주어졌을 때 초기 항들을 직접 계산하여 수열의 주기성과 반복 패턴을 파악하려는 귀납적 접근이 부족합니다.",
        prescription: "1) 미지수 k가 포함되어 있어도 a₁, a₂, a₃을 직접 계산하는 습관 형성\n2) 수열 나열을 통한 규칙성 발견 훈련",
        coreKeywords: ["수열의 귀납적 탐색", "초기 항 대입", "규칙성 발견"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "자연수 k가 짝수(k=2p)일 때와 홀수(k=2q-1)일 때 0에 도달하는 주기 규칙이 달라짐을 파악하고 분류했나요?",
        conceptCode: "[12대수03-06]",
        conceptName: "수열의 귀납적 정의와 조건 분류",
        curriculumSubject: "대수 > 수열",
        deficiencyTitle: "정수의 패리티(홀수/짝수)에 따른 수열 분기 추론 결손",
        deficiencyDesc: "2씩 감소하는 점화식의 특성상 k가 짝수이면 0에 정확히 떨어지고, 홀수이면 -1을 거쳐 다음 주기로 넘어간다는 구조를 간파하지 못했습니다.",
        prescription: "1) 잉여류(홀수/짝수)에 따른 점화식 순환 주기 분석 연습\n2) 분기 점화식의 주기 모델링 훈련",
        coreKeywords: ["수열의 귀납적 정의", "패리티 분류", "주기성"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "0이 되는 항의 번호 m이 등차수열을 이룸을 이용하여 4번째 0은 50 이하, 5번째 0은 50 초과라는 연립부등식을 세웠나요?",
        conceptCode: "[12대수03-02]",
        conceptName: "등차수열의 뜻과 일반항의 성질",
        curriculumSubject: "대수 > 수열",
        deficiencyTitle: "특정 항 개수 조건의 부등식 모델링 결손",
        deficiencyDesc: "조건 '50 이하의 m의 개수가 4'를 3p+4 ≤ 50 < 4p+5 형태의 경계 부등식으로 전환하는 수학적 모델링 능력이 부족합니다.",
        prescription: "1) 'k개 이하/이상' 조건을 만족하는 등차수열 항 번호의 부등식 표현 훈련\n2) 경계값(4번째와 5번째 항) 비교 분석 연습",
        coreKeywords: ["등차수열 일반항", "경계 부등식", "개수 조건 모델링"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "짝수 케이스(k=24, 26, 28, 30)와 홀수 케이스(k=11, 13)의 모든 k의 값을 빠짐없이 합산했나요?",
        conceptCode: "[12대수03-04]",
        conceptName: "수열의 합의 계산",
        curriculumSubject: "대수 > 수열",
        deficiencyTitle: "자연수 해 선별 및 최종 합산 마무리 결손",
        deficiencyDesc: "부등식을 만족하는 정수 p, q를 구한 후 k값으로 환원하여 합산하는 과정에서 누락이나 계산 실수가 발생했습니다.",
        prescription: "1) 부등식 만족 정수해 전수 조사 및 검산 습관화\n2) 복수 케이스 최종 취합 루틴 점검",
        coreKeywords: ["자연수 해 선별", "케이스 취합", "합산 연산"]
      }
    ]
  },
  "9-28": {
    id: "9-28",
    examMonth: "9",
    examMonthName: "9월 모의고사",
    questionNumber: 28,
    subject: "대수",
    curriculumDomain: "지수함수와 로그함수",
    topicTitle: "지수함수와 로그함수의 평행이동 및 역함수 관계",
    difficulty: "오답률 3위 (88.0%)",
    score: 4,
    questionSummary: "지수함수 f(x)와 로그함수 g(x)의 역함수 관계를 평행이동으로 파악하고, 직사각형의 넓이와 선분의 길이를 이용하여 점의 좌표를 구하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "함수 f(x)의 역함수 f⁻¹(x)를 구하고, 곡선 y=g(x)와의 평행이동 관계(x축으로 -3/2, y축으로 3/2)를 확인했나요?",
        conceptCode: "[12대수01-07]",
        conceptName: "지수함수와 로그함수의 역함수 관계 및 그래프 평행이동",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "지수·로그함수의 역함수 구하기 및 평행이동 해석 결손",
        deficiencyDesc: "지수함수 y=2^(x-4) + 9/2의 역함수가 로그함수임을 구하고, 식의 변형을 통해 두 곡선 사이의 평행이동 벡터를 파악하지 못했습니다.",
        prescription: "1) 지수함수의 역함수 유도 공식 복습\n2) 로그함수 식 변형을 통한 평행이동량 비교 연습",
        coreKeywords: ["역함수", "지수함수와 로그함수", "평행이동"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "직선 AC의 기울기가 -1이고 선분 AC의 중점 M이 역함수 그래프 위에 있음을 활용하여 선분 AC의 길이를 도출했나요?",
        conceptCode: "[10공수2-01-01]",
        conceptName: "선분의 내분점 및 중점의 좌표",
        curriculumSubject: "공통수학2 > 도형의 방정식",
        deficiencyTitle: "기울기 -1인 직선과 중점 기하 성질 활용 결손",
        deficiencyDesc: "기울기가 -1인 직선 위의 두 점과 역함수 대칭성, 중점의 좌표 성질을 직각이등변삼각형 기하와 연결하지 못했습니다.",
        prescription: "1) 기울기 ±1인 직선과 좌표 평면에서의 거리 공식 연계 연습\n2) 중점 조건 대입을 통한 미지수 관계식 유도 훈련",
        coreKeywords: ["기울기 -1", "선분의 중점", "거리 공식"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "직사각형 ACDB의 넓이가 6임을 이용하여 수직인 선분 AB의 길이가 √2임을 계산했나요?",
        conceptCode: "[10공수2-01-02]",
        conceptName: "두 직선의 수직 조건과 평면도형의 넓이",
        curriculumSubject: "공통수학2 > 도형의 방정식",
        deficiencyTitle: "직사각형의 넓이와 수직 선분 길이 계산 결손",
        deficiencyDesc: "직사각형에서 이웃한 두 변이 수직이라는 성질(기울기 1)과 넓이 공식을 결합하여 선분 AB의 길이를 유도하지 못했습니다.",
        prescription: "1) 두 직선의 수직 조건(기울기 곱 = -1) 복습\n2) 직사각형 넓이 = 가로 × 세로 기본 관계식 활용",
        coreKeywords: ["직사각형 넓이", "수직 조건", "선분의 길이"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "직선 AB의 기울기가 1임을 이용하여 두 점의 x좌표 차와 y좌표 차를 연립해 a=4, b=5를 구했나요?",
        conceptCode: "[12대수01-08]",
        conceptName: "지수함수와 로그함수를 활용한 문제 해결",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "지수방정식 연립 및 점 좌표 도출 결손",
        deficiencyDesc: "2^(b-4) - 2^(a-4) = 1과 b-a=1을 연립하여 지수방정식의 해를 구하는 대수적 계산 능력이 부족했습니다.",
        prescription: "1) 밑이 같은 지수식의 차 연립방정식 풀이 연습\n2) 좌표 차이와 기울기 관계 연립 훈련",
        coreKeywords: ["지수방정식 연립", "좌표 계산", "기울기"]
      }
    ]
  },
  "9-21": {
    id: "9-21",
    examMonth: "9",
    examMonthName: "9월 모의고사",
    questionNumber: 21,
    subject: "대수",
    curriculumDomain: "수열",
    topicTitle: "등차수열과 절댓값 수열의 합 추론",
    difficulty: "오답률 4위 (76.4%)",
    score: 4,
    questionSummary: "모든 항이 정수인 등차수열 {a_n}에 대해 b_n = ∑|a_k| - |∑a_k|로 정의된 수열의 등차수열 조건을 만족하는 첫째항과 공차를 구하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "a₁<0이면 모든 자연수 n에 대해 b_n=0이 되어 조건 (가)에 모순이므로 a₁>0임을 파악했나요?",
        conceptCode: "[12대수03-02]",
        conceptName: "등차수열의 뜻과 부호 판정",
        curriculumSubject: "대수 > 수열",
        deficiencyTitle: "등차수열 첫째항 부호에 따른 절댓값 합 상쇄 분석 결손",
        deficiencyDesc: "모든 항의 부호가 음수일 때 절댓값의 합과 합의 절댓값이 완전히 같아져 b_n이 항등적으로 0이 되는 구조적 모순을 짚어내지 못했습니다.",
        prescription: "1) 절댓값 기호의 기본 성질(|a| - a) 분석 복습\n2) 등차수열의 공차가 음수일 때 항의 부호 변화 양상 탐구",
        coreKeywords: ["등차수열", "첫째항 부호", "절댓값 합"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "b₃=0이고 b₄≠0인 조건 (가)로부터 a₃>0이고 a₄<0으로 4번째 항에서 처음 음수로 전환됨을 유도했나요?",
        conceptCode: "[12대수03-02]",
        conceptName: "등차수열의 일반항과 부호 변곡점",
        curriculumSubject: "대수 > 수열",
        deficiencyTitle: "절댓값 상쇄 해제 조건과 항의 부호 전환점 추론 결손",
        deficiencyDesc: "k≤3까지는 a_k>0이어서 b_k=0이다가 4번째 항에서 음수가 발생하여 b₄가 0이 아니게 된다는 임계점을 논리적으로 연결하지 못했습니다.",
        prescription: "1) 수열의 합에서 최초로 부호가 바뀌는 항의 조건 분석 연습\n2) b_n의 대수적 표현 정리 훈련",
        coreKeywords: ["부호 변곡점", "임계항", "등차수열 일반항"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "b₄, b₅, b₆이 등차수열을 이룬다는 조건 (나)에서 등차중항 성질 b₄+b₆=2b₅를 적용했나요?",
        conceptCode: "[12대수03-02]",
        conceptName: "등차중항의 성질과 활용",
        curriculumSubject: "대수 > 수열",
        deficiencyTitle: "등차중항 공식 적용 및 b_n 표현식 연립 결손",
        deficiencyDesc: "세 수의 등차수열 조건인 등차중항 관계식을 세우고, b₄, b₅, b₆을 a와 d로 치환하여 첫째항과 공차의 관계식을 도출하지 못했습니다.",
        prescription: "1) 세 수가 등차수열을 이룰 때의 등차중항 성질(2b = a + c) 숙달\n2) b_n을 첫째항 a와 공차 d의 식으로 전개하는 연립 연습",
        coreKeywords: ["등차중항", "등차수열 관계식", "대수적 치환"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "b₁₀=48 조건을 활용하여 연립방정식을 풀고 a=14, d=-6을 구한 뒤 b₅=28을 정확히 계산했나요?",
        conceptCode: "[12대수03-02]",
        conceptName: "등차수열의 일반항 및 연립방정식 풀이",
        curriculumSubject: "대수 > 수열",
        deficiencyTitle: "연립일차방정식 풀이 및 최종 항 계산 결손",
        deficiencyDesc: "a와 d에 대한 연립일차방정식을 오차 없이 풀고, 구하고자 하는 b₅의 식에 대입하여 값을 도출하는 마무리가 부족했습니다.",
        prescription: "1) 등차수열 미지수 2개(a, d) 연립방정식 정확도 훈련\n2) 음수 공차 계산 시 부호 실수 방지 점검",
        coreKeywords: ["연립방정식", "공차 계산", "최종 항 계산"]
      }
    ]
  },
  "9-27": {
    id: "9-27",
    examMonth: "9",
    examMonthName: "9월 모의고사",
    questionNumber: 27,
    subject: "대수",
    curriculumDomain: "삼각함수",
    topicTitle: "삼각함수 그래프의 대칭성과 교점의 좌표",
    difficulty: "오답률 5위 (71.2%)",
    score: 4,
    questionSummary: "0≤x≤8π에서 정의된 함수 f(x)=8sin(ax)의 그래프가 직선 y=5와 만나는 가장 작은 x와 가장 큰 x의 합 조건을 이용해 자연수 a를 구하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "함수 y=8sin(ax)의 주기가 2π/a임을 구하고 0부터 8π까지의 주기 개수가 4a개임을 확인했나요?",
        conceptCode: "[12대수02-02]",
        conceptName: "삼각함수의 그래프와 주기",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "삼각함수의 주기 공식 T=2π/|b| 적용 결손",
        deficiencyDesc: "sin(ax)의 기본 주기 2π/a를 계산하고 주어진 정의역 8π 안에 몇 개의 파동 주기가 들어가는지 카운팅하지 못했습니다.",
        prescription: "1) 삼각함수 주기 공식 T = 2π/|b| 완벽 숙지\n2) 주어진 정의역 내에서의 주기 반복 횟수 계산 연습",
        coreKeywords: ["삼각함수 주기", "사인 그래프", "주기 반복 횟수"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "가장 작은 교점의 x좌표를 θ라 할 때, 사인함수의 선대칭성에 의해 가장 큰 교점의 x좌표가 8π - π/a - θ로 표현됨을 유도했나요?",
        conceptCode: "[12대수02-02]",
        conceptName: "삼각함수 그래프의 대칭성",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "사인함수의 선대칭성 및 마지막 주기 교점 좌표 표현 결손",
        deficiencyDesc: "사인 그래프의 각 마루에서의 선대칭성(x = π/(2a))과 마지막 주기의 교점 위치를 대칭 공식으로 표현하는 기하적 해석이 부족했습니다.",
        prescription: "1) 사인 그래프의 선대칭축(최댓값 지점) 및 점대칭점(x절편) 성질 복습\n2) 대칭성을 활용한 두 근의 합 공식 체화",
        coreKeywords: ["선대칭성", "대칭축", "교점 좌표 표현"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "두 교점의 x좌표의 합 θ + (8π - π/a - θ) = 8π - π/a = 31π/4 방정식을 정확히 세웠나요?",
        conceptCode: "[12대수02-02]",
        conceptName: "삼각함수의 성질을 활용한 방정식 수립",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "대칭성에 따른 미지수 θ 소거 및 방정식 구성 결손",
        deficiencyDesc: "합을 구하는 과정에서 θ가 자연스럽게 소거된다는 사실을 인지하지 못하고 θ의 구체적인 값을 구하려다 막혔습니다.",
        prescription: "1) 대칭성을 이용한 합 계산에서 변수 소거 테크닉 학습\n2) 삼각방정식의 실근의 합 문제 풀이 연습",
        coreKeywords: ["변수 소거", "실근의 합", "방정식 수립"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "8π - π/a = 31π/4 에서 π/a = π/4 임을 풀어 자연수 a=4를 오차 없이 구했나요?",
        conceptCode: "[12대수02-02]",
        conceptName: "일차방정식 계산 및 자연수 조건 확인",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "단순 분수 방정식 연산 및 자연수 검증 결손",
        deficiencyDesc: "방정식의 양변을 정리하여 a의 값을 도출하는 마무리 산술 계산 오류입니다.",
        prescription: "1) 분수 일차방정식 이항 및 통분 연산 점검",
        coreKeywords: ["방정식 풀이", "자연수 조건"]
      }
    ]
  },
  "9-26": {
    id: "9-26",
    examMonth: "9",
    examMonthName: "9월 모의고사",
    questionNumber: 26,
    subject: "대수",
    curriculumDomain: "수열",
    topicTitle: "등비수열의 성질과 ∑의 활용",
    difficulty: "오답률 6위 (65.0%)",
    score: 4,
    questionSummary: "첫째항이 같은 두 등비수열 {a_n}, {b_n}에 대해 a₇=b₃ 및 수열의 비의 합 조건을 이용해 값을 구하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "두 등비수열의 공비를 각각 r, R이라 할 때 a₇=b₃ 조건에서 r⁶=R² 즉 R=r³ 임을 유도했나요?",
        conceptCode: "[12대수03-03]",
        conceptName: "등비수열의 뜻과 일반항",
        curriculumSubject: "대수 > 수열",
        deficiencyTitle: "등비수열의 일반항 표현 및 공비 간 관계식 유도 결손",
        deficiencyDesc: "첫째항이 같다는 조건(a₁=b₁)을 활용해 a₇=a₁r⁶과 b₃=b₁R²을 같다고 놓고 공비 사이의 관계를 단순화하지 못했습니다.",
        prescription: "1) 등비수열 일반항 a_n = a₁·r^(n-1) 공식 복습\n2) 두 수열의 공비 비교 관계식 수립 연습",
        coreKeywords: ["등비수열 일반항", "공비 관계식", "지수 법칙"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "∑(b_k/a_k) = 1 + R/r + (R/r)² = 1 + r² + r⁴ = 91 임을 등비수열의 비로 전개했나요?",
        conceptCode: "[12대수03-04]",
        conceptName: "∑의 뜻과 등비수열의 합",
        curriculumSubject: "대수 > 수열",
        deficiencyTitle: "수열의 몫으로 이루어진 등비수열의 전개 결손",
        deficiencyDesc: "b_k/a_k 역시 공비가 R/r인 새로운 등비수열을 이룬다는 것을 파악하고 시그마 기호를 풀어헤치지 못했습니다.",
        prescription: "1) 두 등비수열의 곱과 몫이 새로운 등비수열이 되는 성질 복습\n2) 시그마 기호의 나열 및 전개 연습",
        coreKeywords: ["수열의 몫", "새로운 등비수열", "시그마 전개"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "t=r²으로 치환하여 t²+t-90=0의 양수 근 t=9, 즉 r=3임을 구했나요?",
        conceptCode: "[10공수1-02-02]",
        conceptName: "치환을 이용한 이차방정식의 풀이",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "치환을 통한 복이차방정식 풀이 결손",
        deficiencyDesc: "r⁴+r²-90=0을 t=r²으로 치환하여 간단한 이차방정식으로 인수분해하는 대수적 풀이 기법이 부족했습니다.",
        prescription: "1) 복이차방정식(t=x²) 치환 인수분해 복습\n2) 조건(r>0)에 맞는 실근 선별 훈련",
        coreKeywords: ["복이차방정식", "치환 인수분해", "양수근"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "구하고자 하는 식 ∑(a_{k+1}/b_k) = r + 1/r + 1/r³ 에 r=3을 대입하여 p=27, q=91 및 p+q=118을 도출했나요?",
        conceptCode: "[12대수03-04]",
        conceptName: "등비수열의 합과 분수 연산",
        curriculumSubject: "대수 > 수열",
        deficiencyTitle: "수열 식 대입 및 기약분수 통분 연산 결손",
        deficiencyDesc: "r=3을 대입하여 3 + 1/3 + 1/27을 통분(91/27)하고 서로소인 p, q를 판별하는 마무리 계산 오류입니다.",
        prescription: "1) 분수 통분 덧셈 및 기약분수 약분 점검",
        coreKeywords: ["분수 통분", "기약분수", "최종 합산"]
      }
    ]
  },
  "9-19": {
    id: "9-19",
    examMonth: "9",
    examMonthName: "9월 모의고사",
    questionNumber: 19,
    subject: "대수",
    curriculumDomain: "지수함수와 로그함수",
    topicTitle: "지수부등식과 등차수열의 융합 추론",
    difficulty: "오답률 7위 (61.1%)",
    score: 4,
    questionSummary: "방정식 (f(x)-14)(f(x-k)-14)=0의 실근을 크기순으로 나열한 수열이 등차수열을 이루도록 하는 양수 k의 합을 구하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "절댓값 방정식 |4^x - 18| = 14를 풀어 x=1 또는 x=5/2 임을 정확히 구했나요?",
        conceptCode: "[12대수01-08]",
        conceptName: "지수함수가 포함된 방정식의 풀이",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "절댓값 지수방정식의 기본 해법 결손",
        deficiencyDesc: "4^x - 18 = ±14로 분기하여 4^x = 32 또는 4^x = 4를 지수법칙 2^(2x)로 변환해 해를 도출하지 못했습니다.",
        prescription: "1) 절댓값 방정식 기본 해법(|X|=a ⇔ X=±a) 복습\n2) 밑이 2인 거듭제곱으로 통일하여 지수방정식 풀기 훈련",
        coreKeywords: ["절댓값 방정식", "지수방정식", "밑의 통일"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "f(x-k)=14의 해가 x = 1+k 또는 x = 5/2 + k로 평행이동됨을 확인했나요?",
        conceptCode: "[12대수01-07]",
        conceptName: "함수의 평행이동과 실근의 변화",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "도형의 평행이동에 따른 실근의 이동 해석 결손",
        deficiencyDesc: "f(x-k)=14의 실근은 f(x)=14의 실근에 x축 방향으로 +k만큼 평행이동한 값이라는 함수론적 성질을 연결하지 못했습니다.",
        prescription: "1) 함수 f(x-k)의 그래프 평행이동과 실근의 관계 복습",
        coreKeywords: ["평행이동", "실근의 이동", "지수함수 그래프"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "네 수 1, 1+k, 5/2, 5/2+k의 대소 관계에 따라 3가지 케이스(1+k < 5/2, 1+k = 5/2, 1+k > 5/2)로 나누어 등차수열 조건을 적용했나요?",
        conceptCode: "[12대수03-02]",
        conceptName: "등차수열의 정의와 공차의 일치",
        curriculumSubject: "대수 > 수열",
        deficiencyTitle: "수열의 대소 순서에 따른 등차수열 조건 케이스 분류 결손",
        deficiencyDesc: "1+k와 5/2의 상대적 크기에 따라 크기순 배열 순서가 바뀌는 점을 고려하지 않고 한 가지 경우만 생각하다 오답을 냈습니다.",
        prescription: "1) 크기순 나열 조건이 주어졌을 때 미지수의 크기에 따른 케이스 분류 연습\n2) 연속한 두 항의 차(공차)가 일정함을 이용한 등차수열 방정식 수립 훈련",
        coreKeywords: ["등차수열 정의", "공차 일치", "대소 관계 케이스 분류"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "각 경우에서 k = 3/4, 3/2, 3을 도출하고 모든 양수 k의 값의 합 21/4를 구했나요?",
        conceptCode: "[12대수03-02]",
        conceptName: "등차수열 조건 만족 상수 합산",
        curriculumSubject: "대수 > 수열",
        deficiencyTitle: "방정식 풀이 및 모든 해의 합산 계산 결손",
        deficiencyDesc: "각 케이스별 일차방정식에서 k값을 도출하고 조건(양수, 범위) 부합 여부를 확인 후 합산하는 마무리 연산 부족입니다.",
        prescription: "1) 분수 일차방정식 검산 및 최종 합산 연산 연습",
        coreKeywords: ["등차수열 해", "분수 덧셈", "종합 연산"]
      }
    ]
  },
  "9-16": {
    id: "9-16",
    examMonth: "9",
    examMonthName: "9월 모의고사",
    questionNumber: 16,
    subject: "대수",
    curriculumDomain: "삼각함수",
    topicTitle: "삼각함수 코사인 그래프의 대칭성과 넓이",
    difficulty: "오답률 8위 (50.2%)",
    score: 4,
    questionSummary: "삼각함수 f(x)=acos(bπx)+1/2의 대칭축과 선분 길이 비례, 삼각형 ABC의 넓이 조건을 이용해 상수 a+b를 구하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "함수 y=f(x)가 직선 x=1/b에 대하여 대칭임을 이용하여 점 B, C의 x좌표가 각각 2/(3b), 4/(3b)임을 유도했나요?",
        conceptCode: "[12대수02-02]",
        conceptName: "코사인함수 그래프의 대칭성과 x절편",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "코사인 함수의 대칭축 및 등분할 성질 결손",
        deficiencyDesc: "OB=BC=CD 조건과 코사인 그래프의 대칭축 x=1/b를 연립하여 점 B와 C의 좌표를 b로 표현하지 못했습니다.",
        prescription: "1) 코사인 함수의 대칭축과 주기 4등분점 성질 복습\n2) 비례 배분을 통한 점의 x좌표 표현 훈련",
        coreKeywords: ["코사인 함수", "대칭축", "좌표 비례 배분"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "점 B가 함수 위의 점임을 이용하여 f(2/(3b)) = acos(2π/3) + 1/2 = 0 에서 a=1을 도출했나요?",
        conceptCode: "[12대수02-02]",
        conceptName: "특수각 삼각비와 함숫값 계산",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "특수각 삼각비 cos(2π/3)의 값 계산 결손",
        deficiencyDesc: "cos(2π/3) = -1/2임을 정확히 계산하여 a(-1/2) + 1/2 = 0에서 a=1을 구하는 기본 삼각비 계산이 막혔습니다.",
        prescription: "1) 제2사분면 특수각(2π/3, 3π/4, 5π/6)의 삼각비 값 암기 및 단위원을 통한 즉각 도출 훈련",
        coreKeywords: ["특수각 삼각비", "cos(2π/3)", "함숫값 0"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "삼각형 ABC의 밑변 BC=2/(3b), 높이 OA=a+1/2=3/2로 넓이 식 1/2·(2/(3b))·(3/2) = 1을 세웠나요?",
        conceptCode: "[10공수2-01-01]",
        conceptName: "좌표평면 위 삼각형의 넓이 공식",
        curriculumSubject: "공통수학2 > 도형의 방정식",
        deficiencyTitle: "좌표축에 평행한 밑변과 높이를 이용한 삼각형 넓이 수립 결손",
        deficiencyDesc: "x축 위의 선분 BC를 밑변으로 두고 y절편 OA를 높이로 하는 직관적인 삼각형 넓이 식 구성을 놓쳤습니다.",
        prescription: "1) 좌표평면에서 축 위의 변을 밑변으로 하는 삼각형 넓이 계산 연습",
        coreKeywords: ["삼각형 넓이", "밑변과 높이", "좌표 활용"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "넓이 방정식에서 b=1/2을 구하고 최종 a+b = 3/2을 계산했나요?",
        conceptCode: "[12대수02-02]",
        conceptName: "삼각함수 미지수 결정 및 덧셈",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "일차방정식 풀이 및 최종 덧셈 연산 결손",
        deficiencyDesc: "1/(2b) = 1에서 b=1/2을 도출하고 a+b를 구하는 마무리 계산 오류입니다.",
        prescription: "1) 분수 일차방정식 풀이 점검",
        coreKeywords: ["미지수 결정", "최종 합산"]
      }
    ]
  },
  "9-18": {
    id: "9-18",
    examMonth: "9",
    examMonthName: "9월 모의고사",
    questionNumber: 18,
    subject: "대수",
    curriculumDomain: "수열",
    topicTitle: "수열의 합과 일반항의 관계 (빈칸 추론)",
    difficulty: "오답률 9위 (49.0%)",
    score: 4,
    questionSummary: "수열의 합 S_n 관계식으로부터 a_{n+1} = S_{n+1} - S_n을 적용하여 점화식 a_{n+1}+4a_n = 5·2^n을 유도하고 시그마의 값을 구하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "a_{n+1} = S_{n+1} - S_n 관계를 적용하여 주어진 식을 빼서 정리할 때 빈칸 (가)에 들어갈 식 f(n)=2^n을 정확히 구했나요?",
        conceptCode: "[12대수03-05]",
        conceptName: "수열의 합과 일반항 사이의 관계",
        curriculumSubject: "대수 > 수열",
        deficiencyTitle: "수열의 합 S_n과 일반항 a_n의 관계(S_n - S_{n-1}) 적용 결손",
        deficiencyDesc: "S_{n+1} - S_n = a_{n+1} 공식을 적용할 때 지수식 2^(n+1) - 2^n = 2^n(2-1) = 2^n으로 정리하는 지수 뺄셈이 미숙했습니다.",
        prescription: "1) 수열의 합과 일반항의 관계 공식 a_n = S_n - S_{n-1} (n≥2) 복습\n2) 지수 표현식의 동류항 묶기(2^(n+1) - 2^n = 2^n) 훈련",
        coreKeywords: ["수열의 합과 일반항", "지수식 뺄셈", "빈칸 추론"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "주어진 수열의 합 관계식에 n=2를 대입하여 a₁+a₂ = 4/5 a₂ + 7 및 a₁=5로부터 빈칸 (나)의 값 p = a₂ = 10을 구했나요?",
        conceptCode: "[12대수03-01]",
        conceptName: "수열의 초기 조건 대입과 항의 계산",
        curriculumSubject: "대수 > 수열",
        deficiencyTitle: "초기 항 n=2 대입 및 일차방정식 연립 결손",
        deficiencyDesc: "n=2 대입 시 S₂ = a₁+a₂라는 정의를 적용하고, 주어진 a₁=5를 대입하여 일차방정식을 풀어 a₂를 구하는 기본 대입이 막혔습니다.",
        prescription: "1) 시그마 기호의 n=2 대입 시 S₂ = a₁+a₂ 전개 연습\n2) 일차방정식 풀이 정확도 향상",
        coreKeywords: ["초기 항 대입", "S₂의 뜻", "일차방정식"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "∑(k=1 to 5) (a_{k+1}+4a_k)를 (a₂+4a₁) + ∑(k=2 to 5) (5·2^k)로 분리하여 빈칸 (다)의 값 q = 330을 계산했나요?",
        conceptCode: "[12대수03-04]",
        conceptName: "∑의 성질과 등비수열의 합 공식",
        curriculumSubject: "대수 > 수열",
        deficiencyTitle: "시그마 첫째항 분리 및 등비수열의 합 계산 결손",
        deficiencyDesc: "n≥2에서 성립하는 점화식이므로 k=1 항을 따로 떼어내고, 나머지 k=2부터 5까지 등비수열의 합 공식(또는 직접 나열)을 합산하지 못했습니다.",
        prescription: "1) n≥2 조건 점화식에서 k=1 예외 분리 테크닉 복습\n2) 등비수열의 합 공식 S = a(r^n - 1)/(r - 1) 적용 훈련",
        coreKeywords: ["시그마 분리", "등비수열 합 공식", "예외 항 처리"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "구한 값들을 공식 (p+q)/f(2) = (10+330)/4 에 대입하여 정답 85를 도출했나요?",
        conceptCode: "[12대수03-04]",
        conceptName: "식의 대입 및 최종 나눗셈 계산",
        curriculumSubject: "대수 > 수열",
        deficiencyTitle: "함숫값 f(2)=2²=4 계산 및 최종 분수 나눗셈 결손",
        deficiencyDesc: "f(2)=4, p=10, q=330을 대입하여 340/4 = 85를 나누는 마무리 산술 연산 오류입니다.",
        prescription: "1) 빈칸 추론 문제의 최종 질문식 정확한 대입 및 연산 검산",
        coreKeywords: ["최종 대입", "자연수 나눗셈"]
      }
    ]
  },
  "9-14": {
    id: "9-14",
    examMonth: "9",
    examMonthName: "9월 모의고사",
    questionNumber: 14,
    subject: "대수",
    curriculumDomain: "지수함수와 로그함수",
    topicTitle: "거듭제곱근의 정의와 실수의 개수",
    difficulty: "오답률 10위 (49.0%)",
    score: 4,
    questionSummary: "2 이상의 자연수 n에 대해 log(n/5)의 n제곱근 중 실수인 것의 개수 f(n)을 구하고 시그마의 값을 계산하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "n이 홀수이면 log(n/5)의 부호에 관계없이 실수인 n제곱근의 개수 f(n)=1임을 파악했나요?",
        conceptCode: "[12대수01-01]",
        conceptName: "거듭제곱근의 뜻과 실수인 것의 개수 (홀수 제곱근)",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "홀수 거듭제곱근의 실근 개수(항상 1개) 성질 결손",
        deficiencyDesc: "n이 홀수일 때 y=x^n의 그래프는 일대일 대응이므로 임의의 실수 a에 대해 실근이 항상 1개(f(n)=1)라는 기초 정의를 망각했습니다.",
        prescription: "1) 그래프 y=x^n (n이 홀수일 때)와 직선 y=a의 교점 개수 성질 완벽 정리\n2) n이 홀수이면 제곱근 안의 값과 무관하게 실근 1개 암기",
        coreKeywords: ["거듭제곱근", "홀수 제곱근", "실근의 개수 1개"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "n이 짝수일 때 log(n/5)의 부호(n<5이면 음수, n>5이면 양수)에 따라 실근 개수가 각각 0개, 2개로 갈라짐을 분류했나요?",
        conceptCode: "[12대수01-01]",
        conceptName: "거듭제곱근의 뜻과 실수인 것의 개수 (짝수 제곱근)",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "짝수 거듭제곱근의 실근 개수(양수 2개, 음수 0개) 판정 결손",
        deficiencyDesc: "n이 짝수일 때 log(n/5)<0(즉 n=2, 4)이면 실근이 0개, log(n/5)>0(즉 n=6, 8, 10)이면 실근이 2개라는 부호 판정을 수행하지 못했습니다.",
        prescription: "1) y=x^n (n이 짝수일 때)와 직선 y=a의 교점(a>0이면 2개, a<0이면 0개) 복습\n2) 상용로그 log(n/5)의 밑 10에 따른 부호 판별법 복습",
        coreKeywords: ["짝수 제곱근", "로그의 부호", "실근 0개/2개 판정"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "n=2부터 10까지 각 자연수별 f(n)의 값을 홀수 군과 짝수 군으로 분리하여 나열했나요?",
        conceptCode: "[12대수03-04]",
        conceptName: "∑의 뜻과 개별 항의 나열 합산",
        curriculumSubject: "대수 > 수열",
        deficiencyTitle: "수열의 합 나열 및 홀짝 분류 집계 결손",
        deficiencyDesc: "f(3)+f(5)+f(7)+f(9) = 1+1+1+1=4 와 f(2)+f(4)+f(6)+f(8)+f(10) = 0+0+2+2+2=6 으로 분리하여 계산하지 못했습니다.",
        prescription: "1) 10 이하 자연수 시그마 계산 시 홀짝 분리 집계 훈련",
        coreKeywords: ["홀짝 분류", "시그마 나열", "함숫값 집계"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "홀수 합 4와 짝수 합 6을 더하여 최종 정답 10을 오차 없이 구했나요?",
        conceptCode: "[12대수03-04]",
        conceptName: "자연수의 덧셈 마무리",
        curriculumSubject: "대수 > 수열",
        deficiencyTitle: "최종 덧셈 실수 결손",
        deficiencyDesc: "4 + 6 = 10의 단순 합산 과정에서 개수를 빼먹거나 더하는 오류입니다.",
        prescription: "1) 자연수 개수 카운팅 검산 점검",
        coreKeywords: ["최종 덧셈", "검산"]
      }
    ]
  },
  "9-20": {
    id: "9-20",
    examMonth: "9",
    examMonthName: "9월 모의고사",
    questionNumber: 20,
    subject: "대수",
    curriculumDomain: "삼각함수",
    topicTitle: "사인법칙과 코사인법칙 및 원의 성질 종합",
    difficulty: "오답률 11위 (47.6%)",
    score: 4,
    questionSummary: "원에 내접하는 사각형과 원의 접선에서 닮음 삼각형과 사인·코사인법칙을 결합하여 삼각형의 넓이를 구하는 고난도 도형 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "원에 내접하는 사각형 ABCD에서 대각의 성질 cos(∠ABC) = -cos(∠ADC) = -1/4 및 sin(∠ADC) = √15/4를 구했나요?",
        conceptCode: "[12대수02-02]",
        conceptName: "삼각함수의 각변환과 삼각비 상호 관계",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "내접 사각형 보각 공식 cos(π-θ)=-cosθ 및 sin 변환 결손",
        deficiencyDesc: "내접 사각형의 마주보는 각의 합이 180°임을 이용해 코사인 부호 반전과 sin²θ+cos²θ=1을 통한 사인값 도출이 막혔습니다.",
        prescription: "1) 내접 사각형 대각 보각 관계 복습\n2) cos값으로부터 sin값(피타고라스 삼각항등식) 유도 훈련",
        coreKeywords: ["내접 사각형", "대각의 합 180°", "cos 보각 변환", "sin²θ+cos²θ=1"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "외접원 반지름과 사인법칙을 적용하여 선분 AC=6을 구하고, 코사인법칙으로 AB=9/2, BC=CD=3, AD=6을 구했나요?",
        conceptCode: "[12대수02-03]",
        conceptName: "사인법칙과 코사인법칙의 연립 적용",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "외접원 사인법칙과 삼각형 코사인법칙 연립 결손",
        deficiencyDesc: "AC = 2R sin(∠ADC)로 대각선의 길이를 먼저 구한 후, 삼각형 ABC와 ACD에서 코사인법칙을 각각 적용하여 변의 길이를 결정하는 단계에서 막혔습니다.",
        prescription: "1) 대각선 길이 = 2R sinθ 사인법칙 적용 복습\n2) 두 삼각형에서 코사인법칙을 각각 적용하여 변의 길이 연립하는 패턴 훈련",
        coreKeywords: ["사인법칙 대각선", "코사인법칙 변의 길이", "이차방정식 인수분해"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "원주각과 접현각의 성질로 삼각형 CBE와 ACE, 그리고 ABC와 CDF의 닮음을 찾아 선분 AE=6, EF=7을 도출했나요?",
        conceptCode: "[10공수2-01-01]",
        conceptName: "중등 기하 원주각·접현각과 삼각형의 닮음비",
        curriculumSubject: "공통수학2 > 도형의 방정식",
        deficiencyTitle: "접현각 성질 및 닮음비(AA 닮음) 기하 추론 결손",
        deficiencyDesc: "접선과 현이 이루는 각(접현각)의 크기가 원주각과 같다는 기하 정리를 이용해 닮은 삼각형의 비례식을 세우지 못했습니다.",
        prescription: "1) 중등 기하: 접현각 정리(원과 접선이 이루는 각) 복습\n2) 공통각과 원주각을 활용한 삼각형 닮음비 연립 훈련",
        coreKeywords: ["접현각 정리", "원주각", "삼각형 닮음비"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "삼각형 AEF의 넓이 공식 1/2 · AE · EF · sin(∠AEF) = 1/2 · 6 · 7 · (√15/4) = 21√15/4 를 정확히 계산했나요?",
        conceptCode: "[12대수02-03]",
        conceptName: "삼각함수를 활용한 삼각형의 넓이 계산",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "삼각형 넓이 공식 대입 및 무리수 연산 결손",
        deficiencyDesc: "각 AEF의 사인값이 앞서 구한 sin(∠ADC)와 같음을 연결하고 넓이 공식에 대입하여 계산하는 마무리 부족입니다.",
        prescription: "1) 넓이 공식 S = 1/2 ab sinθ 대입 및 약분 검산",
        coreKeywords: ["삼각형 넓이 공식", "무리수 곱셈", "약분"]
      }
    ]
  },
  "9-17": {
    id: "9-17",
    examMonth: "9",
    examMonthName: "9월 모의고사",
    questionNumber: 17,
    subject: "미적분Ⅰ",
    curriculumDomain: "함수의 극한과 연속",
    topicTitle: "함수의 극한을 이용한 도형의 선분 길이 계산",
    difficulty: "오답률 12위 (40.5%)",
    score: 4,
    questionSummary: "곡선과 직선의 교점 좌표 f(t), g(t)를 구하고 t→1+ 극한식을 계산하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "곡선 y=(t+2)/x와 직선 y=x/(t-1)을 연립하여 교점의 x좌표 f(t)=√((t-1)(t+2))를 구했나요?",
        conceptCode: "[10공수1-02-07]",
        conceptName: "유리식과 무리식이 포함된 방정식의 연립",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "곡선과 직선의 교점 방정식 연립 결손",
        deficiencyDesc: "x/(t-1) = (t+2)/x 에서 x² = (t-1)(t+2)로 식을 정리하고 x>0 조건을 통해 양의 제곱근으로 표현하지 못했습니다.",
        prescription: "1) 두 함수 식을 같다고 놓는 교점 연립법 복습\n2) 제곱근 풀이 시 정의역(x>0) 확인 연습",
        coreKeywords: ["교점 연립", "이차방정식", "제곱근 표현"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "y좌표 g(t) = (t+2)/f(t) = (t-1)/√((t-1)(t+2))를 구하고 f(t)+g(t)의 합을 유리식으로 정리했나요?",
        conceptCode: "[12미적Ⅰ-01-02]",
        conceptName: "함수의 극한식 구성과 식의 변형",
        curriculumSubject: "미적분Ⅰ > 함수의 극한과 연속",
        deficiencyTitle: "두 좌표의 합 f(t)+g(t) 통분 및 분모 유리화 결손",
        deficiencyDesc: "f(t)와 g(t)를 더하여 (t/(t-1))√((t-1)(t+2)) 형태로 공통인수를 묶어 정리하는 식 변형 능력이 부족했습니다.",
        prescription: "1) 무리식을 포함한 분수의 통분 훈련\n2) 공통인수 묶기를 통한 식 단순화 연습",
        coreKeywords: ["무리식 통분", "공통인수", "함수식 변형"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "(t-1)(f(t)+g(t))² 식을 전개하여 분모의 0이 되는 인수인 (t-1)이 약분되어 소거됨을 확인했나요?",
        conceptCode: "[12미적Ⅰ-01-02]",
        conceptName: "0/0 꼴 극한값 계산과 인수 약분",
        curriculumSubject: "미적분Ⅰ > 함수의 극한과 연속",
        deficiencyTitle: "0/0 부정형 극한에서 무한소 인수 (t-1) 소거 결손",
        deficiencyDesc: "t→1+ 일 때 분모와 분자가 모두 0으로 수렴하는 0/0 꼴 극한에서 약분을 통해 부정형을 해소하는 핵심 원리를 놓쳤습니다.",
        prescription: "1) 0/0 꼴 부정형 극한 계산 원리(인수분해 후 약분) 복습\n2) 제곱식 전개 시 약분 타이밍 포착 훈련",
        coreKeywords: ["0/0 꼴 극한", "부정형 해소", "인수 약분"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "남은 식 t²(t+2)에 t=1을 대입하여 극한값 1²·(1+2) = 3을 정확히 구했나요?",
        conceptCode: "[12미적Ⅰ-01-02]",
        conceptName: "다항함수 극한값의 대입 계산",
        curriculumSubject: "미적분Ⅰ > 함수의 극한과 연속",
        deficiencyTitle: "약분 후 극한값 확정 대입 연산 결손",
        deficiencyDesc: "인수 약분 후 남은 연속함수에 t=1을 대입하여 극한값을 확정하는 마무리 계산 실수입니다.",
        prescription: "1) 극한의 기본 성질: 연속함수의 극한값 = 함숫값 대입",
        coreKeywords: ["극한값 대입", "연속함수 극한"]
      }
    ]
  },
  "9-13": {
    id: "9-13",
    examMonth: "9",
    examMonthName: "9월 모의고사",
    questionNumber: 13,
    subject: "대수",
    curriculumDomain: "삼각함수",
    topicTitle: "코사인법칙을 활용한 삼각함수 계산",
    difficulty: "오답률 13위 (37.8%)",
    score: 3,
    questionSummary: "삼각형에서 내분점과 코사인법칙을 두 삼각형에 각각 적용하여 cos(∠ABC)의 값을 계산하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "BD=2k, DC=k (k>0)로 두고 삼각형 ABC에서 코사인법칙으로 cos(∠ABC)를 k에 대한 식으로 나타냈나요?",
        conceptCode: "[12대수02-03]",
        conceptName: "코사인법칙의 변형 공식 적용",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "선분 비례 미지수 설정 및 코사인법칙 공식 적용 결손",
        deficiencyDesc: "변의 비를 2k, k로 두고 삼각형 ABC에서 cos B = (2² + (3k)² - 5²)/(2·2·3k) = (9k²-21)/(12k) 로 표현하지 못했습니다.",
        prescription: "1) 코사인법칙 변형식 cos A = (b²+c²-a²)/(2bc) 암기 및 대입 훈련",
        coreKeywords: ["코사인법칙 변형", "미지수 k 설정", "각의 코사인"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "삼각형 ABD에서도 동일한 각 ∠ABD = ∠ABC에 대해 코사인법칙을 적용하여 또 다른 k의 식을 세웠나요?",
        conceptCode: "[12대수02-03]",
        conceptName: "공통각에 대한 코사인법칙의 중복 적용",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "공통각 매개 코사인법칙 방정식 수립 결손",
        deficiencyDesc: "한 각을 공유하는 두 삼각형에 코사인법칙을 각각 적용하여 두 식이 같다고 놓는 연립 아이디어를 떠올리지 못했습니다.",
        prescription: "1) '공통각'을 매개로 두 삼각형의 코사인 식을 일치시키는 대표 유형 학습",
        coreKeywords: ["공통각", "코사인 식 일치", "연립 수립"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "(3k²-7)/(4k) = (k²-2)/(2k) 방정식을 풀어 k²=3, 즉 k=√3 임을 유도했나요?",
        conceptCode: "[10공수1-02-02]",
        conceptName: "분수식의 이차방정식 전환 및 풀이",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "분수 방정식의 대각선 곱셈 및 이차방정식 풀이 결손",
        deficiencyDesc: "양변에 4k를 곱해 3k²-7 = 2k²-4 로 전환하고 k²=3을 구하는 기본 대수 방정식 풀이가 미흡했습니다.",
        prescription: "1) 분모가 있는 비례식의 대각선 곱셈 풀이 연습",
        coreKeywords: ["분수 방정식", "이차방정식", "양수근"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "구한 k=√3을 cos(∠ABC) 식에 대입하여 유리화한 값 √3/6을 정확히 도출했나요?",
        conceptCode: "[12대수02-03]",
        conceptName: "삼각비 계산 및 분모의 유리화",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "무리수 대입 및 분모 유리화 계산 결손",
        deficiencyDesc: "k=√3을 대입하여 2/(4√3) = 1/(2√3) = √3/6으로 분모 유리화하는 마무리 계산 오류입니다.",
        prescription: "1) 분모의 유리화 및 약분 집중 훈련",
        coreKeywords: ["분모의 유리화", "코사인값 도출"]
      }
    ]
  },
  "9-15": {
    id: "9-15",
    examMonth: "9",
    examMonthName: "9월 모의고사",
    questionNumber: 15,
    subject: "대수",
    curriculumDomain: "수열",
    topicTitle: "여러 가지 수열의 합 (망원급수 상쇄 계산)",
    difficulty: "오답률 14위 (36.4%)",
    score: 4,
    questionSummary: "포물선과 직선의 교점으로 정의된 삼각형의 넓이 S_n에 대해 ∑(S_{k+1}-S_k) 망원급수를 계산하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "x² = √n x 에서 제1사분면의 교점 A_n의 좌표가 (√n, n)임을 구했나요?",
        conceptCode: "[10공수1-02-02]",
        conceptName: "이차방정식의 인수분해와 실근",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "곡선과 직선의 교점 좌표 도출 결손",
        deficiencyDesc: "x(x - √n) = 0에서 x=√n을 찾고 y=(√n)²=n으로 좌표를 설정하는 기본 대수 연립이 부족했습니다.",
        prescription: "1) 인수분해를 통한 이차방정식의 교점 구하기 복습",
        coreKeywords: ["교점 좌표", "인수분해", "점의 좌표"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "삼각형 OA_nB_n의 밑변과 높이로부터 넓이 S_n = 1/2 · n√n 임을 세웠나요?",
        conceptCode: "[10공수2-01-01]",
        conceptName: "직각삼각형의 넓이 공식",
        curriculumSubject: "공통수학2 > 도형의 방정식",
        deficiencyTitle: "좌표를 이용한 직각삼각형 넓이 식 표현 결손",
        deficiencyDesc: "밑변이 √n, 높이가 n인 직각삼각형의 넓이를 S_n = 1/2 n^(3/2) 로 표현하지 못했습니다.",
        prescription: "1) 밑변과 높이가 좌표로 주어진 직각삼각형 넓이 공식 점검",
        coreKeywords: ["직각삼각형 넓이", "S_n 식 표현"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "∑(k=1 to 24) (S_{k+1} - S_k)가 이웃한 항의 소거(망원급수)에 의해 S₂₅ - S₁로 축약됨을 간파했나요?",
        conceptCode: "[12대수03-05]",
        conceptName: "여러 가지 수열의 합과 망원급수 상쇄",
        curriculumSubject: "대수 > 수열",
        deficiencyTitle: "축차대입법에 의한 이웃한 항 소거(Telescoping Sum) 결손",
        deficiencyDesc: "(S₂-S₁) + (S₃-S₂) + ... + (S₂₅-S₂₄)의 전개에서 가운데 항들이 모두 상쇄되고 첫 항과 끝 항만 남는다는 성질을 놓쳤습니다.",
        prescription: "1) 망원급수(부분분수, 이웃항 뺄셈) 상쇄 테크닉 복습\n2) 시그마 축차대입 나열 훈련",
        coreKeywords: ["망원급수", "이웃한 항 소거", "S₂₅ - S₁"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "S₂₅ = 1/2 · 25 · 5 = 125/2 와 S₁ = 1/2 · 1 · 1 = 1/2 을 빼서 124/2 = 62를 정확히 계산했나요?",
        conceptCode: "[12대수03-05]",
        conceptName: "수열의 합 계산 마무리",
        curriculumSubject: "대수 > 수열",
        deficiencyTitle: "제곱근 값 대입 및 최종 분수 뺄셈 결손",
        deficiencyDesc: "√25=5를 대입하고 (125-1)/2 = 62를 계산하는 마무리 산술 오류입니다.",
        prescription: "1) 분수 뺄셈 및 거듭제곱근 정수화 연산 검산",
        coreKeywords: ["제곱근 계산", "최종 뺄셈"]
      }
    ]
  },
  "9-22": {
    id: "9-22",
    examMonth: "9",
    examMonthName: "9월 모의고사",
    questionNumber: 22,
    subject: "미적분Ⅰ",
    curriculumDomain: "미분",
    topicTitle: "도함수의 활용 (극대·극소와 다항함수의 그래프 추론)",
    difficulty: "오답률 상위 (79.4%)",
    score: 4,
    questionSummary: "삼차함수 f(x)의 도함수 조건 및 절댓값 함수 |f(x) - t|의 미분불가능점 개수 조건을 해석하여 f(x)의 식과 함숫값을 구하는 최고난도 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "절댓값 함수 |f(x) - t|가 미분가능하지 않은 점의 기하학적 의미(곡선 y = f(x)와 직선 y = t가 교차하며 관통하는 점)를 정확히 파악하고 있나요?",
        conceptCode: "[12미적Ⅰ-02-02]",
        conceptName: "함수의 미분가능성과 연속성의 관계",
        curriculumSubject: "미적분Ⅰ > 미분",
        deficiencyTitle: "절댓값 함수의 미분가능성 판정 개념 결손",
        deficiencyDesc: "함수 y = |f(x) - t|는 f(x) = t인 지점에서 f'(x) ≠ 0이면 꺾인 점(첨점)이 되어 미분불가능해지고, f'(x) = 0인 접점(삼중근 또는 극점 접선)에서는 꺾이지 않아 미분가능하다는 핵심 기하학적 원리를 이해하지 못했습니다.",
        prescription: "1) 절댓값 함수 y=|f(x)|의 미분가능성 판정 조건 복습\n2) y=f(x)와 y=t의 교점에서 접선의 기울기가 0일 때와 0이 아닐 때의 미분계수 좌/우 극한 비교 학습",
        coreKeywords: ["절댓값 함수", "미분불가능점(첨점)", "접선의 기울기", "좌미분계수와 우미분계수"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "도함수 f'(x) = 0의 실근 부호 변화를 조사하여 삼차함수 f(x)의 극댓값과 극솟값이 존재하는 조건(판별식 D > 0)을 이끌어 낼 수 있나요?",
        conceptCode: "[12미적Ⅰ-02-07]",
        conceptName: "함수의 증가와 감소, 극대와 극소 판정",
        curriculumSubject: "미적분Ⅰ > 미분",
        deficiencyTitle: "도함수의 부호 변화와 다항함수 극값 판정 결손",
        deficiencyDesc: "삼차함수가 극값을 갖기 위해서는 도함수인 이차방정식 f'(x) = 0이 서로 다른 두 실근을 가져야 하며(판별식 D > 0), 증감표 또는 f'(x)의 부호 변화를 통해 극대와 극소를 판정하는 논리적 연결이 부족합니다.",
        prescription: "1) 다항함수의 극대·극소 정의와 도함수의 부호 판정법 복습\n2) 삼차함수의 개형 3가지(극값 2개, 접선의 기울기 0인 점 1개, 항상 증가/감소) 완벽 정리",
        coreKeywords: ["극대와 극소", "도함수의 부호 변화", "이차방정식 판별식", "삼차함수의 3가지 개형"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "삼차함수 비율 관계(극점-변곡점-교점 간의 2:1 또는 1:1:1 비율) 및 최고차항 계수를 활용하여 f(x) - t = k(x - α)²(x - β) 형태의 인수를 구성할 수 있나요?",
        conceptCode: "[12미적Ⅰ-02-08]",
        conceptName: "함수의 그래프의 개형 그리기",
        curriculumSubject: "미적분Ⅰ > 미분",
        deficiencyTitle: "삼차함수 비율 관계 및 인수정리 기반 그래프 모델링 결손",
        deficiencyDesc: "극값 조건이나 접선 조건을 만족하는 삼차함수의 식을 세울 때, 전개식을 나열하기보다 접하는 점(중근)과 통과하는 점(단근)의 인수를 세우는 '그래프 해석적 식 구성' 능력이 부족합니다.",
        prescription: "1) 삼차함수 접선과 인수정리 연계(f(x) - g(x) = k(x-α)²(x-β)) 연습\n2) 삼차함수 극대/극소와 변곡점 사이의 2:1 내분비율 및 대칭점 활용 훈련",
        coreKeywords: ["삼차함수 비율 관계", "접선과 중근 인수", "변곡점 대칭성", "함수식의 대수적 설정"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "실수 t의 값의 변화에 따른 불연속 지점의 개수 조건과 주어진 함숫값 조건을 연립하여 미지수 상수를 오차 없이 계산했나요?",
        conceptCode: "[12미적Ⅰ-02-09]",
        conceptName: "방정식과 부등식에 대한 미분의 활용",
        curriculumSubject: "미적분Ⅰ > 미분",
        deficiencyTitle: "불연속점 경계값 분석 및 최종 방정식 연립 계산 결손",
        deficiencyDesc: "그래프의 개형은 파악했으나, 함수 g(t)가 불연속이 되는 경계값(극댓값, 극솟값)을 방정식의 조건에 대입하여 상수를 구하는 최종 대수적 연립 과정에서 실마리를 놓쳤습니다.",
        prescription: "1) 매개변수 t의 위치에 따른 실근 개수 함수 g(t)의 불연속점 그래프 분석\n2) 연립이차/삼차 방정식 계산의 정확도 훈련",
        coreKeywords: ["방정식 실근의 개수", "불연속점 경계 분석", "대수적 연립 계산"]
      }
    ]
  },

  // =========================================================================
  // [2] 2026학년도 3월 모의고사 (고2) 오답률 Top 15 문항
  // 범위: 공통수학1 전 범위 & 공통수학2 전 범위
  // =========================================================================
  "3-30": {
    id: "3-30",
    examMonth: "3",
    examMonthName: "3월 모의고사",
    questionNumber: 30,
    subject: "공통수학2",
    curriculumDomain: "함수와 그래프",
    topicTitle: "유리함수와 이차함수의 그래프 추론 및 일대일함수 조건",
    difficulty: "오답률 1위 (94.2%)",
    score: 4,
    questionSummary: "구간별 함수 f(x)가 유리함수 절댓값 및 이차함수로 정의될 때, 일대일함수 조건과 치역 조건을 만족하는 미지수 a, b의 값을 구하는 킬러 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "x < 4/a 또는 x > b에서 유리함수 |(ax-4)/(x-b)|의 점근선(x=b, y=a)과 꺾인 그래프 개형을 그리고, 치역의 경계가 되는 점근선 y = |a|를 도출했나요?",
        conceptCode: "[10공수2-03-02]",
        conceptName: "유리함수의 그래프",
        curriculumSubject: "공통수학2 > 함수와 그래프",
        deficiencyTitle: "절댓값 기호가 포함된 유리함수 그래프 개형 분석 결손",
        deficiencyDesc: "점근선 x=b, y=a를 기준으로 유리함수를 평행이동하고 절댓값을 취해 x축 아래를 꺾어 올린 그래프의 치역과 점근선 위치를 파악하는 능력이 부족합니다.",
        prescription: "1) 유리함수 기본형 y=k/(x-p)+q의 점근선과 그래프 그리기 복습\n2) y=|f(x)|의 x축 대칭 꺾어올리기 성질과 점근선의 절댓값 위치 연습",
        coreKeywords: ["유리함수 점근선", "절댓값 함수", "평행이동", "치역 분석"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "구간 [4/a, b]에서 f(x)가 일대일함수가 되기 위해 이차함수 y = ax² - 4bx의 대칭축 x = 2b/a의 위치와 f(x) ≤ 0 조건을 설정했나요?",
        conceptCode: "[10공수2-03-01]",
        conceptName: "함수의 정의와 일대일대응",
        curriculumSubject: "공통수학2 > 함수와 그래프",
        deficiencyTitle: "구간별 일대일함수(일대일대응) 연결 조건 분석 결손",
        deficiencyDesc: "구간별로 정의된 함수가 전체에서 일대일함수가 되기 위해서는 각 구간의 치역이 겹치지 않아야 하며, 이차함수의 대칭축 위치에 따라 단조 증가/감소 조건을 만족해야 함을 고려하지 못했습니다.",
        prescription: "1) 일대일함수 및 일대일대응의 정의(x1≠x2 ⇒ f(x1)≠f(x2)) 복습\n2) 이차함수의 대칭축과 제한된 구간에서의 단조성 조건 판정 연습",
        coreKeywords: ["일대일함수", "치역의 분리", "이차함수 대칭축", "단조성"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "방정식 f(x) = k의 해가 존재하지 않는 유일한 양수 p가 유리함수의 수평 점근선 y = a (또는 -a)임을 파악했나요?",
        conceptCode: "[10공수2-03-02]",
        conceptName: "유리함수의 치역과 점근선",
        curriculumSubject: "공통수학2 > 함수와 그래프",
        deficiencyTitle: "방정식의 실근 존재 여부와 함수의 치역 연계 결손",
        deficiencyDesc: "방정식 f(x)=k의 해가 없다는 것은 k가 f(x)의 치역에 속하지 않는다는 뜻이며, 유리함수 그래프에서 수평 점근선이 치역의 유일한 빈틈이 된다는 점을 해석하지 못했습니다.",
        prescription: "1) 방정식 f(x)=k의 실근과 그래프 교점의 동치 관계 이해\n2) 유리함수의 점근선 y=q가 치역에서 제외되는 원리 확인",
        coreKeywords: ["방정식과 그래프 교점", "점근선과 빈 치역", "실근의 부존재"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "구간 최솟값 m과 p의 곱 p·m = -64 조건을 a>0, a<0 케이스별로 나누어 정수 a와 유리수 b의 순서쌍 (2, 4), (-1, -3)을 구하고 최종 곱을 계산했나요?",
        conceptCode: "[10공수1-02-02]",
        conceptName: "이차함수의 최대·최소",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "이차함수의 제한된 구간 최솟값 계산 및 미지수 연립 결손",
        deficiencyDesc: "a의 부호와 축의 위치에 따른 케이스를 정밀하게 분류하고, 문제의 조건(a는 정수, b는 유리수)을 활용하여 방정식을 풀어내는 대수적 완결성이 부족했습니다.",
        prescription: "1) 제한된 범위 [α, β]에서 이차함수의 꼭짓점 위치에 따른 최솟값 판정 복습\n2) 정수·유리수 조건을 이용한 부정방정식 풀이 연습",
        coreKeywords: ["이차함수 최솟값", "정수 조건", "유리수 조건", "케이스 분류"]
      }
    ]
  },
  "3-29": {
    id: "3-29",
    examMonth: "3",
    examMonthName: "3월 모의고사",
    questionNumber: 29,
    subject: "공통수학1",
    curriculumDomain: "행렬",
    topicTitle: "행렬의 연산과 성분 추론 및 다항식 곱셈 공식",
    difficulty: "오답률 2위 (89.5%)",
    score: 4,
    questionSummary: "이차정사각행렬 A에 대하여 A²=B이고 조건 (가), (나)를 만족할 때 성분의 합과 곱을 이용해 성분의 세제곱 합 a₁₂³ + a₂₁³을 구하는 행렬 추론 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "행렬의 곱셈 정의를 이용해 A²의 각 성분을 구하고, 조건 (가)의 a₁₂²(a₁₁+a₂₂)=0에서 a₁₂≠0이므로 a₁₁+a₂₂=0임을 이끌어 냈나요?",
        conceptCode: "[10공수1-04-01]",
        conceptName: "행렬의 연산",
        curriculumSubject: "공통수학1 > 행렬",
        deficiencyTitle: "행렬의 곱셈 성분 전개 및 조건식 인수분해 결손",
        deficiencyDesc: "2×2 행렬의 곱셈 공식 계산 과정에서 성분을 바르게 전개하지 못하거나, 조건 (나)의 성분 합 조건을 연계하여 대각합(a₁₁+a₂₂)이 0이어야 함을 추론하지 못했습니다.",
        prescription: "1) 2×2 정사각행렬의 곱셈 연산 공식 및 성분별 표현법 숙달\n2) 성분 조건식을 인수분해하여 0이 되는 인수를 논리적으로 가려내는 훈련",
        coreKeywords: ["행렬의 곱셈", "행렬의 성분", "대각합", "인수분해 조건"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "조건 (가)의 (1,1) 성분 식 a₁₁(a₁₁²+a₁₂a₂₁)=0과 B가 영행렬이 아니라는 조건으로부터 a₁₁=0임을 도출하여 A를 비대각 행렬로 단순화했나요?",
        conceptCode: "[10공수1-04-01]",
        conceptName: "행렬의 성질과 영행렬 판정",
        curriculumSubject: "공통수학1 > 행렬",
        deficiencyTitle: "영행렬 조건 판정 및 행렬 형태 단순화 결손",
        deficiencyDesc: "행렬 B가 영행렬이 아니라는 단서로부터 괄호 안의 식(a₁₁²+a₁₂a₂₁)이 0이 될 수 없음을 밝혀내고, a₁₁=0임을 이끌어내는 논리 전개가 막혔습니다.",
        prescription: "1) 행렬의 모든 성분이 0인 영행렬의 성질 복습\n2) 조건의 '영행렬이 아니다'라는 전제를 대수적 부등식(≠0)으로 변환하는 연습",
        coreKeywords: ["영행렬 판정", "비대각 행렬", "논리적 소거"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "행렬 A+B의 모든 성분의 곱이 -8이라는 조건에서 (a₁₂a₂₁)²·(a₁₂a₂₁) = (a₁₂a₂₁)³ = -8을 세워 a₁₂a₂₁ = -2임을 구했나요?",
        conceptCode: "[10공수1-01-01]",
        conceptName: "다항식의 연산과 거듭제곱",
        curriculumSubject: "공통수학1 > 다항식",
        deficiencyTitle: "행렬의 덧셈 성분 곱셈 및 실근 거듭제곱근 판정 결손",
        deficiencyDesc: "A+B의 네 성분을 곱한 식이 실수 a₁₂a₂₁의 세제곱임을 파악하고 실근을 구해내는 대수적 식 정리 능력이 부족했습니다.",
        prescription: "1) 행렬의 덧셈 성분 표현 연습\n2) 실수 x에 대하여 x³=-8의 유일한 실근 x=-2 판정 복습",
        coreKeywords: ["행렬의 덧셈", "성분의 곱", "실수 거듭제곱근"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "A+B의 모든 성분의 합이 -1임을 이용해 a₁₂+a₂₁=3을 구하고, 곱셈 공식 a³+b³ = (a+b)³ - 3ab(a+b)로 45를 정확히 계산했나요?",
        conceptCode: "[10공수1-01-01]",
        conceptName: "곱셈 공식의 변형",
        curriculumSubject: "공통수학1 > 다항식",
        deficiencyTitle: "다항식 곱셈 공식의 변형 공식 적용 결손",
        deficiencyDesc: "두 수의 합과 곱을 알고 있을 때 세제곱의 합을 구하는 핵심 곱셈 공식 변형 식을 능숙하게 떠올리지 못해 마지막 계산을 마무리하지 못했습니다.",
        prescription: "1) 공통수학1 필수 곱셈 공식 변형 암기 및 다양한 유형 적용 훈련\n2) 합과 곱이 주어진 대칭식 연산 훈련",
        coreKeywords: ["곱셈 공식 변형", "세제곱의 합", "대칭식 계산"]
      }
    ]
  },
  "3-28": {
    id: "3-28",
    examMonth: "3",
    examMonthName: "3월 모의고사",
    questionNumber: 28,
    subject: "공통수학2",
    curriculumDomain: "함수와 그래프",
    topicTitle: "합성함수와 거듭제곱 일의 자리 규칙성 및 부분집합의 원소 합",
    difficulty: "오답률 3위 (85.3%)",
    score: 4,
    questionSummary: "3의 거듭제곱의 일의 자리 수 함수 f(k)에 대하여 (f∘f)(x)의 함숫값과 증가함수 조건을 만족하는 부분집합 A의 모든 원소의 합의 최댓값을 구하는 고난도 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "3^k의 일의 자리 수의 주기성(3, 9, 7, 1)을 파악하고, 두 번 합성한 (f∘f)(x)=7을 만족하는 홀수 집합 P={1, 3, 5, 7, 9}를 구했나요?",
        conceptCode: "[10공수2-03-01]",
        conceptName: "합성함수의 계산",
        curriculumSubject: "공통수학2 > 함수와 그래프",
        deficiencyTitle: "거듭제곱 일의 자리 수의 주기성 및 합성함수 추론 결손",
        deficiencyDesc: "자연수의 거듭제곱 일의 자리가 주기적으로 반복되는 성질을 찾지 못하거나, 합성함수 f(f(x))=7이 되기 위해 f(x)=3이어야 함을 역추적하지 못했습니다.",
        prescription: "1) 수의 규칙성과 일의 자리 주기성(4주기) 분석 연습\n2) 합성함수 f(g(x))=c의 단계별 역추적 방정식 풀이 훈련",
        coreKeywords: ["거듭제곱 일의 자리", "주기성", "합성함수", "역추적"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "임의의 a∈A에 대하여 f(a)∈A이므로 f(f(a))∈A가 되어 원소 7이 반드시 집합 A에 포함되어야 함을 증명했나요?",
        conceptCode: "[10공수2-02-01]",
        conceptName: "집합의 개념과 원소의 조건",
        curriculumSubject: "공통수학2 > 집합과 명제",
        deficiencyTitle: "함수의 치역과 부분집합의 닫힘 성질 추론 결손",
        deficiencyDesc: "'A의 원소의 함숫값이 다시 A의 원소가 된다'는 닫힘 조건을 두 번 적용하여 7∈A임을 필연적으로 이끌어내는 논리적 추론이 부족했습니다.",
        prescription: "1) 조건제시법 및 '∀x∈A, f(x)∈A' 닫힘 조건의 엄밀한 정의 학습\n2) 귀납적 원소 포함 판정 연습",
        coreKeywords: ["집합의 원소", "닫힘 성질", "필연적 원소", "합성함수 치역"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "조건 (다)의 a1<a2이면 f(a1)<f(a2)라는 순서보존 조건을 활용하여 9∈A 또는 5∈A일 때 모순이 생김을 보였나요?",
        conceptCode: "[10공수2-03-01]",
        conceptName: "함수의 증가와 대소 관계 판정",
        curriculumSubject: "공통수학2 > 함수와 그래프",
        deficiencyTitle: "함수의 단조 증가 조건과 함숫값 모순 배제 결손",
        deficiencyDesc: "원소 7이 포함된 상태에서 9를 넣으면 7<9인데 f(7)=7 > f(9)=3이 되어 증가 조건에 위배된다는 모순을 체계적으로 점검하지 못했습니다.",
        prescription: "1) 단조 증가함수의 정의(x1<x2 ⇒ f(x1)<f(x2)) 복습\n2) 후보 원소들을 대입하여 조건 위배 여부를 빠르게 판정하는 훈련",
        coreKeywords: ["단조 증가 조건", "함숫값 대소 비교", "귀류법적 배제"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "원소 3이 반드시 포함되어야 함을 밝히고, 가능한 집합 A가 {3, 7} 또는 {1, 3, 7}임을 찾아 원소의 합의 최댓값 11을 구했나요?",
        conceptCode: "[10공수2-02-01]",
        conceptName: "집합의 원소의 합과 부분집합 추론",
        curriculumSubject: "공통수학2 > 집합과 명제",
        deficiencyTitle: "가능한 모든 부분집합 구성 및 최댓값 결정 결손",
        deficiencyDesc: "남은 원소 {1, 3}의 포함 여부를 검증하여 조건을 모두 만족하는 부분집합을 완성하고 원소의 합을 극대화하는 마무리 정리가 부족했습니다.",
        prescription: "1) 부분집합 원소 구성의 타당성 완전 검증 훈련\n2) 조건 부합 부분집합 중 원소 합 최댓값 산출 연습",
        coreKeywords: ["부분집합 구성", "원소의 합 최댓값", "집합의 최종 결정"]
      }
    ]
  },
  "3-27": {
    id: "3-27",
    examMonth: "3",
    examMonthName: "3월 모의고사",
    questionNumber: 27,
    subject: "공통수학1",
    curriculumDomain: "경우의 수",
    topicTitle: "좌석 배치 조건에 따른 순열과 조합의 수 계산",
    difficulty: "오답률 4위 (76.8%)",
    score: 4,
    questionSummary: "행과 열로 배열된 좌석에 학생 A, B, C, D 4명을 특정 행 번호 및 이웃 조건에 따라 앉히는 경우의 수를 구하는 순열·조합 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "학생 A가 앉을 수 있는 좌석 번호(11 또는 21 / 31 / 41)에 따라 뒤따르는 조건이 달라짐을 파악하고 배반사건으로 케이스 분류했나요?",
        conceptCode: "[10공수1-03-01]",
        conceptName: "경우의 수의 합의 법칙과 케이스 분류",
        curriculumSubject: "공통수학1 > 경우의 수",
        deficiencyTitle: "경우의 수 기준 설정 및 배반사건 분류 결손",
        deficiencyDesc: "좌석의 위치별로 남은 좌석의 번호 구성이 완전히 달라지므로, 학생 A의 위치를 기준으로 경우를 깔끔하게 나누는 기준 설정을 놓쳤습니다.",
        prescription: "1) 복합 조건의 경우의 수 문제에서 '가장 제약이 큰 대상'을 기준으로 경우 분류하기 훈련\n2) 합의 법칙 적용을 위한 배반사건 설계 연습",
        coreKeywords: ["합의 법칙", "배반사건", "기준 설정", "경우 나누기"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "A의 각 위치별로 학생 B가 앉을 수 있는 좌석 번호의 제한 조건(22 이하 vs 31, 32번)에 따라 B의 자리를 선택하는 조합의 수를 구했나요?",
        conceptCode: "[10공수1-03-01]",
        conceptName: "조합의 수의 계산",
        curriculumSubject: "공통수학1 > 경우의 수",
        deficiencyTitle: "특정 번호 제한 조건에 따른 대상 선택 결손",
        deficiencyDesc: "B의 좌석 번호가 22 이하일 때와 31 이상일 때 남은 C, D의 선택 가능한 좌석 수가 달라지는 연쇄 조건을 정밀하게 추적하지 못했습니다.",
        prescription: "1) 제약 조건이 걸린 원소를 먼저 선택하는 단계별 배치 훈련\n2) 조합 nCr을 활용한 대상 선택 숙달",
        coreKeywords: ["조합", "제한 조건 선택", "연쇄 조건 추적"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "남은 좌석 중에서 서로 다른 두 학생 C, D를 배정하는 경우의 수를 순열 ₄P₂, ₃P₂, ₂P₂로 정확히 계산했나요?",
        conceptCode: "[10공수1-03-01]",
        conceptName: "순열의 수의 계산",
        curriculumSubject: "공통수학1 > 경우의 수",
        deficiencyTitle: "서로 다른 대상을 서로 다른 자리에 앉히는 순열 모델링 결손",
        deficiencyDesc: "남은 자리에 서로 다른 두 명의 학생을 배치할 때 순서가 고려되어야 하는 순열(nPr) 상황을 조합으로 혼동하거나 좌석 개수를 잘못 세었습니다.",
        prescription: "1) 순서가 있는 배열(순열 nPr)과 순서가 없는 선택(조합 nCr)의 엄밀한 구분\n2) 남은 공석에 순차적으로 배정하는 곱의 법칙 계산 숙달",
        coreKeywords: ["순열", "자리 배치", "순서의 고려", "곱의 법칙"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "세 케이스별 경우의 수 96, 26, 28을 빠짐없이 더하여 최종 경우의 수 150을 도출했나요?",
        conceptCode: "[10공수1-03-01]",
        conceptName: "순열과 조합을 활용한 실생활 문제 해결",
        curriculumSubject: "공통수학1 > 경우의 수",
        deficiencyTitle: "케이스별 연산 취합 및 합의 법칙 최종 산출 결손",
        deficiencyDesc: "각 단계별 계산은 부분적으로 진행했으나, 중간 곱셈과 덧셈 연산에서 누락이나 중복이 발생하여 최종 정답을 도출하지 못했습니다.",
        prescription: "1) 단계별 계산 결과를 표나 트리 다이어그램으로 깔끔하게 정리하는 습관 형성\n2) 경우의 수 덧셈 연산의 검산 훈련",
        coreKeywords: ["경우의 수 합산", "합의 법칙", "최종 정답 산출"]
      }
    ]
  },
  "3-21": {
    id: "3-21",
    examMonth: "3",
    examMonthName: "3월 모의고사",
    questionNumber: 21,
    subject: "공통수학2",
    curriculumDomain: "함수와 그래프",
    topicTitle: "합성함수와 역함수의 성질 및 원과 직선의 교점",
    difficulty: "오답률 5위 (69.3%)",
    score: 4,
    questionSummary: "함수 g(x)=(1/k)x-2의 역함수와 직선 y=kx의 교점을 원의 방정식과 연립하여 실근의 차 β-α를 구하는 고난도 기하·대수 융합 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "g(f(x))=x-2 및 f(x)=g⁻¹(x-2)의 역함수 관계로부터 방정식의 두 실근 α, β가 직선 y=kx와 y=f(x)의 교점의 x좌표와 직결됨을 연결했나요?",
        conceptCode: "[10공수2-03-01]",
        conceptName: "역함수의 정의와 성질",
        curriculumSubject: "공통수학2 > 함수와 그래프",
        deficiencyTitle: "합성함수와 역함수 관계식의 대수적 해석 결손",
        deficiencyDesc: "주어진 합성함수 조건 g(f(a))=a-2를 역함수의 정의를 이용해 f(a)=ka 형태로 바꾸어 방정식의 교점 문제로 환원하는 발상을 떠올리지 못했습니다.",
        prescription: "1) y=f(x) ⇔ x=f⁻¹(y) 역함수 상호 변환 관계 완벽 숙달\n2) 합성함수 방정식의 근과 교점의 좌표 변환 훈련",
        coreKeywords: ["역함수의 성질", "합성함수 관계식", "교점의 x좌표"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "원 (x-13)²+(y-13)²=26의 중심 (13, 13)과 직선 y=kx 사이의 거리 공식을 세우고, 현의 길이 AB=2√13과 피타고라스 정리로 k=3/2를 구했나요?",
        conceptCode: "[10공수2-01-03]",
        conceptName: "원과 직선의 위치 관계",
        curriculumSubject: "공통수학2 > 도형의 방정식",
        deficiencyTitle: "원의 중심과 직선 사이 거리 및 현의 길이 공식 결손",
        deficiencyDesc: "원 위의 현의 길이 문제가 주어졌을 때, 원의 중심에서 직선에 수선의 발을 내려 피타고라스 정리(r² = d² + (L/2)²)를 쓰는 핵심 기하학적 풀이를 적용하지 못했습니다.",
        prescription: "1) 점과 직선 사이의 거리 공식 d = |ax1+by1+c|/√(a²+b²) 복습\n2) 원의 현의 길이와 피타고라스 삼각형 관계 집중 연습",
        coreKeywords: ["원의 중심", "점과 직선 사이의 거리", "현의 길이", "피타고라스 정리"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "구한 직선 y=(3/2)x와 원의 방정식을 연립하여 이차방정식을 풀고, 두 교점의 x좌표 8과 12를 정확히 구했나요?",
        conceptCode: "[10공수1-02-03]",
        conceptName: "연립이차방정식의 풀이",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "이차방정식과 일차직선의 연립 계산 결손",
        deficiencyDesc: "직선의 식을 원의 방정식에 대입하여 전개한 후 인수분해를 통해 교점의 좌표를 찾아내는 대수적 계산 과정에서 실수를 범했습니다.",
        prescription: "1) 일차식과 이차식의 연립이차방정식 대입법 풀이 훈련\n2) 이차방정식 인수분해의 신속·정확한 연산 연습",
        coreKeywords: ["연립방정식", "대입법", "이차방정식 인수분해"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "두 교점의 y좌표 차 f(12)-f(8) = 18 - 12 = 6 또는 직선의 기울기 k=3/2를 이용하여 실근의 차 β-α=6을 오차 없이 계산했나요?",
        conceptCode: "[10공수2-03-01]",
        conceptName: "함수의 그래프와 실근의 차 계산",
        curriculumSubject: "공통수학2 > 함수와 그래프",
        deficiencyTitle: "역함수 대칭성 및 교점 좌표의 대수적 차이 산출 결손",
        deficiencyDesc: "구한 교점 좌표와 원래 방정식의 근 α, β 사이의 관계를 연결하여 최종 실근의 차를 산출하는 마무리 연결 고리가 부족했습니다.",
        prescription: "1) 직선 위의 두 점 사이의 x좌표 차와 y좌표 차의 기울기 관계(Δy = mΔx) 활용 연습\n2) 최종 미지수 값 환원 훈련",
        coreKeywords: ["실근의 차", "기울기와 좌표 변화량", "최종 함숫값 계산"]
      }
    ]
  },
  "3-18": {
    id: "3-18",
    examMonth: "3",
    examMonthName: "3월 모의고사",
    questionNumber: 18,
    subject: "공통수학1",
    curriculumDomain: "방정식과 부등식",
    topicTitle: "이차함수와 직선의 위치 관계 및 방정식의 실근 개수",
    difficulty: "오답률 6위 (68.7%)",
    score: 4,
    questionSummary: "f(x)·(f(x) + 1/3 f(t)) = 0의 실근 개수가 t의 값에 따라 달라질 때, 특정 t값(-1, 7)에서 실근 개수 조건을 만족하는 이차함수 f(x)를 결정하여 f(10)을 구하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "방정식이 f(x)=0 또는 f(x) = -(1/3)f(t)로 분리되며, f(x)의 그래프와 x축 및 직선 y=-(1/3)f(t)의 교점의 개수의 합으로 해석했나요?",
        conceptCode: "[10공수1-02-02]",
        conceptName: "이차방정식과 이차함수의 관계",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "방정식의 실근과 두 그래프 교점의 동치 해석 결손",
        deficiencyDesc: "A·B=0 꼴의 방정식을 두 개의 방정식으로 쪼개고, 각각의 실근을 함수 y=f(x)와 상수함수의 교점 개수로 시각화하는 기본 개념이 부족했습니다.",
        prescription: "1) 방정식 f(x)=k의 실근과 그래프 교점의 x좌표 일치 원리 복습\n2) 곱 형태 방정식 A·B=0의 해집합 합집합 개념 훈련",
        coreKeywords: ["방정식의 실근", "이차함수 그래프", "상수함수 교점"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "실근의 개수가 총 3개가 되려면 f(x)가 x축과 서로 다른 두 점에서 만나고, 직선 y=-(1/3)f(t)가 이차함수의 꼭짓점에 접해야 함을 추론했나요?",
        conceptCode: "[10공수1-02-02]",
        conceptName: "이차함수의 그래프와 직선의 접선 조건",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "실근의 총 개수 조합 및 꼭짓점 접선 조건 추론 결손",
        deficiencyDesc: "교점 개수의 합이 3이 되기 위해 (x축과 2개)+(직선과 1개 접함)이어야 함을 기하학적으로 유추하지 못하고 케이스 분류에서 헤맸습니다.",
        prescription: "1) 이차함수와 상수함수의 교점 개수(0개, 1개 접함, 2개) 체계화\n2) 실근 개수 조건 만족을 위한 접선(중근) 상태 추론 훈련",
        coreKeywords: ["실근 개수 3개", "이차함수 꼭짓점", "접선 조건"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "꼭짓점의 y좌표 q = -(1/3)f(-1) = -(1/3)f(7)로부터 f(-1)=f(7)을 이끌어내어 대칭축이 x=3임을 도출했나요?",
        conceptCode: "[10공수1-02-02]",
        conceptName: "이차함수의 축의 방정식과 대칭성",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "함숫값 일치 조건으로부터 이차함수 대칭축 도출 결손",
        deficiencyDesc: "f(-1)=f(7)이라는 함숫값이 같다는 조건에서 이차함수의 좌우 대칭성을 이용해 축의 방정식 x=(-1+7)/2=3을 찾는 핵심 기하학적 성질을 놓쳤습니다.",
        prescription: "1) f(a)=f(b)일 때 이차함수의 대칭축 x=(a+b)/2 성질 복습\n2) 이차함수의 선대칭성 활용 문제 집중 훈련",
        coreKeywords: ["이차함수 대칭축", "선대칭성", "함숫값 일치", "축의 방정식"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "f(x)=(x-3)²+q 식에 x=-1을 대입하여 q = -(1/3)(16+q)에서 q=-4를 구하고 f(10) = 7² - 4 = 45를 정확히 계산했나요?",
        conceptCode: "[10공수1-02-02]",
        conceptName: "이차함수 식의 결정과 함숫값 계산",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "꼭짓점 y좌표 일차방정식 연립 및 최종 함숫값 계산 결손",
        deficiencyDesc: "축을 찾은 후 표준형 f(x)=(x-3)²+q를 세우고 q에 대한 방정식을 풀어 완성하는 마지막 대수 계산에서 오류가 있었습니다.",
        prescription: "1) 이차함수 표준형 설정 및 미지수 결정 연립 훈련\n2) 특정 x값 대입을 통한 최종 함숫값 계산 확인",
        coreKeywords: ["이차함수 표준형", "꼭짓점 y좌표", "최종 함숫값"]
      }
    ]
  },
  "3-20": {
    id: "3-20",
    examMonth: "3",
    examMonthName: "3월 모의고사",
    questionNumber: 20,
    subject: "공통수학1",
    curriculumDomain: "다항식",
    topicTitle: "인수정리와 항등식을 이용한 다항식의 결정",
    difficulty: "오답률 7위 (62.4%)",
    score: 4,
    questionSummary: "다항식 f(x), g(x), h(x)에 대하여 주어진 두 곱의 항등식 조건을 만족할 때, 최고차항 계수가 1인 이차다항식들을 결정하여 h(0)의 값을 구하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "주어진 두 조건식을 변변 곱하여 (g(x))² = (x-1)(x-2)A(x)B(x) 형태를 만들고 g(1)=0, g(2)=0임을 이끌어 냈나요?",
        conceptCode: "[10공수1-01-02]",
        conceptName: "인수정리와 다항식의 인수분해",
        curriculumSubject: "공통수학1 > 다항식",
        deficiencyTitle: "항등식의 변변 곱셈 및 공통 인수 발견 결손",
        deficiencyDesc: "두 개의 복잡한 곱셈 항등식이 주어졌을 때, 변변 곱하여 좌변에 g(x)²을 만들고 우변에서 (x-1), (x-2) 인수를 뽑아내는 구조적 안목이 부족했습니다.",
        prescription: "1) 여러 개의 다항식 항등식이 연립되어 있을 때 변변 곱하거나 나누는 식 변형 기법 학습\n2) 인수정리 f(α)=0 ⇔ (x-α)를 인수로 가짐 복습",
        coreKeywords: ["항등식 변변 곱셈", "인수정리", "공통인수 추출"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "g(x)가 최고차항 계수가 1인 이차다항식이므로 g(x) = (x-1)(x-2)로 유일하게 확정됨을 파악했나요?",
        conceptCode: "[10공수1-01-02]",
        conceptName: "다항식의 차수와 유일성 판정",
        curriculumSubject: "공통수학1 > 다항식",
        deficiencyTitle: "다항식 차수 및 최고차항 계수 일치 추론 결손",
        deficiencyDesc: "이차다항식이 서로 다른 두 실근 1과 2를 가지므로 추가 인수 없이 g(x)=(x-1)(x-2)로 완전히 결정된다는 다항식 결정 기본 원리를 놓쳤습니다.",
        prescription: "1) n차 다항식이 n개의 서로 다른 근을 가질 때의 인수분해 유일성 정리 복습\n2) 최고차항 계수 반영 훈련",
        coreKeywords: ["이차다항식의 결정", "최고차항 계수", "인수의 유일성"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "g(x)를 조건에 대입하여 f(x)(x-2) = h(x)A(x)를 얻고, f와 h가 서로 다른 다항식이므로 h(2)=0, f(1)=0이어야 함을 논리적으로 추론했나요?",
        conceptCode: "[10공수1-01-02]",
        conceptName: "인수정리를 이용한 다항식 추론",
        curriculumSubject: "공통수학1 > 다항식",
        deficiencyTitle: "조건 배제 및 다항식 간의 인과적 인수 배정 결손",
        deficiencyDesc: "문제의 'f(x)와 h(x)는 서로 다르다'는 조건을 활용하여 h(2)≠0일 때 f=h가 되어 모순이 생김을 보이고 h(x)가 (x-2)를 인수로 가져야 함을 밝히는 논리가 막혔습니다.",
        prescription: "1) 조건부 부정(모순 증명)을 통한 다항식 인수 추론 훈련\n2) 항등식 양변의 인수 비교법 연습",
        coreKeywords: ["서로 다른 다항식 조건", "모순 배제", "인수 배정"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "f(x)=(x-1)(x-a), h(x)=(x-2)(x-b)로 두고 f(-1)+g(-1)=18을 연립하여 a=b=5를 구한 뒤 h(0)=10을 오차 없이 계산했나요?",
        conceptCode: "[10공수1-01-01]",
        conceptName: "항등식과 미정계수법",
        curriculumSubject: "공통수학1 > 다항식",
        deficiencyTitle: "미정계수 설정 및 주어진 조건값 연립 계산 결손",
        deficiencyDesc: "다항식의 식을 세운 후 주어진 조건 f(-1)+g(-1)=18에 수치를 대입하여 미지수 a, b를 결정하고 h(0)의 값을 구하는 마지막 연립 계산이 부족했습니다.",
        prescription: "1) 미정계수법(수치대입법)을 활용한 다항식 계수 결정 연습\n2) 식의 값 대입 계산 정확도 훈련",
        coreKeywords: ["미정계수법", "수치대입법", "최종 함숫값 계산"]
      }
    ]
  },
  "3-19": {
    id: "3-19",
    examMonth: "3",
    examMonthName: "3월 모의고사",
    questionNumber: 19,
    subject: "공통수학2",
    curriculumDomain: "집합과 명제",
    topicTitle: "조건제시법과 순서쌍 추론 및 집합 원소의 합의 최댓값",
    difficulty: "오답률 8위 (57.3%)",
    score: 4,
    questionSummary: "집합 X의 원소 조건 p∈X ⇒ (p+2)/3∈X를 만족하는 원소들로 순서쌍을 구성하고, 집합 연산 조건(A∩B와 B-A의 관계)을 만족하는 B-A의 원소의 합의 최댓값을 구하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "(p+2)/3이 정수가 되는 p의 후보 {1, 4, 7, 10}을 찾고 순서쌍 (1,1,4), (4,2,5), (7,3,6), (10,4,7)을 구성했나요?",
        conceptCode: "[10공수2-02-01]",
        conceptName: "집합의 개념과 원소나열법",
        curriculumSubject: "공통수학2 > 집합과 명제",
        deficiencyTitle: "조건제시법 분수식의 정수 조건 분석 결손",
        deficiencyDesc: "p가 10 이하의 자연수일 때 (p+2)/3이 자연수가 되기 위한 p의 값을 정수론적으로 빠르게 추리지 못했습니다.",
        prescription: "1) 분수식이 자연수가 되는 정수 배수 조건(p+2는 3의 배수) 훈련\n2) 순서쌍 대응표 작성 숙달",
        coreKeywords: ["조건제시법", "자연수 조건", "3의 배수", "순서쌍 나열"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "집합 A∩B와 B-A가 서로소라는 사실을 통해 순서쌍 (1,1,4)에서 1이 A∩B에 속하면 모순이 생기므로 A∩B ⊂ {4, 7, 10}임을 도출했나요?",
        conceptCode: "[10공수2-02-01]",
        conceptName: "집합의 연산(교집합과 차집합)",
        curriculumSubject: "공통수학2 > 집합과 명제",
        deficiencyTitle: "교집합과 차집합의 서로소 성질을 이용한 모순 배제 결손",
        deficiencyDesc: "(A∩B) ∩ (B-A) = ∅이라는 집합의 대전제를 원소 소속 조건에 연결하여 특정 원소가 들어갈 수 없음을 논리적으로 배제하지 못했습니다.",
        prescription: "1) 벤다이어그램을 통한 교집합과 차집합의 분리 영역 이해\n2) 집합의 배반 조건에 따른 원소 소속 추론 연습",
        coreKeywords: ["서로소 집합", "교집합과 차집합", "모순 배제", "벤다이어그램"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "n(A∩B)=2인 세 가지 경우({4,7}, {7,10}, {4,10})로 케이스를 나누어 조건에 모순되는 경우를 정확히 배제했나요?",
        conceptCode: "[10공수2-02-01]",
        conceptName: "집합의 원소의 개수와 경우 나누기",
        curriculumSubject: "공통수학2 > 집합과 명제",
        deficiencyTitle: "부분집합 경우의 수 분류 및 연쇄 소속성 검증 결손",
        deficiencyDesc: "교집합 원소의 개수가 2개일 때 가능한 3가지 조합을 체계적으로 분류하고 각 경우마다 B-A의 원소를 연쇄적으로 결정하는 과정이 부족했습니다.",
        prescription: "1) 집합 원소 개수 조건에 따른 케이스 완전 분류 훈련\n2) 각 경우별 원소 추적 및 검증 연습",
        coreKeywords: ["원소의 개수", "케이스 분류", "연쇄 소속성"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "A∩B={7, 10}일 때 B-A = {3, 4, 5}가 가능함을 확인하여 원소의 모든 합의 최댓값 3+4+5=12를 바르게 산출했나요?",
        conceptCode: "[10공수2-02-01]",
        conceptName: "집합의 원소의 합의 최댓값",
        curriculumSubject: "공통수학2 > 집합과 명제",
        deficiencyTitle: "최적 집합 선택 및 원소의 합 최종 산출 결손",
        deficiencyDesc: "가능한 B-A 후보 집합 {1,2,3}(합 6), {2,3,4}(합 9), {3,4,5}(합 12) 중에서 합이 최대가 되는 경우를 올바르게 선택하지 못했습니다.",
        prescription: "1) 후보 집합들의 원소 합 비교 및 최댓값 결정 훈련\n2) 문제의 최종 요구 조건 정확한 확인",
        coreKeywords: ["원소의 합 최댓값", "집합의 최종 선택", "덧셈 검산"]
      }
    ]
  },
  "3-26": {
    id: "3-26",
    examMonth: "3",
    examMonthName: "3월 모의고사",
    questionNumber: 26,
    subject: "공통수학1",
    curriculumDomain: "방정식과 부등식",
    topicTitle: "제한된 범위에서 이차함수의 최대·최소와 항등식",
    difficulty: "오답률 9위 (55.0%)",
    score: 4,
    questionSummary: "대칭축이 x=2인 이차함수 f(x)가 구간 [-k², 3+k²]에서 최댓값 f(-k²)을 가질 때, 항등식 조건을 만족하는 미지수 a, b를 구하여 a²+b²을 계산하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "대칭축 x=2가 구간 [-k², 3+k²]에 항상 포함됨을 확인하고, a<0이면 최댓값이 꼭짓점 f(2)=b로 일정해져 조건에 모순임을 밝혔나요?",
        conceptCode: "[10공수1-02-02]",
        conceptName: "이차함수의 최대·최소",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "위로 볼록 이차함수의 최댓값 불변 모순 파악 결손",
        deficiencyDesc: "a<0일 때 구간 안에 꼭짓점이 포함되면 최댓값이 k값에 관계없이 꼭짓점의 y좌표로 고정되므로, k에 대한 사차식으로 주어지는 조건과 모순됨을 짚어내지 못했습니다.",
        prescription: "1) 이차함수의 최고차항 부호에 따른 그래프 개형(아래로 볼록 vs 위로 볼록) 복습\n2) 꼭짓점이 구간 내부에 있을 때의 최대·최소 거동 분석 훈련",
        coreKeywords: ["이차함수 최대최소", "위로 볼록", "꼭짓점 포함 구간", "모순 배제"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "a>0일 때 대칭축 x=2에서 더 먼 쪽 끝점인 x = -k²에서 최댓값 f(-k²)이 발생함을 축과의 거리 비교로 확인했나요?",
        conceptCode: "[10공수1-02-02]",
        conceptName: "이차함수의 대칭성과 양 끝값의 거리 비교",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "대칭축으로부터의 거리에 따른 이차함수 함숫값 크기 비교 결손",
        deficiencyDesc: "아래로 볼록한 이차함수는 대칭축에서 멀어질수록 함숫값이 커진다는 기본 성질을 통해, |2 - (-k²)| = k²+2 와 |(3+k²) - 2| = k²+1 중 전자가 더 큼을 비교하지 못했습니다.",
        prescription: "1) 아래로 볼록 이차함수에서 대칭축으로부터의 거리와 최댓값 위치의 관계 숙달\n2) 문자로 주어진 구간 양 끝값과 축 사이 거리 비교 연습",
        coreKeywords: ["아래로 볼록", "대칭축과의 거리", "경계값 최댓값", "거리 비교"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "f(-k²) = a(k²+2)² + b = ak⁴ + 4ak² + 4a + b를 전개하여 3k⁴ + 12k²와 항등식으로 계수를 비교했나요?",
        conceptCode: "[10공수1-01-02]",
        conceptName: "항등식과 계수비교법",
        curriculumSubject: "공통수학1 > 다항식",
        deficiencyTitle: "다항식 전개 및 k에 대한 항등식 계수 비교 결손",
        deficiencyDesc: "f(-k²)의 전개식을 k에 대한 내림차순으로 정리하고 문제에 주어진 식과 동치임을 이용해 계수를 일치시키는 기본 대수 처리가 미흡했습니다.",
        prescription: "1) 다항식의 전개 및 동류항 정리 숙달\n2) 항등식의 성질(모든 실수 k에 대해 성립 ⇒ 동류항 계수 일치) 훈련",
        coreKeywords: ["항등식", "계수비교법", "내림차순 정리", "동류항 비교"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "a=3, 4a+b=0에서 b=-12를 구하고 a²+b² = 9 + 144 = 153을 정확히 계산했나요?",
        conceptCode: "[10공수1-01-01]",
        conceptName: "다항식 연산 및 식의 값 계산",
        curriculumSubject: "공통수학1 > 다항식",
        deficiencyTitle: "연립일차방정식 풀이 및 제곱의 합 계산 결손",
        deficiencyDesc: "계수비교로 얻은 미정계수 방정식을 풀어 a와 b를 구하고 제곱의 합을 구하는 마무리 산술 계산에서 오류가 발생했습니다.",
        prescription: "1) 일차 연립방정식 풀이 점검\n2) 거듭제곱 덧셈 연산 검산",
        coreKeywords: ["미정계수 결정", "제곱의 합", "산술 연산 정확도"]
      }
    ]
  },
  "3-17": {
    id: "3-17",
    examMonth: "3",
    examMonthName: "3월 모의고사",
    questionNumber: 17,
    subject: "공통수학2",
    curriculumDomain: "도형의 방정식",
    topicTitle: "직선의 방정식과 점과 직선 사이의 거리 공식",
    difficulty: "오답률 10위 (51.8%)",
    score: 4,
    questionSummary: "직각삼각형의 변의 길이 조건과 원의 중심 A(3, 3)에서 직선 y=mx 사이의 거리를 연립하여 기울기 m=2-√3을 구하는 기하·방정식 융합 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "직각삼각형 ABH와 AOH에서 피타고라스 정리를 적용하여 AH² = 9 - t²과 AH² = 18 - 3t²을 세워 t² = 9/2를 구했나요?",
        conceptCode: "[10공수2-01-01]",
        conceptName: "평면좌표와 피타고라스 정리",
        curriculumSubject: "공통수학2 > 도형의 방정식",
        deficiencyTitle: "공통 높이를 갖는 직각삼각형 피타고라스 연립 결손",
        deficiencyDesc: "공통 선분 AH를 높이로 갖는 두 직각삼각형에서 각각 피타고라스 정리를 세워 미지수 t²을 소거·결정하는 기하학적 연립 방정식 구성을 놓쳤습니다.",
        prescription: "1) 직각삼각형에서 높이 공유 시 피타고라스 정리 연립 모델링 훈련\n2) 삼각비(1:√3)를 변의 길이 비례식으로 변환하는 연습",
        coreKeywords: ["피타고라스 정리", "공통 높이", "연립방정식", "선분의 길이"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "점 A(3, 3)과 직선 mx - y = 0 사이의 점과 직선 사이 거리 공식을 세워 AH = |3m-3|/√(m²+1)임을 바르게 작성했나요?",
        conceptCode: "[10공수2-01-02]",
        conceptName: "점과 직선 사이의 거리 공식",
        curriculumSubject: "공통수학2 > 도형의 방정식",
        deficiencyTitle: "점과 직선 사이의 거리 공식 적용 결손",
        deficiencyDesc: "직선의 일반형 ax+by+c=0을 만들고 공식 d = |ax1+by1+c|/√(a²+b²)에 점의 좌표를 정확히 대입하는 기본 공식 적용이 미숙했습니다.",
        prescription: "1) 점과 직선 사이의 거리 공식 암기 및 다양한 직선 형태에 대한 대입 훈련\n2) 절댓값 기호와 루트 계산 주의점 확인",
        coreKeywords: ["점과 직선 사이의 거리", "직선의 일반형", "절댓값"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "AH² = 9/2와 거리 공식의 제곱을 같다고 놓고 정리하여 m에 대한 이차방정식 m² - 4m + 1 = 0을 유도했나요?",
        conceptCode: "[10공수1-02-01]",
        conceptName: "이차방정식의 풀이",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "분수식 정리 및 이차방정식 전개 결손",
        deficiencyDesc: "9(m-1)² / (m²+1) = 9/2 양변에서 9를 약분하고 대각선 곱셈으로 전개하여 동류항을 정리하는 이차방정식 유도 과정에서 계산 실수가 있었습니다.",
        prescription: "1) 유리방정식 형태에서 공통인수 약분 후 전개하는 연산 숙달\n2) 이차방정식 기본형 ax²+bx+c=0 정리 연습",
        coreKeywords: ["분수식 정리", "이차방정식 전개", "대각선 곱셈"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "근의 공식으로 m = 2 ± √3을 구하고, 문제 조건 0 < m < 1에 의해 m = 2 - √3을 올바르게 선택했나요?",
        conceptCode: "[10공수1-02-01]",
        conceptName: "근의 공식과 조건에 맞는 해 판정",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "근의 공식 적용 및 부등식 범위 해 판정 결손",
        deficiencyDesc: "이차방정식 근의 공식을 적용한 후 두 실근 중 문제의 기하학적 제한 범위(기울기 0 < m < 1)에 맞는 근을 정확히 가려내지 못했습니다.",
        prescription: "1) 짝수 근의 공식 x = (-b' ± √(b'² - ac)) / a 숙달\n2) 무리수의 근삿값(√3 ≒ 1.732)을 이용한 범위 판정 훈련",
        coreKeywords: ["근의 공식", "무리수 범위 판정", "기하학적 제한 조건"]
      }
    ]
  },
  "3-16": {
    id: "3-16",
    examMonth: "3",
    examMonthName: "3월 모의고사",
    questionNumber: 16,
    subject: "공통수학1",
    curriculumDomain: "경우의 수",
    topicTitle: "분할과 분배를 활용한 순열과 조합 문제 해결",
    difficulty: "오답률 11위 (49.5%)",
    score: 4,
    questionSummary: "서로 다른 6권의 책(동화책 3권, 시집 3권)을 5명의 학생에게 한 권 이상씩 남김없이 나누어 줄 때 조건에 맞는 경우의 수 216을 구하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "6권의 책을 5명에게 적어도 1권씩 배분하므로 한 학생만 2권을 받고 나머지 4명은 1권씩 받는 분할 구조(2, 1, 1, 1, 1)를 파악했나요?",
        conceptCode: "[10공수1-03-01]",
        conceptName: "경우의 수의 합의 법칙과 분할",
        curriculumSubject: "공통수학1 > 경우의 수",
        deficiencyTitle: "자연수 분할 및 분배 구조 파악 결손",
        deficiencyDesc: "'남김없이 나누어 주고 받지 못하는 학생이 없다'는 조건을 바탕으로 책의 권수 묶음이 {2, 1, 1, 1, 1}로 유일하게 쪼개짐을 먼저 정리하지 못했습니다.",
        prescription: "1) 분배 문제에서 대상의 총합과 받는 사람 수 사이의 분할 묶음 설계 훈련\n2) 비둘기집 원리 및 분할 기본 개념 학습",
        coreKeywords: ["분할과 분배", "권수 묶음", "합의 법칙"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "한 학생이 동화책 2권을 받는 경우의 수 ₃C₁ × ₃C₂ × ₂C₁ × ₃P₃ = 108을 곱의 법칙으로 계산했나요?",
        conceptCode: "[10공수1-03-01]",
        conceptName: "순열과 조합의 곱의 법칙",
        curriculumSubject: "공통수학1 > 경우의 수",
        deficiencyTitle: "동화책 2권 수령 케이스 단계별 곱의 법칙 적용 결손",
        deficiencyDesc: "2권을 받을 2학년 학생 선택(₃C₁), 받을 동화책 2권 선택(₃C₂), 남은 동화책 받을 학생 선택(₂C₁), 남은 시집 3권 배정(₃P₃)의 단계별 곱셈에서 하나를 빠뜨렸습니다.",
        prescription: "1) 다단계 사건의 경우의 수에서 각 단계별 경우의 수를 명확히 적고 곱하는 훈련\n2) 조합과 순열의 혼합 연산 연습",
        coreKeywords: ["곱의 법칙", "동화책 분배", "조합과 순열", "단계별 경우의 수"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "한 학생이 동화책 1권과 시집 1권을 받는 경우의 수 ₃C₁ × (₃C₁×₃C₁) × ₂P₂ × ₂P₂ = 108을 정확히 계산했나요?",
        conceptCode: "[10공수1-03-01]",
        conceptName: "복합 조건의 순열과 조합",
        curriculumSubject: "공통수학1 > 경우의 수",
        deficiencyTitle: "혼합 수령 케이스 분배 계산 결손",
        deficiencyDesc: "동화책 1권과 시집 1권을 동시에 받는 학생을 지정하고 남은 학생들에게 남은 책들을 나누어 주는 세부 경우의 수를 중복이나 누락 없이 세지 못했습니다.",
        prescription: "1) 서로 다른 종류의 대상을 섞어서 배정하는 복합 조건 문제 훈련\n2) 학년별/책 종류별 매칭 수형도 연습",
        coreKeywords: ["혼합 수령", "동화책과 시집", "복합 순열조합"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "한 학생이 시집 2권을 받는 경우는 조건 (나)에 모순임을 확인하고 두 케이스의 합 108 + 108 = 216을 도출했나요?",
        conceptCode: "[10공수1-03-01]",
        conceptName: "조건 불만족 사건 배제 및 최종 합산",
        curriculumSubject: "공통수학1 > 경우의 수",
        deficiencyTitle: "조건 위배 사건 검증 및 최종 경우의 수 합산 결손",
        deficiencyDesc: "마지막 케이스(시집 2권 수령)가 조건 (나)를 위배하는지 확인하지 않고 계산에 포함시키려 하거나, 앞선 두 케이스의 합산을 마무리하지 못했습니다.",
        prescription: "1) 문제의 부정 조건 및 제약 조건의 상시 검증 습관화\n2) 배반사건의 최종 덧셈 확인",
        coreKeywords: ["조건 위배 배제", "배반사건 합산", "최종 경우의 수"]
      }
    ]
  },
  "3-24": {
    id: "3-24",
    examMonth: "3",
    examMonthName: "3월 모의고사",
    questionNumber: 24,
    subject: "공통수학1",
    curriculumDomain: "방정식과 부등식",
    topicTitle: "이차방정식의 근과 계수의 관계 및 식의 변형",
    difficulty: "오답률 12위 (46.2%)",
    score: 3,
    questionSummary: "이차방정식 x² - ax + 13 = 0의 두 근 α, β에 대하여 1/α + 1/β = 2일 때 상수 a의 값을 구하는 기본 연계 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "이차방정식의 근과 계수의 관계를 이용하여 α+β = a, αβ = 13임을 올바르게 작성했나요?",
        conceptCode: "[10공수1-02-01]",
        conceptName: "이차방정식의 근과 계수의 관계",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "이차방정식 근과 계수의 관계 기본 공식 결손",
        deficiencyDesc: "두 근의 합(-b/a)과 두 근의 곱(c/a)의 부호나 계수를 정확히 적용하지 못했습니다.",
        prescription: "1) 이차방정식 ax²+bx+c=0의 근과 계수의 관계 공식 암기\n2) 부호 실수 방지 훈련",
        coreKeywords: ["근과 계수의 관계", "두 근의 합", "두 근의 곱"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "주어진 유리식 1/α + 1/β을 통분하여 (α+β)/(αβ)로 변형했나요?",
        conceptCode: "[10공수1-01-01]",
        conceptName: "유리식의 덧셈과 통분",
        curriculumSubject: "공통수학1 > 다항식",
        deficiencyTitle: "분수식 통분 및 대칭식 변형 결손",
        deficiencyDesc: "역수의 합을 두 근의 합과 곱의 비율로 바꾸는 기본 분수식 변형이 매끄럽지 못했습니다.",
        prescription: "1) 유리식의 통분 연산 숙달\n2) 기본 대칭식(α+β, αβ)으로 식 변형하는 훈련",
        coreKeywords: ["유리식 통분", "대칭식 변형", "역수의 합"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "통분한 식에 근과 계수의 관계를 대입하여 a / 13 = 2라는 일차방정식을 세웠나요?",
        conceptCode: "[10공수1-02-01]",
        conceptName: "미지수를 포함한 일차방정식 모델링",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "식의 대입 및 일차방정식 구성 결손",
        deficiencyDesc: "구한 관계식에 문제의 조건값 2를 대입하여 a에 대한 일차방정식을 세우는 과정에서 연결이 끊겼습니다.",
        prescription: "1) 조건식과 대수식의 일치 방정식 수립 연습\n2) 미지수 일차방정식 풀이 점검",
        coreKeywords: ["방정식 모델링", "식의 대입", "일차방정식"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "양변에 13을 곱하여 a = 26을 오차 없이 계산했나요?",
        conceptCode: "[10공수1-02-01]",
        conceptName: "방정식의 기본 연산",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "기본 일차방정식 마무리 산술 연산 결손",
        deficiencyDesc: "방정식을 세운 후 이항 및 곱셈 연산에서 단순 산술 실수가 발생했습니다.",
        prescription: "1) 기초 등식의 성질(양변에 같은 수 곱하기) 확인\n2) 암산 대신 풀이 과정을 적어 검산하는 습관",
        coreKeywords: ["등식의 성질", "산술 연산", "최종 정답 도출"]
      }
    ]
  },
  "3-14": {
    id: "3-14",
    examMonth: "3",
    examMonthName: "3월 모의고사",
    questionNumber: 14,
    subject: "공통수학2",
    curriculumDomain: "도형의 방정식",
    topicTitle: "도형의 이동과 대칭이동을 활용한 선분의 길이 합의 최솟값",
    difficulty: "오답률 13위 (44.2%)",
    score: 4,
    questionSummary: "원 C 위의 점 P와 직선 y=x 위의 점 Q에 대하여 선분의 합 AQ + QP의 최솟값을 대칭이동과 원의 성질로 해결하는 기하 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "원 C와 점 P를 직선 y=x에 대하여 대칭이동한 원 C'과 점 P'을 설정하여 QP = QP'임을 파악했나요?",
        conceptCode: "[10공수2-01-04]",
        conceptName: "도형의 대칭이동",
        curriculumSubject: "공통수학2 > 도형의 방정식",
        deficiencyTitle: "직선 y=x에 대한 대칭이동 및 거리 보존 원리 결손",
        deficiencyDesc: "선분의 합 최단거리 문제에서 꺾이는 기준선(y=x)에 대해 점 또는 원 전체를 대칭이동하여 거리의 합을 일직선으로 펴는 핵심 아이디어를 떠올리지 못했습니다.",
        prescription: "1) 직선 y=x 대칭이동의 성질 (x, y) ↔ (y, x) 복습\n2) 대칭이동을 이용한 꺾인 선분 길이의 최솟값 유형 집중 훈련",
        coreKeywords: ["직선 y=x 대칭이동", "거리 보존", "선분의 최단거리"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "AQ + QP' ≥ AP'임을 삼각부등식(세 점 A, Q, P'이 한 직선 위에 있을 때 등호 성립)으로 이해했나요?",
        conceptCode: "[10공수2-01-01]",
        conceptName: "평면좌표에서 선분의 길이와 삼각부등식",
        curriculumSubject: "공통수학2 > 도형의 방정식",
        deficiencyTitle: "삼각부등식과 일직선 최단거리 원리 이해 결손",
        deficiencyDesc: "삼각형의 두 변의 길이의 합은 나머지 한 변보다 크거나 같다는 삼각부등식 원리를 통해 일직선 상태가 최솟값임을 논리적으로 정립하지 못했습니다.",
        prescription: "1) 두 점 사이의 최단거리는 직선 선분이라는 기하학적 공리 복습\n2) 삼각부등식과 등호 성립 조건 학습",
        coreKeywords: ["삼각부등식", "일직선 조건", "최단거리 원리"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "원 C' 위의 동점 P'에 대하여 선분 AP'의 최솟값이 원의 중심 C'과 점 A 사이의 거리에서 반지름 r을 뺀 것(AC' - r)임을 도출했나요?",
        conceptCode: "[10공수2-01-03]",
        conceptName: "원과 점 사이의 거리의 최대·최소",
        curriculumSubject: "공통수학2 > 도형의 방정식",
        deficiencyTitle: "원의 중심 거리와 반지름을 이용한 점과 원 사이 최단거리 결손",
        deficiencyDesc: "원 위의 점과 고정된 점 사이의 거리의 최솟값은 '중심까지의 거리 d - 반지름 r'이라는 필수 기하학적 정리를 문제에 연결하지 못했습니다.",
        prescription: "1) 점과 원 위의 점 사이의 거리 최대/최소 공식 (d+r, d-r) 암기 및 증명\n2) 원의 중심 좌표와 반지름 구하기 숙달",
        coreKeywords: ["원의 중심", "점과 원 사이 최단거리", "d - r 공식"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "대칭이동한 중심 C'(3, 7)과 점 A 사이의 거리 5√2 및 반지름 √2를 이용하여 최솟값 5√2 - √2 = 4√2를 정확히 계산했나요?",
        conceptCode: "[10공수2-01-01]",
        conceptName: "평면좌표에서 두 점 사이의 거리 계산",
        curriculumSubject: "공통수학2 > 도형의 방정식",
        deficiencyTitle: "두 점 사이의 거리 공식 및 무리수 뺄셈 연산 결손",
        deficiencyDesc: "좌표를 정확히 구했으나 두 점 사이 거리 공식 √(Δx² + Δy²) 적용이나 무리수의 뺄셈 산술 연산에서 실수가 발생했습니다.",
        prescription: "1) 두 점 사이의 거리 공식 계산 속도 및 정확도 향상\n2) 제곱근 연산 검산 습관",
        coreKeywords: ["두 점 사이의 거리", "제곱근 뺄셈", "최종 최솟값 도출"]
      }
    ]
  },
  "3-15": {
    id: "3-15",
    examMonth: "3",
    examMonthName: "3월 모의고사",
    questionNumber: 15,
    subject: "공통수학1",
    curriculumDomain: "방정식과 부등식",
    topicTitle: "연립이차부등식의 정수 해의 개수와 미지수 범위 추론",
    difficulty: "오답률 14위 (42.2%)",
    score: 4,
    questionSummary: "연립부등식 x²-2x-3≥0과 (x+a)(x-a+2)<0을 만족시키는 정수 x의 개수가 6개가 되도록 하는 모든 정수 a의 값의 합을 구하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "첫 번째 부등식 (x+1)(x-3)≥0을 인수분해하여 해 x≤-1 또는 x≥3을 수직선 위에 정확히 나타냈나요?",
        conceptCode: "[10공수1-02-03]",
        conceptName: "이차부등식의 풀이",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "이차부등식 기본 풀이 및 해집합 수직선 표시 결손",
        deficiencyDesc: "이차식을 인수분해하여 바깥쪽 범위(x ≤ α 또는 x ≥ β)를 도출하고 수직선에 올바르게 표현하는 기본기가 부족했습니다.",
        prescription: "1) 이차부등식 f(x) ≥ 0의 가장자리 해법 복습\n2) 부등식의 해를 수직선 위에 시각화하는 훈련",
        coreKeywords: ["이차부등식 풀이", "인수분해", "수직선 표시", "가장자리 범위"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "두 번째 부등식의 경계값 -a와 a-2의 대소 관계에 따라 a>1, a=1, a<1의 세 가지 경우로 케이스 분류했나요?",
        conceptCode: "[10공수1-02-03]",
        conceptName: "미지수를 포함한 이차부등식의 해와 경우 분류",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "경계값의 대소 관계에 따른 부등식 케이스 분류 결손",
        deficiencyDesc: "(x+a)(x-a+2)<0에서 두 근 -a와 a-2 중 어느 것이 더 큰지 결정되지 않았으므로 대소 관계를 나누어야 한다는 발상을 하지 못했습니다.",
        prescription: "1) 문자를 포함한 이차부등식에서 두 근의 차(-a - (a-2) = 2 - 2a)의 부호 판정법 학습\n2) 경우 나누기를 통한 부등식의 해 구간 설정 훈련",
        coreKeywords: ["미지수 경계값", "두 근의 대소 비교", "케이스 분류"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "a>1인 경우 a-2>3인 영역에서 공통 해의 정수 개수가 (a-1)+(a-5) = 2a-6 = 6임을 세워 a=6을 구했나요?",
        conceptCode: "[10공수1-02-03]",
        conceptName: "연립부등식의 정수 해 개수 세기",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "구간별 정수 개수 카운팅 및 등식 모델링 결손",
        deficiencyDesc: "수직선에서 첫 번째 부등식과 두 번째 부등식이 겹치는 영역의 정수 개수를 정수 좌표 공식(β - α + 1 등)으로 정확하게 식을 세우지 못했습니다.",
        prescription: "1) 수직선에서 제한 구간 [α, β] 내 정수의 개수 세기 공식 숙달\n2) 쪼개진 두 구간의 정수 개수 합산 방정식 수립 훈련",
        coreKeywords: ["정수 해의 개수", "수직선 공통영역", "일차방정식 수립"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "a<1인 경우 a-2 < x < -a에서 정수 개수 식 -2a-2 = 6을 풀어 a=-4를 구하고 두 정수의 합 6 + (-4) = 2를 계산했나요?",
        conceptCode: "[10공수1-02-03]",
        conceptName: "정수 조건 부등식의 정밀 연산 및 합산",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "음수 영역 정수 개수 세기 및 최종 미지수 합산 결손",
        deficiencyDesc: "a<1일 때의 대칭적인 상황을 놓치거나 음수 부호가 포함된 정수 개수 계산에서 부호 실수가 발생하여 a=-4를 찾지 못했습니다.",
        prescription: "1) 음수 및 부호 반전 상황에서의 정수 개수 산출 주의점 확인\n2) 가능한 모든 a값의 합산 검산",
        coreKeywords: ["음수 영역 정수 개수", "부호 주의", "최종 정수 합"]
      }
    ]
  },
  "3-9": {
    id: "3-9",
    examMonth: "3",
    examMonthName: "3월 모의고사",
    questionNumber: 9,
    subject: "공통수학1",
    curriculumDomain: "다항식",
    topicTitle: "나머지정리를 이용한 일차식 나머지 구하기",
    difficulty: "오답률 15위 (35.4%)",
    score: 3,
    questionSummary: "다항식 P(x)를 x+1로 나눈 나머지가 3, x-2로 나눈 나머지가 -3일 때, (x+1)(x-2)로 나눈 나머지 R(x)에 대하여 R(3)을 구하는 나머지정리 기본 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "나머지정리에 의해 P(-1) = 3이고 P(2) = -3임을 식으로 올바르게 표현했나요?",
        conceptCode: "[10공수1-01-02]",
        conceptName: "나머지정리의 정의",
        curriculumSubject: "공통수학1 > 다항식",
        deficiencyTitle: "나머지정리의 기본 정의 적용 결손",
        deficiencyDesc: "다항식 f(x)를 일차식 x-α로 나눈 나머지가 f(α)라는 나머지정리의 가장 핵심적인 정의를 수식으로 옮기지 못했습니다.",
        prescription: "1) 나머지정리 P(α) = R의 정의 및 나눗셈 항등식 유도 복습\n2) 일차식 나눗셈의 함숫값 표현 훈련",
        coreKeywords: ["나머지정리", "함숫값 표현", "일차식 나눗셈"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "이차식 (x+1)(x-2)로 나눈 나머지 R(x)를 일차 이하의 다항식 R(x) = ax + b로 설정했나요?",
        conceptCode: "[10공수1-01-02]",
        conceptName: "나눗셈 정리와 나머지 식의 차수 설정",
        curriculumSubject: "공통수학1 > 다항식",
        deficiencyTitle: "나누는 식의 차수에 따른 나머지 차수 설정 결손",
        deficiencyDesc: "이차식으로 나눌 때 나머지는 반드시 1차 이하(ax+b)라는 다항식 나눗셈의 차수 관계를 숙지하지 못하고 상수로 두거나 식을 세우지 못했습니다.",
        prescription: "1) 다항식 나눗셈에서 (나머지의 차수) < (나누는 식의 차수) 원리 복습\n2) 미정계수 ax+b 설정 훈련",
        coreKeywords: ["나눗셈의 관계식", "나머지의 차수", "미정계수 식 설정"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "P(x) = (x+1)(x-2)Q(x) + ax + b에 x=-1, x=2를 대입하여 -a+b=3과 2a+b=-3을 연립했나요?",
        conceptCode: "[10공수1-01-02]",
        conceptName: "수치대입법을 통한 미정계수 결정",
        curriculumSubject: "공통수학1 > 다항식",
        deficiencyTitle: "항등식의 수치대입법 및 연립일차방정식 수립 결손",
        deficiencyDesc: "몫 Q(x)를 알지 못하므로 몫 앞의 인수가 0이 되는 x=-1과 x=2를 대입하여 a, b에 대한 연립방정식을 만드는 수치대입법의 핵심을 놓쳤습니다.",
        prescription: "1) 항등식에서 몫을 소거하는 수치대입법 원리 이해\n2) 2원 1차 연립방정식 수립 숙달",
        coreKeywords: ["수치대입법", "몫의 소거", "연립일차방정식"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "연립방정식을 풀어 a = -2, b = 1을 구하고 R(x) = -2x + 1에서 R(3) = -6 + 1 = -5를 정확히 계산했나요?",
        conceptCode: "[10공수1-01-01]",
        conceptName: "다항식 함숫값 연산",
        curriculumSubject: "공통수학1 > 다항식",
        deficiencyTitle: "연립방정식 가감법 풀이 및 함숫값 계산 결손",
        deficiencyDesc: "연립방정식을 풀어 미정계수를 구하거나 마지막 R(3)을 계산하는 과정에서 단순 부호 실수가 발생했습니다.",
        prescription: "1) 가감법을 이용한 연립방정식 풀이 점검\n2) 최종 요구하는 식의 값 R(3) 정확한 대입 계산",
        coreKeywords: ["가감법", "미정계수 산출", "최종 함숫값"]
      }
    ]
  },

  // =========================================================================
  // [3] 2026학년도 6월 모의고사 (고2) 오답률 Top 15 문항
  // 범위: 대수 (지수함수와 로그함수, 삼각함수 전 범위)
  // =========================================================================
  "6-30": {
    id: "6-30",
    examMonth: "6",
    examMonthName: "6월 모의고사",
    questionNumber: 30,
    subject: "대수",
    curriculumDomain: "삼각함수",
    topicTitle: "삼각함수와 이차함수의 그래프 합성 추론 및 함숫값 결정",
    difficulty: "오답률 1위 (96.1%)",
    score: 4,
    questionSummary: "구간 [0, a)에서 삼각함수, x ≥ a에서 이차함수로 정의된 g(x)가 x=4에서 최솟값 -1을 갖고 교점 개수 함수 h(n) 조건을 만족할 때 g(10)의 값을 구하는 킬러 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "0 ≤ x < a에서 삼각함수 y = sin((3π/a)x)의 주기가 (2/3)a임을 구하고, 구간 내에서 1.5주기 진동하는 그래프 개형을 그렸나요?",
        conceptCode: "[12대수02-01]",
        conceptName: "삼각함수의 그래프와 주기성",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "삼각함수 주기 공식 및 구간 내 그래프 개형 파악 결손",
        deficiencyDesc: "사인함수 y=sin(Bx)의 주기 공식 2π/|B|를 적용하여 주기가 (2/3)a임을 구하고, 0부터 a까지의 구간에 사인 그래프가 한 주기 반(3개의 산과 골) 들어감을 시각화하지 못했습니다.",
        prescription: "1) 삼각함수 y=sin(bx)의 기본 주기 공식 T = 2π/b 복습\n2) 미지수 a가 포함된 구간에서의 삼각함수 진동 횟수 및 그래프 작도 훈련",
        coreKeywords: ["삼각함수 주기", "사인함수 그래프", "주기성", "구간 내 개형"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "조건 (가)에서 g(x)가 x=4에서 최솟값 -1을 가지므로, x ≥ a에서 아래로 볼록한 이차함수 f(x)-f(a)의 꼭짓점의 x좌표가 4이고 a < 4임을 이끌어 냈나요?",
        conceptCode: "[10공수1-02-02]",
        conceptName: "이차함수의 최솟값과 대칭축",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "이차함수의 꼭짓점 위치와 구간 경계 조건 추론 결손",
        deficiencyDesc: "최솟값 -1이 삼각함수 구간에서 발생할 수 없는 모순(조건 나 불만족)을 밝히고, 이차함수의 꼭짓점 x=4에서 최솟값 -1이 나와야 하므로 구간 경계 a가 4보다 작아야 함을 분류하지 못했습니다.",
        prescription: "1) 구간별 정의 함수에서 최솟값 발생 위치(경계 vs 꼭짓점) 케이스 분류 학습\n2) 이차함수의 대칭축과 최솟값 조건 연계 훈련",
        coreKeywords: ["이차함수 꼭짓점", "구간별 최솟값", "대칭축 x=4", "경계 조건 a < 4"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "교점 개수 함수 h(n)=1을 만족하는 자연수가 1개뿐이라는 조건으로부터 삼각함수 극대선 y=1과의 접점 x=(5/6)a가 자연수가 됨을 통해 a = 18/5임을 확정했나요?",
        conceptCode: "[12대수02-01]",
        conceptName: "삼각함수 그래프와 방정식의 실근 개수",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "상수함수와의 교점 개수 조건 해석 및 미지수 결정 결손",
        deficiencyDesc: "자연수 n에 대해 g(x)=g(n)의 교점 개수 h(n)을 추적할 때, 극댓값 y=1 또는 극솟값 y=-1과 만나는 접점의 위치가 자연수가 되는 조건을 정수론적으로 좁혀내지 못했습니다.",
        prescription: "1) 삼각함수 극대/극소 수평선과의 접점 x좌표 구하기 연습\n2) 교점 개수 함수 h(n)의 조건 분석 및 자연수 조건 대입 훈련",
        coreKeywords: ["교점 개수 함수", "삼각함수 극댓값", "자연수 조건", "미지수 a 결정"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "이차함수 식 g(x) = (25/4)(x-4)² - 1을 완성하고, x=10을 대입하여 g(10) = (25/4)×36 - 1 = 224를 정확히 계산했나요?",
        conceptCode: "[12대수02-01]",
        conceptName: "구간별 함수의 식 완성 및 함숫값 계산",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "이차함수 최고차항 계수 결정 및 최종 함숫값 계산 결손",
        deficiencyDesc: "그래프가 점 (18/5, 0)을 지난다는 연속 조건을 대입하여 최고차항 계수 b=25/4를 구하고 최종 함숫값을 산출하는 마무리 대수 계산에서 오류가 발생했습니다.",
        prescription: "1) 꼭짓점과 한 점이 주어진 이차함수의 식 표준형 세우기 복습\n2) 분수 계수 거듭제곱 연산 및 함숫값 검산",
        coreKeywords: ["이차함수 식 완성", "최고차항 계수", "최종 함숫값 계산"]
      }
    ]
  },
  "6-29": {
    id: "6-29",
    examMonth: "6",
    examMonthName: "6월 모의고사",
    questionNumber: 29,
    subject: "대수",
    curriculumDomain: "지수함수와 로그함수",
    topicTitle: "지수함수와 로그함수의 역함수 기하적 관계 및 넓이",
    difficulty: "오답률 2위 (91.4%)",
    score: 4,
    questionSummary: "지수함수 y=a^x+b와 로그함수 y=log_a(x-b)의 역함수 관계 및 선분 비 1:3:3을 이용하여 점의 좌표를 구하고 20(a³+b)=210을 계산하는 최고난도 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "함수 y = a^x + b와 y = log_a(x-b)가 직선 y = x에 대하여 대칭인 역함수 관계임을 확인했나요?",
        conceptCode: "[12대수01-04]",
        conceptName: "지수함수와 로그함수의 역함수 관계",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "지수함수와 로그함수의 역함수(직선 y=x 대칭) 파악 결손",
        deficiencyDesc: "지수함수를 x축으로 0, y축으로 b 평행이동한 것과 로그함수를 x축으로 b, y축으로 0 평행이동한 것이 역함수 관계(y=x 대칭)임을 기하학적으로 연계하지 못했습니다.",
        prescription: "1) y=a^x와 y=log_a x의 역함수 성질 및 평행이동된 식의 역함수 유도 연습\n2) 직선 y=x에 대한 대칭점 좌표 (x, y) ↔ (y, x) 복습",
        coreKeywords: ["지수함수와 로그함수", "역함수 관계", "직선 y=x 대칭"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "기울기가 -1인 직선 AB의 성질과 선분 비 AB:BC:CD = 1:3:3을 활용하여 점 C의 x좌표 k에 대해 B, A의 x좌표를 각각 2k, (7/3)k로 설정했나요?",
        conceptCode: "[10공수2-01-01]",
        conceptName: "선분의 내분점과 직선의 기울기",
        curriculumSubject: "공통수학2 > 도형의 방정식",
        deficiencyTitle: "선분 비율 조건의 좌표 매개변수화 모델링 결손",
        deficiencyDesc: "기울기가 -1인 직선 위의 점들은 x좌표의 차와 y좌표의 차가 1:1이라는 성질과 주어진 선분의 비 1:3:3을 단일 매개변수 k로 좌표화하는 대수적 변환이 부족했습니다.",
        prescription: "1) 기울기 m=-1인 직선에서 x변화량과 y변화량의 기하학적 비(1:1:√2) 활용 훈련\n2) 선분 비례 조건을 매개변수 좌표로 설정하는 연습",
        coreKeywords: ["기울기 -1", "선분의 비", "매개변수 좌표 설정"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "두 점 A, B를 지나는 직선의 기울기가 -1임을 연립하여 k = 3/2 및 a^(2/3) = 3으로부터 a³ = 9를 유도했나요?",
        conceptCode: "[12대수01-02]",
        conceptName: "지수법칙과 거듭제곱 계산",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "기울기 조건 연립 및 유리수 지수 거듭제곱 계산 결손",
        deficiencyDesc: "A와 B의 좌표를 기울기 공식 (y2-y1)/(x2-x1) = -1에 대입하여 k값을 구하고, a^k = 2k 관계식에서 a^(3/2) = 3을 거듭제곱하여 a³을 도출하는 지수 연산이 막혔습니다.",
        prescription: "1) 두 점 사이의 기울기 공식 대입 연산 훈련\n2) 지수법칙 (a^(p/q))^n = a^(pn/q) 거듭제곱 식 변형 숙달",
        coreKeywords: ["직선의 기울기", "지수방정식", "유리수 지수", "거듭제곱"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "삼각형 OBC의 넓이 9/2로부터 원점과 직선 사이 거리 d = 3√2를 구하고, b = 3/2를 얻어 20(a³+b) = 20(9 + 1.5) = 210을 계산했나요?",
        conceptCode: "[10공수2-01-02]",
        conceptName: "점과 직선 사이의 거리 및 도형의 넓이",
        curriculumSubject: "공통수학2 > 도형의 방정식",
        deficiencyTitle: "삼각형 넓이 공식 및 직선의 절편 결정 결손",
        deficiencyDesc: "밑변 BC의 길이와 삼각형 넓이를 이용해 직선 AB의 절편을 구하고 b값을 산출하는 마지막 기하·대수 융합 연산에서 실수가 발생했습니다.",
        prescription: "1) 점과 직선 사이의 거리를 이용한 삼각형 넓이 구하기 복습\n2) 직선의 방정식 완성 및 y절편 계산 검산",
        coreKeywords: ["삼각형 넓이", "점과 직선 사이 거리", "y절편", "최종 정답 산출"]
      }
    ]
  },
  "6-28": {
    id: "6-28",
    examMonth: "6",
    examMonthName: "6월 모의고사",
    questionNumber: 28,
    subject: "대수",
    curriculumDomain: "삼각함수",
    topicTitle: "원에 내접하는 사각형과 코사인법칙 및 삼각형의 넓이",
    difficulty: "오답률 3위 (86.8%)",
    score: 4,
    questionSummary: "원에 내접하는 사각형에서 삼각형 ABC의 코사인값, 직각삼각형 성질, 삼각형 DCE의 넓이를 코사인법칙과 연립하여 60k² = 48을 구하는 도형 킬러 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "삼각형 ABC의 세 변의 길이(5, 5, 2√5)로부터 코사인법칙을 적용하여 cos(∠ACB) = 3/5임을 구하고 선분 CD = 3을 이끌어 냈나요?",
        conceptCode: "[12대수02-03]",
        conceptName: "코사인법칙의 활용",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "삼각형 세 변이 주어졌을 때 코사인법칙 적용 결손",
        deficiencyDesc: "삼각형의 세 변의 길이가 주어졌을 때 코사인법칙의 변형 공식 cos C = (a²+b²-c²)/(2ab)를 바르게 적용하지 못하거나 직각삼각형 BDC에서 빗변과 밑변 관계(CD = 5cosθ = 3)를 연결하지 못했습니다.",
        prescription: "1) 세 변의 길이로부터 각의 코사인 구하는 공식 암기 및 숙달\n2) 직각삼각형에서의 삼각비(밑변 = 빗변 × cosθ) 즉각적 변환 연습",
        coreKeywords: ["코사인법칙 변형", "세 변의 길이", "직각삼각형 삼각비", "선분의 길이"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "원에 내접하는 사각형의 성질(대각의 합은 π)을 이용하여 ∠DEC = π/2 + θ임을 구하고 sin(π/2 + θ) = cos θ = 3/5임을 도출했나요?",
        conceptCode: "[12대수02-02]",
        conceptName: "삼각함수의 각 변환 공식",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "원내접 사각형 대각의 성질 및 삼각함수 각 변환 결손",
        deficiencyDesc: "원내접 사각형의 마주보는 두 각의 합이 180°(π)라는 중등 기하 핵심 정리를 놓쳤거나, sin(π/2 + θ) = cos θ로 변환하는 삼각함수 각 변환 공식을 혼동했습니다.",
        prescription: "1) 원에 내접하는 사각형의 대각의 합 180° 성질 복습\n2) 삼각함수 π/2 ± θ 각 변환 공식(여각 공식) 부호 및 함수 변경 규칙 완벽 정리",
        coreKeywords: ["원내접 사각형", "대각의 합 π", "각 변환 공식", "sin(π/2+θ) = cosθ"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "삼각형 DCE의 넓이 공식 S = (1/2)·DE·CE·sin(π/2 + θ) = 3/5에서 선분 DE = 2/k임을 세웠나요?",
        conceptCode: "[12대수02-03]",
        conceptName: "삼각형의 넓이 공식",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "삼각형 넓이 공식 적용 및 미지수 선분 표현 결손",
        deficiencyDesc: "두 변과 그 끼인각이 주어졌을 때의 넓이 공식 S = (1/2)ab sin C에 주어진 값들을 대입하여 선분 DE의 길이를 k의 식으로 정리하는 과정에서 오류가 있었습니다.",
        prescription: "1) 두 변과 끼인각을 이용한 삼각형 넓이 공식 숙달\n2) 비례식 및 미지수 분수식 정리 연습",
        coreKeywords: ["삼각형의 넓이", "두 변과 끼인각", "선분의 길이 표현"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "삼각형 DCE에서 코사인법칙을 다시 적용하여 k²에 대한 이차방정식을 풀고 k² = 4/5로부터 60k² = 48을 정확히 계산했나요?",
        conceptCode: "[12대수02-03]",
        conceptName: "코사인법칙과 이차방정식 풀이",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "도형 내 코사인법칙 2차 적용 및 치환 이차방정식 풀이 결손",
        deficiencyDesc: "삼각형 DCE의 세 변(3, k, 2/k)과 끼인각에 대해 코사인법칙을 세운 후, k²=X로 치환하여 이차방정식을 풀고 최종 답을 도출하는 대수적 마무리가 부족했습니다.",
        prescription: "1) 하나의 도형 문제에서 코사인법칙을 여러 삼각형에 유기적으로 적용하는 훈련\n2) 분수식 형태의 코사인법칙 정리 및 치환 방정식 풀이 연습",
        coreKeywords: ["코사인법칙 연립", "치환 이차방정식", "최종 정답 산출"]
      }
    ]
  },
  "6-21": {
    id: "6-21",
    examMonth: "6",
    examMonthName: "6월 모의고사",
    questionNumber: 21,
    subject: "대수",
    curriculumDomain: "지수함수와 로그함수",
    topicTitle: "지수·로그함수의 절댓값 그래프와 직선의 교점 개수",
    difficulty: "오답률 4위 (80.5%)",
    score: 4,
    questionSummary: "함수 y = |f(x) - k|의 그래프와 직선 y = 2p, y = p가 만나는 점의 개수가 각각 2개, 3개가 되도록 하는 모든 양수 k의 범위를 구하여 α+β+γ=8을 계산하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "함수 f(x)를 y축 방향으로 -k만큼 평행이동한 뒤 x축 아래를 꺾어 올린 y = |f(x) - k|의 점근선(y = k)과 꺾인 점을 파악했나요?",
        conceptCode: "[12대수01-05]",
        conceptName: "지수·로그함수의 그래프와 평행이동",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "절댓값 접어 올린 그래프의 점근선 및 첨점 파악 결손",
        deficiencyDesc: "y = |f(x) - k|에서 원래 점근선 y=0(또는 y=-4)이 x축 대칭에 의해 y=k로 변하고 x축과 만나는 점에서 꺾여 올라간다는 그래프 개형을 정확히 작도하지 못했습니다.",
        prescription: "1) y=|f(x)| 꺾어 올리기 기하학적 의미 복습\n2) 평행이동된 지수·로그함수의 점근선 이동 연습",
        coreKeywords: ["지수함수 평행이동", "절댓값 함수", "새로운 점근선", "꺾인 점"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "양수 k의 범위를 네 구간(0<k<2, k=2, 2<k<4, k≥4)으로 나누어 그래프의 극점(4-k)과 점근선(k)의 대소 관계를 케이스 분류했나요?",
        conceptCode: "[12대수01-05]",
        conceptName: "그래프의 개형과 매개변수 케이스 분류",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "극값과 점근선의 상대적 높이 비교에 따른 경우 분류 결손",
        deficiencyDesc: "상수함수 y=p, y=2p와의 교점 개수는 꺾여 올라간 봉우리의 높이(4-k)와 점근선(k)의 높이 비교에 따라 달라지는데, k=2와 k=4를 기준으로 경우를 체계적으로 분류하지 못했습니다.",
        prescription: "1) 매개변수 변화에 따른 그래프 개형 변화(임계점 k=2, 4 탐색) 훈련\n2) 경우 나누기를 통한 그래프 개형 분석 숙달",
        coreKeywords: ["케이스 분류", "봉우리 높이", "점근선 높이", "임계값"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "교점 개수가 각각 2개, 3개가 성립하기 위한 부등식 2p = 4-k 및 p ≥ k를 연립하여 0 < k ≤ 4/3와 8/3 < k < 4를 도출했나요?",
        conceptCode: "[10공수1-02-03]",
        conceptName: "연립부등식과 매개변수 범위 결정",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "교점 개수 조건의 등식·부등식 연립 변환 결손",
        deficiencyDesc: "교점이 3개가 되려면 y=p가 점근선 아래 또는 봉우리와 접해야 하고, 교점이 2개가 되려면 y=2p가 특정 선에 접해야 한다는 기하 조건을 대수적 부등식으로 변환하지 못했습니다.",
        prescription: "1) 수평선과의 교점 개수(접함=중근, 교차=2실근) 판정법 복습\n2) 매개변수 p 소거를 통한 k의 부등식 범위 도출 훈련",
        coreKeywords: ["교점 개수 조건", "연립부등식", "매개변수 소거", "범위 도출"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "구한 범위의 경계값 α = 4/3, β = 8/3, γ = 4를 찾아 α+β+γ = 4/3 + 8/3 + 4 = 8을 오차 없이 계산했나요?",
        conceptCode: "[10공수1-01-01]",
        conceptName: "유리수의 덧셈 연산",
        curriculumSubject: "공통수학1 > 다항식",
        deficiencyTitle: "최종 경계값 취합 및 유리수 덧셈 산술 결손",
        deficiencyDesc: "범위는 올바르게 찾았으나 경계값들을 더하는 최종 산술 계산에서 실수를 하거나 기호를 잘못 읽어 오답을 냈습니다.",
        prescription: "1) 구간의 상한/하한 경계값 확인 루틴 점검\n2) 유리수 덧셈 검산",
        coreKeywords: ["경계값 취합", "유리수 덧셈", "최종 정답 산출"]
      }
    ]
  },
  "6-27": {
    id: "6-27",
    examMonth: "6",
    examMonthName: "6월 모의고사",
    questionNumber: 27,
    subject: "대수",
    curriculumDomain: "지수함수와 로그함수",
    topicTitle: "로그함수 그래프의 평행이동과 지수부등식의 최솟값",
    difficulty: "오답률 5위 (75.2%)",
    score: 4,
    questionSummary: "곡선 y=log_2 x를 평행이동한 y=log_2(x-a) 위의 점들로 만들어지는 선분의 길이 조건에서 f(a)/a ≤ 63/64를 만족하는 a의 최솟값 6을 구하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "y = log_2(x-a)가 y = log_2 x를 x축으로 a만큼 평행이동한 것이므로, 같은 y값을 갖는 두 곡선 사이의 수평 거리가 항상 a(선분 BC = a)임을 파악했나요?",
        conceptCode: "[12대수01-05]",
        conceptName: "로그함수의 그래프와 평행이동",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "함수 그래프의 x축 평행이동 거리 보존 성질 결손",
        deficiencyDesc: "x축 평행이동 f(x-a)는 그래프 위의 모든 점을 x축 방향으로 a만큼 이동시키므로 수평 선분의 길이가 항상 a라는 기본 기하학적 성질을 놓쳤습니다.",
        prescription: "1) 함수의 평행이동의 기하학적 의미(모든 점의 수평 이동 거리 = a) 복습\n2) 수평선과 두 평행이동 곡선의 교점 거리 연습",
        coreKeywords: ["로그함수 평행이동", "수평 거리 a", "선분의 길이"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "두 점 A(t, log_2(t-a)), B(t, log_2 t)의 수직 거리 AB = log_2 t - log_2(t-a) = a 식을 세웠나요?",
        conceptCode: "[12대수01-03]",
        conceptName: "로그의 정의와 성질",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "수직 선분의 길이와 로그 뺄셈식 구성 결손",
        deficiencyDesc: "동일한 x좌표 t를 갖는 두 점의 y좌표 차를 로그 뺄셈 log_2(t / (t-a))로 표현하고 이를 선분 BC의 길이 a와 같다고 놓는 식을 세우지 못했습니다.",
        prescription: "1) 좌표평면에서 수직 선분의 길이(y2 - y1) 표현법 숙달\n2) 로그의 뺄셈 공식 log a - log b = log(a/b) 복습",
        coreKeywords: ["수직 선분의 길이", "로그의 뺄셈", "진수의 나눗셈"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "로그방정식 t / (t-a) = 2^a를 t에 관하여 정리하여 t = f(a) = a·2^a / (2^a - 1)임을 유도했나요?",
        conceptCode: "[12대수01-06]",
        conceptName: "지수·로그 방정식의 풀이",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "유리식을 미지수 t에 대해 정리하는 식 변형 결손",
        deficiencyDesc: "로그를 지수 표현으로 바꾼 뒤 t = 2^a(t-a)에서 t(2^a - 1) = a·2^a로 묶어 t를 a에 대한 식으로 정리하는 기본 대수 능력이 미흡했습니다.",
        prescription: "1) 로그식 ↔ 지수식 상호 변환(log_a x = y ⇔ a^y = x) 숙달\n2) 특정 문자에 대해 식 정리하는 일차 유리방정식 풀이 훈련",
        coreKeywords: ["로그방정식 풀이", "지수 변환", "문자에 대한 식 정리"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "f(a)/a = 2^a / (2^a - 1) ≤ 63/64를 역수 또는 대각선 곱셈으로 풀어 2^a ≥ 64로부터 a의 최솟값 6을 도출했나요?",
        conceptCode: "[12대수01-06]",
        conceptName: "지수부등식의 풀이",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "분수형 지수부등식 풀이 및 최솟값 결정 결손",
        deficiencyDesc: "부등식을 정리하여 64·2^a ≤ 63·2^a - 63(또는 역수 관계)을 풀어 2^a ≥ 2^6임을 이끌어내고 자연수 최솟값을 찾는 부등식 해결력이 부족했습니다.",
        prescription: "1) 지수부등식 밑을 통일하여 지수끼리 대소 비교하는 원리 복습\n2) 2의 거듭제곱(2^6 = 64) 암기 및 분수 부등식 풀이 훈련",
        coreKeywords: ["지수부등식", "밑의 통일", "자연수 최솟값"]
      }
    ]
  },
  "6-20": {
    id: "6-20",
    examMonth: "6",
    examMonthName: "6월 모의고사",
    questionNumber: 20,
    subject: "대수",
    curriculumDomain: "삼각함수",
    topicTitle: "탄젠트함수의 그래프 주기성과 도형의 닮음 및 넓이 비",
    difficulty: "오답률 6위 (71.5%)",
    score: 4,
    questionSummary: "구간별 탄젠트함수 f(x)의 그래프와 점 A, C에 대하여 두 삼각형의 넓이 비 7:3 및 닮음비를 이용하여 a+b = 48π/13을 구하는 삼각함수·도형 융합 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "탄젠트함수 tan(x/4)의 주기 4π를 파악하고, 점 C의 x좌표 4π-a에 대한 y좌표가 2tan(π - a/4) = -2tan(a/4)임을 각 변환으로 구했나요?",
        conceptCode: "[12대수02-01]",
        conceptName: "탄젠트함수의 그래프와 주기 및 각 변환",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "탄젠트함수 주기 공식 및 tan(π-θ) 각 변환 결손",
        deficiencyDesc: "탄젠트의 주기 π/(1/4) = 4π를 놓치거나, tan(π - θ) = -tan θ라는 탄젠트의 기함수/보각 공식을 올바르게 적용하지 못했습니다.",
        prescription: "1) 탄젠트함수의 주기 공식 T = π/b 복습\n2) 탄젠트의 각 변환 공식 tan(π-θ) = -tan θ 완벽 암기",
        coreKeywords: ["탄젠트 주기", "주기 4π", "탄젠트 각 변환", "보각 공식"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "삼각형 AOB와 BCP의 높이 비 4tan(a/4) : 2tan(a/4) = 2:1과 주어진 넓이 비 7:3을 이용하여 밑변의 비로부터 b = 28π/13임을 구했나요?",
        conceptCode: "[10공수2-01-01]",
        conceptName: "평면도형의 넓이와 비례식",
        curriculumSubject: "공통수학2 > 도형의 방정식",
        deficiencyTitle: "삼각형 넓이 비에서 밑변 비례식 유도 결손",
        deficiencyDesc: "높이의 비가 2:1이므로 넓이의 비 (1/2·b·h1) : (1/2·(4π-b)·h2) = 7:3 비례식을 세워 일차방정식을 풀어내는 대수적 모델링이 미흡했습니다.",
        prescription: "1) 삼각형 넓이 비 = (밑변 비) × (높이 비) 관계식 훈련\n2) 외항의 곱과 내항의 곱을 이용한 비례식 풀이 연습",
        coreKeywords: ["삼각형 넓이 비", "높이 비 2:1", "비례식 풀이"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "직각삼각형 ADB와 CEB의 닮음비가 높이 비와 같은 2:1임을 이용하여 x축 선분의 비 (28π/13 - a) : ((4π-a) - 28π/13) = 2:1로부터 a = 20π/13을 도출했나요?",
        conceptCode: "[10공수2-01-01]",
        conceptName: "도형의 닮음비와 선분의 길이",
        curriculumSubject: "공통수학2 > 도형의 방정식",
        deficiencyTitle: "직각삼각형 닮음비를 이용한 x좌표 관계식 수립 결손",
        deficiencyDesc: "수선의 발을 내렸을 때 생기는 두 직각삼각형이 AA 닮음임을 파악하고 밑변의 길이 비가 2:1임을 이용해 a에 대한 일차방정식을 세우는 기하 추론이 부족했습니다.",
        prescription: "1) 직각삼각형의 닮음 조건(AA 닮음) 및 대응변 길이 비 복습\n2) 좌표평면에서 두 점 사이의 x좌표 거리 표현 훈련",
        coreKeywords: ["직각삼각형 닮음", "닮음비 2:1", "x좌표 거리 비"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "구한 두 값 a = 20π/13과 b = 28π/13을 더하여 a+b = 48π/13을 정확히 계산했나요?",
        conceptCode: "[12대수02-01]",
        conceptName: "각의 연산과 유리수 덧셈",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "최종 분수 덧셈 연산 결손",
        deficiencyDesc: "a와 b를 모두 구한 후 동류항 π의 분수 덧셈 연산에서 단순 착오가 발생했습니다.",
        prescription: "1) 분모가 같은 분수의 덧셈 연산 검산\n2) 문제의 최종 요구값(a+b) 재확인",
        coreKeywords: ["분수 덧셈", "최종 정답 산출"]
      }
    ]
  },
  "6-17": {
    id: "6-17",
    examMonth: "6",
    examMonthName: "6월 모의고사",
    questionNumber: 17,
    subject: "대수",
    curriculumDomain: "삼각함수",
    topicTitle: "단위원 위에서의 삼각함수의 정의와 사다리꼴의 넓이",
    difficulty: "오답률 7위 (54.3%)",
    score: 4,
    questionSummary: "원 x²+y²=4 위의 두 점 A, B에 대하여 β = π/2 + α이고 cos α·sin β = 1/5일 때 네 점 A, B, C, D로 이루어진 사다리꼴의 넓이 18/5를 구하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "반지름 r=2인 원에서 현 AB = 2√2이므로 삼각형 OAB가 직각이등변삼각형(중심각 π/2)임을 알고 β = π/2 + α임을 확인했나요?",
        conceptCode: "[12대수02-01]",
        conceptName: "삼각함수의 정의와 중심각 호도법",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "원 위의 현의 길이로부터 중심각 π/2 도출 결손",
        deficiencyDesc: "반지름 2, 2와 현의 길이 2√2 사이의 1:1:√2 피타고라스 비를 보고 중심각이 직각(90° = π/2)임을 기하학적으로 즉시 간파하지 못했습니다.",
        prescription: "1) 원에서 반지름과 현의 길이 삼각비(1:1:√2 ⇒ 90°, 1:1:1 ⇒ 60°) 숙달\n2) 두 동경 사이의 각과 호도법 관계 복습",
        coreKeywords: ["직각이등변삼각형", "중심각 π/2", "동경의 회전", "β = π/2 + α"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "sin β = sin(π/2 + α) = cos α임을 각 변환으로 바꾸어 cos²α = 1/5로부터 cos α = √5/5, sin α = 2√5/5를 구했나요?",
        conceptCode: "[12대수02-02]",
        conceptName: "삼각함수의 상호 관계와 각 변환",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "여각 공식 및 sin²θ + cos²θ = 1 연립 결손",
        deficiencyDesc: "sin(π/2 + α) = cos α 공식을 적용하지 못해 조건식 cos α·sin β = 1/5를 cos²α = 1/5로 단순화하지 못했습니다.",
        prescription: "1) sin(π/2 + θ) = cos θ 각 변환 공식 숙달\n2) 삼각함수 기본 항등식 sin²θ + cos²θ = 1을 이용한 사인값 산출 연습",
        coreKeywords: ["각 변환", "sin(π/2+α) = cosα", "sin²θ+cos²θ=1"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "삼각함수의 정의 (x = r cos θ, y = r sin θ)를 이용하여 점 A, B의 좌표를 각각 (2cos α, 2sin α), (-2sin α, 2cos α)로 표현했나요?",
        conceptCode: "[12대수02-01]",
        conceptName: "삼각함수의 정의를 이용한 좌표 표현",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "원 위의 점의 삼각함수 매개변수 좌표화 결손",
        deficiencyDesc: "원 위의 임의의 점을 (r cos θ, r sin θ)로 나타내는 고등학교 삼각함수의 가장 핵심적인 정의를 좌표평면에 적용하지 못했습니다.",
        prescription: "1) 삼각함수의 좌표 정의 (cos θ = x/r, sin θ = y/r) 복습\n2) 원 위의 점 좌표를 삼각비로 나타내는 연습",
        coreKeywords: ["삼각함수의 정의", "좌표 표현", "(r cosθ, r sinθ)"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "사다리꼴 ABDC의 넓이 공식 S = (1/2)·(AC + BD)·CD에 각 선분의 길이를 대입하여 18/5를 정확히 계산했나요?",
        conceptCode: "[10공수2-01-01]",
        conceptName: "평면좌표에서 사다리꼴의 넓이 계산",
        curriculumSubject: "공통수학2 > 도형의 방정식",
        deficiencyTitle: "사다리꼴 넓이 공식 대입 및 무리수 연산 결손",
        deficiencyDesc: "윗변 AC = 4√5/5, 아랫변 BD = 2√5/5, 높이 CD = 6√5/5를 구했으나 사다리꼴 넓이 공식 계산에서 분수 연산 실수가 발생했습니다.",
        prescription: "1) 사다리꼴 넓이 공식 (윗변+아랫변)×높이÷2 복습\n2) 무리수 곱셈과 분수 약분 검산",
        coreKeywords: ["사다리꼴 넓이", "무리수 연산", "최종 정답 산출"]
      }
    ]
  },
  "6-18": {
    id: "6-18",
    examMonth: "6",
    examMonthName: "6월 모의고사",
    questionNumber: 18,
    subject: "대수",
    curriculumDomain: "삼각함수",
    topicTitle: "사인법칙과 코사인법칙을 활용한 선분의 길이 추론",
    difficulty: "오답률 8위 (54.0%)",
    score: 4,
    questionSummary: "원의 성질로부터 원주각의 관계를 파악하고 외접원 반지름과 사인법칙, 코사인법칙을 연계하여 선분의 길이 QA²=24/19 및 p·q·r²을 구하는 빈칸/추론 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "원의 원주각 성질로부터 ∠APB = θ1 + θ2이고 ∠AQB = π - (θ1 + θ2)임을 기하학적으로 유도했나요?",
        conceptCode: "[12대수02-02]",
        conceptName: "원주각의 성질과 삼각함수의 각",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "접현각 및 원주각 성질을 이용한 삼각형 내각 추론 결손",
        deficiencyDesc: "접선과 현이 이루는 각(접현각)의 성질 ∠APQ = ∠QAB를 삼각형 외각 및 내각의 합 공식에 연결하여 두 각의 합으로 표현하지 못했습니다.",
        prescription: "1) 중등 기하 원주각의 성질 및 접현각 정리 복습\n2) 삼각형의 외각의 성질(한 외각 = 이웃하지 않는 두 내각의 합) 훈련",
        coreKeywords: ["원주각 성질", "접현각", "외각의 성질", "각의 합 표현"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "삼각형 PAB에서 사인법칙 2 / sin(θ1+θ2) = 2R을 적용하여 sin(θ1+θ2) = 5√3/9를 올바르게 구했나요?",
        conceptCode: "[12대수02-03]",
        conceptName: "사인법칙의 기본 적용",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "외접원의 반지름과 사인법칙 공식 적용 결손",
        deficiencyDesc: "외접원의 반지름 R=3√3/5가 주어졌을 때 공식 a / sin A = 2R에 대입하여 마주보는 각의 사인값을 역산하는 기본 계산이 미숙했습니다.",
        prescription: "1) 사인법칙 공식 a/sin A = b/sin B = c/sin C = 2R 완벽 암기\n2) R이 주어졌을 때 sin값 구하는 역산 연습",
        coreKeywords: ["사인법칙", "외접원의 반지름 R", "대변과 대각"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "삼각형 QAB에서 사인비 조건 sin θ1 : sin θ2 = √3 : √2를 사인법칙으로 변환하여 QB = (√6/2)QA임을 이끌어 냈나요?",
        conceptCode: "[12대수02-03]",
        conceptName: "사인법칙과 대변의 길이의 비",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "사인값의 비와 대변의 길이 비 일치 원리 결손",
        deficiencyDesc: "한 삼각형에서 '변의 길이의 비 = 마주보는 각의 사인값의 비'(a:b = sin A : sin B)라는 사인법칙의 핵심 정리를 활용해 변의 비를 식으로 세우지 못했습니다.",
        prescription: "1) 사인법칙의 변형 공식 a:b:c = sin A : sin B : sin C 숙달\n2) 비례식을 통한 선분 길이의 단일 미지수 표현 연습",
        coreKeywords: ["사인비와 변의 비", "대변의 길이 비", "미지수 표현"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "삼각형 QAB에 코사인법칙을 적용하여 QA² = 24/19를 구하고 p·q·r² = 20√2/19를 정확히 계산했나요?",
        conceptCode: "[12대수02-03]",
        conceptName: "코사인법칙을 이용한 변의 길이 계산",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "코사인법칙 연립 및 무리수 식의 값 계산 결손",
        deficiencyDesc: "cos(∠AQB) = -√(1 - sin²(θ1+θ2))를 구하고 코사인법칙에 대입하여 QA²을 도출하는 복합 연산 과정에서 부호나 약분 실수가 있었습니다.",
        prescription: "1) 둔각의 코사인값 부호(cos(π-θ) = -cos θ < 0) 주의\n2) 코사인법칙 식 전개 및 약분 집중 훈련",
        coreKeywords: ["코사인법칙", "둔각의 코사인 부호", "최종 식의 값 계산"]
      }
    ]
  },
  "6-19": {
    id: "6-19",
    examMonth: "6",
    examMonthName: "6월 모의고사",
    questionNumber: 19,
    subject: "대수",
    curriculumDomain: "지수함수와 로그함수",
    topicTitle: "거듭제곱근의 정의와 로그식이 정수가 되는 조건",
    difficulty: "오답률 9위 (44.5%)",
    score: 4,
    questionSummary: "실수 n-√401의 n제곱근 중 실수인 것의 개수 f(n)에 대하여 로그식이 정수가 되도록 하는 모든 자연수 n의 값의 합 117을 구하는 추론 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "20 < √401 < 21임을 파악하여 2 ≤ n ≤ 20일 때 n-√401 < 0이고 21 ≤ n ≤ 50일 때 n-√401 > 0임을 부호 판정했나요?",
        conceptCode: "[12대수01-01]",
        conceptName: "거듭제곱근의 정의와 밑의 부호 판정",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "제곱근 무리수의 범위 추정 및 차의 부호 판정 결손",
        deficiencyDesc: "20² = 400, 21² = 441로부터 √401이 약 20.02...임을 어림하여 n값에 따른 (n - √401)의 양수/음수 분기점을 명확히 나누지 못했습니다.",
        prescription: "1) 연속하는 두 자연수의 제곱을 이용한 제곱근 어림값(정수 부분) 판정법 복습\n2) 실수의 부호 조건 분기 훈련",
        coreKeywords: ["제곱근 어림", "20 < √401 < 21", "부호 분기점"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "n이 홀수일 때 실수의 부호와 상관없이 n제곱근 중 실수의 개수는 항상 1(f(n)=1)임을 파악하고 n=15를 도출했나요?",
        conceptCode: "[12대수01-01]",
        conceptName: "홀수 제곱근의 실수 개수",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "홀수 거듭제곱근의 실근 유일성 개념 결손",
        deficiencyDesc: "n이 홀수이면 a의 부호에 관계없이 a의 n제곱근 중 실수는 오직 1개 존재한다는 거듭제곱근의 핵심 성질을 숙지하지 못했습니다.",
        prescription: "1) y=xⁿ (n은 홀수) 그래프와 수평선의 교점은 항상 1개라는 원리 복습\n2) 홀수 제곱근 개수 공식 f(n)=1 암기",
        coreKeywords: ["홀수 제곱근", "실근의 개수 1개", "로그 정수 조건"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "n이 짝수일 때 음수의 짝수제곱근 f(n)=0에서 n=10, 20을, 양수의 짝수제곱근 f(n)=2에서 n=24, 48을 도출했나요?",
        conceptCode: "[12대수01-01]",
        conceptName: "짝수 제곱근의 실수 개수와 로그 정수 조건",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "짝수 거듭제곱근의 부호별 실근 개수(0개, 2개) 분류 결손",
        deficiencyDesc: "음수의 짝수제곱근은 존재하지 않고(0개), 양수의 짝수제곱근은 양/음 2개 존재한다는 기본 개념을 각각의 로그식에 대입하여 n을 찾지 못했습니다.",
        prescription: "1) y=xⁿ (n은 짝수) 그래프에서 a>0일 때 2개, a<0일 때 0개 원리 복습\n2) 로그의 진수가 2의 거듭제곱이 되는 정수 조건 연립 연습",
        coreKeywords: ["짝수 제곱근", "음수일 때 0개", "양수일 때 2개", "로그 정수해"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "찾아낸 모든 n의 값 15, 10, 20, 24, 48을 빠짐없이 더하여 최종 합 117을 정확히 계산했나요?",
        conceptCode: "[12대수01-03]",
        conceptName: "자연수 해의 취합 및 합산",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "케이스별 자연수 해 취합 및 합산 결손",
        deficiencyDesc: "앞선 세 케이스에서 구한 자연수들을 하나라도 누락하거나 범위 제한(2 ≤ n ≤ 50)을 벗어난 값을 포함하여 오답이 발생했습니다.",
        prescription: "1) 분류별 결과값을 체크리스트 형태로 취합하는 습관 형성\n2) 문제의 자연수 범위 조건 재검토",
        coreKeywords: ["자연수 해 취합", "범위 검증", "최종 합산 117"]
      }
    ]
  },
  "6-26": {
    id: "6-26",
    examMonth: "6",
    examMonthName: "6월 모의고사",
    questionNumber: 26,
    subject: "대수",
    curriculumDomain: "삼각함수",
    topicTitle: "삼각함수의 주기와 최대·최소를 이용한 함숫값 계산",
    difficulty: "오답률 10위 (42.0%)",
    score: 4,
    questionSummary: "주기가 3π이고 최댓값이 18인 삼각함수 f(x) = a cos(bx) + 10 - a (a<0)에 대하여 f(π/2) = 12를 구하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "함수의 주기가 3π이므로 2π/b = 3π 공식으로부터 b = 2/3임을 구했나요?",
        conceptCode: "[12대수02-01]",
        conceptName: "코사인함수의 주기 공식",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "코사인함수의 주기 공식 적용 결손",
        deficiencyDesc: "코사인함수 y=cos(bx)의 주기가 2π/b라는 공식을 정확히 적용하여 미지수 b를 찾아내지 못했습니다.",
        prescription: "1) 삼각함수 y=cos(bx)의 주기 공식 T = 2π/|b| 암기\n2) 주기가 주어졌을 때 x의 계수 역산 훈련",
        coreKeywords: ["코사인함수 주기", "주기 3π", "b = 2/3"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "a < 0일 때 최댓값은 코사인이 -1일 때 발생하므로, 최댓값 공식 -a + 10 - a = -2a + 10 = 18로부터 a = -4를 구했나요?",
        conceptCode: "[12대수02-01]",
        conceptName: "삼각함수의 최대·최소와 음수 계수",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "계수가 음수일 때 삼각함수 최댓값 공식 적용 결손",
        deficiencyDesc: "a가 음수이면 cos이 최소(-1)일 때 a cos은 양수가 되어 최대가 된다는 부호 반전 원리를 놓치고 단순히 |a|+d로 기계적으로 풀다 부호 오류를 범했습니다.",
        prescription: "1) y = a cos x + d에서 a<0일 때 최댓값은 -a + d, 최솟값은 a + d 원리 학습\n2) 음수 계수 부호 주의 훈련",
        coreKeywords: ["삼각함수 최댓값", "음수 계수 a < 0", "부호 반전", "a = -4"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "구한 계수들을 대입하여 완성된 함수식 f(x) = -4 cos((2/3)x) + 14를 작성했나요?",
        conceptCode: "[12대수02-01]",
        conceptName: "삼각함수 식의 완성",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "함수식 대수적 완성 결손",
        deficiencyDesc: "구한 a와 b의 값을 원래 함수식에 정확히 대입하여 완전한 함수 형태를 도출하지 못했습니다.",
        prescription: "1) 도출된 미정계수 식에 대입 및 검산 습관화\n2) 삼각함수 표준 형태 작성 훈련",
        coreKeywords: ["함수식 완성", "미정계수 대입"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "x = π/2를 대입하여 -4 cos(π/3) + 14 = -4×(1/2) + 14 = 12를 정확히 계산했나요?",
        conceptCode: "[12대수02-01]",
        conceptName: "특수각의 삼각함수 값 계산",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "특수각 삼각비(cos π/3 = 1/2) 및 사칙연산 결손",
        deficiencyDesc: "cos(π/3) = 1/2의 특수각 삼각비를 혼동하거나 음수 곱셈 덧셈 산술에서 실수를 하였습니다.",
        prescription: "1) 특수각(30°, 45°, 60° 즉 π/6, π/4, π/3)의 삼각비 표 암기\n2) 분수 곱셈 및 덧셈 산술 검산",
        coreKeywords: ["특수각 삼각비", "cos(π/3) = 1/2", "최종 함숫값 12"]
      }
    ]
  },
  "6-14": {
    id: "6-14",
    examMonth: "6",
    examMonthName: "6월 모의고사",
    questionNumber: 14,
    subject: "대수",
    curriculumDomain: "지수함수와 로그함수",
    topicTitle: "지수법칙의 확장과 자연수 조건 부정방정식",
    difficulty: "오답률 11위 (40.2%)",
    score: 4,
    questionSummary: "주어진 거듭제곱근 식 (4^a · 6 / 3^b)^(1/3)이 10 이상 20 이하의 자연수가 되도록 하는 정수 a, b에 대하여 a+b = -4를 구하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "식을 소인수 2와 3의 유리수 지수로 정리하여 2^((2a+1)/3) · 3^((1-b)/3) 형태를 만들었나요?",
        conceptCode: "[12대수01-02]",
        conceptName: "지수법칙의 확장(유리수 지수)",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "소인수분해 및 유리수 지수법칙 적용 결손",
        deficiencyDesc: "4^a = 2^(2a), 6 = 2·3으로 소인수분해하고 세제곱근을 1/3제곱으로 분배하는 유리수 지수 연산이 미흡했습니다.",
        prescription: "1) 밑을 소수로 통일하는 소인수분해 지수 정리법 복습\n2) 거듭제곱근의 유리수 지수 변환 (ⁿ√x = x^(1/n)) 숙달",
        coreKeywords: ["소인수분해", "유리수 지수", "지수법칙 분배"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "10 이상 20 이하의 자연수 중 2^p · 3^q 꼴인 수가 12(2²·3), 16(2⁴), 18(2·3²)의 3가지 후보임을 찾았나요?",
        conceptCode: "[12대수01-02]",
        conceptName: "지수식의 자연수 조건 분석",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "제한된 자연수 범위 내 소인수 2, 3 합성수 추출 결손",
        deficiencyDesc: "10부터 20까지의 수 중에서 다른 소인수(5, 7 등)를 갖지 않고 오직 2와 3의 거듭제곱의 곱으로만 표현되는 수를 빠짐없이 추리지 못했습니다.",
        prescription: "1) 자연수의 소인수분해 형태 나열 및 분류 훈련\n2) 범위 내 후보 수 탐색 훈련",
        coreKeywords: ["소인수 2와 3", "후보 수 추출", "12, 16, 18"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "지수 (2a+1)/3과 (1-b)/3이 정수 a, b를 갖는 경우는 18(2¹·3²)뿐임을 연립하여 밝혔나요?",
        conceptCode: "[10공수1-02-01]",
        conceptName: "부정방정식의 정수 조건",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "유리수 지수의 정수해 조건 판정 결손",
        deficiencyDesc: "각 후보에 대해 지수 방정식을 세웠을 때 a, b가 정수가 되는지(분수가 아닌지) 검증하는 정수론적 판정이 부족했습니다.",
        prescription: "1) 2a+1 = 3k 꼴의 일차 합동식 및 정수해 존재 조건 복습\n2) 후보별 정수 조건 검증 훈련",
        coreKeywords: ["정수해 조건", "지수 연립", "오직 18만 만족"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "(2a+1)/3 = 1에서 a=1, (1-b)/3 = 2에서 b=-5를 구하고 a+b = 1 + (-5) = -4를 정확히 계산했나요?",
        conceptCode: "[12대수01-02]",
        conceptName: "일차방정식 풀이 및 합산",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "일차방정식 음수 해 연산 및 합산 결손",
        deficiencyDesc: "1-b = 6에서 b = -5를 구하는 이항 부호 연산에서 실수가 발생하여 최종 합을 틀렸습니다.",
        prescription: "1) 음수가 포함된 일차방정식 풀이 점검\n2) 부호 덧셈 검산",
        coreKeywords: ["일차방정식 풀이", "a=1, b=-5", "최종 정답 -4"]
      }
    ]
  },
  "6-16": {
    id: "6-16",
    examMonth: "6",
    examMonthName: "6월 모의고사",
    questionNumber: 16,
    subject: "대수",
    curriculumDomain: "삼각함수",
    topicTitle: "삼각함수의 주기와 대칭성을 활용한 도형의 넓이",
    difficulty: "오답률 12위 (34.0%)",
    score: 4,
    questionSummary: "사인함수 곡선 위의 네 점이 이루는 평행사변형 ACDB의 기울기와 주기 조건을 이용하여 사각형의 넓이 8을 구하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "함수 y = 2√3 sin((π/4)x)의 주기가 8임을 구하고 점대칭 중심 (4, 0) 및 선대칭축 x=2를 파악했나요?",
        conceptCode: "[12대수02-01]",
        conceptName: "사인함수의 주기와 대칭성",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "사인함수의 주기 및 대칭 중심 파악 결손",
        deficiencyDesc: "주기 2π/(π/4) = 8을 구한 후, 사인함수가 점 (4, 0)에 대해 점대칭이라는 기하학적 대칭성을 도형 문제에 연결하지 못했습니다.",
        prescription: "1) 삼각함수의 선대칭(극점 축)과 점대칭(x절편) 성질 복습\n2) 대칭성을 이용한 미지수 좌표 단순화 연습",
        coreKeywords: ["사인함수 주기 8", "점대칭 중심", "선대칭축"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "두 점 A(t, k), C(4+t, -k)의 직선 기울기가 -3/2임을 이용하여 k=3을 구했나요?",
        conceptCode: "[10공수2-01-02]",
        conceptName: "직선의 기울기와 점의 좌표",
        curriculumSubject: "공통수학2 > 도형의 방정식",
        deficiencyTitle: "점대칭 점의 좌표 설정 및 기울기 공식 결손",
        deficiencyDesc: "대칭성에 의해 점 C의 좌표가 (4+t, -k)가 됨을 세우고 기울기 공식 (-k-k)/((4+t)-t) = -2k/4 = -3/2를 풀어 k를 구하지 못했습니다.",
        prescription: "1) 점대칭 도형의 좌표 매핑 훈련\n2) 두 점의 기울기 공식 숙달",
        coreKeywords: ["점대칭 좌표", "직선의 기울기", "k = 3"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "f(t) = 2√3 sin((π/4)t) = 3에서 sin((π/4)t) = √3/2를 만족하는 t = 4/3임을 특수각으로 구했나요?",
        conceptCode: "[12대수02-01]",
        conceptName: "삼각방정식의 풀이",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "삼각방정식의 특수해 산출 결손",
        deficiencyDesc: "sin 값이 √3/2가 되는 특수각 π/3을 (π/4)t와 같다고 놓고 일차방정식을 풀어 t값을 찾는 과정에서 오류가 있었습니다.",
        prescription: "1) sin x = √3/2 기본 삼각방정식 풀이 복습\n2) 각의 계수 역수 곱셈 연산 연습",
        coreKeywords: ["삼각방정식", "특수각 π/3", "t = 4/3"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "평행사변형 밑변 AB = 4-2t = 4/3와 높이 2k = 6을 곱하여 넓이 (4/3)×6 = 8을 정확히 계산했나요?",
        conceptCode: "[10공수2-01-01]",
        conceptName: "평행사변형의 넓이 계산",
        curriculumSubject: "공통수학2 > 도형의 방정식",
        deficiencyTitle: "평행사변형 밑변·높이 계산 및 최종 넓이 산출 결손",
        deficiencyDesc: "밑변의 길이 (4-t) - t = 4-2t와 수직 높이 2k를 곱하는 평행사변형 넓이 공식 적용에서 단순 계산 착오가 발생했습니다.",
        prescription: "1) 평행사변형 넓이 = 밑변 × 높이 공식 복습\n2) 선분의 길이 대입 산술 검산",
        coreKeywords: ["평행사변형 넓이", "밑변 4/3", "높이 6", "최종 넓이 8"]
      }
    ]
  },
  "6-13": {
    id: "6-13",
    examMonth: "6",
    examMonthName: "6월 모의고사",
    questionNumber: 13,
    subject: "대수",
    curriculumDomain: "삼각함수",
    topicTitle: "삼각형의 내각의 성질과 사인법칙을 활용한 외접원 넓이",
    difficulty: "오답률 13위 (32.6%)",
    score: 3,
    questionSummary: "삼각형 ABC에서 cos(B+C) = cos A + 1/2이고 BC=3일 때 삼각형의 외접원의 넓이 (12/5)π를 구하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "삼각형의 세 내각의 합 A+B+C = π이므로 B+C = π-A이고 cos(B+C) = -cos A임을 유도했나요?",
        conceptCode: "[12대수02-02]",
        conceptName: "삼각함수의 각 변환(보각 공식)",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "삼각형 내각의 합 π 및 cos(π-A) = -cos A 각 변환 결손",
        deficiencyDesc: "삼각형 문제의 대전제인 A+B+C=180°를 이용해 두 각의 합을 하나의 각으로 줄이는 삼각함수 기본 변형을 떠올리지 못했습니다.",
        prescription: "1) 삼각형 문제에서 B+C = π - A 치환 공식 숙달\n2) cos(π - θ) = -cos θ 보각 공식 암기",
        coreKeywords: ["내각의 합 π", "B+C = π-A", "보각 공식", "-cos A"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "-cos A = cos A + 1/2 일차방정식으로부터 cos A = -1/4임을 구했나요?",
        conceptCode: "[12대수02-01]",
        conceptName: "삼각방정식의 풀이",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "삼각함수 일차방정식 이항 및 동류항 정리 결손",
        deficiencyDesc: "식의 양변을 정리하여 -2cos A = 1/2에서 cos A를 구하는 기초 일차방정식 연산에서 실수가 발생했습니다.",
        prescription: "1) 삼각함수 치환 일차방정식 풀이 점검\n2) 부호 이항 검산",
        coreKeywords: ["일차방정식", "이항 정리", "cos A = -1/4"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "sin²A + cos²A = 1 공식을 이용하여 sin A = √(1 - 1/16) = √15/4임을 계산했나요?",
        conceptCode: "[12대수02-02]",
        conceptName: "삼각함수 사이의 상호 관계",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "코사인값으로부터 사인값 산출 항등식 결손",
        deficiencyDesc: "삼각형의 내각 0 < A < π에서 사인값은 항상 양수라는 점과 항등식 sin A = √(1 - cos²A) 적용 능력이 부족했습니다.",
        prescription: "1) sin²θ + cos²θ = 1 항등식 복습\n2) 삼각형 내각에서 sin값의 양수성(1, 2사분면) 확인",
        coreKeywords: ["sin²A + cos²A = 1", "사인값 계산", "sin A = √15/4"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "사인법칙 BC / sin A = 2R로부터 외접원 반지름 R = (2/5)√15를 구하고 원의 넓이 πR² = (12/5)π를 정확히 계산했나요?",
        conceptCode: "[12대수02-03]",
        conceptName: "사인법칙과 외접원의 넓이",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "사인법칙 외접원 반지름 산출 및 넓이 공식 결손",
        deficiencyDesc: "사인법칙 3 / (√15/4) = 2R에서 R을 구하고 원의 넓이 πR²을 계산하는 과정에서 유리화나 거듭제곱 실수가 있었습니다.",
        prescription: "1) 사인법칙 외접원 반지름 공식 a / sin A = 2R 복습\n2) 원의 넓이 πR² 제곱 연산 검산",
        coreKeywords: ["사인법칙", "외접원 반지름", "원의 넓이 πR²"]
      }
    ]
  },
  "6-15": {
    id: "6-15",
    examMonth: "6",
    examMonthName: "6월 모의고사",
    questionNumber: 15,
    subject: "대수",
    curriculumDomain: "지수함수와 로그함수",
    topicTitle: "로그의 밑변환 공식과 이차방정식의 근과 계수의 관계",
    difficulty: "오답률 14위 (32.0%)",
    score: 4,
    questionSummary: "이차방정식의 두 근에 대하여 로그의 밑변환 공식을 이용해 역수의 합을 통분하고 미지수 k = 32를 구하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "근과 계수의 관계로부터 log_2 α + log_2 β = log_2 k + 10이고 log_2 α · log_2 β = 5임을 작성했나요?",
        conceptCode: "[10공수1-02-01]",
        conceptName: "이차방정식의 근과 계수의 관계",
        curriculumSubject: "공통수학1 > 방정식과 부등식",
        deficiencyTitle: "이차방정식 근과 계수의 관계 적용 결손",
        deficiencyDesc: "로그 값 자체를 두 근으로 하는 이차방정식에서 두 근의 합과 두 근의 곱 공식을 정확히 수식화하지 못했습니다.",
        prescription: "1) 이차방정식의 근과 계수의 관계 복습\n2) 치환된 근(로그 표현)에 대한 합/곱 공식 적용 연습",
        coreKeywords: ["근과 계수의 관계", "두 근의 합", "두 근의 곱"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "밑변환 공식 log_α 2 = 1 / log_2 α를 이용하여 log_α 2 + log_β 2를 (log_2 α + log_2 β) / (log_2 α · log_2 β)로 통분했나요?",
        conceptCode: "[12대수01-03]",
        conceptName: "로그의 밑변환 공식",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "로그의 밑변환(역수) 공식 및 분수식 통분 결손",
        deficiencyDesc: "밑과 진수를 바꿀 때 역수가 된다는 밑변환 공식 log_b a = 1 / log_a b를 적용하지 못해 통분으로 연결하지 못했습니다.",
        prescription: "1) 로그의 밑변환 공식 log_a b = (log_c b)/(log_c a) 및 log_b a = 1/log_a b 완벽 암기\n2) 역수의 합 통분 연산 훈련",
        coreKeywords: ["밑변환 공식", "역수 관계", "분수식 통분"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "통분한 식에 값들을 대입하여 (log_2 k + 10) / 5 = 3이라는 일차방정식을 세웠나요?",
        conceptCode: "[12대수01-03]",
        conceptName: "로그방정식 모델링",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "대칭식 대입 및 일차 로그방정식 수립 결손",
        deficiencyDesc: "구한 합과 곱을 분수식에 대입하고 조건값 3과 같다고 놓는 대수적 연결이 미흡했습니다.",
        prescription: "1) 식의 값 대입 및 등식 모델링 훈련\n2) 양변 분모 정리 연습",
        coreKeywords: ["식의 대입", "일차방정식 수립"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "log_2 k + 10 = 15로부터 log_2 k = 5를 구하고 지수로 변환하여 k = 2⁵ = 32를 오차 없이 계산했나요?",
        conceptCode: "[12대수01-03]",
        conceptName: "로그의 정의와 거듭제곱 계산",
        curriculumSubject: "대수 > 지수함수와 로그함수",
        deficiencyTitle: "로그의 정의를 이용한 지수 변환 및 2의 거듭제곱 계산 결손",
        deficiencyDesc: "log_2 k = 5에서 k = 2⁵ = 32로 바꾸는 마지막 로그의 정의 적용에서 단순 산술 실수가 발생했습니다.",
        prescription: "1) log_a x = y ⇔ x = a^y 로그의 정의 복습\n2) 2의 거듭제곱(2⁵ = 32) 숙달",
        coreKeywords: ["로그의 정의", "지수 변환", "k = 32"]
      }
    ]
  },
  "6-12": {
    id: "6-12",
    examMonth: "6",
    examMonthName: "6월 모의고사",
    questionNumber: 12,
    subject: "대수",
    curriculumDomain: "삼각함수",
    topicTitle: "삼각함수의 각 변환 및 항등식을 이용한 식의 값 계산",
    difficulty: "오답률 15위 (31.4%)",
    score: 3,
    questionSummary: "sin(π+θ) = -1/3일 때 유리식 sin θ / (1-cos θ) + sin θ / (1+cos θ)의 값을 통분과 삼각함수 항등식으로 계산하여 6을 구하는 문항",
    steps: [
      {
        stepIndex: 1,
        qNum: "Q1",
        question: "sin(π+θ) = -sin θ = -1/3로부터 sin θ = 1/3임을 바르게 구했나요?",
        conceptCode: "[12대수02-02]",
        conceptName: "삼각함수의 각 변환(주기 및 음각 공식)",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "삼각함수 π+θ 각 변환 부호 결손",
        deficiencyDesc: "π+θ가 제3사분면 각이므로 sin의 부호가 음수가 되어 -sin θ가 된다는 각 변환 공식을 혼동했습니다.",
        prescription: "1) 삼각함수의 사분면 부호(올-싸-탄-코) 및 π+θ 각 변환 복습\n2) 부호 반전 주의 훈련",
        coreKeywords: ["각 변환", "sin(π+θ) = -sinθ", "sinθ = 1/3"]
      },
      {
        stepIndex: 2,
        qNum: "Q2",
        question: "두 분수식을 공통분모 (1-cos θ)(1+cos θ) = 1-cos²θ로 통분했나요?",
        conceptCode: "[10공수1-01-01]",
        conceptName: "유리식의 덧셈과 통분",
        curriculumSubject: "공통수학1 > 다항식",
        deficiencyTitle: "합차공식을 이용한 분모 통분 연산 결손",
        deficiencyDesc: "(1-cos θ)와 (1+cos θ)의 곱이 1-cos²θ가 된다는 합차공식 통분을 정확하게 처리하지 못했습니다.",
        prescription: "1) 유리식 통분 및 합차공식 (a-b)(a+b) = a²-b² 복습\n2) 분수식 분자 전개 훈련",
        coreKeywords: ["유리식 통분", "합차공식", "1-cos²θ"]
      },
      {
        stepIndex: 3,
        qNum: "Q3",
        question: "분모 1-cos²θ를 sin²θ로 바꾸고 분자의 2sin θ와 약분하여 2/sin θ로 단순화했나요?",
        conceptCode: "[12대수02-02]",
        conceptName: "삼각함수 항등식 sin²θ + cos²θ = 1",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "1 - cos²θ = sin²θ 치환 및 약분 결손",
        deficiencyDesc: "삼각함수 최고 기본 공식인 sin²θ + cos²θ = 1로부터 1-cos²θ = sin²θ를 유도하여 분수식을 약분하는 식 단순화가 부족했습니다.",
        prescription: "1) 1 - cos²θ = sin²θ, 1 - sin²θ = cos²θ 항등식 상호 변환 숙달\n2) 삼각함수 분수식 약분 연습",
        coreKeywords: ["삼각함수 항등식", "1 - cos²θ = sin²θ", "분수식 약분"]
      },
      {
        stepIndex: 4,
        qNum: "Q4",
        question: "sin θ = 1/3을 대입하여 2 / (1/3) = 6을 정확히 계산했나요?",
        conceptCode: "[12대수02-02]",
        conceptName: "삼각함수 식의 값 계산",
        curriculumSubject: "대수 > 삼각함수",
        deficiencyTitle: "번분수 계산 및 식의 값 산출 결손",
        deficiencyDesc: "구한 단순화 식에 1/3을 대입하는 번분수 계산(2 ÷ 1/3 = 6)에서 연산 착오가 있었습니다.",
        prescription: "1) 번분수 계산법 (a / (b/c) = ac/b) 복습\n2) 최종 답 검산",
        coreKeywords: ["번분수 계산", "최종 식의 값 6"]
      }
    ]
  }
};

// =========================================================================
// 브라우저 전역 노출 및 전체 45문항 메타데이터 구조체
// =========================================================================
window.DIAGNOSTIC_DB = DIAGNOSTIC_DB;

window.ALL_EXAM_OPTIONS = [
  {
    month: "9",
    monthName: "9월 모의고사",
    curriculumScope: "대수 전 범위 & 미적분Ⅰ (도함수의 활용까지)",
    target: "고2 전국연합학력평가 (인천시교육청 주관)",
    questions: [
      { qNum: 30, title: "30번 (함수의 극한과 연속 / 불연속점 추론)", available: true, errorRate: "95.8%", score: 4 },
      { qNum: 29, title: "29번 (미분 / 삼차함수의 접선과 극값 추론)", available: true, errorRate: "92.3%", score: 4 },
      { qNum: 28, title: "28번 (수열 / 귀납적 정의와 조건부 점화식)", available: true, errorRate: "88.0%", score: 4 },
      { qNum: 21, title: "21번 (등차수열 / 절댓값과 등차수열의 합)", available: true, errorRate: "76.4%", score: 4 },
      { qNum: 27, title: "27번 (지수·로그함수 / 역함수와 그래프의 교점)", available: true, errorRate: "71.2%", score: 4 },
      { qNum: 26, title: "26번 (함수의 극한 / 최고차항 계수와 부정형 극한)", available: true, errorRate: "65.0%", score: 4 },
      { qNum: 19, title: "19번 (지수부등식 / 등차수열과 거듭제곱 추론)", available: true, errorRate: "61.1%", score: 4 },
      { qNum: 16, title: "16번 (삼각함수 / 대칭성과 사각형의 넓이)", available: true, errorRate: "50.2%", score: 4 },
      { qNum: 18, title: "18번 (수열 / 합 Sn과 일반항 an의 관계)", available: true, errorRate: "49.0%", score: 4 },
      { qNum: 14, title: "14번 (거듭제곱근 / 거듭제곱근의 실수 개수)", available: true, errorRate: "49.0%", score: 4 },
      { qNum: 20, title: "20번 (삼각함수 / 사인·코사인법칙 도형 융합)", available: true, errorRate: "47.6%", score: 4 },
      { qNum: 17, title: "17번 (함수의 극한 / 0/0꼴 인수분해 계산)", available: true, errorRate: "40.5%", score: 4 },
      { qNum: 13, title: "13번 (삼각함수 / 코사인법칙 변의 길이 계산)", available: true, errorRate: "37.8%", score: 3 },
      { qNum: 15, title: "15번 (수열 / 여러 가지 수열의 합 시그마)", available: true, errorRate: "36.4%", score: 4 },
      { qNum: 22, title: "22번 (도함수의 활용 / 다항함수 그래프 추론)", available: true, errorRate: "35.0%", score: 4 }
    ]
  },
  {
    month: "3",
    monthName: "3월 모의고사",
    curriculumScope: "공통수학1 전 범위 & 공통수학2 전 범위",
    target: "고2 전국연합학력평가 (서울시교육청 주관)",
    questions: [
      { qNum: 30, title: "30번 (유리함수·이차함수 그래프 일대일함수)", available: true, errorRate: "94.2%", score: 4 },
      { qNum: 29, title: "29번 (행렬 / 연산 추론 및 곱셈 공식 변형)", available: true, errorRate: "89.5%", score: 4 },
      { qNum: 28, title: "28번 (합성함수 / 일의 자리 규칙과 부분집합 원소 합)", available: true, errorRate: "85.3%", score: 4 },
      { qNum: 27, title: "27번 (경우의 수 / 좌석 배치 조건 순열과 조합)", available: true, errorRate: "76.8%", score: 4 },
      { qNum: 21, title: "21번 (함수 / 합성·역함수와 원의 방정식 교점)", available: true, errorRate: "69.3%", score: 4 },
      { qNum: 18, title: "18번 (이차방정식 / 실근 개수와 이차함수 접선)", available: true, errorRate: "68.7%", score: 4 },
      { qNum: 20, title: "20번 (다항식 / 인수정리와 항등식 곱 추론)", available: true, errorRate: "62.4%", score: 4 },
      { qNum: 19, title: "19번 (집합 / 조건제시법 순서쌍과 원소 합 최댓값)", available: true, errorRate: "57.3%", score: 4 },
      { qNum: 26, title: "26번 (이차함수 / 제한된 구간 최대·최소와 항등식)", available: true, errorRate: "55.0%", score: 4 },
      { qNum: 17, title: "17번 (도형의 방정식 / 피타고라스와 점과 직선 거리)", available: true, errorRate: "51.8%", score: 4 },
      { qNum: 16, title: "16번 (경우의 수 / 분할과 분배 순열과 조합)", available: true, errorRate: "49.5%", score: 4 },
      { qNum: 24, title: "24번 (방정식 / 이차방정식 근과 계수의 관계)", available: true, errorRate: "46.2%", score: 3 },
      { qNum: 14, title: "14번 (도형의 이동 / 대칭이동과 선분 최단거리)", available: true, errorRate: "44.2%", score: 4 },
      { qNum: 15, title: "15번 (부등식 / 연립이차부등식 정수 해 개수)", available: true, errorRate: "42.2%", score: 4 },
      { qNum: 9, title: "9번 (다항식 / 나머지정리와 일차식 나머지)", available: true, errorRate: "35.4%", score: 3 }
    ]
  },
  {
    month: "6",
    monthName: "6월 모의고사",
    curriculumScope: "대수 (지수·로그함수, 삼각함수 전 범위)",
    target: "고2 전국연합학력평가 (부산시교육청 주관)",
    questions: [
      { qNum: 30, title: "30번 (삼각함수·이차함수 그래프 합성 추론)", available: true, errorRate: "96.1%", score: 4 },
      { qNum: 29, title: "29번 (지수·로그함수 / 역함수 기하 해석과 넓이)", available: true, errorRate: "91.4%", score: 4 },
      { qNum: 28, title: "28번 (삼각함수 / 원내접 사각형과 코사인법칙)", available: true, errorRate: "86.8%", score: 4 },
      { qNum: 21, title: "21번 (지수·로그함수 / 절댓값 그래프와 교점 개수)", available: true, errorRate: "80.5%", score: 4 },
      { qNum: 27, title: "27번 (로그함수 / 평행이동 거리와 지수부등식)", available: true, errorRate: "75.2%", score: 4 },
      { qNum: 20, title: "20번 (탄젠트함수 / 주기성과 도형 닮음 넓이 비)", available: true, errorRate: "71.5%", score: 4 },
      { qNum: 17, title: "17번 (삼각함수 / 단위원 위 정의와 사다리꼴 넓이)", available: true, errorRate: "54.3%", score: 4 },
      { qNum: 18, title: "18번 (삼각함수 / 원주각 성질과 사인·코사인법칙)", available: true, errorRate: "54.0%", score: 4 },
      { qNum: 19, title: "19번 (지수·로그 / 거듭제곱근 정의와 로그 정수 조건)", available: true, errorRate: "44.5%", score: 4 },
      { qNum: 26, title: "26번 (삼각함수 / 주기와 최대·최소 음수 계수)", available: true, errorRate: "42.0%", score: 4 },
      { qNum: 14, title: "14번 (지수법칙 / 유리수 지수와 자연수 부정방정식)", available: true, errorRate: "40.2%", score: 4 },
      { qNum: 16, title: "16번 (삼각함수 / 주기·대칭성과 평행사변형 넓이)", available: true, errorRate: "34.0%", score: 4 },
      { qNum: 13, title: "13번 (삼각함수 / 내각 보각 공식과 사인법칙 외접원)", available: true, errorRate: "32.6%", score: 3 },
      { qNum: 15, title: "15번 (지수·로그 / 밑변환 공식과 근과 계수의 관계)", available: true, errorRate: "32.0%", score: 4 },
      { qNum: 12, title: "12번 (삼각함수 / 각 변환과 항등식 식의 값 계산)", available: true, errorRate: "31.4%", score: 3 }
    ]
  }
];
