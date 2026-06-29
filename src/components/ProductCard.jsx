import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />
      <h3 className="font-semibold text-sm truncate">{product.title}</h3>
      <p className="text-gray-600 font-bold mt-2">${product.price}</p>
      <button
        onClick={() => navigate(`/products/${product.id}`)}
        className="bg-blue-600 text-white w-full py-2 mt-3 rounded hover:bg-blue-700"
      >
        Ver detalles
      </button>
    </div>
  );
};
