import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="bg-gray-300 px-8 py-6 text-gray-800 text-lg font-semibold hover:bg-gray-400 transition-all rounded-lg"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
