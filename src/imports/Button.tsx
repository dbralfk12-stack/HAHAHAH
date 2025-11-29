export default function Button() {
  return (
    <div className="bg-white relative rounded-[12px] size-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-gray-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute flex flex-col font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] left-[163.5px] text-[17px] text-black text-center text-nowrap top-[31px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal] whitespace-pre">시작하기</p>
      </div>
    </div>
  );
}