import Link from 'next/link';

export default function Home() {
  return (
    <main>
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Home page</h1>
            <p className="text-lg mb-6">This is my first project using NextJS. Click the button below to view it</p>
            <Link href="/dashboard">
                <p className="p-7 px-8 py-2 text-black text-xl rounded bg-gradient-to-br from-purple-200 via-lime-100 to-purple-200">View Project</p>
            </Link>
        </div>
    </main>
  );
}
