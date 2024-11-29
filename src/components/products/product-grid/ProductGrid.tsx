import { Product } from "@/types";
import { ProductGridItem } from "./ProductGridItem";

type ProductGridProps = {
  products: Product[];
};

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
      {products.map((product) => (
        <ProductGridItem key={product.slug} product={product} />
      ))}
    </div>
  );
};
