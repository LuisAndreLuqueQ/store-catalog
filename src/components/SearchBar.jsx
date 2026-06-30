import { Search } from "lucide-react";

export const SearchBar = ({ value, onChange }) => {
    return (
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2.5 gap-2 w-full max-w-md mx-auto">
        <Search size={16} className="text-gray-400 shrink-0" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search products..."
          className="bg-transparent text-sm outline-none w-full"
        />
      </div>
    );
};