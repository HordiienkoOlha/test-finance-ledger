// import { Route, Routes } from "react-router-dom";import { Navbar } from './components/Navbar';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
// import { Cases } from "./components/Cases";
// import { Blog } from "./components/Blog";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      {/* <Cases /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
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
