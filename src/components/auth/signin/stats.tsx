import React from 'react';

const LandStats: React.FC = () => {
    return (
        <section className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col items-start px-20 pb-32 w-full min-h-[862px] pt-[500px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a04c881d182d0bd62d76c0039cad6a47f409a29cc5b4d6301b9aaad89898543e?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3" className="object-cover absolute inset-0 size-full" alt="Aerial view of arable land" />
                <h1 className="relative text-4xl font-medium leading-10 text-emerald-50 w-[312px]">
                    4.5 Million Hectres (97%) Arable Land
                </h1>
                <p className="relative mt-5 text-lg leading-6 text-amber-300 w-[329px]">
                    2.9 Million Hectres (65%) under cultivation
                </p>
                <div className="flex relative gap-3 mt-9">
                    <div className="flex shrink-0 bg-green-500 rounded-lg h-[9px] w-[94px]" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                    <div className="flex shrink-0 rounded-lg bg-zinc-300 bg-opacity-30 h-[9px] w-[94px]" />
                    <div className="flex shrink-0 rounded-lg bg-zinc-300 bg-opacity-30 h-[9px] w-[94px]" />
                </div>
            </div>
        </section>
    );
};

export default LandStats;