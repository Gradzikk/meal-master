import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ShoppingList = () => {
  const { shoppingList, generateShoppingList } = useContext(AppContext);

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Lista zakupów</h2>
      <button
        style={{ padding: 10, backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: 5 }}
        onClick={generateShoppingList}
      >
        Generuj listę zakupów
      </button>

      {shoppingList.length > 0 && (
        <div style={{ marginTop: 20, padding: 10, backgroundColor: "#f9f9f9", borderRadius: 10 }}>
          <h3>Potrzebne składniki:</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {shoppingList.map((item, index) => (
              <li
                key={index}
                style={{
                  padding: 5,
                  borderBottom: "1px solid #ddd",
                  fontSize: 16,
                }}
              >
                ✅ {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShoppingList;