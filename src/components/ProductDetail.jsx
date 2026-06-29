import { useParams, useNavigate } from "react-router-dom";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { Loading } from "./Loading";

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {data: product,loading,error,} = useFetchProducts(`https://fakestoreapi.com/products/${id}`);

  if (loading) return <Loading />;

  if (error)
    return (
      <div className="flex flex-col items-center py-20 gap-4">
        <p className="text-red-500">{error}</p>
        <button
          onClick={() => navigate("/")}
          className="text-blue-600 hover:underline"
        >
          Volver al inicio
        </button>
      </div>
    );

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:underline"
      >
        ← Atrás
      </button>
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-64 object-contain"
        />
        <div className="flex flex-col gap-3">
          <span className="text-sm text-blue-600 uppercase">
            {product.category}
          </span>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-3xl font-bold">${product.price}</p>
          {product.rating && (
            <p className="text-sm text-gray-500">
              ★ {product.rating.rate} ({product.rating.count} reseñas)
            </p>
          )}
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        </div>
      </div>
    </div>
  );
};
