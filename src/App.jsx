import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductDetail } from "./components/ProductDetail";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";
import { Favorites } from "./components/Favorites";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

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
        onCartToggle={() => { setIsCartOpen(true); setIsFavoritesOpen(false); }}
        onFavoritesToggle={() => { setIsFavoritesOpen(true); setIsCartOpen(false); }}
      />
      <Routes>
        <Route path="/" element={<Home search={search} category={category} onCategoryChange={handleCategory} />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Favorites isOpen={isFavoritesOpen} onClose={() => setIsFavoritesOpen(false)} />
    </>
  );
}

export default App;
