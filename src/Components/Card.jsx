import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useChartStates } from "./Context";

const Card = ({ name, username, id }) => {
  const heart = (
    <i className="fa-regular fa-heart text-2xl py-1 text-gray-500" />
  );
  const heartFill = (
    <i className="fa-solid fa-heart text-red-500 text-2xl py-1" />
  );

  const [heartImg, setHeartImg] = useState(heart);
  const { state, dispatch } = useChartStates();
  const isFav = state.favorites.find((fav) => fav.id === id);

  useEffect(() => {
    if (isFav) {
      setHeartImg(heartFill);
    } else {
      setHeartImg(heart);
    }
  }, [isFav]);

  const addFav = () => {
    dispatch({
      type: isFav ? "REMOVE_FAVORITE" : "ADD_FAVORITE",
      payload: { name, username, id },
    });
  };

  return (
    <div className="w-full xl:w-4/5 max-w-sm cursor-default relative">
      <div className="card w-full max-w-sm bg-primary border border-gray-200 rounded-lg shadow gap-4 p-4 dark:bg-gray-800 dark:border-gray-700">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <figure className="rounded-full bg-secondary w-28">
          <img
            src="https://cdn0.iconfinder.com/data/icons/job-female-version-set-2-flat/128/profession_job_avatar_occupation_female-62-512.png"
            alt=""
            className="w-full h-full rounded-full"
          />
        </figure>
        <div className="text-center">
          <Link to={"/dentist/" + id}>
            <h5 className="text-xl font-medium text-center text-gray-900 dark:text-primary">
              {name}
            </h5>
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400">{username}</p>
        </div>
        <div className="flex gap-2 w-full">
          <div className="flex-1">
            <button
              onClick={addFav}
              className="favButton rounded-md flex justify-center items-center border dark:border-gray-600 border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 text-primary"
            >
              {heartImg}
            </button>
          </div>
          <div className="flex-1">
            <Link to={`/dentist/${id}`} className="p-0">
              <Button textContent="Ver Detalles" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
