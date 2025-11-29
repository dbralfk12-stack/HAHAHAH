import { useState, useEffect } from 'react';
import { Sparkles, Lightbulb, Wallet } from 'lucide-react';
import { generateHealthAdvice, AIAdviceResponse } from '../utils/openai';

interface ResultPageProps {
  symptom: string;
  ageGroup: string;
  onGoToStart: () => void;
  onBack: () => void;
  apiKey: string;
}

export function ResultPage({ symptom, ageGroup, onGoToStart, onBack, apiKey }: ResultPageProps) {
  // AI 조언 상태 관리
  const [aiAdvice, setAiAdvice] = useState<AIAdviceResponse | null>(null);
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  // AI 조언 가져오기
  useEffect(() => {
    if (apiKey) {
      setIsLoadingAI(true);
      setAiError(null);
      
      generateHealthAdvice({ symptom, ageGroup, apiKey })
        .then(advice => {
          setAiAdvice(advice);
          setIsLoadingAI(false);
        })
        .catch(error => {
          console.error('AI 조언 생성 실패:', error);
          setAiError('AI 조언을 불러오는데 실패했습니다.');
          setIsLoadingAI(false);
        });
    }
  }, [symptom, ageGroup, apiKey]);
  
  return (
    <div className="relative min-h-screen px-5 py-8" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="w-full max-w-[340px] mx-auto">
        {/* 타이틀 */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-2" style={{ color: '#4B5563' }}>
            함께 관리해요
          </h1>
          <p className="text-[14px]" style={{ color: '#9CA3AF' }}>
            AI가 당신의 건강을 함께 돌봐드릴게요
          </p>
        </div>

        {/* AI 맞춤 조언 섹션 */}
        {apiKey && (
          <div 
            className="mb-6 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, #F0F7FF 0%, #FFF9E6 100%)',
              boxShadow: 'rgba(0,0,0,0.05) 0px 4px 15px',
              padding: '20px',
              border: '2px solid #E3F2FF'
            }}
          >
            {/* 헤더 */}
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={20} style={{ color: '#4C9AF9' }} />
              <h3 className="text-base font-semibold" style={{ color: '#4B5563' }}>
                함께하는 건강 조언
              </h3>
            </div>

            {/* 로딩 상태 */}
            {isLoadingAI && (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: '#4C9AF9' }}></div>
                <p className="text-[13px] font-medium mt-3" style={{ color: '#6B7280' }}>
                  AI가 당신을 위한 조언을 준비하고 있어요...
                </p>
              </div>
            )}

            {/* 에러 상태 */}
            {aiError && (
              <div className="text-center py-4">
                <p className="text-[13px] font-medium" style={{ color: '#DC2626' }}>
                  {aiError}
                </p>
                <p className="text-[12px] mt-2" style={{ color: '#6B7280' }}>
                  API 키를 확인해주세요.
                </p>
              </div>
            )}

            {/* AI 조언 표시 */}
            {!isLoadingAI && !aiError && aiAdvice && (
              <div className="space-y-4">
                {/* 맞춤 조언 */}
                <div 
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: '#FFFFFF', border: '1px solid #E3F2FF' }}
                >
                  <p className="text-[15px] font-normal leading-relaxed" style={{ color: '#4B5563' }}>
                    {aiAdvice.advice}
                  </p>
                </div>

                {/* 생활 관리 팁 */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb size={16} style={{ color: '#F59E0B' }} />
                    <h4 className="text-[14px] font-semibold" style={{ color: '#4B5563' }}>
                      생활 관리 팁
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {aiAdvice.tips.map((tip, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-2 p-3 rounded-lg"
                        style={{ backgroundColor: '#FFFFFF', border: '1px solid #E3F2FF' }}
                      >
                        <span className="text-[13px] font-medium" style={{ color: '#4C9AF9' }}>
                          {index + 1}.
                        </span>
                        <p className="text-[13px] font-normal flex-1" style={{ color: '#6B7280' }}>
                          {tip}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 비용 절약 팁 */}
                <div 
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: '#FFF9E6', border: '1px solid #FFE8A3' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Wallet size={16} style={{ color: '#C77700' }} />
                    <h4 className="text-[14px] font-semibold" style={{ color: '#C77700' }}>
                      비용 절약 팁
                    </h4>
                  </div>
                  <p className="text-[13px] font-normal" style={{ color: '#92400E' }}>
                    {aiAdvice.costSavingTip}
                  </p>
                </div>
              </div>
            )}

            {/* API 키 없을 때 */}
            {!apiKey && (
              <div className="text-center py-4">
                <p className="text-[13px] font-medium" style={{ color: '#6B7280' }}>
                  시작 페이지에서 API 키를 설정하시면<br />AI 맞춤 조언을 받으실 수 있습니다.
                </p>
              </div>
            )}
          </div>
        )}

        {/* 무료 서비스 안내 통합 카드 */}
        <div 
          className="mb-6 rounded-2xl"
          style={{
            backgroundColor: '#FFFFFF',
            boxShadow: 'rgba(0,0,0,0.03) 0px 2px 10px',
            padding: '20px'
          }}
        >
          {/* 카드 헤더 */}
          <h3 className="text-base font-semibold mb-2" style={{ color: '#4B5563' }}>
            비용이 걱정되신다면
          </h3>
          <p className="text-[15px] font-normal mb-5" style={{ color: '#6B7280' }}>
            이런 무료 건강 서비스를 먼저 이용해 보실 수 있어요.
          </p>

          {/* 보건소 섹션 */}
          <div className="mb-5">
            <h4 className="text-[15px] font-semibold mb-2" style={{ color: '#4B5563' }}>
              보건소 기본 검사
            </h4>
            <p className="text-[13px] font-normal mb-3" style={{ color: '#6B7280' }}>
              혈압·혈당·체성분 등 기본 검사를 무료로 받을 수 있어요.
            </p>
            <a
              href="https://m.map.naver.com/search2/search.naver?query=%EB%B3%B4%EA%B1%B4%EC%86%8C"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-lg transition-colors"
              style={{
                backgroundColor: '#F0F7FF',
                color: '#4B5563',
                border: '1px solid #D7E7FF'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E3F2FF'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F0F7FF'}
            >
              <span className="text-[13px] font-medium">근처 보건소 찾기</span>
            </a>
          </div>

          {/* 건강센터 섹션 */}
          <div>
            <h4 className="text-[15px] font-semibold mb-2" style={{ color: '#4B5563' }}>
              지역 건강센터 프로그램
            </h4>
            <p className="text-[13px] font-normal mb-3" style={{ color: '#6B7280' }}>
              체력측정, 운동 프로그램, 만성질환 관리 등 다양한 무료 서비스를 이용할 수 있어요.
            </p>
            <a
              href="https://sugang.gm.go.kr/ilms/learning/learningList.do?searchCondition=1&searchKeyword=%EA%B1%B4%EA%B0%95&pageIndex=1&a_search_ch="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-lg transition-colors"
              style={{
                backgroundColor: '#F0F7FF',
                color: '#4B5563',
                border: '1px solid #D7E7FF'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E3F2FF'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F0F7FF'}
            >
              <span className="text-[13px] font-medium">근처 건강센터 찾기</span>
            </a>
          </div>
        </div>

        {/* 면책 조항 */}
        <div className="mb-6 p-3 rounded-lg" style={{ backgroundColor: '#F9FAFB', border: '1px solid #F3F4F6' }}>
          <p className="text-[11px] leading-snug text-center" style={{ color: '#9CA3AF' }}>
            ⚠️ 본 결과는 AI 분석에 기반한 참고용 정보이며, 의학적 진단이 아닙니다.<br/>
            정확한 증상 확인 및 치료는 반드시 전문 의료기관을 방문해주시기 바랍니다.
          </p>
        </div>

        {/* 하단 버튼들 */}
        <div className="grid grid-cols-2 gap-3">
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
            onClick={onGoToStart}
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
            <span className="text-[15px] font-medium">처음으로</span>
          </button>
        </div>
      </div>
    </div>
  );
}
