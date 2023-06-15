import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../page/about";
import Contact from "../page/contact";
import Home from "../page/home";
import Breeds from "../page/breeds";
import Input from "../page/input";

export function Routing() {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/Home" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/Breeds" element={<Breeds />} />
      <Route path="/Input" element={<Input />} />
    </Routes>
  );
}
