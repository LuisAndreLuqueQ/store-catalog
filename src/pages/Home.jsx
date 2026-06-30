import { useState } from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { ProductCard } from "../components/ProductCard";
import { Loading } from "../components/Loading";
import { Hero } from "../components/Hero";

const SORT_OPTIONS = [
  { label: "Newest", value: "default" },
  { label: "Price: Low to High", value: "asc" },
  { label: "Price: High to Low", value: "desc" },
];

export const Home = ({ search, category }) => {
  const [sort, setSort] = useState("default");
  const [limit, setLimit] = useState(8);

  const url = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : "https://fakestoreapi.com/products";

  const { data: products, loading, error } = useFetchProducts(url);

  const getSortedProducts = () => {
    if (!products) return [];
    const sorted = [...products];
    if (sort === "asc") return sorted.sort((a, b) => a.price - b.price);
    if (sort === "desc") return sorted.sort((a, b) => b.price - a.price);
    return sorted;
  };

  const getFilteredProducts = () => {
    const sorted = getSortedProducts();
    if (!search.trim()) return sorted;
    return sorted.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredProducts = getFilteredProducts();
  const visibleProducts = filteredProducts.slice(0, limit);
  const hasMore = limit < filteredProducts.length;

  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-8">
        {loading && <Loading />}
        {error && (
          <div className="flex flex-col items-center py-20 gap-4">
            <p className="text-red-500">{error}</p>
            <p className="text-sm text-gray-400">Intenta recargar la página</p>
          </div>
        )}
        {!loading && !error && (
          <>
            <div className="flex items-end justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold">
                  {category ? `Category: ${category}` : "Trending Now"}
                </h2>
                <p className="text-sm text-gray-500">Our most popular items this week</p>
              </div>
              <select
                value={sort}
                onChange={(e) => { setSort(e.target.value); setLimit(8); }}
                className="text-sm border border-gray-200 rounded px-3 py-2 outline-none cursor-pointer"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {visibleProducts.length === 0 && (
              <div className="flex flex-col items-center py-16 gap-2">
                <p className="text-gray-500 font-medium">No se encontraron productos</p>
                <p className="text-sm text-gray-400">Intenta con otro término de búsqueda</p>
              </div>
            )}
            <div className="flex flex-col items-center mt-10 gap-3">
              {hasMore && (
                <button
                  onClick={() => setLimit((prev) => prev + 8)}
                  className="border border-gray-300 text-gray-700 px-8 py-2.5 rounded hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Load More Products
                </button>
              )}
              <p className="text-sm text-gray-400">
                Showing {visibleProducts.length} of {filteredProducts.length} products
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};
