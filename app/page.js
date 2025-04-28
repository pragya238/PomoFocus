import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 p-6 shadow-lg">
        <nav>
          <ul className="flex space-x-4 text-white font-semibold justify-between px-2 mt-2">
            <li><Link href="/">🏠 Home</Link></li>
            <li><Link href="/about">📖 About</Link></li>
            <li><Link href="/timer">⏱️ Timer</Link></li>
            <li><Link href="/blog">📝 Blog</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Welcome to PomoFocus!</h1>
        <p className="text-xl text-gray-600">A simple, effective way to stay focused and make the most of your time. Let's get started!</p>
      </main>

      <footer className="bg-gray-100 p-4 text-center text-gray-500">
        <p>Made with ❤️ by the PomoFocus team.</p>
      </footer>
    </div>
  );
}
