
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="py-6 text-center border-b border-gray-700/50 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
          Pain Point Ideator
        </h1>
        <p className="mt-2 text-md md:text-lg text-gray-400">
          Turn massive problems into profitable ideas.
        </p>
      </div>
    </header>
  );
};
