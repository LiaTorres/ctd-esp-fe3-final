import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer>
      <div className="p-2 bg-red-500 text-center text-primary">
        <h2>React</h2>
      </div>
      <div className="flex items-center justify-center gap-4 p-4 bg-slate-200 dark:text-primary dark:bg-bg_secondary">
        <p>Powered by</p>
        <Logo />
      </div>
    </footer>
  );
};

export default Footer;
