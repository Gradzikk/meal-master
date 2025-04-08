import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import MealCard from "../components/MealCard";

const Home = () => {
  const { recipes } = useContext(AppContext);

  return (
    <div>
      <h2>Popularne przepisy</h2>
      {recipes.map((recipe) => (
        <MealCard key={recipe.id} recipe={recipe} day="Monday" mealType="lunch" />
      ))}
    </div>
  );
};

export default Home;