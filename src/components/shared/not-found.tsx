"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Title, Button } from "rizzui";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <div className="flex grow items-center px-6 xl:px-10">
        <div className="mx-auto text-center">
          <Title
            as="h1"
            className="text-[22px] font-bold leading-normal text-gray-1000 lg:text-3xl"
          >
            Sorry, the page not found
          </Title>
          <p className="mt-3 text-sm leading-loose text-gray-500 lg:mt-6 lg:text-base lg:leading-loose">
            It is looking like you may have taken a wrong turn. Don&apos;t
            worry... it
            <br className="hidden sm:inline-block" />
            happens to the best of us. Just click the button below to get back
            on track.
          </p>

          <Button
            size="xl"
            color="primary"
            className="mt-8 h-12 px-4 xl:h-14 xl:px-6"
            onClick={() => router.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
