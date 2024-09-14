import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { initialState, reducer } from "../hooks/reducer";

const CharStates = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";

  // Carga de datos al inicializar
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "SET_DATA", payload: data });
    };
    fetchData();
  }, []);

  // Guarda los favoritos en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);

  // Actualiza el tema en el DOM y localStorage
  useEffect(() => {
    if (state.theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.theme]);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <CharStates.Provider value={{ state, dispatch, toggleTheme }}>
      {children}
    </CharStates.Provider>
  );
};

export default Context;

export const useChartStates = () => {
  return useContext(CharStates);
};
