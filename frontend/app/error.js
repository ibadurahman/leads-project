"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        className="bg-gray-300 px-8 py-6 text-gray-800 text-lg font-semibold hover:bg-gray-400 transition-all rounded-lg"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
