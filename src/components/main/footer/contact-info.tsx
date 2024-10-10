import React from 'react';

interface ContactItem {
  icon: string;
  text: string;
}

const contactItems: ContactItem[] = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/489b8414f84decb38523b3f156a647ad852fd92a0ecc0b9f9e8914b60044c239?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3", text: "kadphq@yahoo.com," },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/489b8414f84decb38523b3f156a647ad852fd92a0ecc0b9f9e8914b60044c239?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3", text: "muhammad.rii@kdsg.gov.ng" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3463aea3dbfa5c63d919d9a2d02a12b81d2bda508b26bd8ca1af937477e0e6b6?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3", text: "+2348091947789" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3463aea3dbfa5c63d919d9a2d02a12b81d2bda508b26bd8ca1af937477e0e6b6?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3", text: "+2348023023039" }
];

const ContactInformation: React.FC = () => {
  return (
    <div className="flex relative flex-col items-start pt-3 pr-11 pb-16 pl-5 max-w-full text-sm leading-snug rounded-lg bg-teal-700 bg-opacity-80 w-[279px] max-md:pr-5">
      <h3 className="text-base font-bold leading-tight text-amber-300">Contact Information</h3>
      {contactItems.map((item, index) => (
        <div key={index} className="flex gap-4 items-center mt-6 tracking-wide whitespace-nowrap">
          <img src={item.icon} alt="" className="object-contain shrink-0 w-4 aspect-square" />
          <p className="basis-auto">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactInformation;