const Button = ({ textContent }) => {
  return (
    <button className="favButton rounded-md border border-gray-200 text-gray-900 dark:bg-gray-800 dark:border-gray-600 hover:bg-gray-100 hover:text-blue-600 focus:ring-4 focus:outline-none focus:z-10 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:text-primary dark:hover:bg-gray-700">
      {textContent}
    </button>
  );
};

export default Button;
