import React from 'react';

const SignInForm: React.FC = () => {
  return (
    <form className="flex flex-col self-start mt-8">
      <div className="text-xl font-bold text-green-800">Sign in</div>
      <div className="mt-1 text-sm font-medium text-black">Please enter your credentials to sign in</div>
      <label htmlFor="email" className="sr-only">Email</label>
      <input
        type="email"
        id="email"
        className="overflow-hidden px-6 py-5 mt-6 max-w-full text-xs font-light text-black bg-zinc-100 rounded-[60px] w-[369px] max-md:px-5"
        placeholder="Email"
      />
      <div className="flex overflow-hidden gap-5 justify-between px-5 py-3.5 mt-4 text-xs font-light text-black whitespace-nowrap bg-zinc-100 rounded-[60px]">
        <label htmlFor="password" className="sr-only">Password</label>
        <input
          type="password"
          id="password"
          className="bg-transparent border-none outline-none"
          placeholder="Password"
        />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bd41b75a944d385705e1c3a340147203f8a57288f7285cabb83b31bfa4e3f28?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3" className="object-contain shrink-0 w-5 aspect-square" alt="" />
      </div>
      <button type="submit" className="overflow-hidden px-16 py-4 mt-8 text-base font-bold text-white bg-green-800 shadow-lg rounded-[60px] max-md:px-5">
        Sign in
      </button>
      <a href="#" className="self-end mt-2 text-sm font-light text-black">Forgot Password?</a>
    </form>
  );
};

export default SignInForm;