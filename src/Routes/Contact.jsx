import React from "react";
import Form from "../Components/Form";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className="flex flex-1 flex-col items-center pt-10 dark:text-white dark:bg-bg_secondary">
      <h2 className="text-3xl font-semibold my-4 dark:text-white">
        Querés saber más?
      </h2>
      <p className="italic dark:text-white">
        Envíanos tu consulta y nos pondremos en contacto contigo
      </p>
      <Form />
    </div>
  );
};

export default Contact;
