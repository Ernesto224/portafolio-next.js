import "./globals.css";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="bg-custom-black text-custom-white">

        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 
          rotate-[30deg] bg-gradient-to-tr from-custom-black to-custom-blue 
          opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]">
          </div>
        </div>

        <header>
          <Navbar></Navbar>
        </header>

        <main className="h-screen">
          {children}
        </main>

        <Footer></Footer>

      </body>
    </html>
  );

}
