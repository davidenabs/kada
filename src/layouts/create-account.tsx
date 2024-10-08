"use client";
import FarmerForm from "@/components/auth/create-account/forms/farmer";
import ProfileTypeSelector from "@/components/auth/create-account/profile-selector";
import LandStatsCarousel from "@/components/auth/signin/stats";
import useScreenSize from "@/hooks/use-screen-size";
import useUserType from "@/hooks/use-user-type";
import { appAtom } from "@/stores/app";
import { useAtom } from "jotai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { Fragment, useCallback } from "react";

function CreateAccountLayout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const type = searchParams?.get("type");
  const [activeType, setActiveType] = React.useState(type);
  const { width } = useScreenSize();
  const { userType } = useUserType();

  const [app, updateApp] = useAtom(appAtom);

  React.useEffect(() => {
    setActiveType(!type ? "citizen" : type);
  }, [type]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams?.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <Fragment>
      <section className="grid grid-cols-1 lg:grid-cols-3 items-start bg-white min-h-screen">
        <div className="flex flex-col max-md:mt-10 px-20 pt-10 w-full border-r self-stretch">
          <img
            loading="lazy"
            src="/images/logo.svg"
            alt="Company logo"
            className="object-contain aspect-square w-[50px]"
          />
          <ProfileTypeSelector />
        </div>
        {/* dynamic content */}
        {children}
        <div className="flex flex-col ml-5 w-full self-stretch max-md:ml-0 max-md:w-full">
          {/* dynamic image */}
          <img
            loading="lazy"
            src={
              userType == 'farmer'
                ? `/images/auth-farm-bg.png`
                : userType == 'cooperative'
                  ? `/images/auth-coop-bg.png`
                  : userType == 'dataEnumerator'
                    ? `/images/auth-data-bg.png`
                    : userType == 'guest'
                      ? `/images/auth-guest-bg.png`
                      : `/images/auth-guest-bg.png`
            }
            alt="Illustration of account creation process"
            className="object-cover grow w-full h-full aspect-[0.43] max-md:mt-10"
          />
        </div>

      </section>

    </Fragment>
  );
}

export default CreateAccountLayout;

