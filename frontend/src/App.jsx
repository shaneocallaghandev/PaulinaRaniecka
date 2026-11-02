import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./styles/main.css";

const App = () => {
  return (
    <Router>
      <ScrollToHash />
      <div className="page">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
