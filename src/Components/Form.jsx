import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [flag, setFlag] = useState(false);

  const validateFullName = (fullName) => {
    const withoutSpaces = fullName.trim();
    return withoutSpaces.length > 5 ? true : false;
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const withoutSpaces = email.trim();
    return emailPattern.test(withoutSpaces);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFullNameValid = validateFullName(fullName);
    const isEmailValid = validateEmail(email);

    if (!isFullNameValid || !isEmailValid) {
      setMessage("Por favor verifique su información nuevamente");
      setFlag(true);
    } else {
      setMessage(
        `Gracias ${[fullName]}, te contactaremos cuando antes vía mail`
      );
      setFlag(true);
    }
  };

  return (
    <div className="w-1/4">
      <form onSubmit={handleSubmit} className="flex flex-col mt-14">
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
          className="border border-gray-300 rounded-md p-2 my-5 dark:text-black"
        />
        <label
          htmlFor="email"
          className="text-gray-500 dark:text-white font-medium"
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
          className="border border-gray-300 rounded-md p-2 my-5 dark:text-black"
        />

        <button
          type="submit"
          className="bg-secondary text-white rounded-md  py-2 my-5"
        >
          Enviar
        </button>

        {flag && (
          <div className="mt-4">
            <p className="font-semibold italic dark:text-white">{message}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
