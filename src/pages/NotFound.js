import React from "react";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>404 - Strona nie znaleziona</h1>
      <p>Przepraszamy, ale ta strona nie istnieje.</p>
      <button onClick={() => window.location.replace("/")}>
        Wróć do strony głównej
      </button>
    </div>
  );
};

export default NotFound;