const favoritesList = JSON.parse(localStorage.getItem("favorites")) || [];
const savedTheme = localStorage.getItem("theme") === "dark";

export const initialState = {
  favorites: favoritesList,
  odontologos: [],
  theme: savedTheme ?? true, 
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        odontologos: action.payload,
      };
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.id !== action.payload.id
        ),
      };
    case "TOGGLE_THEME":
      const newTheme = !state.theme;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return {
        ...state,
        theme: newTheme,
      };
      // return { ...state, theme: [...state.theme, action.payload] };
    default:
      return state;
  }
};
