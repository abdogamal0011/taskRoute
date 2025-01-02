import { Product } from '../../types/product';

interface Props {
  params: { id: string };
}

// Fetch a single product by ID
async function fetchProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) return null; // Handle missing product
    return await res.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    return null; // Handle fetch errors
  }
}

export default async function ProductDetails({ params }: Props) {
  const { id } = await params; // Correctly access params.id

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
    <div className="container mx-auto m-9 p-10 border rounded ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <img
          src={product.image}
          alt={product.title}
          className="w-1/2"
          />
       
        <div className='text-gray-800 my-auto'>
          <h1 className="text-2xl text-black font-bold">{product.title}</h1>
          <p className="text-xl">${product.price}</p>
          <p className="mt-4 leading-6">{product.description}</p>
          <p className="text-sm  mt-2 text-sky-400"> {product.category}</p>
        </div>
        </div>
      </div>
    );
}
