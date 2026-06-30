import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductDetail } from "./components/ProductDetail";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./components/Navbar";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar search={search} onSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} onSearchChange={setSearch} />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
