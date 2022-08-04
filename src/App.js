// import { Route, Routes } from "react-router-dom";import { Navbar } from './components/Navbar';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Container from "./components/Container";
import About from "./components/About";
import Cases from "./components/Cases";
import Blog from "./components/Blog";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Home />
      </Container>
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
