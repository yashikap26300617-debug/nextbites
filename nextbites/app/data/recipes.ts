
export type Recipe = {
  id: number;
  name: string;
  description: string;
  image: string;
  cookingTime: string;
  category: string;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Creamy Pasta",
    description: "A delicious creamy pasta with fresh herbs.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
    cookingTime: "25 min",
    category: "Lunch",
  },
  {
    id: 2,
    name: "Fresh Garden Salad",
    description: "A healthy salad packed with fresh vegetables.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    cookingTime: "15 min",
    category: "Healthy",
  },
  {
    id: 3,
    name: "Chocolate Pancakes",
    description: "Fluffy pancakes topped with rich chocolate.",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    cookingTime: "20 min",
    category: "Breakfast",
  },
  {
    id: 4,
    name: "Veggie Pizza",
    description: "A cheesy pizza loaded with fresh vegetables.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    cookingTime: "30 min",
    category: "Dinner",
  },
];
