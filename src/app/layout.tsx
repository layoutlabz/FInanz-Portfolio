import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import FooterWrapper from "@/components/FooterWrapper";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lorem Portfolio - Ihr Partner für finanzielle Freiheit",
  description: "Entdecken Sie unsere umfassenden Lorem ipsum Dienstleistungen und Investmentstrategien für Ihre finanzielle Zukunft.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable} suppressHydrationWarning>
      <body className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 bg-pattern min-h-screen antialiased">
        <div className="flex flex-col min-h-screen relative">
          {/* Animated Background Elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl animate-float-enhanced"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl animate-float-enhanced" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-teal-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
          </div>
          
          {/* Demo Disclaimer Banner */}
          <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 px-4 shadow-lg">
            <p className="text-sm font-medium">
              ⚠️ DEMO/VORSCHAU - Alle Inhalte sind fiktiv und dienen nur Präsentationszwecken
            </p>
          </div>
          
          <ClientWrapper />
          <main className="flex-grow relative z-10">
            {children}
          </main>
          <FooterWrapper />
        </div>
      </body>
    </html>
  );
}
