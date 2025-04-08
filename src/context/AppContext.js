import React, { createContext, useState, useEffect } from "react";
import { initialRecipes } from "../mocks/recipes";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem("recipes");
    return saved ? JSON.parse(saved) : initialRecipes;
  });
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : [{ id: 1, username: "admin", password: "admin" }];
  });
  const [loggedUser, setLoggedUser] = useState(() => {
    const saved = localStorage.getItem("loggedUser");
    return saved ? JSON.parse(saved) : null;
  });
  const [meals, setMeals] = useState(() => {
    const saved = localStorage.getItem("meals");
    return saved
      ? JSON.parse(saved)
      : {
          Monday: { breakfast: null, lunch: null, dinner: null },
          Tuesday: { breakfast: null, lunch: null, dinner: null },
          Wednesday: { breakfast: null, lunch: null, dinner: null },
          Thursday: { breakfast: null, lunch: null, dinner: null },
          Friday: { breakfast: null, lunch: null, dinner: null },
          Saturday: { breakfast: null, lunch: null, dinner: null },
          Sunday: { breakfast: null, lunch: null, dinner: null },
        };
  });
  const [shoppingList, setShoppingList] = useState(() => {
    const saved = localStorage.getItem("shoppingList");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    localStorage.setItem("meals", JSON.stringify(meals));
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
  }, [recipes, users, loggedUser, meals, shoppingList]);

  const login = (username, password) => {
    const user = users.find((u) => u.username === username && u.password === password);
    setLoggedUser(user || null);
  };

  const logout = () => setLoggedUser(null);

  const register = (username, password) => {
    const newUser = { id: Date.now(), username, password };
    setUsers((prev) => [...prev, newUser]);
  };

  const addMeal = (day, mealType, recipe) => {
    setMeals((prev) => ({
      ...prev,
      [day]: { ...prev[day], [mealType]: recipe },
    }));
  };

  const removeMeal = (day, mealType) => {
    setMeals((prev) => ({
      ...prev,
      [day]: { ...prev[day], [mealType]: null },
    }));
  };

  const generateShoppingList = () => {
    const ingredients = [];
    Object.values(meals).forEach((day) =>
      Object.values(day).forEach((meal) => {
        if (meal && meal.ingredients) {
          ingredients.push(...meal.ingredients);
        }
      })
    );
    const uniqueIngredients = [...new Set(ingredients)];
    setShoppingList(uniqueIngredients);
  };

  return (
    <AppContext.Provider
      value={{
        recipes,
        users,
        loggedUser,
        meals,
        shoppingList,
        login,
        logout,
        register,
        addMeal,
        removeMeal,
        generateShoppingList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };