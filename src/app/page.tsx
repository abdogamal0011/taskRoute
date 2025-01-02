'use client';

import { useState, useEffect } from 'react';
import { useProductsStore } from './hooks/useProducts';
import ProductCard from './components/ProductCard';
import { Product } from './types/product';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]); // Explicit type for products
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Explicit type for filteredProducts
  const { searchQuery, sortBy, setSearchQuery, setSortBy } = useProductsStore();

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data: Product[] = await res.json(); // Explicitly type the API response
      setProducts(data);
      setFilteredProducts(data);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products
      .filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) =>
        sortBy === 'asc' ? a.price - b.price : b.price - a.price
      );
    setFilteredProducts(filtered);
  }, [searchQuery, sortBy, products]);

  return (
    <div className="container mx-auto p-4 text-black">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          onChange={(e) => setSortBy(e.target.value as 'asc' | 'desc')}
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
