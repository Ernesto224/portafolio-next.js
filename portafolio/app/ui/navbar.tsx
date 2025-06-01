'use client'
import { useEffect, useState } from "react";
import { routes } from "@/app/lib/utils";
import Link from "next/link";
import personalIcon from "../../public/logo-iniciales.png";
import Image from "next/image";

export default function Navbar() {

    const [openInMobile, setOpenInMobile] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.6, // Ajustá esto si querés más o menos sensibilidad
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <nav className="fixed w-[80%] h-auto z-20 m-6" >

            <ul className="flex justify-between font-code text-base text-cus-gray-3">

                <figure className="px-6 gap-x-4">

                    <Image
                        src={personalIcon}
                        alt="Icono_Personal"
                        width={75}
                    />

                </figure>

                <div className="p-6 gap-x-4">

                    {routes.map((item) => {

                        const sectionId = item.href.replace('#', '');

                        return (

                            <Link
                                key={'n' + item.name}
                                href={item.href}
                                className={`hover:bg-cus-blue-0 hover:text-cus-white-1 rounded-md px-4 py-2 
                                    transition-colors duration-200 ${activeSection === sectionId ? 'underline text-cus-violet-0' : ''}`}
                            >
                                {item.name}
                            </Link>

                        );
                    })}

                </div>

                <figure className="px-6 gap-x-4">

                    <Image
                        src={personalIcon}
                        alt="Icono_Personal"
                        width={75}
                    />

                </figure>
            </ul>

        </nav >
    );

}