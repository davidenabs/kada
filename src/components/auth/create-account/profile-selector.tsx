"use client"
import { UserIcon, UsersIcon } from '@/icons';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';

interface ProfileType {
    icon: React.ReactNode;
    title: string;
    description: string;
    type: string;
}

const profileTypes: ProfileType[] = [
    {
        icon: <UserIcon className="object-contain w-6 h-6" />,
        title: "Farmer",
        description: "with this account you can do this and Lorem ipsum do this and Lorem",
        type: "farmer"
    },
    {
        icon: <UsersIcon className="object-contain w-6 h-6" />,
        title: "Cooperative/ Associaties",
        description: "with this account you can do this and Lorem ipsum do this and Lorem i",
        type: "cooperative",
    },
    {
        icon: <UsersIcon className="object-contain w-6 h-6" />,
        title: "Data Enumerator",
        description: "with this account you can do this and Lorem ipsum do this and Lorem",
        type: "dataEnumerator"
    },
    {
        icon: <UsersIcon className="object-contain w-6 h-6" />,
        title: "Guest",
        description: "with this account you can do this and Lorem ipsum do this and Lorem",
        type: "guest"
    }
];

const ProfileTypeSelector: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const type = searchParams?.get("type");
    const [activeType, setActiveType] = React.useState(type);

    React.useEffect(() => {
        setActiveType(!type ? "farmer" : type);
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
        <div className="flex flex-col pl-7 mt-20 max-md:pl-5 max-md:mt-10 w-full">
            <div className="flex flex-col self-start leading-tight max-md:ml-2">
                <h2 className="text-2xl font-bold text-zinc-700">Create an account</h2>
                <p className="mt-3 text-base font-medium text-neutral-500">Select a profile type</p>
            </div>
            {profileTypes.map((type, index) => (
                <button
                    key={index}
                    onClick={() => {
                        router.push(
                            `${pathname}?${createQueryString("type", `${type.type}`)}`
                        );
                    }}
                    className={`flex overflow-hidden flex-col items-start py-4 pr-14 pl-5 mt-6 w-full rounded-lg ${type.type == activeType ? 'bg-white border border-teal-700 border-solid' : 'bg-zinc-50'
                        } max-md:pr-5`}
                >
                    <div className={`flex gap-1.5 text-base font-bold leading-tight ${type.type ? 'text-green-800' : 'text-neutral-500'}`}>
                        {type.icon}
                        {/* <img loading="lazy" src={type.icon} alt="" className="object-contain shrink-0 w-6 aspect-square" /> */}
                        <div className="my-auto">{type.title}</div>
                    </div>
                    <div className="mt-4 text-xs font-light tracking-wide leading-4 text-zinc-600 text-left">
                        {type.description}
                    </div>
                </button>
            ))}
        </div>
    );
};

export default ProfileTypeSelector;