import profileImage from "../../public/foto-de-perfil.jpg";
import { proyectList } from "@/app/lib/utils";

export default function Projects() {

    return (
        <>
            <div className='font-code text-base text-cus-gray-3 lg:pt-20 lg:pb-10'>

                <div className='max-w-screen-xl px-4 py-12 mx-auto space-y-8'>

                    <h2 className="text-center text-2xl my-4 mx-2">

                        System.out.<strong className="text-cus-blue-0">println</strong>(<strong className="text-cus-violet-0 text-3xl">"Proyectos"</strong>);

                    </h2>

                    <hr className="my-6 sm:mx-auto lg:my-8" />
                </div>

                <div className="flex justify-center w-full p-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 animate__animated animate__slideInRight animate__slow">

                        {proyectList.map((item) => {

                            return (

                                <a key={'p' + item.name} href="#" className="group relative block bg-black rounded-xl">
                                    <img
                                        alt=""
                                        src="https://zenkit.com/wp-content/uploads/2021/11/The-Importance-Benefits-of-Project-Management-Software.jpg"
                                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl"
                                    />

                                    <div className="relative p-4 sm:p-6 lg:p-8">
                                        <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">{item.laguaje}</p>

                                        <p className="text-xl font-bold text-white sm:text-2xl">{item.name}</p>

                                        <div className="mt-32 sm:mt-48 lg:mt-64">
                                            <div
                                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                            >
                                                <p className="text-sm text-white">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                            );
                        })}



                    </div>
                </div>

            </div>
        </>
    );

}