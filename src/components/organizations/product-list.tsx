import {
  ProductListItem,
  type ProductData,
} from "../molecules/product-list-item";

type Props = {
  heading: string;
  subheading: string;
  products: ProductData[];
};

export function ProductList({ heading, subheading, products }: Props) {
  return (
    <section className="container">
      <h2 className="text-2xl font-semibold font-display">{heading}</h2>
      <h3 className="mt-1 text-sm text-muted-foreground">{subheading}</h3>
      <div className="grid grid-cols-1 gap-8 lg:gap-10 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
