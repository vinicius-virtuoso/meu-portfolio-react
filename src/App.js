import { Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";

import Home from "./components/pages/Home";
import Sobre from "./components/pages/Sobre";
import Portfolio from "./components/pages/Portfolio";
import Contato from "./components/pages/Contato";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 880);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
