import { Routes, Route } from "react-router-dom";



// import pages url
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Womens from "./pages/Womens";
import Mens from "./pages/Mens";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Pages from "./pages/Pages";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </div>
  );
}










export default App;
