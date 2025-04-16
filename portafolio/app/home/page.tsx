import Image from "next/image";
import profileImage from "../../public/foto-de-perfil.jpg";

export default function Home() {

    return (
        <>
            <div className="flex justify-center lg:pt-52">

                <div className="relative w-[990px] h-[504px]">

                    <div className="bg-cus-black-1 bg-opacity-70 backdrop-blur-sm absolute right-0 bottom-0 w-[836px] 
                        h-[375px] rounded-lg transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 
                        animate__animated animate__fadeInRight animate__slow border border-cus-gray-1">

                        <div className="grid w-full h-full grid-cols-1 place-content-center gap-4 text-center p-20">

                            <div className="font-code">

                                <h2 className="text-xl my-4 mx-2">
                                    System.out.<strong className="text-cus-blue-0">
                                        println</strong>(<strong className="text-cus-violet-0 text-2xl">"Hola mundo"</strong>);
                                </h2>

                                <p className="text-base">
                                    Soy un apasionado de la tecnología y la programación. Me encanta aprender cosas nuevas y enfrentarme a nuevos retos.
                                    En mi tiempo libre disfruto de la geopolitica, el cine y los videojuegos. Siempre estoy buscando mejorar mis habilidades 
                                    y aprender nuevas tecnologías. Me gusta trabajar en proyectos desafiantes que me permitan crecer como desarrollador. 
                                    Ademas simpre estoy interesado por la ciencia y conocer más sobre el mundo que me rodea.
                                </p>

                            </div>

                        </div>

                        <div className="absolute flex justify-start w-[100%] p-4 gap-4 animate__animated animate__fadeInUp animate__slow">

                            <a href="https://github.com/Ernesto224/" className="transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110">

                                <img src="https://skillicons.dev/icons?i=github" alt="linkedin" height="50" width="50" />

                            </a>

                            <a href="https://www.linkedin.com/in/ernesto224/" className="transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110">

                                <img src="https://user-images.githubusercontent.com/88904952/234979284-68c11d7f-1acc-4f0c-ac78-044e1037d7b0.png" alt="linkedin" height="50" width="50" />

                            </a>

                        </div>

                    </div>

                    <div className="animate__animated animate__fadeInLeft animate__slow">
                        <figure className="absolute shadow-md shadow-cus-black-1 transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 top-0 left-0">

                            <Image
                                src={profileImage}
                                alt="Foto_Propia_Editada"
                                width={230}
                                height={260}
                                className="rounded-lg object-cover"
                            />

                        </figure>
                    </div>

                </div>

            </div>
        </>
    );

}