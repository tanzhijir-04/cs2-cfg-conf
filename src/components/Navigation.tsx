import React from 'react';

export default function Navigation() {
  return (
    <nav className="bg-[#1d1d1f]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-2xl font-bold">CS2 Config Editor</h1>
          <div className="space-x-4">
            <button className="text-white hover:text-gray-300">
              Save Config
            </button>
            <button className="text-white hover:text-gray-300">
              Reset
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}