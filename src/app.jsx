import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { HomePageStyled } from "./pages/homePage/homePage.style";
import { ErrorPage } from "./pages/errorPage/errorPage";
import { ContactPage } from "./pages/contactPage/contactPage";
import { AboutPage } from "./pages/aboutPage/aboutPage";
import { ServicesPage } from "./pages/servicesPage/servicesPage";
import { PricesPage } from "./pages/pricesPage/pricesPage";

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
          <Route path={"/"} element={<HomePageStyled />} />
          <Route path={"/contact"} element={<ContactPage />} />
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/services"} element={<ServicesPage />} />
          <Route path={"/prices"} element={<PricesPage />} />
          <Route path={"/*"} element={<ErrorPage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
export { ScrollToTop };
