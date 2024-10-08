import Button from '@/components/form/button';
import Input from '@/components/form/input';
import Password from '@/components/form/password';
import Link from 'next/link';
import React from 'react';

const FarmerForm: React.FC = () => {
    return (
        <div className="flex flex-col my-auto w-full leading-tight max-md:mt-10 self-stretch">
            <div className="flex gap-3.5 pl-3 self-start text-base">
                <Link href="/sign-in" className="text-black underline">Login here</Link>
                <span className="basis-auto text-neutral-400">if you already have an account</span>
            </div>
            <form className="flex flex-col items-start pl-8 mt-20 max-md:pl-5 max-md:mt-10">
                <div className="flex flex-col">
                    <h2 className="text-base font-bold text-teal-700">Farmers Account</h2>
                    <p className="mt-1 text-sm font-medium text-zinc-500">Please complete the form to get started</p>
                </div>
                <div className="flex flex-col mt-9">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email</label>
                    <Input placeholder="Enter your email" className='!py-3 !max-w-full w-[369px] h-[40px]' />
                </div>
                <div className="flex flex-col mt-5">
                    <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">First Name</label>
                    <Input id="firstName" placeholder="What is your name" className='!py-3 !max-w-full w-[369px] h-[40px]' />

                </div>
                <div className="flex flex-col mt-5">
                    <label htmlFor="lastName" className="text-sm font-medium text-zinc-700">Last Name</label>

                    <Input id="lastName" placeholder="What is your Surname" className='!py-3 !max-w-full w-[369px] h-[40px]' />

                </div>
                <div className="flex flex-col mt-5 whitespace-nowrap">
                    <label htmlFor="phone" className="text-sm font-medium text-zinc-700">Phone</label>

                    <Input prefix={'+234'} type="tel" id="phone" placeholder="" className='!py-3 !max-w-full w-[369px] h-[40px]' />

                </div>

                <div className="flex flex-col mt-5 whitespace-nowrap">
                    <label htmlFor="password" className="text-sm font-medium text-zinc-700">Create Password</label>

                    <Password id="password" placeholder={'*******'} className='!py-3 !max-w-full w-[369px] h-[40px]' />
                </div>

                <div className="flex flex-col mt-5 whitespace-nowrap">
                    <label htmlFor="confirmPassword" className="text-sm font-medium text-zinc-700">Confirm Password</label>


                    <Password id="confirmPassword" placeholder={'*******'} className='!py-3 !max-w-full w-[369px] h-[40px]' />
                </div>

                <div className="flex flex-col mt-9">
                    <div className="flex gap-1.5 items-center text-sm font-light text-zinc-700">
                        <input type="checkbox" id="terms" className="w-3 h-3 border border-solid border-zinc-700" />
                        <label htmlFor="terms" className="self-stretch my-auto">
                            <span className="font-medium">I agree with the terms and conditions of this application</span>
                        </label>
                    </div>
                    <Button className='!rounded-full !py-4 mt-3.5 w-full'> Create Account</Button>
                </div>
            </form>
        </div>
    );
};

export default FarmerForm;