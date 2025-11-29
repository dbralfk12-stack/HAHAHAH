function Button() {
  return (
    <div className="absolute bg-white h-[101px] left-[25px] rounded-[12px] top-[244.75px] w-[164px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-gray-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute flex flex-col font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] h-[19px] justify-center leading-[0] left-[calc(50%-0.1px)] text-[17px] text-center text-gray-800 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[34.303px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">두통</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white h-[101px] left-[205px] rounded-[12px] top-[244.75px] w-[164px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-gray-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute flex flex-col font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] h-[19px] justify-center leading-[0] left-[calc(50%-0.09px)] text-[17px] text-center text-gray-800 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[90.069px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">코막힘/콧물</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white h-[101px] left-[25px] rounded-[12px] top-[367.75px] w-[164px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-gray-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute flex flex-col font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] h-[19px] justify-center leading-[0] left-[calc(50%-0.09px)] text-[17px] text-center text-gray-800 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[90.069px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">기침/목아픔</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white h-[101px] left-[205px] rounded-[12px] top-[367.75px] w-[164px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-gray-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute flex flex-col font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] h-[19px] justify-center leading-[0] left-[calc(50%-0.1px)] text-[17px] text-center text-gray-800 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[34.303px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">복통</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white h-[101px] left-[25px] rounded-[12px] top-[490.75px] w-[164px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-gray-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute flex flex-col font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] h-[19px] justify-center leading-[0] left-[calc(50%-0.1px)] text-[17px] text-center text-gray-800 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[73.042px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">소화 불량</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white h-[101px] left-[205px] rounded-[12px] top-[490.75px] w-[164px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-gray-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute flex flex-col font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] h-[19px] justify-center leading-[0] left-[calc(50%-0.1px)] text-[17px] text-center text-gray-800 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[34.303px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">기타</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white h-[63px] left-[33px] right-[33px] rounded-[12px] top-[719px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-gray-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute flex flex-col font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] h-[19px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[17px] text-center text-gray-800 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[34.303px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal]">다음</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="1-1">
      <div className="absolute flex flex-col font-['Segoe_UI:Bold','Noto_Sans_KR:Bold',sans-serif] h-[95px] justify-center leading-[39.2px] left-[calc(50%+0.5px)] text-[28px] text-center text-gray-800 top-[127.25px] translate-x-[-50%] translate-y-[-50%] w-[156px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="mb-0">현재 증상을</p>
        <p>선택하세요</p>
      </div>
      {[...Array(2).keys()].map((_, i) => (
        <Button key={i} />
      ))}
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}
