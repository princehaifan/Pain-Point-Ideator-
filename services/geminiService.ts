
import { GoogleGenAI, Type } from "@google/genai";
import type { BusinessIdea } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const responseSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      name: {
        type: Type.STRING,
        description: 'A catchy, result-oriented name for the app or business.',
      },
      tagline: {
        type: Type.STRING,
        description: 'A tagline that sells the result, not the feature. E.g., "Get focused today" instead of "Track habits with streaks".',
      },
      description: {
        type: Type.STRING,
        description: 'A brief description of the core, simple feature that solves the pain point.',
      },
      marketSize: {
        type: Type.STRING,
        enum: ['Massive', 'Large', 'Niche'],
        description: "An estimation of the market size: 'Massive', 'Large', or 'Niche'.",
      },
    },
    required: ['name', 'tagline', 'description', 'marketSize'],
  },
};

export const generateBusinessIdeas = async (painPoint: string): Promise<BusinessIdea[]> => {
  const prompt = `
    Based on the massive human pain point of "${painPoint}", generate 5 simple and viable business or app ideas.

    Follow this playbook strictly for each idea:
    1.  Core Idea: The solution must solve the core pain directly and be extremely simple to start.
    2.  Sell the Result: The name and tagline must focus on the desired outcome for the user, not the technical features.
    3.  Simplicity First: The concept should be something that could be launched with a minimal viable product (MVP) quickly.

    Return the ideas in the specified JSON format.
  `;
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.8,
        topP: 0.95,
      },
    });

    const jsonText = response.text.trim();
    const ideas = JSON.parse(jsonText) as BusinessIdea[];
    return ideas;

  } catch (error) {
    console.error("Error generating business ideas:", error);
    throw new Error("Failed to get a valid response from the AI model.");
  }
};
