import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h2>
        <p className="text-slate-600 text-lg mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-[#e33479] text-white font-semibold rounded-lg hover:bg-[#d01e6d] transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}
