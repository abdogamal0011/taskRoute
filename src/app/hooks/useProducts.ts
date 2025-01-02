import { create } from 'zustand';

interface ProductState {
  searchQuery: string;
  sortBy: 'asc' | 'desc';
  setSearchQuery: (query: string) => void;
  setSortBy: (sort: 'asc' | 'desc') => void;
}

export const useProductsStore = create<ProductState>((set) => ({
  searchQuery: '',
  sortBy: 'asc',
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSortBy: (sort) => set({ sortBy: sort }),
}));
