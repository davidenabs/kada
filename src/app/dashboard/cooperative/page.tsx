import Header from '@/components/dashboards/cooperative/header';
import Overview from '@/components/dashboards/cooperative/overview';
import QuickActions from '@/components/dashboards/cooperative/quick-action';
import Sidebar from '@/components/dashboards/cooperative/sidebar';
import React from 'react';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import Overview from './Overview';
// import QuickActions from './QuickActions';

const CooperativeDashboard: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
        <Header />
        <main className="z-10 mt-0 w-full max-w-[1353px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <Sidebar />
            <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-4 items-start self-end text-sm leading-tight">
                  <button className="gap-2.5 self-stretch p-2.5 font-semibold text-white bg-green-600 rounded-3xl">
                    Add Member
                  </button>
                  <button className="flex gap-2.5 justify-center items-center py-2.5 pr-3 pl-6 text-black whitespace-nowrap bg-white rounded-3xl border border-black border-solid max-md:pl-5">
                    <span className="self-stretch my-auto">Import</span>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c63a2e22e0d034d58563b81a4a592c05ef9d77454c04dddf3b15dd3ee17e17cb?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
                  </button>
                </div>
                <Overview />
                <QuickActions />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CooperativeDashboard;