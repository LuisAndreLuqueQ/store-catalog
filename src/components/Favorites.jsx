import { X, Heart } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";
import { useNavigate } from "react-router-dom";

export const Favorites = ({ isOpen, onClose }) => {
  const { favorites, toggleFavorite, clearFavorites } = useFavorites();
  const navigate = useNavigate();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl z-50 flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Favorites ({favorites.length})</h2>
          <button onClick={onClose}>
            <X size={22} className="text-gray-600 hover:text-gray-900" />
          </button>
        </div>

        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 gap-3 text-gray-400">
            <Heart size={48} />
            <p className="text-sm">No favorites yet</p>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {favorites.map((item) => (
                <li key={item.id} className="flex gap-3 items-center border-b border-gray-100 pb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 object-contain bg-gray-50 rounded p-1 shrink-0 cursor-pointer"
                    onClick={() => { navigate(`/products/${item.id}`); onClose(); }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug">
                      {item.title}
                    </p>
                    <p className="text-sm font-bold text-gray-900 mt-1">${item.price}</p>
                  </div>
                  <button onClick={() => toggleFavorite(item)}>
                    <Heart size={16} className="text-red-500 fill-red-500 hover:fill-none transition-all" />
                  </button>
                </li>
              ))}
            </ul>

            <div className="border-t p-4">
              <button
                onClick={clearFavorites}
                className="w-full text-sm text-gray-500 hover:text-red-500 transition-colors"
              >
                Clear all favorites
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
