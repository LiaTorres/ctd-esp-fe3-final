import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { reducer } from "../hooks/reducer";

const CharStates = createContext();
const listFavs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  favorites: listFavs,
  theme: true,
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "SET_DATA", payload: data });
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);

  return (
    <CharStates.Provider value={{ state, dispatch }}>
      {children}
    </CharStates.Provider>
  );
};

export default Context;

export const useChartStates = () => {
  return useContext(CharStates);
};
