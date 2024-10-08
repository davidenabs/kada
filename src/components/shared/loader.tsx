import { Logo } from "@/icons";
import React, { Fragment } from "react";

const FullPageLoader = () => {
  return (
    <Fragment>
      <section className="fixed top-0 left-0 right-0 bottom-0 h-screen flex items-center justify-center bg-white flex-col space-y-6">
        <Logo className="w-12 h-12" />

        <div className="custom-loader"></div>
      </section>
    </Fragment>
  );
};

const AppLoader = () => {
  return (
    <Fragment>
      <div className="relative">
        <Logo className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="custom-loader" />
      </div>
    </Fragment>
  );
};

export { FullPageLoader };
export default AppLoader;
