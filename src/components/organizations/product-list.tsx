import { AddButton } from "../atoms/add-button";

type ProductData = {
  id: string;
  image: string;
  name: string;
  price: number;
};

type Props = {
  products: ProductData[];
};

export function ProductList({ products }: Props) {
  return (
    <section className="container mt-20">
      <h2 className="text-2xl font-semibold font-display">Featured T-Shirts</h2>
      <h3 className="mt-1 text-sm text-muted-foreground">
        Explore Our Bestsellers
      </h3>
      <div className="grid grid-cols-1 gap-8 mt-6 lg:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

type ProductProps = {
  product: ProductData;
};

function Product({ product }: ProductProps) {
  return (
    <div>
      <img
        src={product.image}
        alt={product.name}
        className="object-cover w-full rounded-md h-96"
      />
      <div className="flex items-center justify-between mt-2">
        <div>
          <h3 className="text-sm font-semibold">{product.name}</h3>
          <h4 className="text-xs text-muted-foreground">
            ${product.price.toFixed(2)}
          </h4>
        </div>
        <AddButton />
      </div>
    </div>
  );
}
