import React from "react";
import MealPlanner from "../components/MealPlanner";
import ShoppingList from "../components/ShoppingList";

const Planner = () => {
  const handleBack = () => {
    window.location.replace("/");
  };

  return (
    <div style={{ padding: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <button
          style={{
            padding: 10,
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
          }}
          onClick={handleBack}
        >
          Wstecz
        </button>
        <h1 style={{ margin: 0, fontSize: 24, fontWeight: "bold" }}>
          Planer posiłków
        </h1>
      </div>

      <MealPlanner />
      <ShoppingList />
    </div>
  );
};

export default Planner;