'use client'
import { useState } from "react";
import { usePathname } from "next/navigation";
import { routes } from "@/app/lib/utils";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

export default function Navbar() {

    const [openInMobile, setOpenInMobile] = useState(false);
    const currentRoute = usePathname();

    return (
        <div className="fixed w-full z-20 top-0 start-0 py-2">

            {/* nav principal para ordenadores y pantallas anchas*/}
            <nav className="bg-custom-black bg-opacity-60 flex justify-between p-6 lg:px-8">
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setOpenInMobile(!openInMobile)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                    >

                        {openInMobile ?
                            <XMarkIcon aria-hidden="false" className="block size-6" /> :
                            <Bars3Icon aria-hidden="true" className="block size-6" />}

                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {routes.map((item) => (
                        <Link
                            key={'n'+item.name}
                            href={item.href}
                            className={`text-sm/6 font-semibold 
                                hover:bg-custom-blue hover:text-custom-white
                                rounded-md px-3 py-2 
                                ${currentRoute === item.href ? 'bg-custom-black-2' : ''}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>

            {/*nav para dispositivos moviles y pantallas largas*/}
            {openInMobile &&
                <div className="bg-custom-black sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {routes.map((item) => (
                            <Link
                                key={'m'+item.name}
                                href={item.href}
                                className={`text-custom-white block rounded-md px-3 py-2 text-base
                                 ${currentRoute === item.href ? 'bg-custom-black-2' :
                                        'hover:bg-custom-blue hover:text-custom-white'}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            }

        </div>
    );

}