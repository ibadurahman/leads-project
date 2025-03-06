import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";

export default function Home() {
  return (
    <div className="mt-24">
      <Image
        src={bg}
        fill
        alt="background images"
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Simple Leads Management Apps.
        </h1>
        <Link
          href="/leads"
          className="bg-gray-300 px-8 py-6 text-gray-800 text-lg font-semibold hover:bg-gray-400 transition-all rounded-lg"
        >
          Show Leads
        </Link>
      </div>
    </div>
  );
}
