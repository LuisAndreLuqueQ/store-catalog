import { ShoppingBag } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white mt-16">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-1 font-bold text-lg">
          <ShoppingBag size={20} className="text-blue-600" />
          <span>LUXE.</span>
        </div>
        <p className="text-xs text-gray-400 text-center">
          © 2026 Luxe Store. Powered by FakeStore API.
        </p>
        <div className="flex items-center gap-4">
          <button className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Terms</button>
          <button className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Privacy</button>
          <button className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Cookies</button>
        </div>
      </div>
    </footer>
  );
};
