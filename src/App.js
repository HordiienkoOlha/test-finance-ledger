// import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./components/Home"));

function App() {
  return (
    <>
      <Header />
      <Home />
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
