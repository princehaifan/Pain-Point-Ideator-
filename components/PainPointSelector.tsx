
import React from 'react';
import type { PainPoint } from '../types';

interface PainPointSelectorProps {
  painPoints: PainPoint[];
  selectedPainPoint: PainPoint | null;
  onSelect: (painPoint: PainPoint) => void;
}

export const PainPointSelector: React.FC<PainPointSelectorProps> = ({ painPoints, selectedPainPoint, onSelect }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
      {painPoints.map((painPoint) => {
        const isSelected = selectedPainPoint?.name === painPoint.name;
        return (
          <button
            key={painPoint.name}
            onClick={() => onSelect(painPoint)}
            className={`p-4 md:p-6 text-center rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-500/50
              ${isSelected
                ? 'bg-indigo-600 shadow-lg shadow-indigo-600/30 ring-2 ring-indigo-400'
                : 'bg-gray-800 hover:bg-gray-700/80'
              }`}
          >
            <span className="text-4xl md:text-5xl" role="img" aria-label={painPoint.name}>{painPoint.emoji}</span>
            <h3 className="mt-3 font-bold text-md md:text-lg text-white">{painPoint.name}</h3>
            <p className="hidden md:block mt-1 text-sm text-gray-400">{painPoint.description}</p>
          </button>
        );
      })}
    </div>
  );
};
