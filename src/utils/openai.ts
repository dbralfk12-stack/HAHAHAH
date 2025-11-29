// OpenAI API를 사용한 건강 조언 생성

export interface AIAdviceRequest {
  symptom: string;
  ageGroup: string;
  apiKey: string;
}

export interface AIAdviceResponse {
  advice: string;
  tips: string[];
  costSavingTip: string;
}

export interface HospitalVisitTipsRequest {
  symptom: string;
  ageGroup: string;
  department: string;
  apiKey: string;
}

export interface HospitalVisitTipsResponse {
  comfortMessage: string;
  reassurance: string;
  practicalAdvice: string[];
}

export async function generateHealthAdvice(
  request: AIAdviceRequest
): Promise<AIAdviceResponse> {
  const { symptom, ageGroup } = request;

  // 증상별 맞춤 조언 데이터
  const adviceData: Record<string, AIAdviceResponse> = {
    '두통': {
      advice: '두통은 여러 원인으로 발생할 수 있습니다. 충분한 휴식과 수분 섭취가 중요하며, 스트레스 관리도 도움이 됩니다. 증상이 지속되면 전문의와 상담하시는 것이 좋습니다.',
      tips: [
        '규칙적인 수면 시간을 유지하고 하루 7-8시간 푹 주무세요.',
        '물을 자주 마시고 카페인은 줄여보세요.',
        '밝은 화면을 오래 보지 말고 중간중간 눈을 쉬어주세요.'
      ],
      costSavingTip: '보건소에서 기본 건강검진을 무료로 받으실 수 있습니다. 두통이 지속되면 보건소 상담을 먼저 이용해보세요.'
    },
    '코막힘/콧물': {
      advice: '환절기나 감기로 인한 증상일 수 있습니다. 실내 습도를 적절히 유지하고 따뜻한 물을 자주 마시면 도움이 됩니다. 증상이 2주 이상 지속되면 진료를 받아보세요.',
      tips: [
        '실내 습도를 50-60%로 유지하고 가습기를 사용해보세요.',
        '따뜻한 물이나 차를 자주 마셔 목을 편안하게 하세요.',
        '손을 자주 씻고 마스크를 착용해 감염을 예방하세요.'
      ],
      costSavingTip: '약국에서 일반의약품으로 증상 완화를 먼저 시도해보시고, 호전이 없으면 보건소나 병원을 방문하세요.'
    },
    '기침/목아픔': {
      advice: '기침과 목 통증은 감기나 목의 자극으로 발생할 수 있습니다. 충분한 수분 섭취와 목 보호가 중요합니다. 기침이 3주 이상 계속되면 반드시 진료를 받으세요.',
      tips: [
        '따뜻한 물에 꿀을 타서 마시면 목이 편안해집니다.',
        '큰 소리로 말하지 않고 목소리를 아껴주세요.',
        '건조한 환경을 피하고 마스크를 착용하세요.'
      ],
      costSavingTip: '보건소 호흡기 클리닉을 이용하시면 저렴한 비용으로 진료를 받으실 수 있습니다.'
    },
    '복통': {
      advice: '복통은 다양한 원인이 있을 수 있습니다. 소화가 잘 되는 음식을 드시고 과식을 피하세요. 심한 통증이나 지속적인 불편함이 있다면 빠른 진료가 필요합니다.',
      tips: [
        '자극적이지 않은 부드러운 음식을 소량씩 드세요.',
        '식사 후 30분 정도 가볍게 걷는 것이 좋습니다.',
        '스트레스를 줄이고 규칙적인 배변 습관을 유지하세요.'
      ],
      costSavingTip: '만성 질환이 있으시면 건강보험 본인부담금 감면 혜택을 확인해보세요. 복지관에서도 무료 상담이 가능합니다.'
    },
    '소화불량': {
      advice: '소화불량은 식습관과 스트레스로 인해 발생할 수 있습니다. 천천히 식사하고 과식을 피하는 것이 중요합니다. 증상이 자주 반복되면 검사를 받아보시는 것이 좋습니다.',
      tips: [
        '식사는 천천히 꼭꼭 씹어서 드세요.',
        '기름진 음식과 맵고 짠 음식은 피하세요.',
        '식사 후 바로 눕지 말고 2-3시간 후에 주무세요.'
      ],
      costSavingTip: '보건소 영양 상담을 무료로 이용하실 수 있습니다. 식습관 개선으로 약값을 아낄 수 있어요.'
    },
    '기타': {
      advice: '증상에 대해 궁금하시다면 전문의와 상담하시는 것이 가장 좋습니다. 일상 생활에서 충분한 휴식과 균형 잡힌 식사, 규칙적인 운동이 건강 유지에 도움이 됩니다.',
      tips: [
        '하루 30분 정도 가볍게 걷는 운동을 해보세요.',
        '규칙적인 생활 습관을 유지하세요.',
        '불편한 증상이 있으면 미루지 말고 상담받으세요.'
      ],
      costSavingTip: '보건소의 건강 프로그램과 무료 검진을 적극 활용하세요. 조기 발견이 비용 절감의 지름길입니다.'
    }
  };

  // 해당 증상의 데이터 반환 (없으면 '기타' 사용)
  return new Promise((resolve) => {
    // 실제 API 호출처럼 약간의 지연 시간 추가
    setTimeout(() => {
      resolve(adviceData[symptom] || adviceData['기타']);
    }, 800);
  });
}

// 병원 방문 팁 생성 (간결한 버전)
export async function generateHospitalVisitTips(
  request: HospitalVisitTipsRequest
): Promise<HospitalVisitTipsResponse> {
  const { symptom, department } = request;

  // 증상별 맞춤 위로 메시지 데이터
  const comfortData: Record<string, HospitalVisitTipsResponse> = {
    '두통': {
      comfortMessage: '걱정하지 마세요. 두통은 많은 분들이 겪는 흔한 증상이에요. 적절한 진료로 충분히 좋아질 수 있습니다.',
      reassurance: `잘 선택하셨어요. ${department}에서 두통의 원인을 정확히 파악하고 적절한 관리 방법을 안내받으실 수 있습니다.`,
      practicalAdvice: [
        '가족이나 친구와 함께 가시면 마음이 한결 편안합니다.',
        '언제부터 아팠는지, 어떨 때 심한지 미리 메모해 가세요.',
        '긍정적인 마음으로 방문하면 회복에도 도움이 됩니다.'
      ]
    },
    '코막힘/콧물': {
      comfortMessage: '걱정하지 마세요. 코 증상은 계절이나 환경 변화로 누구나 겪을 수 있어요. 금방 좋아지실 거예요.',
      reassurance: `잘 선택하셨어요. ${department}은 코와 호흡기 증상 전문이니 안심하고 진료받으세요.`,
      practicalAdvice: [
        '가까운 가족과 함께 가시면 더 든든합니다.',
        '증상이 시작된 시기와 정도를 간단히 메모해 가세요.',
        '많은 분들이 비슷한 증상으로 좋아지셨으니 걱정하지 마세요.'
      ]
    },
    '기침/목아픔': {
      comfortMessage: '걱정하지 마세요. 기침과 목 통증은 흔한 증상이고 대부분 잘 관리됩니다. 곧 편안해지실 거예요.',
      reassurance: `잘 선택하셨어요. ${department}에서 목과 기관지 상태를 정확히 확인하고 적절한 치료를 받으실 수 있습니다.`,
      practicalAdvice: [
        '혼자보다는 가족과 함께 가시면 마음이 편합니다.',
        '기침이 언제부터 시작됐는지 메모해 가세요.',
        '대부분 치료 후 빠르게 좋아지니 안심하세요.'
      ]
    },
    '복통': {
      comfortMessage: '걱정하지 마세요. 복통은 여러 원인이 있지만 대부분 치료가 가능합니다. 함께 원인을 찾아봐요.',
      reassurance: `잘 선택하셨어요. ${department}에서 배 상태를 정확히 확인하고 맞는 치료를 받으실 수 있습니다.`,
      practicalAdvice: [
        '가족과 함께 방문하시면 더 안심이 됩니다.',
        '언제, 어디가 아픈지 간단히 메모해 가세요.',
        '조기에 확인하면 빨리 좋아질 수 있으니 잘하셨어요.'
      ]
    },
    '소화불량': {
      comfortMessage: '걱정하지 마세요. 소화불량은 매우 흔한 증상이고 생활 습관 개선으로도 많이 좋아집니다. 함께 해결해봐요.',
      reassurance: `잘 선택하셨어요. ${department}에서 소화기 상태를 확인하고 식습관 조언도 받으실 수 있습니다.`,
      practicalAdvice: [
        '가족이 함께 가면 식습관 조언을 같이 들을 수 있어요.',
        '최근 식사 패턴이나 불편한 점을 메모해 가세요.',
        '대부분 관리 방법을 배우면 곧 편해지니 걱정 마세요.'
      ]
    },
    '기타': {
      comfortMessage: '걱정하지 마세요. 불편한 증상이 있을 때 병원을 찾으신 것은 잘하신 선택이에요. 함께 확인해봐요.',
      reassurance: `잘 선택하셨어요. ${department}에서 증상을 정확히 확인하고 적절한 안내를 받으실 수 있습니다.`,
      practicalAdvice: [
        '가족과 함께 가시면 설명을 더 잘 이해하실 수 있어요.',
        '궁금한 점이나 불편한 증상을 미리 메모해 가세요.',
        '조기에 확인하는 것이 가장 중요하니 잘 오셨어요.'
      ]
    }
  };

  // 해당 증상의 데이터 반환 (없으면 '기타' 사용)
  return new Promise((resolve) => {
    // 실제 API 호출처럼 약간의 지연 시간 추가
    setTimeout(() => {
      resolve(comfortData[symptom] || comfortData['기타']);
    }, 1000);
  });
}


