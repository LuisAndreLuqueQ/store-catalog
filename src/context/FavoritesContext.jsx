import { createContext, useContext, useReducer } from "react";

const FavoritesContext = createContext(null);

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE": {
      const exists = state.find((item) => item.id === action.product.id);
      if (exists) return state.filter((item) => item.id !== action.product.id);
      return [...state, action.product];
    }
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, dispatch] = useReducer(favoritesReducer, []);

  const toggleFavorite = (product) => dispatch({ type: "TOGGLE", product });
  const clearFavorites = () => dispatch({ type: "CLEAR" });
  const isFavorite = (id) => favorites.some((item) => item.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, clearFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
