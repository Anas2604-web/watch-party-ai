import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

export async function getMovieSuggestions(query) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = `Act as a Movie Recommendation Pro and Suggest some movies for this query: "${query}". 
     only 5 movie titles in a simple manner like the example given ahead. example: Dabang, Sholay, Sultan, 3 Idiots, Tubelight.`;

    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    if (!response) return [];

    return response
      .split("\n")
      .map((line) => line.replace(/^\d+\.?\s*/, "").trim())
      .filter(Boolean);
  } catch (err) {
    console.error("Gemini Error:", err);
    return [];
  }
}
