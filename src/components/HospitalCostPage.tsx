import { getResultData } from '../data/resultData';

interface HospitalCostPageProps {
  symptom: string;
  ageGroup: string;
  onNext: () => void;
  onBack: () => void;
  apiKey: string;
}

export function HospitalCostPage({ symptom, ageGroup, onNext, onBack }: HospitalCostPageProps) {
  // 선택된 증상과 나이대에 따라 결과 데이터 가져오기
  const resultData = getResultData(symptom, ageGroup);
  
  return (
    <div className="relative min-h-screen px-5 py-8" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="w-full max-w-[340px] mx-auto">
        {/* 타이틀 */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2" style={{ color: '#4B5563' }}>
            함께 확인해요
          </h1>
          <p className="text-[14px] font-normal" style={{ color: '#9CA3AF' }}>
            필요한 진료과와 검사 정보를 안내해드릴게요
          </p>
        </div>

        {/* 서브타이틀 */}
        <div className="text-center mb-4">
          <p className="text-base font-semibold" style={{ color: '#4B5563' }}>갈 가능성이 높은 진료과</p>
        </div>

        {/* 진료과 버튼들 */}
        <div className={`mb-6 ${resultData.departments.length === 1 ? 'flex justify-center' : 'grid grid-cols-2 gap-3'}`}>
          {resultData.departments.map((dept, index) => (
            <button
              key={index}
              className={`h-[50px] rounded-xl transition-colors flex items-center justify-center border p-4 ${
                resultData.departments.length === 1 ? 'w-[200px]' : ''
              }`}
              style={{
                backgroundColor: '#F0F7FF',
                borderColor: '#D7E7FF',
                boxShadow: 'rgba(0,0,0,0.03) 0px 2px 10px',
                color: '#4B5563'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E3F2FF'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F0F7FF'}
            >
              <span className="text-[15px] font-medium">{dept}</span>
            </button>
          ))}
        </div>

        {/* 근처 병원 찾기 버튼 */}
        <div className="mb-6">
          <a
            href={`https://m.map.naver.com/search2/search.naver?query=${encodeURIComponent(resultData.departments[0])}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-[50px] rounded-xl transition-colors flex items-center justify-center border p-4"
            style={{
              backgroundColor: '#4C9AF9',
              borderColor: '#4C9AF9',
              boxShadow: 'rgba(0,0,0,0.03) 0px 2px 10px',
              color: '#FFFFFF'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3B89E8'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4C9AF9'}
          >
            <span className="text-[15px] font-medium">근처 병원 찾기</span>
          </a>
        </div>

        {/* 자주 사용되는 검사 섹션 */}
        <div className="mb-6">
          <h2 className="text-base font-semibold text-center mb-4" style={{ color: '#4B5563' }}>자주 사용되는 검사</h2>
          
          <div className="space-y-3">
            {resultData.tests.map((test, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 border-b"
                style={{ borderColor: '#D7E7FF' }}
              >
                <span className="text-[15px] font-normal" style={{ color: '#6B7280' }}>{test.name}</span>
                <span 
                  className="text-[13px] font-medium px-3 py-1 rounded-full"
                  style={{
                    color: '#4B5563',
                    backgroundColor: '#F0F7FF'
                  }}
                >
                  {test.coverage}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 하단 버튼들 */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            onClick={onBack}
            className="h-[50px] rounded-xl transition-colors flex items-center justify-center border p-4"
            style={{
              backgroundColor: '#F0F7FF',
              borderColor: '#D7E7FF',
              boxShadow: 'rgba(0,0,0,0.03) 0px 2px 10px',
              color: '#4B5563'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E3F2FF'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F0F7FF'}
          >
            <span className="text-[15px] font-medium">뒤로가기</span>
          </button>
          <button
            onClick={onNext}
            className="h-[50px] rounded-xl transition-colors flex items-center justify-center border p-4"
            style={{
              backgroundColor: '#4C9AF9',
              borderColor: '#4C9AF9',
              boxShadow: 'rgba(0,0,0,0.03) 0px 2px 10px',
              color: '#FFFFFF'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3B89E8'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4C9AF9'}
          >
            <span className="text-[15px] font-medium">무료 서비스 보기</span>
          </button>
        </div>

        {/* 안내 문구 - 동적 메시지로 변경 */}
        <div className="text-center text-[13px] font-medium px-4" style={{ color: '#6B7280' }}>
          <p className="leading-relaxed">
            {resultData.message}
          </p>
        </div>
      </div>
    </div>
  );
}
