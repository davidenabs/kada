
import CommunityAids from "@/components/main/about-sections/committee-aid";
import FarmManagementFeatures from "@/components/main/about-sections/farm-management";
import ForIndividuals from "@/components/main/about-sections/for-individuals";
import Statistics from "@/components/main/home-sections/statistics";
import React from "react";


const About = () => {


    return (
        <main className="bg-primary-400/20">
            <div className="flex overflow-hidden flex-col pt-[73px] md:pt-[65px]">
                <img
                    loading="lazy"
                    src={'https://cdn.builder.io/api/v1/image/assets/TEMP/fd079a69ac3e0daa6d16483aa1fd22a9fb755e761ebe30f60bd6ead474e81baf?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3'}
                    alt={'alt'}
                    className="object-contain w-full aspect-[7.41] max-md:max-w-full"
                />

            </div>

            <section className="app_container flex flex-col rounded-none pt-[83px] md:pt-[105px]">
                <div className="flex flex-col self-center max-w-full w-[828px]">
                    <h2 className="self-center text-3xl font-bold leading-tight text-green-800">
                        About Kada
                    </h2>
                    <div className="mt-9 text-base leading-6 text-center text-zinc-700 max-md:max-w-full space-y-5">
                        <p>   Kaduna State Agricultural Development Agency paves the way for a sustainable future in Kaduna.</p>
                        <p> Kaduna State Agricultural Development Agency paves the way for a sustainable future in Kaduna. Kaduna State Agricultural Development Agency paves the way for a sustainable future in Kaduna. Kaduna State Agricultural</p>
                        <p>   Development Agency paves the way for a sustainable future in Kaduna. Kaduna State Agricultural Development Agency paves the way for a sustainable future in Kaduna.</p>
                    </div>
                </div>
                <div className="flex justify-center  mt-10 w-full">
                    <div className="w-[65%] max-md:w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/426dc6926d519be041bb7ad3dbd1798ad3f80cd607a29721c8bc88eec5ea723e?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3"
                            alt="Kaduna State Agricultural Development Agency"
                            className="object-contain w-full aspect-[2.09] rounded-[32px] max-md:mt-10 max-md:max-w-full"
                        />
                    </div>
                </div>

            </section>

            <Statistics hasBg={false} />

            <section className="app_container py-[123px] md:py-[165px] flex flex-col rounded-none">
                <div className="flex flex-col self-center max-w-full w-[828px]">
                    <h2 className="self-center text-3xl font-bold leading-tight text-[#F2A50C]">
                        FOREWORD
                    </h2>
                    <div className="mt-9 text-base font-thin leading-6 text-center text-zinc-700 max-md:max-w-full space-y-5">
                        <p>  The Kaduna State Agriculture Policy has been developed to provide guidance for holistically scaling up the agricultural sector to meet the global challenges in the agri-food and value chain systems by moving the State to most outstanding position in agricultural productivity, agribusiness, women and youth inclusion, financial and social inclusion, and employment generation.</p>

                        <p>The State Agriculture Policy is an all-inclusive document that aligns the existing policies and the State Development Plan, primarily designed through a consultative process by major stakeholders, to guide our agricultural programs for economic prosperity and wealth creation, among all actors. Besides, the plan has provided the guiding principles, priority areas, target beneficiaries and geographic focus among value chains of competitive advantage across the State.</p>
                    </div>
                </div>

            </section>
            <ForIndividuals />
            <FarmManagementFeatures />
            <CommunityAids />

            {/* <div
                className="pt-[123px] md:pt-[165px] app_container h-[694px] md:h-[844px] items-center flex flex-col md:flex-row"
                style={{
                    backgroundImage: `url("/images/bg.png")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center", // Ensure image is centered
                }}
            >
            </div> */}

        </main>
    );
}

export default About;