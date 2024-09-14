import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";
import { useChartStates } from "./Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, toggleTheme } = useChartStates();

  return (
    <div className="flex justify-between items-center py-2 px-8 border-b dark:border-b-gray-700 sticky top-0 z-50 bg-primary shadow dark:bg-bg_secondary dark:text-primary">
      <Logo />
      <nav className="gap-4 dark:text-primary justify-center items-center">
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <Link to="/home">Inicio</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/favs"> Destacados</Link>
        <Button
          onClick={toggleTheme}
          state={state}
          textContent={
            state.theme ? (
              <i className="fa-solid fa-sun px-2 py-1" />
            ) : (
              <i className="fa-solid fa-moon px-2 py-1" />
            )
          }
        />
      </nav>
    </div>
  );
};

export default Navbar;
