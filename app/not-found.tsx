import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="w-full max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
          Oakshiffs
        </p>

        <h1 className="mt-6 text-6xl font-medium tracking-[-0.06em] text-neutral-950 sm:text-8xl">
          404
        </h1>

        <h2 className="mt-6 text-2xl font-medium tracking-[-0.03em] text-neutral-950 sm:text-3xl">
          This property doesn&apos;t exist.
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-neutral-500">
          The page you&apos;re looking for may have been moved,
          removed or the address may be incorrect.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            <Home size={16} />
            Back home
          </Link>

          <Link
            href="/properties"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 px-6 py-3.5 text-sm font-medium text-neutral-950 transition hover:border-neutral-950"
          >
            <Search size={16} />
            Browse properties
          </Link>
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-neutral-950"
        >
          <ArrowLeft size={15} />
          Return to Oakshiffs
        </Link>
      </div>
    </main>
  );
}