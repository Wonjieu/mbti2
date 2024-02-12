export const questions = [
  {
    number: '01',
    question: '사람 많은 식당에 들어갔는데<br>주문을 받으로 오지 않는다',
    choices: [
      { text: '손을 들고 큰소리로 이모~!부른다.', value: 'i' },
      { text: '벨 버튼 찾다가 없으면 눈 마주치길 기다린다. ', value: 'e' }
    ]
  },
  {
    number: '02',
    question: '같이 밥을 먹기로 한 친구가 식당 위치를 몰라 헤메이고 있다<br>어떻게 설명해 줄거야?',
    choices: [
      { text: '어느 위치에 있는지 상세하게', value: 'n' },
      { text: '짧고 간단하게 주위 큰 건물 위주로', value: 's' }
    ]
  },
  {
    number: '03',
    question: '"나 배탈 난 것 같아" 나의 반응은?',
    choices: [
      { text: '뭐 먹었는데?? 왜 그러지?약은 먹었어?', value: 'f' },
      { text: '괜찮아???약은? 밥도 못 먹고 많이 힘들겠다..', value: 't' }
    ]
  },
  {
    number: '04',
    question: '오랜만에 친구가 우리동네에 놀러오기로 했다<br>당신의 계획표는?',
    choices: [
      { text: '친구에게 잘맞는 코스로 하나하나 준비한다.', value: 'j' },
      { text: '간단하게 한 개 정해놓고, 흐름에 맡긴다.', value: 'p' }
    ]
  },

  {
    number: '05',
    question: '오랜만에 친구를 만났다 당신이 가는 식당은?',
    choices: [
      { text: '이곳 sns에서 엄청 유명하대~!', value: '' },
      { text: '근처에 있는 곳으로', value: '' }
    ],
  }
]
export const results = [
  {
    title: '한식',
    character: '/images/result_character1-1.png',
    results: [
      '청춘밥상',
      '사랑드림'
    ],
    
  },
  {
    title: '양식',
    character: '/images/result_character2-1.png',
    results: [
      '피오르달리조',
      '아삶공'

    ],
  },
  {
    title: '중식',
    character: '/images/result_character6-1.png',
    results: [
      '용화루',
      '마라순코우 마라탕'


    ],

  },
  {
    title: '일식',
    character: '/images/result_character4-1.png',
    results: [
      '멘야이로',
      '가미노야끼'
    ],

  },

  {
    title: '일식',
    character: '/images/result_character4-1.png',
    results: [
      '멘야이로',
      '가미노야끼'
    ],

  },

  {
    title: '일식',
    character: '/images/result_character4-1.png',
    results: [
      '멘야이로',
      '가미노야끼'
    ],

  }
  
]
export const mbtis = {
  entj: 0,
  entp: 0,
  estp: 0,
  esfp: 1,
  esfj: 1,
  enfj: 1,
  infp: 2,
  isfp: 2,
  isfj: 2,
  infj: 3,
  estj: 3,
  istp: 3,
  intj: 4,
  intp: 4,
  istj: 4,
  enfp: 4
}
