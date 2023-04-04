import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomeStyled from "./pages/Home.style";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Prices from "./pages/Prices";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path={"/"} element={<HomeStyled />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/services"} element={<Services />} />
          <Route path={"/prices"} element={<Prices />} />
          <Route path={"/*"} element={<Error />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
export { ScrollToTop };
