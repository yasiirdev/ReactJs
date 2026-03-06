
import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";
import { Outlet } from "react-router-dom";

import Container from "./components/Container.jsx";

function App() {

  return (
    <>
      <Header />
      <Container />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
