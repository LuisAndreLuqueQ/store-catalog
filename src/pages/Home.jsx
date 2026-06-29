import { useState } from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { ProductCard } from "../components/ProductCard";
import { Loading } from "../components/Loading";

export const Home = () => {
  const [url, setUrl] = useState("https://fakestoreapi.com/products");
  const { data: products, loading, error } = useFetchProducts(url);

  if (loading) return <Loading />;

  if (error)
    return (
      <div className="flex flex-col items-center py-20 gap-4">
        <p className="text-red-500">{error}</p>
        <button
          onClick={() => setUrl("https://fakestoreapi.com/products")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Reintentar
        </button>
      </div>
    );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Catálogo de Productos</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
