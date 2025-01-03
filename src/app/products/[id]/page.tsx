import { Product } from '../../types/product';


async function fetchProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) return null; 
    return await res.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    return null; 
  }
}


export default async function ProductDetails({ params }: { params: { id: string } }) {
  const { id } = await params; 

  const product = await fetchProduct(id);

  if (!product) {
    return (
      <div className="container mx-auto p-4 text-black">
        <h1 className="text-red-500 text-2xl font-bold">Product Not Found</h1>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto border p-5 m-5 shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-1/2 p-5"
        />
        <div className="text-gray-700 my-auto">
          <h1 className="text-2xl font-bold text-black">{product.title}</h1>
          <p className="text-blue-500">${product.price}</p>
          <p className="mt-4">{product.description}</p>
          <p className="text-sm mt-2 text-blue-500">{product.category}</p>
        </div>
      </div>
    </div>
  );
}
