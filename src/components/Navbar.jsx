import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";

const CATEGORIES = [
  { label: "Electronics", value: "electronics" },
  { label: "Jewelry", value: "jewelery" },
  { label: "Men's", value: "men's clothing" },
  { label: "Women's", value: "women's clothing" },
];

export const Navbar = ({ search, onSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        <button className="md:hidden" onClick={() => { setMenuOpen(!menuOpen); setSearchOpen(false); }}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link to="/" className="flex items-center gap-1 font-bold text-xl">
          <ShoppingBag size={24} className="text-blue-600" />
          <span>LUXE.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {CATEGORIES.map((cat) => (
            <button key={cat.value} className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              {cat.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2 w-64">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search products..."
            className="bg-transparent text-sm outline-none w-full"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="md:hidden" onClick={() => { setSearchOpen(!searchOpen); setMenuOpen(false); }}>
            <Search size={22} className="text-gray-700" />
          </button>
          <button className="hidden md:block">
            <Heart size={22} className="text-gray-700 hover:text-red-500 transition-colors" />
          </button>
          <button className="relative">
            <ShoppingCart size={22} className="text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <button className="hidden md:flex w-8 h-8 bg-gray-200 rounded-full items-center justify-center">
            <User size={16} className="text-gray-600" />
          </button>
        </div>

      </div>

      {searchOpen && (
        <div className="md:hidden border-t border-gray-100 px-4 py-3">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2">
            <Search size={16} className="text-gray-400 shrink-0" />
            <input
              type="text"
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search products..."
              className="bg-transparent text-sm outline-none w-full"
              autoFocus
            />
          </div>
        </div>
      )}

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {CATEGORIES.map((cat) => (
            <button key={cat.value} onClick={() => setMenuOpen(false)} className="text-sm text-gray-700 text-left hover:text-blue-600">
              {cat.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
