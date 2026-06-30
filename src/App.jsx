import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductDetail } from "./components/ProductDetail";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./components/Navbar";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(null);

  const handleCategory = (value) => {
    setCategory(value);
    setSearch("");
  };

  return (
    <>
      <Navbar
        search={search}
        onSearch={setSearch}
        category={category}
        onCategory={handleCategory}
      />
      <Routes>
        <Route path="/" element={<Home search={search} category={category} />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
