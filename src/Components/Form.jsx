import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateFullName = (fullName) => {
    const withoutSpaces = fullName.trim();
    return withoutSpaces.length >= 5 ? true : false;
  };

  const validateEmail = (email) => {
    const withoutSpaces = email.trim();
    return withoutSpaces.length >= 6 ? true : false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFullNameValid = validateFullName(fullName);
    const isEmailValid = validateEmail(email);

    if (!isFullNameValid || !isEmailValid) {
      setMessage("Por favor verifique su información nuevamente");
    } else {
      setMessage(
        `Gracias ${[fullName]}, te contactaremos cuando antes vía mail`
      );
    }
  };

  return (
    <div className="w-1/4">
      <form onSubmit={handleSubmit} className="flex flex-col mt-20">
        <label
          htmlFor="fullName"
          className="text-gray-500 dark:text-white font-medium"
        >
          Nombre Completo:
        </label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          placeholder="Ingresa tu nombre completo"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="border border-gray-300 rounded-md p-2 my-5"
        />
        <label
          htmlFor="email"
          className="text-gray-500  dark:text-white font-medium"
        >
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Ingresa tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-md p-2 my-5"
        />

        <button
          type="submit"
          className="bg-secondary text-white rounded-md  py-2 my-5"
        >
          Enviar
        </button>
      </form>
      <p className="message">{message}</p>
    </div>
  );
};

export default Form;
