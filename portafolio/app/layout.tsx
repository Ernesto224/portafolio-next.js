import "./globals.css";
import "animate.css";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import { Source_Code_Pro } from 'next/font/google'

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-code', // esto permite usarla en Tailwind como CSS variable
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es" className={`scroll-smooth ${sourceCodePro.variable}`}>

      {/*
       <body className="bg-gradient-to-bl from-cus-blue-1 to-cus-black-0">

        <div className="fixed inset-0 z-10 pointer-events-none bg-[length:50px_50px] bg-[linear-gradient(to_right,rgba(255,0,0,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,0,0,0.10)_1px,transparent_1px)]"></div>

        <body className="relative h-full w-full bg-black">

        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        </div>
        <div className="fixed left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]">
        </div>
      */}
      <body className="relative h-full w-full bg-black">

        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        <div className="fixed z-10 left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>

        <div className="relative h-full w-full z-50">

          <header className="flex justify-center">

            <Navbar></Navbar>

          </header>

          <main>

            {children}

          </main>

          <Footer></Footer>

        </div>


      </body>

    </html>
  );

}
