import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const mealTypes = [
  { key: "breakfast", label: "Śniadanie" },
  { key: "lunch", label: "Lunch" },
  { key: "dinner", label: "Kolacja" },
];

const MealPlanner = () => {
  const { meals, removeMeal } = useContext(AppContext);

  const handleRemoveMeal = (day, mealType) => {
    removeMeal(day, mealType);
  };

  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 20 }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid #ddd", padding: 10 }}>Dzień</th>
          {mealTypes.map((type) => (
            <th key={type.key} style={{ border: "1px solid #ddd", padding: 10 }}>
              {type.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {days.map((day) => (
          <tr key={day}>
            <td style={{ border: "1px solid #ddd", padding: 10, fontWeight: "bold" }}>{day}</td>
            {mealTypes.map((type) => (
              <td key={type.key} style={{ border: "1px solid #ddd", padding: 10 }}>
                {meals[day]?.[type.key]?.name ? (
                  <div>
                    {meals[day][type.key].name}
                    <button
                      style={{
                        marginLeft: 10,
                        padding: 5,
                        backgroundColor: "#ff4d4d",
                        color: "white",
                        border: "none",
                        borderRadius: 5,
                      }}
                      onClick={() => handleRemoveMeal(day, type.key)}
                    >
                      Usuń
                    </button>
                  </div>
                ) : (
                  <span style={{ color: "gray" }}>Brak posiłku</span>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MealPlanner;