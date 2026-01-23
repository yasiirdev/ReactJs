import Footer from "./Components/Footer";
import Header from "./Components/header";
import Hero from "./Components/Hero";
import EducationPage from "./Components/pages/Education";
import ExperiencePage from "./Components/pages/Experiences";
import ContextProvider from "./store/contextprovider";


function Resume() {
  return (
    <>
      <ContextProvider>
        <Header />
        <Hero />
        <ExperiencePage />
        <EducationPage />
        <Footer />
      </ContextProvider>
    </>
  );
}

export default Resume;
