import Header from "@/components/header";
import "./globals.css";
import { PT_Mono } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import ParticlesContainer from "@/components/particles-wrapper";

const pt_mono = PT_Mono({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Huynh Thanh Hai Trieu",
  description: "github: haitrieu123580",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smoot">
      <head>
        <link rel="icon" type="image/*" href="/icon.png" />
      </head>
      <body
        className={`${pt_mono.className} text-gray-50 text-opacity-90 relative pt-28 sm:pt-36`}
      >
        <div className="bg-[#946263] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#676394] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <ParticlesContainer />

            <Header />
            <main className="flex flex-col items-center px-4">{children}</main>
            <Footer />

            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
