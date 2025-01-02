import { useProductsStore } from '../hooks/useProducts';
import { ChangeEvent } from 'react';

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useProductsStore();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchQuery}
        placeholder="Search products..."
        className="border p-2 rounded w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleInputChange}
      />
    </div>
  );
}
