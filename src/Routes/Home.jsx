import { useState } from "react";
import React, { useEffect } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setData(data);
      return console.log(data);
    };
    fetchData();
  }, []);

  const cards = data.map((user) => {
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
    <main className="">
      <h1 className="font-bold text-xl">Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {cards}
      </div>
    </main>
  );
};

export default Home;
