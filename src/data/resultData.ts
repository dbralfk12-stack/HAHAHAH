export interface ResultData {
  symptom: string;
  ageGroup: string;
  departments: string[];
  tests: {
    name: string;
    coverage: string;
  }[];
  message: string;
}

export const resultDataMap: ResultData[] = [
  // 두통
  {
    symptom: '두통',
    ageGroup: '50대',
    departments: ['신경과', '내과'],
    tests: [
      { name: '혈압 측정', coverage: '보험 적용 30%' },
      { name: '혈액 검사', coverage: '보험 적용 30%' },
    ],
    message: '대부분 외래에서 진료 가능하며 본인 부담률은 20~30%입니다.',
  },
  {
    symptom: '두통',
    ageGroup: '60대',
    departments: ['신경과', '내과'],
    tests: [
      { name: '혈압 측정', coverage: '보험 적용 30%' },
      { name: '혈액 검사', coverage: '보험 적용 30%' },
      { name: 'CT (필요 시)', coverage: '보험 적용 20%' },
    ],
    message: '필요 시 CT 등 추가 검사가 진행될 수 있으며 대부분 보험 적용됩니다.',
  },
  {
    symptom: '두통',
    ageGroup: '70대',
    departments: ['신경과', '내과'],
    tests: [
      { name: '혈압 측정', coverage: '보험 적용 30%' },
      { name: '혈액 검사', coverage: '보험 적용 30%' },
      { name: 'CT (필요 시)', coverage: '보험 적용 20%' },
    ],
    message: '고령에서는 같은 증상도 더 주의가 필요합니다.',
  },
  
  // 코막힘/콧물
  {
    symptom: '코막힘/콧물',
    ageGroup: '50대',
    departments: ['이비인후과'],
    tests: [
      { name: '기본 진찰', coverage: '보험 적용 30%' },
      { name: '비내시경', coverage: '보험 적용 30%' },
    ],
    message: '동네 이비인후과에서 대부분 해결 가능하며 보험 적용됩니다.',
  },
  {
    symptom: '코막힘/콧물',
    ageGroup: '60대',
    departments: ['이비인후과'],
    tests: [
      { name: '기본 진찰', coverage: '보험 적용 30%' },
      { name: '비내시경', coverage: '보험 적용 30%' },
      { name: '부비동 X-ray', coverage: '보험 적용 20%' },
    ],
    message: '증상이 오래가면 부비동 검사가 필요할 수 있습니다.',
  },
  {
    symptom: '코막힘/콧물',
    ageGroup: '70대',
    departments: ['이비인후과'],
    tests: [
      { name: '기본 진찰', coverage: '보험 적용 30%' },
      { name: '비내시경', coverage: '보험 적용 30%' },
      { name: '부비동 X-ray', coverage: '보험 적용 20%' },
    ],
    message: '고령에서는 감기가 악화될 가능성이 있어 주의가 필요합니다.',
  },
  
  // 기침/목아픔
  {
    symptom: '기침/목아픔',
    ageGroup: '50대',
    departments: ['호흡기내과', '이비인후과'],
    tests: [
      { name: '기본 진찰', coverage: '보험 적용 30%' },
      { name: '흉부 X-ray', coverage: '보험 적용 20%' },
    ],
    message: '기침이 오래가면 X-ray를 찍는 경우가 있습니다.',
  },
  {
    symptom: '기침/목아픔',
    ageGroup: '60대',
    departments: ['호흡기내과', '이비인후과'],
    tests: [
      { name: '기본 진찰', coverage: '보험 적용 30%' },
      { name: '흉부 X-ray', coverage: '보험 적용 20%' },
      { name: '감염 검사', coverage: '일부 보험 적용' },
    ],
    message: '기저질환이 있으면 검사 범위가 넓어질 수 있습니다.',
  },
  {
    symptom: '기침/목아픔',
    ageGroup: '70대',
    departments: ['호흡기내과', '이비인후과'],
    tests: [
      { name: '기본 진찰', coverage: '보험 적용 30%' },
      { name: '흉부 X-ray', coverage: '보험 적용 20%' },
      { name: '감염 검사', coverage: '일부 보험 적용' },
    ],
    message: '고령에서는 호흡기 증상이 악화될 가능성이 있어 주의해야 합니다.',
  },
  
  // 복통
  {
    symptom: '복통',
    ageGroup: '50대',
    departments: ['소화기내과', '내과'],
    tests: [
      { name: '기본 진찰', coverage: '보험 적용 30%' },
      { name: '혈액 검사', coverage: '보험 적용 30%' },
      { name: '복부 X-ray 또는 초음파', coverage: '보험 적용 20%' },
    ],
    message: '대부분 보험 적용되며 원인 확인을 위해 검사가 필요할 수 있습니다.',
  },
  {
    symptom: '복통',
    ageGroup: '60대',
    departments: ['소화기내과', '내과'],
    tests: [
      { name: '기본 진찰', coverage: '보험 적용 30%' },
      { name: '혈액 검사', coverage: '보험 적용 30%' },
      { name: '복부 X-ray 또는 초음파', coverage: '보험 적용 20%' },
      { name: 'CT (필요 시)', coverage: '보험 적용 20%' },
    ],
    message: '열이나 구토가 동반되면 CT 등 추가 검사가 필요할 수 있습니다.',
  },
  {
    symptom: '복통',
    ageGroup: '70대',
    departments: ['소화기내과', '내과'],
    tests: [
      { name: '기본 진찰', coverage: '보험 적용 30%' },
      { name: '혈액 검사', coverage: '보험 적용 30%' },
      { name: '복부 X-ray 또는 초음파', coverage: '보험 적용 20%' },
    ],
    message: '고령에서는 같은 증상도 더 주의가 필요합니다.',
  },
  
  // 소화불량
  {
    symptom: '소화불량',
    ageGroup: '50대',
    departments: ['소화기내과', '내과'],
    tests: [
      { name: '기본 진찰', coverage: '보험 적용 30%' },
      { name: '혈액 검사', coverage: '보험 적용 30%' },
    ],
    message: '위염 또는 생활습관 관련 증상일 수 있습니다.',
  },
  {
    symptom: '소화불량',
    ageGroup: '60대',
    departments: ['소화기내과', '내과'],
    tests: [
      { name: '기본 진찰', coverage: '보험 적용 30%' },
      { name: '혈액 검사', coverage: '보험 적용 30%' },
      { name: '위내시경', coverage: '보험 적용 20%' },
    ],
    message: '원인을 확인하기 위해 내시경이 필요할 수 있습니다.',
  },
  {
    symptom: '소화불량',
    ageGroup: '70대',
    departments: ['소화기내과', '내과'],
    tests: [
      { name: '기본 진찰', coverage: '보험 적용 30%' },
      { name: '혈액 검사', coverage: '보험 적용 30%' },
      { name: '위내시경', coverage: '보험 적용 20%' },
    ],
    message: '고령에서는 내시경을 더 자주 권장합니다.',
  },
  
  // 기타 (모든 나이대 동일)
  {
    symptom: '기타',
    ageGroup: '50대',
    departments: ['가정의학과', '내과'],
    tests: [
      { name: '기본 진찰', coverage: '보험 적용 30%' },
      { name: '혈액 검사', coverage: '보험 적용 30%' },
    ],
    message: '증상이 모호하면 가까운 가정의학과에서 먼저 상담 후 필요한 과로 안내받을 수 있습니다.',
  },
  {
    symptom: '기타',
    ageGroup: '60대',
    departments: ['가정의학과', '내과'],
    tests: [
      { name: '기본 진찰', coverage: '보험 적용 30%' },
      { name: '혈액 검사', coverage: '보험 적용 30%' },
    ],
    message: '증상이 모호하면 가까운 가정의학과에서 먼저 상담 후 필요한 과로 안내받을 수 있습니다.',
  },
  {
    symptom: '기타',
    ageGroup: '70대',
    departments: ['가정의학과', '내과'],
    tests: [
      { name: '기본 진찰', coverage: '보험 적용 30%' },
      { name: '혈액 검사', coverage: '보험 적용 30%' },
    ],
    message: '증상이 모호하면 가까운 가정의학과에서 먼저 상담 후 필요한 과로 안내받을 수 있습니다.',
  },
];

export function getResultData(symptom: string, ageGroup: string): ResultData {
  const result = resultDataMap.find(
    (data) => data.symptom === symptom && data.ageGroup === ageGroup
  );
  
  // 기본 fallback 데이터
  return result || {
    symptom: '기타',
    ageGroup: '50대',
    departments: ['가정의학과', '내과'],
    tests: [
      { name: '기본 진찰', coverage: '보험 적용 30%' },
      { name: '혈액 검사', coverage: '보험 적용 30%' },
    ],
    message: '증상이 모호하면 가까운 가정의학과에서 먼저 상담 후 필요한 과로 안내받을 수 있습니다.',
  };
}
