
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-16 py-6 text-center text-gray-500 text-sm border-t border-gray-700/50">
      <p>Inspired by the "Solve a Pain Point" playbook.</p>
      <p>&copy; {new Date().getFullYear()} Pain Point Ideator. All Rights Reserved.</p>
    </footer>
  );
};
