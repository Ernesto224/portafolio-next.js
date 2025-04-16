export default function Contact() {

    return (
        <>

            <div className='font-code text-base text-cus-gray-3'>

                <div className='max-w-screen-xl px-4 py-12 mx-auto space-y-8'>

                    <h2 className="text-center text-2xl my-4 mx-2">

                        System.out.<strong className="text-cus-blue-0">println</strong>(
                        <strong className="text-cus-violet-0 text-3xl">"Contacto"</strong>);

                    </h2>

                    <hr className="my-6 sm:mx-auto lg:my-8" />

                </div>

                <div className="bg-cus-black-1 bg-opacity-40 backdrop-blur-sm">
                    <div className="grid sm:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl rounded-lg">

                        <div>

                            <h1 className="text-cus-violet-0 text-3xl">Hablemos!</h1>

                            <p className="text-sm mt-4 leading-relaxed">
                                Si quieres saber más sobre mí o mis proyectos, no dudes en contactarme.
                                Estoy abierto a nuevas oportunidades y colaboraciones.
                            </p>

                            <div className="mt-12">

                                <h2 className="text-cus-violet-0 text-2xl">Correo Elctronico</h2>

                                <ul className="mt-4">

                                    <li className="flex items-center">

                                        <img src="https://skillicons.dev/icons?i=gmail" alt="linkedin" height="50" width="50" />

                                        <a href="mailto:ev402648@gmail.com" className="text-sm ml-4">

                                            <small className="block">Gmail</small>

                                            <span className="text-cus-blue-0 font-medium">info@example.com</span>

                                        </a>

                                    </li>

                                </ul>

                            </div>

                            <div className="mt-12">

                                <h2 className="text-cus-violet-0 text-xl ">Socials</h2>

                                <ul className="flex mt-4 space-x-4">

                                    <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">

                                        <a href="https://www.linkedin.com/in/ernesto224/" className="transition duration-150 ease-in-out 
                                            hover:-translate-y-1 hover:scale-110">

                                            <img src="https://user-images.githubusercontent.com/88904952/234979284-68c11d7f-1acc-4f0c-ac78-044e1037d7b0.png" 
                                                alt="linkedin" height="50" width="50" />

                                        </a>

                                    </li>

                                </ul>

                            </div>

                        </div>

                        <form className="space-y-4">
                            
                            <input type='text' placeholder='Name'
                                className="w-full text-slate-900 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500" />

                            <input type='email' placeholder='Email'
                                className="w-full text-slate-900 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500" />

                            <input type='text' placeholder='Subject'
                                className="w-full text-slate-900 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500" />

                            <textarea placeholder='Message' rows={5}
                                className="w-full text-slate-900 rounded-md px-4 border text-sm pt-2.5 outline-none focus:border-blue-500"></textarea>

                            <button type='button'
                                className="bg-cus-blue-0 hover:bg-cus-blue-1 rounded-md text-[15px] font-medium px-4 py-2 w-full !mt-6">Send</button>

                        </form>

                    </div>

                </div>

            </div>

        </>
    );

}