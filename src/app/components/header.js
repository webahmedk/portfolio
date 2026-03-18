import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link href="/">
            Khalid Ahmed
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;