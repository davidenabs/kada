import type { Metadata } from "next";
import "./styles/globals.css";
import PreviousPathnameProvider from "@/provider/previous-pathname";
import cn from "@/utils/class_names";

export const metadata: Metadata = {
  title: "KADA",
  description: "Transforming Kaduna through Food Security and National Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-oxygen"
        )}
      >

        <PreviousPathnameProvider>
            <main className="relative">
              {children}
              {/* {modal}
          <GlobalDrawer />
          <GlobalModal /> */}
            </main>
        </PreviousPathnameProvider>
      </body>
    </html>
  );
}
