"use client";
import AppLoader from "@/components/shared/loader";
import React, { Suspense } from "react";

const MainDashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Suspense fallback={<div className=""><AppLoader /></div>}>
        {children}
      </Suspense>
    </>
  );
};

export default MainDashboardLayout;
