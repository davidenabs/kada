"use client"
import Select from '@/components/form/select';
import React, { useState } from 'react';

interface FilterDropdownProps {
  label: string;
  defaultValue: string;
  options: string[];
  width?: string;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  defaultValue,
  options,
  width = "w-[250px]"
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  return (
    <div className="flex flex-col grow shrink-0 basis-0 w-fit">
      <label htmlFor={`${label.toLowerCase().replace(/\s+/g, '-')}-select`} className="font-medium text-black">
        {label}
      </label>
      <Select options={[
        { label: "All", value: "" },
        ...options.map((option) => ({ label: option, value: option })),
      ]}
        value={selectedOption} setValue={setSelectedOption} className='bg-white !border-teal-700 !py-3' />
      {/* <div className={`flex gap-5 justify-between px-4 py-3.5 mt-2 max-w-full border border-solid border-neutral-200 rounded-[60px] text-zinc-500 ${width}`}>
        <select
          id={`${label.toLowerCase().replace(/\s+/g, '-')}-select`}
          className="my-auto bg-transparent appearance-none outline-none"
          defaultValue={defaultValue}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2efecf1abef78de503cc28649e717a2b31c7d8314c05375d782a3436730a8eec?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3"
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
      </div> */}
    </div>
  );
};

export default FilterDropdown;