
export interface Photo {
  id: string;
  url: string;
  // Updated categories to English to match component usage and fix type errors in Gallery.tsx
  category: 'Desserts' | 'Main Courses' | 'Drinks' | 'Still Life';
  title: string;
}

export interface FlavorStory {
  title: string;
  description: string;
  mood: string;
  pairings: string[];
}