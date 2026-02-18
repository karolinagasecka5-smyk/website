
import { GoogleGenAI, Type } from "@google/genai";
import { FlavorStory } from "../types";

export const generateFlavorStory = async (imageDataBase64: string): Promise<FlavorStory> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: {
      parts: [
        {
          inlineData: {
            mimeType: 'image/jpeg',
            data: imageDataBase64,
          },
        },
        {
          text: "You are a professional food critic and copywriter. Based on this food photo, create a poetic and appetizing 'Flavour Story'. Provide a catchy title, a short sensory description, the mood it evokes, and three pairing suggestions. Return the result in JSON format."
        }
      ],
    },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING, description: "Elegant food title." },
          description: { type: Type.STRING, description: "Poetic description of taste and texture in 2-3 sentences." },
          mood: { type: Type.STRING, description: "The mood this dish evokes (e.g., A lazy summer afternoon)." },
          pairings: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "3 suggested side dishes or drinks."
          },
        },
        required: ["title", "description", "mood", "pairings"],
      }
    }
  });

  return JSON.parse(response.text.trim());
};
