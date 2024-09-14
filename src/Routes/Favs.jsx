import React from "react";
import Card from "../Components/Card";
import { useChartStates } from "../Components/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useChartStates();
  console.log("PRUEBA: ");

  return (
    <div className="flex-1 dark:bg-bg_secondary py-8">
      <h1 className="text-center text-3xl font-bold text-bg_secondary dark:text-primary mt-10 mb-8">
        Favoritos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 place-items-center gap-x-4 gap-y-8 w-11/12 mx-auto">
        {/* este componente debe consumir los destacados del localStorage /}
        {/ Deberan renderizar una Card por cada uno de ellos */}
        {state.favorites.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            username={item.username}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;
