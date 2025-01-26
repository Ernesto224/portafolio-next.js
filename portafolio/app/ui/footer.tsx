import { SocialIcon } from "react-social-icons";
import { routes } from "@/app/lib/utils";
import Link from "next/link";

export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">

                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    {routes.map((item) => (
                        <div key={'f' + item.name} className="px-5 py-2">
                            <Link
                                href={item.href}
                                className="text-base leading-6 hover:bg-custom-blue hover:text-custom-white rounded-md px-3 py-2"
                            >
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </nav>

                <hr className="my-6 sm:mx-auto lg:my-8" />

                <div className="flex justify-center mt-8 space-x-6">
                    <SocialIcon network="github" href="https://github.com/Ernesto224"></SocialIcon>
                    <SocialIcon network="discord" href="#"></SocialIcon>
                    <SocialIcon network="linkedin" href="#"></SocialIcon>
                    <SocialIcon network="email" href="#"></SocialIcon>
                </div>

                <p className="mt-8 text-base leading-6 text-center">
                    © {year.toString()} Ernesto Santiago Vega Rodriguez.
                </p>
                
            </div>
        </footer>
    );

}