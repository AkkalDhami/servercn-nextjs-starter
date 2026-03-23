export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-6 flex justify-center">
          <span className="rounded-full border border-neutral-500/30 px-4 py-1 text-sm text-muted-foreground">
            Powered by Servercn
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Next.js Starter
        </h1>

        <p className="mt-6 text-lg text-muted-foreground">
          A Next.js foundation with a structured backend
          architecture — built for scalability with Servercn.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="https://servercn.vercel.app"
            target="_blank"
            className="rounded-md bg-black dark:bg-white px-4 py-2.5 text-sm font-medium text-white dark:text-black hover:opacity-90">
            Get Started
          </a>

          <a
            href="https://servercn.vercel.app/docs"
            target="_blank"
            className="rounded-md border border-neutral-500 px-4 py-2.5 text-sm font-medium hover:bg-muted">
            Documentation
          </a>
        </div>
      </div>
    </main>
  );
}
