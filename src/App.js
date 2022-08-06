// import { Route, Routes } from "react-router-dom";import { Navbar } from './components/Navbar';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ContainerBackground from "./components/ContainerBackground/ContainerBackground";

import About from "./components/About/About";
import Cases from "./components/Cases/Cases";
import Blog from "./components/Blog/Blog";

import Team from "./components/Team/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ContainerBackground>
        <Navbar />
        <Home />
      </ContainerBackground>
      <About />
      <Cases />
      <Blog />
      <Team />
      <Contact />
      <Footer />
      {/* <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cases" element={<Cases />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes> */}
    </>
  );
}

export default App;
