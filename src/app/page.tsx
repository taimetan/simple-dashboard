import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side */}
      <div className="flex-1 bg-gray-900 text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Demo Dashboard</h1>
      </div>
      {/* Right side */}
      <div className="flex-1 bg-white flex flex-col justify-center items-center p-8">
        <h2 className="text-2xl font-semibold mb-4">Click the button below</h2>
        <Link href="/dashboard">
          <button className="bg-black text-white rounded-md px-4 py-2 mb-4">
            Go to Dashboard
          </button>
        </Link>
      </div>
      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 bg-gray-900 text-white p-4">
        <blockquote className="italic text-center">
          © Copyright 2024 - Demo Dashboard.
        </blockquote>
      </footer>
    </div>
  );
};

export default Home;
