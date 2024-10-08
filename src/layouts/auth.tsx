"use client";
import { appAtom } from "@/stores/app";
import { useAtom } from "jotai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { Fragment, useCallback } from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const type = searchParams?.get("type");
  const [activeType, setActiveType] = React.useState(type);

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
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-green-100 p-12 min-h-screen bg-[url('/images/vector-stroke-bg.svg')] bg-no-repeat hidden lg:block">
         

          {children}
        </div>
      </section>
    </Fragment>
  );
}

export default AuthLayout;
