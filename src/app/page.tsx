import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen bg-black items-center justify-center px-6">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-6 flex justify-center">
          <span className="text-muted-foreground rounded-full border border-neutral-500/30 px-4 py-1 text-sm">
            Powered by Servercn
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Next.js Starter
        </h1>

        <p className="text-muted-foreground mt-6 text-lg">
          A Next.js foundation with a structured backend architecture — built
          for scalability with Servercn.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="https://servercn.vercel.app"
            target="_blank"
            className="rounded-md bg-black px-4 py-2.5 text-sm font-medium text-white hover:opacity-90 dark:bg-white dark:text-black">
            Get Started
          </Link>

          <a
            href="https://github.com/akkaldhami/servercn"
            target="_blank"
            className="hover:bg-blue-600 bg-blue-500 rounded-md px-4 py-2.5 text-sm font-medium">
            Star on GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
