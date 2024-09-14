import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="p-2 bg-red-500 text-center text-primary">
        <h2>React</h2>
      </div>
      <div className="flex items-center justify-center gap-4 p-4 bg-slate-200 dark:text-primary dark:bg-bg_secondary">
        <p>Powered by</p>
        <Logo />
        <div>
          <Link to={"https://github.com/LiaTorres"}>
            <i className="fa-brands fa-github text-xl px-1" />
          </Link>
          <Link to={"https://www.linkedin.com/in/lia-torres93/"}>
            <i className="fa-brands fa-linkedin text-xl px-1" />
          </Link>
          <Link to={"https://github.com/HansUrpay"}>
            <i className="fa-brands fa-github text-xl px-1" />
          </Link>
          <Link to={"https://www.linkedin.com/in/hans-urpay/"}>
            <i className="fa-brands fa-linkedin text-xl px-1" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
