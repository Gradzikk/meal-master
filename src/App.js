import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Planner from "./pages/Planner";
import NotFound from "./pages/NotFound";

function App() {
  const { loggedUser, logout } = useContext(AppContext);
  const pathname = window.location.pathname;

  const handleLogout = () => {
    logout();
    window.location.replace("/");
  };

  const routing = () => {
    switch (pathname) {
      case "/":
        return <Home />;
      case "/login":
        return loggedUser ? window.location.replace("/") : <Login />;
      case "/register":
        return loggedUser ? window.location.replace("/") : <Register />;
      case "/planner":
        return loggedUser ? <Planner /> : window.location.replace("/login");
      default:
        return <NotFound />;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <header
        style={{
          width: "100%",
          maxWidth: 800,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
          padding: 10,
          backgroundColor: "#fff",
          borderRadius: 10,
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ margin: 0, color: "#333" }}>MealMaster</h1>
        {loggedUser ? (
          <div style={{ display: "flex", gap: 10 }}>
            <button
              style={{
                padding: 10,
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: 5,
              }}
              onClick={() => window.location.replace("/planner")}
            >
              Planer
            </button>
            <button
              style={{
                padding: 10,
                backgroundColor: "#ff4d4d",
                color: "white",
                border: "none",
                borderRadius: 5,
              }}
              onClick={handleLogout}
            >
              Wyloguj się
            </button>
          </div>
        ) : (
          <button
            style={{
              padding: 10,
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: 5,
            }}
            onClick={() => window.location.replace("/login")}
          >
            Zaloguj
          </button>
        )}
      </header>
      <main
        style={{
          width: "100%",
          maxWidth: 800,
          flex: 1,
          padding: 20,
          backgroundColor: "#fff",
          borderRadius: 10,
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        {routing()}
      </main>
    </div>
  );
}

export default App;