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

      <body className="relative h-full w-full bg-[#32588D]">

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
