import { useNavigate } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { useInView } from "../hooks/useInView";

export const ProductCard = ({ product, index = 0 }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isVisible ? `${index * 60}ms` : "0ms" }}
      className={`group bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 flex flex-col transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div
        className="relative bg-gray-50 rounded-t-lg p-4 cursor-pointer overflow-hidden"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <button
          className="absolute top-3 right-3"
          onClick={(e) => { e.stopPropagation(); toggleFavorite(product); }}
        >
          <Heart
            size={18}
            className={`transition-colors ${
              isFavorite(product.id)
                ? "text-red-500 fill-red-500"
                : "text-gray-400 hover:text-red-500"
            }`}
          />
        </button>
      </div>

      <div className="p-4 flex flex-col flex-1 gap-2">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
          {product.category}
        </span>
        <h3
          className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug cursor-pointer hover:text-blue-600 transition-colors"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          {product.title}
        </h3>
        <div className="flex items-center justify-between mt-auto pt-2">
          <p className="text-base font-bold text-gray-900">${product.price}</p>
          {product.rating && (
            <span className="text-xs text-yellow-500 font-medium">
              ★ {product.rating.rate}
            </span>
          )}
        </div>
        <button
          onClick={() => addToCart(product)}
          className="mt-2 w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold py-2.5 rounded transition-colors"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};
