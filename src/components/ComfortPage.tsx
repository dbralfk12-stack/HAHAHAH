import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { getResultData } from '../data/resultData';
import { generateHospitalVisitTips, HospitalVisitTipsResponse } from '../utils/openai';

interface ComfortPageProps {
  symptom: string;
  ageGroup: string;
  onNext: () => void;
  onBack: () => void;
  apiKey: string;
}

export function ComfortPage({ symptom, ageGroup, onNext, onBack, apiKey }: ComfortPageProps) {
  const resultData = getResultData(symptom, ageGroup);
  
  // AI 위로 메시지 상태 관리
  const [visitTips, setVisitTips] = useState<HospitalVisitTipsResponse | null>(null);
  const [isLoadingTips, setIsLoadingTips] = useState(false);
  const [tipsError, setTipsError] = useState<string | null>(null);

  // AI 위로 메시지 가져오기
  useEffect(() => {
    if (apiKey) {
      setIsLoadingTips(true);
      setTipsError(null);
      
      generateHospitalVisitTips({ 
        symptom, 
        ageGroup, 
        department: resultData.departments[0],
        apiKey 
      })
        .then(tips => {
          setVisitTips(tips);
          setIsLoadingTips(false);
        })
        .catch(error => {
          console.error('AI 위로 메시지 생성 실패:', error);
          setTipsError('기본 메시지를 표시합니다');
          setIsLoadingTips(false);
        });
    }
  }, [symptom, ageGroup, apiKey, resultData.departments]);

  return (
    <div className="relative min-h-screen px-5 py-8" style={{ backgroundColor: '#FFFBF8' }}>
      <div className="w-full max-w-[380px] mx-auto">
        {/* 타이틀 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
            style={{ backgroundColor: '#FFE4EC' }}
          >
            <Heart size={40} style={{ color: '#E91E63' }} fill="#E91E63" />
          </div>
          <h1 className="text-[28px] font-bold" style={{ color: '#4B5563', lineHeight: '1.5' }}>
            혼자가 아니에요, 함께해요
          </h1>
        </div>

        {/* AI 위로 메시지 */}
        <div className="mb-8">
          {/* 로딩 */}
          {apiKey && isLoadingTips && (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 mb-5" style={{ borderColor: '#E91E63' }}></div>
              <p className="text-[17px] font-medium" style={{ color: '#9CA3AF', lineHeight: '1.5' }}>
                메시지를 준비하고 있어요...
              </p>
            </div>
          )}

          {/* 에러 알림 */}
          {tipsError && (
            <div className="mb-5 p-4 rounded-xl" style={{ backgroundColor: '#FEF3CD' }}>
              <p className="text-[16px] font-medium text-center" style={{ color: '#92400E', lineHeight: '1.5' }}>
                {tipsError}
              </p>
            </div>
          )}

          {/* AI 위로 메시지 표시 */}
          {((apiKey && !isLoadingTips) || !apiKey) && (
              <div className="space-y-6">
                {/* 위로의 메시지 */}
                <div 
                  className="p-7 rounded-2xl"
                  style={{ 
                    background: 'linear-gradient(135deg, #FFF5F7 0%, #FFFFFF 100%)',
                    border: '2px solid #FFD6E0',
                    boxShadow: 'rgba(233, 30, 99, 0.08) 0px 8px 24px'
                  }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[28px]">💝</span>
                    <h3 className="text-[18px] font-semibold" style={{ color: '#C2185B', lineHeight: '1.4' }}>
                      위로의 메시지
                    </h3>
                  </div>
                  <p className="text-[18px] font-normal" style={{ color: '#4B5563', lineHeight: '1.7' }}>
                    {visitTips ? visitTips.comfortMessage : '걱정하지 마세요. 많은 분들이 비슷한 증상을 겪으시고 좋아지셨어요. 괜찮아요, 함께 해요!'}
                  </p>
                </div>

                {/* 안심 포인트 */}
                <div 
                  className="p-7 rounded-2xl"
                  style={{ 
                    background: 'linear-gradient(135deg, #E7F6F2 0%, #FFFFFF 100%)',
                    border: '2px solid #A6E3D6',
                    boxShadow: 'rgba(76, 154, 249, 0.08) 0px 8px 24px'
                  }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[28px]">✨</span>
                    <h3 className="text-[18px] font-semibold" style={{ color: '#047857', lineHeight: '1.4' }}>
                      안심하세요
                    </h3>
                  </div>
                  <p className="text-[18px] font-normal" style={{ color: '#4B5563', lineHeight: '1.7' }}>
                    {visitTips ? visitTips.reassurance : `잘 선택하셨어요. ${resultData.departments[0]}이(가) 이 증상에 가장 적합합니다.`}
                  </p>
                </div>

                {/* 마음 편히 준비하는 팁 */}
                <div 
                  className="p-7 rounded-2xl"
                  style={{ 
                    background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                    border: '2px solid #FFE8A3',
                    boxShadow: 'rgba(255, 193, 7, 0.08) 0px 8px 24px'
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[28px]">🌸</span>
                    <h3 className="text-[18px] font-semibold" style={{ color: '#C77700', lineHeight: '1.4' }}>
                      준비 팁
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {(visitTips ? visitTips.practicalAdvice : [
                      '가족이나 친구와 함께 가시면 마음이 편안합니다.',
                      '궁금한 점은 미리 메모해 가세요.',
                      '긍정적인 마음으로 방문해보세요.'
                    ]).map((advice, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-4 p-5 rounded-xl"
                        style={{ backgroundColor: '#FFFFFF', border: '2px solid #FFE8A3' }}
                      >
                        <span 
                          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[16px] font-bold mt-1"
                          style={{ backgroundColor: '#FFF3CD', color: '#C77700' }}
                        >
                          {index + 1}
                        </span>
                        <p className="text-[17px] font-normal flex-1" style={{ color: '#4B5563', lineHeight: '1.7' }}>
                          {advice}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
        </div>

        {/* 하단 버튼들 */}
        <div className="grid grid-cols-2 gap-4 mt-10">
          <button
            onClick={onBack}
            className="h-[56px] rounded-xl transition-colors flex items-center justify-center border p-4"
            style={{
              backgroundColor: '#F3F4F6',
              borderColor: '#E5E7EB',
              color: '#6B7280'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E5E7EB'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
          >
            <span className="text-[17px] font-medium">이전</span>
          </button>
          <button
            onClick={onNext}
            disabled={isLoadingTips}
            className="h-[56px] rounded-xl transition-colors flex items-center justify-center border p-4"
            style={{
              backgroundColor: isLoadingTips ? '#F3F4F6' : '#E91E63',
              borderColor: isLoadingTips ? '#E5E7EB' : '#E91E63',
              color: isLoadingTips ? '#9CA3AF' : '#FFFFFF',
              cursor: isLoadingTips ? 'not-allowed' : 'pointer'
            }}
            onMouseEnter={(e) => {
              if (!isLoadingTips) e.currentTarget.style.backgroundColor = '#C2185B';
            }}
            onMouseLeave={(e) => {
              if (!isLoadingTips) e.currentTarget.style.backgroundColor = '#E91E63';
            }}
          >
            <span className="text-[17px] font-medium">병원 정보 보기</span>
          </button>
        </div>
      </div>
    </div>
  );
}
