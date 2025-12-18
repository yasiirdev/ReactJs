import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Signin from "./Components/Signin";
import CreatePost from "./Components/New";
import { useState } from "react";
import { PostContextProvider } from "./Context/ContextProvider";
function SocialMedia() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCLicked, setIsClicked] = useState(false);

  function HandleSign(){
    setIsLoggedIn(true);
  }
  function HandleCLick() {
    setIsClicked(true);
  }
  
  function HandleNonClicked() {
    setIsClicked(false);
  }


  return (
    <>
      <PostContextProvider>
        {!isLoggedIn ? (
          <Signin onSignin={HandleSign} />
        ) : (
          <div className="fulcontainer">
            <Header isCLicked={HandleCLick} NonClicked={HandleNonClicked} />
            {isCLicked ? <CreatePost /> : <Hero />}
            <Footer />
          </div>
        )}
      </PostContextProvider>
    </>
  );
}

export default SocialMedia;
