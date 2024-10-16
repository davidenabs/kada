"use client"
import Button from '@/components/form/button';
import Input from '@/components/form/input';
import Password from '@/components/form/password';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Title } from 'rizzui';

const SignInForm: React.FC = () => {
  const router = useRouter();
  return (
    <div className='my-auto bg-white md:px-12 px-1 py-10 rounded-lg self-center shadow-lg'>

      <div className='flex flex-col items-center space-y-2'>
        <img src="/images/logo.svg" alt="" className='w-[66px]' />
        <Title as='h4'>Welcome Back to KADA!</Title>
      </div>

      <form className="flex flex-col mx-auto -center mt-8 max-w-[90%] md:max-w-full">
        <div className="text-xl font-bold text-green-800">Sign in</div>
        <div className="mt-1 text-sm font-thin text-black">Please enter your credentials to sign in</div>
        <label htmlFor="email" className="sr-only">Email</label>
        <Input placeholder="Email" id="email" className='!py-3 !px-5 !w-[369px] mt-6' />

        <label htmlFor="password" className="sr-only">Password</label>
        <Password placeholder="********" id="email" className='!py-3 !px-5 !w-[369px] mt-2' />

        <Button className='!py-3 mt-8 !rounded-full '>Sign in</Button>
        <Link href="#" className="self-end mt-2 text-sm font-light text-black">Forgot Password?</Link>
      </form>

      <div className="flex mt-10 max-w-full text-sm text-black mx-auto w-[332px]">
        <div className="grow shrink my-auto w-32 font-medium">Don't have an account?</div>
        <button onClick={() => router.push('/create-account')} className="px-5 py-2 font-bold bg-amber-300 rounded-xl max-md:pl-5">Create Account</button>
      </div>
    </div>
  );
};

export default SignInForm;