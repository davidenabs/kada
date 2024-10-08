import React from 'react';
import SignInForm from './form';

const KadaSignIn: React.FC = () => {
    return (
        <section className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col self-stretch py-10 m-auto w-full leading-tight bg-white rounded-lg border-neutral-200 shadow-[0px_4px_40px_rgba(220,220,220,0.25)] max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col px-10 w-full max-md:px-5 max-md:max-w-full">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdd3c9178164c3dc8ffc8c89afd1f012087c8348276a6f5e24eb0be90e15961d?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3" className="object-contain self-center aspect-square w-[66px]" alt="KADA logo" />
                    <h2 className="self-center mt-3.5 text-lg font-bold text-zinc-700">Welcome Back to KADA!</h2>
                    <SignInForm />
                </div>
                <div className="flex gap-10 self-center mt-10 max-w-full text-sm text-black w-[332px]">
                    <div className="grow shrink my-auto w-32 font-medium">Don't have an account?</div>
                    <button className="px-5 py-2 font-bold bg-amber-300 rounded-xl max-md:pl-5">Create Account</button>
                </div>
            </div>
        </section>
    );
};

export default KadaSignIn;