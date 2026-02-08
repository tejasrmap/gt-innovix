
import { GoogleGenAI, Type } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
};

export const generateExpansionStrategy = async (webProject: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Acting as a Multi-Sector Expansion Architect for GT Innovix, analyze this web development project: "${webProject}". 
    Provide a strategy to scale this concept from a web application into a multi-sector conglomerate.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          currentCore: { type: Type.STRING, description: "Analysis of the current web dev potential." },
          expansionSector: { type: Type.STRING, description: "The most logical next sector to expand into (e.g., Fintech, Logistics, Health)." },
          pivotStrategy: { type: Type.STRING, description: "How to transition from a web app to a sector-specific solution." },
          longTermVision: { type: Type.STRING, description: "The 10-year outlook as a multi-sector leader." },
          techRequirements: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Advanced technologies needed for expansion beyond standard web dev."
          }
        },
        required: ["currentCore", "expansionSector", "pivotStrategy", "longTermVision", "techRequirements"]
      }
    }
  });

  return JSON.parse(response.text || "{}");
};
