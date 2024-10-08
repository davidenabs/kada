import React, { Suspense } from "react";

export default function MainAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div className="">Loading...</div>}>
      {children}
    </Suspense>
  );
}
