import { Suspense, useEffect } from "react";
import { Helmet } from "react-helmet";

import HomePage from "./Pages/Home/HomePage";
import ContactUs from "./Pages/Contact/ContactUs";
import Maison from "./Pages/Maison/Maison";
import Manifesto from "./Pages/Manifesto/Manifesto";
import FeaturedClients from "./Pages/Featured/FeaturedClients";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Landing from "./Pages/Landing/Landing";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function RouterPages() {
  useEffect(() => {}, []);

  return (
    <Router>
      <Helmet>
        <title>Fine Arts</title>
        <meta name='description' content='App Description' />
        <meta name='theme-color' content='#008f68' />
      </Helmet>

      {/* <Preloader load={load} /> */}
      <>
        <Suspense fallback={<div className='app-loader'>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/fine-arts' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/manifesto' element={<Manifesto />} />
            <Route path='/maison' element={<Maison />} />
            <Route path='/featured-clients' element={<FeaturedClients />} />
            <Route path='404' element={<NotFoundPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </>
    </Router>
  );
}

export default RouterPages;
