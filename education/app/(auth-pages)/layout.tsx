import localFont from "next/font/local";
import "../globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navigation */}
        <nav className="border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">EduAI</h1>
              </div>
              <div className="flex gap-4">
                <Link href={'/sign-in'}>                
                  <button className="px-4 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                    Login
                  </button>
                </Link>
                <Link href={'/sign-up'}>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Render children below the navbar */}
        {children}
      </body>
    </html>
  );
}
