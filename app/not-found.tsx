import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-earth-600 text-6xl font-bold mb-4">404</p>
        <h1 className="text-2xl font-bold text-white mb-3">Trail Not Found</h1>
        <p className="text-slate-400 mb-8">
          Looks like this route doesn&apos;t exist in the log book. Check your
          coordinates and try again.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-earth-700 hover:bg-earth-600 text-white font-semibold rounded-lg transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
