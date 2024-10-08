
import AboutKada from "@/components/main/home-sections/about";
import ContactUs from "@/components/main/home-sections/contact";
import FosteringSection from "@/components/main/home-sections/fostering";
import MainHero from "@/components/main/home-sections/hero";
import Highlights from "@/components/main/home-sections/highlight";
import OurMandate from "@/components/main/home-sections/our-mandate";
import Statistics from "@/components/main/home-sections/statistics";
import WhatWeStandFor from "@/components/main/home-sections/what-we-stand-for";
import React from "react";



const Home = () => {

    const whatWeStandForData = {
        title: "What We Stand for",
        logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f66c95678a6de346e0db72d4b50203bb1ee4f00f74c8cd5173c48537662162db?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3",
        cards: [
            {
                iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/391186c3510337ac7a552c6de123e015c7dbe38ff0784f1f703af87be6e34f42?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3",
                title: "POLICY STATEMENT",
                description: "To ensure sustained growth in the agricultural Sector of Kaduna State through multi-Stakeholders' approach for attainment of food and nutrition security, meet industrial demand and stimulate employment"
            },
            {
                iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c2b0320a037c5bc7c23a0ff65976e42fc9f5582a043c9d11711205f8622b612?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3",
                title: "VISION",
                description: "To ensure sustained growth in the agricultural Sector of Kaduna State through multi-Stakeholders' approach for attainment of food and nutrition security, meet industrial demand and stimulate employment"
            },
            {
                iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/732a26d93f2662b21ac95576182e643fb052c1bdac18bbabc66387f443f2ff1c?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3",
                title: "MISSION",
                description: "To ensure sustained growth in the agricultural Sector of Kaduna State through multi-Stakeholders' approach for attainment of food and nutrition security, meet industrial demand and stimulate employment",
                extraImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb8179be0deb0e52a656ed551e8142f420959a70056c24eaab44f0f51cfb8003?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3"
            }
        ]
    };
    return (
        <>
            <MainHero />
            <OurMandate />

            <WhatWeStandFor {...whatWeStandForData} />

            <AboutKada />

            <FosteringSection />

            <Statistics />
            <Highlights />

            <ContactUs />




        </>
    );
}

export default Home;