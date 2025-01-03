export interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }
  
  export  interface Props {
    product: Product;
  }