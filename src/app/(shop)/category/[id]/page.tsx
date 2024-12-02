import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { Category } from "@/types";

type CategoryByIdPageProps = {
  params: { id: Category };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function CategoryByIdPage({ params }: CategoryByIdPageProps) {
  const products = initialData.products.filter(
    (product) => product.gender === params.id
  );

  const labels: Record<Category, string> = {
    men: "para hombres",
    women: "para mujeres",
    kid: "para niños",
    unisex: "para todos",
  };

  return (
    <>
      <Title
        title={`Artículos ${labels[params.id]}`}
        subtitle="Todos los productos"
      />

      <ProductGrid products={products} />
    </>
  );
}
