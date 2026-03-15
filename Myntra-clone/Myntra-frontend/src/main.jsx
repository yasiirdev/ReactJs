import { StrictMode, Suspense , lazy} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store/index.js";
import { createRoot } from "react-dom/client";
import "./index.css";

const App = lazy(() => import("./App.jsx"));
const Home = lazy(() => import("./components/home.jsx"));
const Bag_page = lazy(() => import("./components/pages/Bagpage.jsx"));
const Profile_page = lazy(() => import("./components/pages/profilepage.jsx"));
const Wishlist_page = lazy(() => import("./components/pages/wishlistpage.jsx"));
const Men_page = lazy(() => import("./components/pages/MenPage.jsx"));
const Loader = lazy(() => import("./components/loader.jsx"));




const root = window.document.getElementById("root");
createRoot(root).render(
  <Provider store={Store}>
    <Suspense fallback={<Loader />}>
    {/* <StrictMode> */}
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
      {/* </StrictMode> */}
      </Suspense>
  </Provider>,
);
