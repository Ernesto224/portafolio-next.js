'use client'
import { routes } from "@/app/lib/utils";
import Link from "next/link";

export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer className="font-code text-base text-cus-gray-3">

            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">

                <nav className="flex flex-wrap justify-center -mx-5 -my-2">

                    {routes.map((item) => (

                        <Link

                            key={'f' + item.name}
                            href={item.href}
                            className={`hover:bg-cus-blue-0 hover:text-cus-white-1  rounded-md px-4 py-2`}

                        >
                            {item.name}

                        </Link>
                    ))}

                </nav>

                <hr className="my-6 sm:mx-auto lg:my-8" />

                <p className="mt-8 text-lg leading-6 text-center">

                    © {year.toString()} Ernesto Santiago Vega Rodriguez.

                </p>

            </div>

        </footer>
    );
    
}