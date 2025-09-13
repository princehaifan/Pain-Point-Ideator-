
import React from 'react';
import type { BusinessIdea } from '../types';

interface IdeaCardProps {
  idea: BusinessIdea;
}

const MarketSizeBadge: React.FC<{ size: BusinessIdea['marketSize'] }> = ({ size }) => {
  const colorClasses = {
    Massive: 'bg-green-500/20 text-green-300 border-green-500/50',
    Large: 'bg-blue-500/20 text-blue-300 border-blue-500/50',
    Niche: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50',
  };
  return (
    <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${colorClasses[size]}`}>
      {size} Market
    </span>
  );
};

export const IdeaCard: React.FC<IdeaCardProps> = ({ idea }) => {
  return (
    <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/80 shadow-lg flex flex-col h-full hover:border-indigo-500/60 transition-colors duration-300 animate-fade-in">
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white pr-2">{idea.name}</h3>
          <MarketSizeBadge size={idea.marketSize} />
        </div>
        <p className="text-indigo-300 italic mb-4">"{idea.tagline}"</p>
        <p className="text-gray-300 text-sm leading-relaxed">{idea.description}</p>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-700">
        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Core Concept</p>
        <p className="text-xs text-gray-400 mt-1">Simple, result-focused, and ready to build.</p>
      </div>
    </div>
  );
};

// Add fade-in animation to global styles via a style tag (since we can't use CSS files)
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.5s ease-out forwards;
  }
`;
document.head.appendChild(style);
