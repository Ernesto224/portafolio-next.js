import Image from "next/image";
import profileImage from "../public/perfil.jpg";

export default function Home() {

  return (
    <div className="relative isolate px-6 pt-1 lg:px-8">
      <div className="flex justify-center py-28 lg:py-32">
        <div className="w-3/4">

          <div className="grid gap-2 grid-flow-col grid-cols-2 grid-rows-1 px-14 py-6">
            <Image
              src={profileImage}
              alt="ImagenPerfil"
              className="col-span-1 place-self-center rounded-full h-[300px] w-auto object-cover py-1 px-1"
            />
            <h1 className="col-span-1 place-self-center text-4xl font-bold uppercase">
              Ernesto Santiago Vega Rodriguez
            </h1>
          </div>

          <div className="flex justify-center px-14 py-6">
            <div className="w-2/4">
              <h2 className="text-2xl font-bold uppercase">
                Desarrollador Backend y Frontend
              </h2>
              <article className="text-lg text-balance my-2">
                <p className="text-justify">
                  Soy un estudiante de Costa Rica, actualmente a un año de completar mi bachillerato en Informática en la Universidad de Costa Rica.
                  Tengo una gran pasión por la informática, especialmente por todo lo relacionado con lenguajes de bajo nivel. Me esfuerzo por realizar
                  mis tareas con la mayor calidad y dedicación posible, buscando siempre la excelencia. Además, me considero una persona con un profundo
                  interés por aprender nuevas tecnologías, especialmente aquellas que representen retos y desafíos.
                </p>
              </article>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

}