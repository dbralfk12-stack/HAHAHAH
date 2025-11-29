import { useState } from 'react';
import { Stethoscope } from 'lucide-react';
import { SymptomsSelection } from './components/SymptomsSelection';
import { ResultPage } from './components/ResultPage';
import { ComfortPage } from './components/ComfortPage';
import { HospitalCostPage } from './components/HospitalCostPage';

// ============================================
// 🔑 운영자 API 키 설정 (여기에 OpenAI API 키를 입력하세요!)
// ============================================
const OPERATOR_API_KEY = 'sk-...3XkA'; // 👈 여기에 'sk-...' 형식의 API 키를 붙여넣으세요!

export default function App() {
  const [currentPage, setCurrentPage] = useState<'start' | 'symptoms' | 'comfort' | 'hospitalCost' | 'result'>('start');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  
  // API 키 (운영자가 위에서 설정한 값 사용)
  const apiKey = OPERATOR_API_KEY;

  if (currentPage === 'start') {
    return (
      <StartPage 
        onStart={() => setCurrentPage('symptoms')}
      />
    );
  }

  if (currentPage === 'symptoms') {
    return (
      <SymptomsSelection
        onNext={(symptoms) => {
          setSelectedSymptoms(symptoms);
          setCurrentPage('comfort');
        }}
        onBack={() => setCurrentPage('start')}
      />
    );
  }

  if (currentPage === 'comfort') {
    return (
      <ComfortPage
        symptom={selectedSymptoms[0] || '기타'}
        ageGroup="60대"
        onNext={() => setCurrentPage('hospitalCost')}
        onBack={() => setCurrentPage('symptoms')}
        apiKey={apiKey}
      />
    );
  }

  if (currentPage === 'hospitalCost') {
    return (
      <HospitalCostPage
        symptom={selectedSymptoms[0] || '기타'}
        ageGroup="60대"
        onNext={() => setCurrentPage('result')}
        onBack={() => setCurrentPage('comfort')}
        apiKey={apiKey}
      />
    );
  }

  // AI 건강 조언 + 무료 서비스 안내 (마지막 페이지)
  return (
    <ResultPage
      symptom={selectedSymptoms[0] || '기타'}
      ageGroup="60대"
      onGoToStart={() => setCurrentPage('start')}
      onBack={() => setCurrentPage('hospitalCost')}
      apiKey={apiKey}
    />
  );
}

function StartPage({ 
  onStart
}: { 
  onStart: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-5" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-md w-full py-8">
        {/* 카피 텍스트 */}
        <div className="bg-white rounded-2xl p-4 mb-6" style={{ boxShadow: 'rgba(0,0,0,0.03) 0px 2px 10px' }}>
          <div className="text-center text-[15px] font-normal" style={{ color: '#6B7280' }}>
            <p className="mb-0">간단 설문으로 보험 적용 여부를</p>
            <p>확인하세요</p>
          </div>
        </div>

        {/* 청진기 아이콘 */}
        <div className="flex justify-center mb-6">
          <Stethoscope size={120} strokeWidth={2} style={{ color: '#4C9AF9' }} />
        </div>

        {/* AI 동반자 안내 */}
        <div className="mb-6 p-5 rounded-xl" style={{ 
          background: 'linear-gradient(135deg, #E7F6F2 0%, #FFFFFF 100%)',
          border: '2px solid #A6E3D6',
          boxShadow: 'rgba(76, 154, 249, 0.1) 0px 8px 24px'
        }}>
          <p className="text-[16px] font-semibold text-center mb-2" style={{ color: '#047857' }}>
            AI가 당신과 함께합니다
          </p>
          <p className="text-[13px] text-center mb-0" style={{ color: '#6B7280', lineHeight: '1.6' }}>
            걱정하지 마세요, 혼자가 아니에요
          </p>
        </div>

        {/* 시작하기 버튼 */}
        <button
          onClick={onStart}
          className="w-full rounded-xl py-4 transition-colors text-center border"
          style={{ 
            backgroundColor: '#4C9AF9',
            borderColor: '#4C9AF9',
            boxShadow: 'rgba(76, 154, 249, 0.3) 0px 4px 16px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#3B89E8';
            e.currentTarget.style.borderColor = '#3B89E8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#4C9AF9';
            e.currentTarget.style.borderColor = '#4C9AF9';
          }}
        >
          <span className="text-[17px] font-semibold" style={{ color: '#FFFFFF' }}>함께 시작하기</span>
        </button>
      </div>
    </div>
  );
}
