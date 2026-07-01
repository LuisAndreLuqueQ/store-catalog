import { X, Trash2, ShoppingBag, Plus, Minus } from "lucide-react";
import { useCart } from "../context/CartContext";

export const Cart = ({ isOpen, onClose }) => {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart, clearCart, total } = useCart();

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
          <h2 className="text-lg font-bold">Your Cart ({cartItems.reduce((sum, i) => sum + i.quantity, 0)})</h2>
          <button onClick={onClose}>
            <X size={22} className="text-gray-600 hover:text-gray-900" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 gap-3 text-gray-400">
            <ShoppingBag size={48} />
            <p className="text-sm">Your cart is empty</p>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex gap-3 items-start border-b border-gray-100 pb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 object-contain bg-gray-50 rounded p-1 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug">
                      {item.title}
                    </p>
                    <p className="text-sm font-bold text-gray-900 mt-1">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-6 h-6 flex items-center justify-center rounded border border-gray-300 hover:border-gray-500 transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-6 h-6 flex items-center justify-center rounded border border-gray-300 hover:border-gray-500 transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="mt-0.5">
                    <Trash2 size={16} className="text-gray-400 hover:text-red-500" />
                  </button>
                </li>
              ))}
            </ul>

            <div className="border-t p-4 flex flex-col gap-3">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3 rounded transition-colors">
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full text-sm text-gray-500 hover:text-red-500 transition-colors"
              >
                Clear cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
