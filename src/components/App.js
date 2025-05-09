import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Category from "./Category";
import ItemDetail from "./ItemDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":category" element={<Category />}>
            <Route path=":itemId" element={<ItemDetail />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

