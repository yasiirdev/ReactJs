import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { PostContextProvider } from "./Context/ContextProvider";
import Container from "./Components/Container";
import { Outlet } from "react-router-dom";
function SocialMedia() {
 

  return (
    <>
      <PostContextProvider>
        <Container>
          <Header />
          <Outlet />
          {/* <Footer /> */}
        </Container>
      </PostContextProvider>
    </>
  );
}

export default SocialMedia;
