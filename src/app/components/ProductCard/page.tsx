
'use client'; 

import Link from 'next/link';
import { motion } from 'framer-motion';
//import { Product } from '@/types/product';



export default function ProductCard({ product }:unknown  ) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-4 rounded-lg shadow hover:shadow-lg hover:border cursor-pointer text-black"
    >
      <Link href={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} className="h-40 mx-auto" />
        <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
        <p className="text-gray-600">${product.price}</p>
      </Link>
    </motion.div>
  );
}
