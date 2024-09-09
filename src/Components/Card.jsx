import React from "react";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card bg-secondary rounded-lg">
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <h3>{name}</h3>
      <p> {username}</p>
      <p> {id}</p>
      <img
        src="https://cdn0.iconfinder.com/data/icons/job-female-version-set-2-flat/128/profession_job_avatar_occupation_female-62-512.png"
        alt=""
        className="w-20"
        
      />
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
