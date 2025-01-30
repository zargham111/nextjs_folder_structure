import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">

      {/* Hero Section */}
      <header className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
          Welcome to My Next.js App
        </h1>
        <p className="text-gray-500 mt-2">
          Built with Tailwind CSS & Next.js
        </p>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center space-y-6">
        <Image
          src="/images/images.png"
          alt="Next.js Logo"
          width={450}
          height={450}
          className="rounded-lg"
        />
        <p className="text-lg text-gray-700 max-w-md text-center">
          This is a simple starter template for building Next.js applications with Tailwind CSS. Modify this page to start your project.
        </p>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Get Started
        </button>
      </main>
    </div>
  );
}

