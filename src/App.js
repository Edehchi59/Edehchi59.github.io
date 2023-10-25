import "../src/Assets/styles/global.scss";
import Contact from "./Containers/Contact/Contact";
import Home from "./Containers/Home/Home";
import Menu from "./Containers/Menu/Menu";
import About from "./Containers/About/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
