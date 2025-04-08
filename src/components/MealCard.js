import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MealCard = ({ recipe }) => {
  const { addMeal } = useContext(AppContext);
  const [day, setDay] = React.useState("Monday");
  const [mealType, setMealType] = React.useState("breakfast");

  const handleAddMeal = () => {
    addMeal(day, mealType, recipe);
    alert(`Dodano ${recipe.name} do ${mealType} w dniu ${day}`);
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: 10, margin: 10, borderRadius: 10 }}>
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
      <p><strong>Składniki:</strong> {recipe.ingredients.join(", ")}</p>

      <div style={{ marginTop: 10 }}>
        <select value={day} onChange={(e) => setDay(e.target.value)} style={{ padding: 5, marginRight: 10 }}>
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <select value={mealType} onChange={(e) => setMealType(e.target.value)} style={{ padding: 5, marginRight: 10 }}>
          <option value="breakfast">Śniadanie</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Kolacja</option>
        </select>

        <button
          style={{ padding: 10, backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: 5 }}
          onClick={handleAddMeal}
        >
          Dodaj posiłek
        </button>
      </div>
    </div>
  );
};

export default MealCard;