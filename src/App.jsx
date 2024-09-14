import { routes } from "./Components/utils/routes";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={routes.home} replace />} />
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.favs} element={<Favs />} />
        <Route path="/dentist/:id" element={<Detail />} />
        <Route
          path={routes.notFound}
          element={<h1>Error 404 - Page not Found</h1>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
