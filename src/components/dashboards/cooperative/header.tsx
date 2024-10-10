import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex flex-wrap gap-5 justify-between items-start px-16 pt-3.5 pb-7 w-full leading-tight bg-white max-md:px-5 max-md:max-w-full">
            <h1 className="mt-3.5 text-base font-bold text-zinc-700">Dashboard</h1>
            <div className="flex gap-1 items-start text-xs">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/beab14d80f6f6239470e3266db0abd931492827a1799773b0f091fbdc21b309c?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3" alt="" className="object-contain shrink-0 w-7 rounded-md aspect-square" />
                <div className="flex flex-col h-[29px]">
                    <div className="flex gap-1 items-end font-bold text-green-800">
                        <span>John Emmanuel</span>
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a372f2dd9322a139bfecb23005028dcb756c8893933af728ae33b2b858380cfc?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3" alt="" className="object-contain shrink-0 w-3.5 aspect-square" />
                    </div>
                    <div className="font-light text-zinc-700">Admin</div>
                </div>
            </div>
        </header>
    );
};

export default Header;