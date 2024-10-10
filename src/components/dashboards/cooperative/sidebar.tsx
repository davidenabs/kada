import React from 'react';

interface MenuItem {
  icon: string;
  label: string;
  isActive?: boolean;
}

const menuItems: MenuItem[] = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e93444bc6d30f3267f07e3347ebae005524e3eca02b50044489f60223d4787c9?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3", label: "Dashboard", isActive: true },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e4a63f0e2fe089651a822b3c62475bdc7d40ac81ad50d94f4d4d5a970d7e44d?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3", label: "Members" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e4a63f0e2fe089651a822b3c62475bdc7d40ac81ad50d94f4d4d5a970d7e44d?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3", label: "Events" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e4a63f0e2fe089651a822b3c62475bdc7d40ac81ad50d94f4d4d5a970d7e44d?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3", label: "Opportunities" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e4a63f0e2fe089651a822b3c62475bdc7d40ac81ad50d94f4d4d5a970d7e44d?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3", label: "Funding" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e4a63f0e2fe089651a822b3c62475bdc7d40ac81ad50d94f4d4d5a970d7e44d?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3", label: "Vendors" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
      <nav className="flex overflow-hidden flex-col items-start px-6 pt-5 pb-64 mx-auto w-full leading-tight bg-white border-r-0 border-zinc-700 border-opacity-30 max-md:px-5 max-md:pb-24 max-md:mt-10">
        <div className="flex gap-2 self-center text-sm font-bold whitespace-nowrap text-zinc-700 w-[81px]">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6b4d6e77d66cf56c5fba942295afd0ceb70bf202fdc9987be0d8b86d555858c?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3" alt="" className="object-contain shrink-0 aspect-[0.97] w-[39px]" />
          <div className="my-auto">KADA</div>
        </div>
        <div className="flex gap-4 items-start self-stretch py-3.5 pr-8 pl-2.5 mt-11 rounded-2xl bg-neutral-100 max-md:pr-5 max-md:mt-10">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bec39d58f05629a4754e68f3902e0da3c492c6fc7e99b002c5b91a60ae4d2da?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3" alt="" className="object-contain shrink-0 rounded-full aspect-square w-[39px]" />
          <div className="flex flex-col mt-1.5">
            <div className="self-start text-sm font-semibold text-black">FACESIIWO</div>
            <div className="text-xs text-zinc-500">Cooperative Society</div>
          </div>
        </div>
        <h2 className="mt-16 text-sm font-semibold text-neutral-700 max-md:mt-10">MENU</h2>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex gap-2 mt-8 ml-5 text-base font-semibold whitespace-nowrap ${item.isActive ? 'text-white bg-green-600 rounded-xl px-5 py-2.5 self-stretch' : 'text-zinc-700'
              } max-md:ml-2.5`}
          >
            <img src={item.icon} alt="" className="object-contain shrink-0 self-start aspect-square w-[18px]" />
            <div>{item.label}</div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;