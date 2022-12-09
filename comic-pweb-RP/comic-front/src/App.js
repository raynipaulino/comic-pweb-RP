import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Comic } from "./pages/Comic";
import { Footer } from "./components/Footer";

function App() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/comics")
      .then((response) => response.json())
      .then((data) => setComics(data.results));
  }, []);

  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home comics={comics} />} />
          <Route path="comic/:id" element={<Comic />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
