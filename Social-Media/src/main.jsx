import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Loader = lazy(() => import("./Components/spinner.jsx"));
const App = lazy(() => import("./App.jsx"));
const Hero = lazy(() => import("./Components/hero.jsx"));
const CreatePost = lazy(() => import("./Components/new.jsx"));
const About = lazy(() => import("./Components/about.jsx"));
const Feature = lazy(() => import("./Components/feature.jsx"));

const root = globalThis.document.getElementById("root");

createRoot(root).render(
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Hero />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="about" element={<About />} />
          <Route path="feature" element={<Feature />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);
