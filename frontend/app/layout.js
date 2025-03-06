import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s / Leads Management",
    default: "Leads Management",
  },
  description: "This is just a simple project to manage Leads",
  favicon: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-purple-50 text-gray-800 min-h-screen flex flex-col`}
      >
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
