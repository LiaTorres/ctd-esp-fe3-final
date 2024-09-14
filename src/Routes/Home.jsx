import { useState } from "react";
import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useChartStates } from "../Components/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useChartStates();

  const cards = state?.odontologos?.map((user) => {
    return (
      <Card
        key={user.id}
        name={user.name}
        username={user.username}
        id={user.id}
      />
    );
  });

  return (
    <main className="flex-1 dark:bg-bg_secondary py-8">
      <h1 className="font-bold text-2xl text-primary pb-8">Home</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 place-items-center gap-x-4 gap-y-8 w-11/12 mx-auto">
        {/* Aqui deberias renderizar las cards */}
        {cards}
      </div>
    </main>
  );
};

export default Home;
