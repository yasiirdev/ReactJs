import Header from "./Components/header";
import { PostContextProvider } from "./Context/ContextProvider";
import Container from "./Components/container";
import { Outlet } from "react-router-dom";
function SocialMedia() {
 

  return (
    <>
      <PostContextProvider>
        <Container>
          <Header />
          <Outlet />
        </Container>
      </PostContextProvider>
    </>
  );
}

export default SocialMedia;
