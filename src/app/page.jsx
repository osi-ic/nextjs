import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center gap-5">
      <Link
        className="bg-black py-2 px-3 text-white text-lg"
        href="https://github.com/osi-ic"
        target="_blank"
      >
        Hellow
      </Link>
    </main>
  );
}
