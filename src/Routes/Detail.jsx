import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useChartStates } from "../Components/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  // console.log(id);
  const url = "https://jsonplaceholder.typicode.com/users/" + id;
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setDetail(res.data);
    });
  }, []);

  return (
    <div className="flex flex-1 flex-col items-center dark:bg-bg_secondary">
      <h1 className="text-3xl font-semibold dark:text-white mt-16">
        Detalles dentista
      </h1>

      <div className="mt-24">
        <div className="flex h-64 border rounded-xl">
          <img
            src="https://cdn0.iconfinder.com/data/icons/job-female-version-set-2-flat/128/profession_job_avatar_occupation_female-62-512.png"
            alt="Foto del dentista"
            className="rounded-xl"
          />
          <div className="w-72">
            <h3 className="text-2xl font-bold text-center mt-10 mb-6  dark:text-white">
              {detail.name}
            </h3>
            <p className="ml-4 mb-2 text-gray-400 dark:text-white">
              {detail.email}
            </p>
            <p className="ml-4 mb-2 text-gray-400 dark:text-white">
              {detail.phone}
            </p>
            <p className="ml-4 mb-2 text-gray-400 dark:text-white">
              {detail.website}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
