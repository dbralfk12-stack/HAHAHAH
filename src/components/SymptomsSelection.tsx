import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface SymptomsSelectionProps {
  onNext: (selectedSymptoms: string[]) => void;
  onBack: () => void;
}

export function SymptomsSelection({ onNext, onBack }: SymptomsSelectionProps) {
  const [selectedSymptom, setSelectedSymptom] = useState<string>('');

  const symptoms = [
    { id: 'headache', label: '두통' },
    { id: 'congestion', label: '코막힘/콧물' },
    { id: 'cough', label: '기침/목아픔' },
    { id: 'stomachache', label: '복통' },
    { id: 'indigestion', label: '소화불량' },
    { id: 'other', label: '기타' },
  ];

  const selectSymptom = (symptomId: string) => {
    setSelectedSymptom(symptomId);
  };

  const handleNext = () => {
    if (selectedSymptom) {
      const symptomLabel = symptoms.find(s => s.id === selectedSymptom)?.label || '기타';
      onNext([symptomLabel]);
    }
  };

  return (
    <div className="relative min-h-screen px-5 py-8" style={{ backgroundColor: '#FFFFFF' }}>
      {/* 뒤로가기 버튼 */}
      <button
        onClick={onBack}
        className="absolute left-5 top-8 p-2 rounded-full transition-colors z-10"
        style={{ backgroundColor: 'transparent' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(76, 154, 249, 0.1)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        aria-label="뒤로가기"
      >
        <ArrowLeft size={24} strokeWidth={2} style={{ color: '#4C9AF9' }} />
      </button>

      {/* 타이틀 */}
      <div className="text-center mb-6 pt-8">
        <h1 className="text-2xl font-bold mb-2" style={{ color: '#4B5563' }}>
          증상을 선택하세요
        </h1>
        <p className="text-[14px]" style={{ color: '#9CA3AF' }}>
          걱정 마세요, 함께 확인해볼게요
        </p>
      </div>

      {/* 증상 버튼들 - 2x3 그리드 */}
      <div className="mb-6">
        <div className="grid grid-cols-2 gap-4">
          {symptoms.map((symptom) => (
            <button
              key={symptom.id}
              onClick={() => selectSymptom(symptom.id)}
              className={`h-[101px] rounded-xl transition-all p-4 border`}
              style={
                selectedSymptom === symptom.id
                  ? {
                      backgroundColor: '#4C9AF9',
                      borderColor: '#4C9AF9',
                      boxShadow: 'rgba(0,0,0,0.03) 0px 2px 10px'
                    }
                  : {
                      backgroundColor: '#F0F7FF',
                      borderColor: '#D7E7FF',
                      boxShadow: 'rgba(0,0,0,0.03) 0px 2px 10px'
                    }
              }
              onMouseEnter={(e) => {
                if (selectedSymptom !== symptom.id) {
                  e.currentTarget.style.backgroundColor = '#E3F2FF';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedSymptom !== symptom.id) {
                  e.currentTarget.style.backgroundColor = '#F0F7FF';
                }
              }}
            >
              <div className={`flex flex-col justify-center h-full text-[15px] font-medium text-center`}
                style={{ color: selectedSymptom === symptom.id ? '#FFFFFF' : '#4B5563' }}
              >
                <p className="leading-[normal]">{symptom.label}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 다음 버튼 */}
      <div className="absolute left-5 right-5 bottom-8">
        <button
          onClick={handleNext}
          disabled={!selectedSymptom}
          className={`w-full h-[63px] rounded-xl transition-all border ${
            !selectedSymptom ? 'cursor-not-allowed' : ''
          }`}
          style={
            selectedSymptom
              ? {
                  backgroundColor: '#F0F7FF',
                  borderColor: '#D7E7FF',
                  boxShadow: 'rgba(0,0,0,0.03) 0px 2px 10px'
                }
              : {
                  backgroundColor: '#E5E7EB',
                  borderColor: '#D1D5DB',
                  boxShadow: 'rgba(0,0,0,0.03) 0px 2px 10px'
                }
          }
          onMouseEnter={(e) => {
            if (selectedSymptom) {
              e.currentTarget.style.backgroundColor = '#E3F2FF';
            }
          }}
          onMouseLeave={(e) => {
            if (selectedSymptom) {
              e.currentTarget.style.backgroundColor = '#F0F7FF';
            }
          }}
        >
          <div className={`flex flex-col justify-center text-[15px] font-medium text-center`}
            style={{ color: selectedSymptom ? '#4B5563' : '#9CA3AF' }}
          >
            <p className="leading-[normal]">다음</p>
          </div>
        </button>
      </div>
    </div>
  );
}