import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Caps from "./Components/Caps/Caps";
import About from "./Components/About/About";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
// import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import LoginSignup from "./Pages/LoginSignup";
import Preform from "./Components/Preform/Preform";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/preform" element={<Preform />} />
          <Route path="/caps" element={<Caps />} />
          <Route path="/machinery" />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
