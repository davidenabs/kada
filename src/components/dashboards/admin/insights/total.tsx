import Select from '@/components/form/select';
import React from 'react';

const TotalAmount: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col p-7 mx-auto w-full leading-tight bg-white rounded-lg border-[0.5px] border-solid shadow-lg border-zinc-200 max-md:p-5 max-md:mt-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full text-sm max-md:max-w-full">
        <div className="my-auto text-teal-700">TOTAL AMOUNT</div>
        <div className="flex gap-1 items-center">
          <div className="gap-2.5 self-start p-2.5 text-black">Distribution by</div>
          <Select options={[]} value={'Gender'} setValue={() => {}}  className="!py-3 !border !bg-white !px-2 !rounded"></Select>
          
          {/* <div className="flex gap-2.5 justify-center items-center px-2 py-2.5 whitespace-nowrap rounded border-zinc-700 text-zinc-700">
            <div className="self-stretch my-auto">Gender</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1c54c2a0774b828f50b59f1f31ef01713d8b702e5785e980100fd74956f04f7?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />
          </div> */}
        </div>
      </div>
      <div className="flex flex-col self-start mt-8 text-zinc-700">
        <div className="text-3xl">4,500,322.000</div>
        <div className="text-sm">Million Naira, Only</div>
      </div>
      <div className="flex flex-co items-center self-center pt10 mt-6 ">
      <img loading="lazy" src="/images/chart.png" alt="Gender distribution chart" className="object-contain -0 siz-full  h-[193px] w-[193px]" />
        {/* <div className="self-center text-xs text-green-800">Female</div> */}
        {/* <div className="flex relative flex-col items-center px-5 pt-0.5 pb-9 mt-1 w-full rounded-full aspect-[1.43] max-md:px-5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b43ed191cb84de52a6f2f3f37bdef653270a805aed47af6396d903a6b66c0eee?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3" alt="Gender distribution chart" className="object-cover absolute inset-0 size-full" />
          <div className="relative text-lg text-green-800">46%</div>
          <div className="flex relative gap-1 self-end mt-8 w-[90px]">
            <div className="grow text-lg text-white">54%</div>
            <div className="overflow-hidden gap-2 self-start px-2 py-1 text-xs text-black bg-white rounded-md">
              1,234,567.89
            </div>
          </div>
          <div className="relative mt-1.5 text-xs text-white">Male</div>
        </div> */}
      </div>
    </div>
  );
};

export default TotalAmount;