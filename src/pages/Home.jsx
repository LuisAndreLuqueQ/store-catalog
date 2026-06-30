import { useState } from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { ProductCard } from "../components/ProductCard";
import { Loading } from "../components/Loading";
import { Hero } from "../components/Hero";

export const Home = () => {
  const [url, setUrl] = useState("https://fakestoreapi.com/products");
  const { data: products, loading, error } = useFetchProducts(url);

  return (
    <>
      <Hero />
      <div className="container mx-auto p-4">
        {loading && <Loading />}
        {error && (
          <div className="flex flex-col items-center py-20 gap-4">
            <p className="text-red-500">{error}</p>
            <button
              onClick={() => setUrl("https://fakestoreapi.com/products")}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Reintentar
            </button>
          </div>
        )}
        {!loading && !error && (
          <>
            <h2 className="text-xl font-bold mt-8 mb-1">Trending Now</h2>
            <p className="text-sm text-gray-500 mb-6">Our most popular items this week</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};
