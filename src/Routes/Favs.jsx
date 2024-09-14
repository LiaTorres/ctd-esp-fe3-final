import React from "react";
import Card from "../Components/Card";
import { useChartStates } from "../Components/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useChartStates();
  console.log(state.favorites);

  return (
    <div className="flex-1 dark:bg-bg_secondary">
      <h1 className="text-center text-3xl font-bold text-secondary mt-16">
        Favoritos
      </h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage /}
        {/ Deberan renderizar una Card por cada uno de ellos */}
        {state?.favorites?.map((char) => (
          <Card key={char.id} char={char} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
