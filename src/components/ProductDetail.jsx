import { useParams, useNavigate } from "react-router-dom";
import { ShoppingCart, ArrowLeft, Star } from "lucide-react";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { Loading } from "./Loading";

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, loading, error } = useFetchProducts(
    `https://fakestoreapi.com/products/${id}`
  );

  if (loading) return <Loading />;

  if (error)
    return (
      <div className="flex flex-col items-center py-20 gap-4">
        <p className="text-red-500">{error}</p>
        <button onClick={() => navigate("/")} className="text-blue-600 hover:underline">
          Volver al inicio
        </button>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        Atrás
      </button>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-96 bg-gray-50 rounded-xl p-8 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-h-80 object-contain"
          />
        </div>

        <div className="flex flex-col flex-1 gap-4">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
            {product.category}
          </span>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            {product.title}
          </h1>

          <div className="flex items-center gap-3">
            <p className="text-3xl font-bold text-gray-900">${product.price}</p>
            {product.rating && (
              <div className="flex items-center gap-1 bg-yellow-50 border border-yellow-200 rounded-full px-3 py-1">
                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium text-yellow-700">
                  {product.rating.rate}
                </span>
                <span className="text-xs text-yellow-600">
                  ({product.rating.count} reseñas)
                </span>
              </div>
            )}
          </div>

          <div className="w-12 h-0.5 bg-gray-200"></div>

          <p className="text-gray-600 leading-relaxed text-sm">
            {product.description}
          </p>

          <button className="mt-4 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded transition-colors w-full md:w-auto">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
