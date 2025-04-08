import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, loggedUser } = useContext(AppContext);
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
  };

  useEffect(() => {
    if (loggedUser) {
      window.location.replace("/planner");
    } else if (loggedUser === null) {
      setError("Błędne dane logowania!");
    }
  }, [loggedUser]);

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "0 auto",
        padding: 20,
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
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
          }}
          onClick={() => window.location.replace("/")}
        >
          Wstecz
        </button>
        <h2 style={{ margin: 0 }}>Logowanie</h2>
      </div>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          style={{ padding: 10, fontSize: 16, borderRadius: 5, border: "1px solid #ddd" }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{ padding: 10, fontSize: 16, borderRadius: 5, border: "1px solid #ddd" }}
        />
        <button
          type="submit"
          style={{
            padding: 10,
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: 5,
            fontSize: 16,
          }}
        >
          Zaloguj
        </button>
      </form>
      {error && (
        <p style={{ marginTop: 10, textAlign: "center", color: "red" }}>
          {error}
        </p>
      )}
      <p style={{ marginTop: 10, textAlign: "center" }}>
        Nie masz konta?{" "}
        <a href="/register" style={{ color: "#4CAF50", textDecoration: "none" }}>
          Zarejestruj się
        </a>
      </p>
    </div>
  );
};

export default Login;