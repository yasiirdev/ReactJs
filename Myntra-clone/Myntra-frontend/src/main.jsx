import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home.jsx";
import Bag_page from "./components/pages/Bagpage.jsx";
import Profile_page from "./components/pages/profilepage.jsx";
import Wishlist_page from "./components/pages/wishlistpage.jsx";
import Men_page from "./components/pages/MenPage.jsx";
import Loader from "./components/loader.jsx";
import { Provider } from "react-redux";
import Store from "./store/index.js";

const root = window.document.getElementById("root");
createRoot(root).render(
  <Provider store={Store}>
    <Suspense fallback={<Loader />}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="bag" element={<Bag_page />} />
            <Route path="profile" element={<Profile_page />} />
            <Route path="wishlist" element={<Wishlist_page />} />
            <Route path="men" element={<Men_page />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </StrictMode>
      </Suspense>
  </Provider>,
);
