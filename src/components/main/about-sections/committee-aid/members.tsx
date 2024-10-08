import React from 'react';

interface CommitteeMemberProps {
    name: string;
    role: string;
    imageSrc: string;
}

const CommitteeMember: React.FC<CommitteeMemberProps> = ({ name, role, imageSrc }) => {
    return (
        <article className="flex flex-col min-w-[240px] w-[259px]">
            {/* <div className="flex relative flex-col justify-center px-7 py-11 w-full aspect-[1.061] max-md:px-5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/240270da29524dea205846190aa1fdf66d73a7c34b44576cb920e3cc2d0f1690?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3" alt="" className="object-cover absolute inset-0 size-full" />
        <img loading="lazy" src={imageSrc} alt={`${name}'s profile`} className="object-contain rounded-full aspect-square w-[161px]" />
      </div> */}
            <div className="relative flex justify-center items-center">
                <img src="/images/vector-bg.png" alt="img-1" className="rounded-full w-[250px] mb-0 fill-red-200" />

                <img src="/images/uba.png" alt="img-2" className="rounded-full w-[161px] h-[161px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-0" />
            </div>
            <div className="flex flex-col items-center self-center mt-3 leading-tight text-black">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="mt-1.5 text-base">{role}</p>
            </div>
        </article>
    );
};

export default CommitteeMember;