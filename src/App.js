import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Main from "./components/Main";

import About from "./components/About/About";
import Cases from "./components/Cases/Cases";
import Blog from "./components/Blog/Blog";

import Team from "./components/Team/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Main>
        <About />
        <Cases />
        <Blog />
        <Team />
        <Contact />
      </Main>
      <Footer />
    </>
  );
}

export default App;
