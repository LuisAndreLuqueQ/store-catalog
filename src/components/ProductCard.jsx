
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
      <div className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col">
        <div className="relative bg-gray-50 rounded-t-lg p-4">
          <img
            src={product.image} 
            alt={product.title}
            className="h-48 w-full object-contain"
          />
          <button className="absolute top-3 right-3 md:hidden">
            <Heart size={18} className="text-gray-400 hover:text-red-500 transition-colors" />
          </button>
        </div>
        <div className="p-4 flex flex-col flex-1 gap-2">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
            {product.category}
          </span>
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug">
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
            onClick={() => navigate(`/products/${product.id}`)}
            className="mt-2 w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold py-2.5 rounded transition-colors"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      </div>
  );
};
