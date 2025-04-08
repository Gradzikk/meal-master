import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register, users } = useContext(AppContext);

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Hasła nie są identyczne!");
      return;
    }

    const userExists = users.find((user) => user.username === username);
    if (userExists) {
      alert("Użytkownik o tej nazwie już istnieje!");
      return;
    }

    register(username, password);
    alert("Rejestracja udana! Możesz się teraz zalogować.");
    window.location.replace("/login");
  };

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
        <h2 style={{ margin: 0 }}>Rejestracja</h2>
      </div>
      <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nazwa użytkownika"
          style={{ padding: 10, fontSize: 16, borderRadius: 5, border: "1px solid #ddd" }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Hasło"
          style={{ padding: 10, fontSize: 16, borderRadius: 5, border: "1px solid #ddd" }}
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Powtórz hasło"
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
          Zarejestruj się
        </button>
      </form>
      <p style={{ marginTop: 10, textAlign: "center" }}>
        Masz już konto?{" "}
        <a href="/login" style={{ color: "#4CAF50", textDecoration: "none" }}>
          Zaloguj się
        </a>
      </p>
    </div>
  );
};

export default Register;    