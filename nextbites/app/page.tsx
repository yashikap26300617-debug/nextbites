
import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";

export default function Home() {
  return (
    
<body>
  <header className="navbar">
    <a href="/" className="logo">
      Next<span>Bites</span>
    </a>

    <nav>
      <a href="/">Home</a>
      <a href="#recipes">Recipes</a>
      <a href="#about">About</a>
    </nav>
  </header>

  {children}
</body>

          )}
