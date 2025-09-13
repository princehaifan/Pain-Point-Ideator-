
import React, { useState, useCallback, useMemo } from 'react';
import { Header } from './components/Header';
import { PainPointSelector } from './components/PainPointSelector';
import { IdeaCard } from './components/IdeaCard';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Footer } from './components/Footer';
import { generateBusinessIdeas } from './services/geminiService';
import { PAIN_POINTS, CATEGORIES } from './constants';
import type { BusinessIdea, PainPoint } from './types';
import { ArrowRightIcon, SparklesIcon } from './components/Icons';

export default function App() {
  const [selectedPainPoint, setSelectedPainPoint] = useState<PainPoint | null>(null);
  const [generatedIdeas, setGeneratedIdeas] = useState<BusinessIdea[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<string>('default');

  const handleSelectPainPoint = (painPoint: PainPoint) => {
    setSelectedPainPoint(painPoint);
    setGeneratedIdeas([]);
    setError(null);
  };

  const handleGenerateIdeas = useCallback(async () => {
    if (!selectedPainPoint) return;

    setIsLoading(true);
    setError(null);
    setGeneratedIdeas([]);

    try {
      const ideas = await generateBusinessIdeas(selectedPainPoint.name);
      setGeneratedIdeas(ideas);
    } catch (e) {
      console.error(e);
      setError('Failed to generate ideas. The model may be overloaded. Please try again in a moment.');
    } finally {
      setIsLoading(false);
    }
  }, [selectedPainPoint]);

  const displayedPainPoints = useMemo(() => {
    let filteredPoints =
      filterCategory === 'All'
        ? PAIN_POINTS
        : PAIN_POINTS.filter((p) => p.category === filterCategory);

    const sortedPoints = [...filteredPoints];
    if (sortOrder === 'az') {
      sortedPoints.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'za') {
      sortedPoints.sort((a, b) => b.name.localeCompare(a.name));
    }
    
    return sortedPoints;
  }, [filterCategory, sortOrder]);


  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
        <section className="w-full max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Step 1: Pick a Giant Pain</h2>
          <p className="text-gray-400 mb-8">Problems that millions of people feel every single day.</p>
          
          {/* Filter and Sort Controls */}
          <div className="mb-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700/80">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex-grow">
                <label htmlFor="category-filter" className="block text-sm font-medium text-gray-400 mb-2 text-left">Filter by Category</label>
                <div className="flex flex-wrap gap-2">
                  {['All', ...CATEGORIES].map(category => (
                    <button
                      key={category}
                      onClick={() => setFilterCategory(category)}
                      className={`px-3 py-1 text-sm font-medium rounded-full transition-colors duration-200 ${
                        filterCategory === category 
                        ? 'bg-indigo-600 text-white shadow-md' 
                        : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div className="sm:w-48">
                <label htmlFor="sort-order" className="block text-sm font-medium text-gray-400 mb-2 text-left">Sort by</label>
                <select 
                  id="sort-order" 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2.5"
                >
                  <option value="default">Default</option>
                  <option value="az">Name (A-Z)</option>
                  <option value="za">Name (Z-A)</option>
                </select>
              </div>
            </div>
          </div>

          <PainPointSelector
            painPoints={displayedPainPoints}
            selectedPainPoint={selectedPainPoint}
            onSelect={handleSelectPainPoint}
          />
        </section>

        {selectedPainPoint && (
          <section className="w-full max-w-4xl text-center mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Step 2: Generate Simple Solutions</h2>
            <p className="text-gray-400 mb-8">Click the button to brainstorm result-oriented ideas for "{selectedPainPoint.name}".</p>
            <button
              onClick={handleGenerateIdeas}
              disabled={isLoading}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-900 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-indigo-600/30 flex items-center justify-center mx-auto"
            >
              {isLoading ? (
                <>
                  <LoadingSpinner />
                  <span className="ml-2">Generating...</span>
                </>
              ) : (
                <>
                  <SparklesIcon />
                  <span className="ml-2">Generate Ideas</span>
                  <ArrowRightIcon />
                </>
              )}
            </button>
          </section>
        )}

        <section className="w-full max-w-5xl mt-12">
          {isLoading && (
            <div className="flex justify-center items-center p-8">
               <div className="text-center text-gray-400">
                  <LoadingSpinner size="h-12 w-12" />
                  <p className="mt-4 text-lg">Brewing up some brilliant ideas...</p>
               </div>
            </div>
          )}
          {error && (
            <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg text-center" role="alert">
              <strong className="font-bold">Oops! </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          {generatedIdeas.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {generatedIdeas.map((idea, index) => (
                <IdeaCard key={index} idea={idea} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
