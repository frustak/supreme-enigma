type ProductData = {
  image: string;
  name: string;
  price: number;
};

type Props = {
  products: ProductData[];
};

export function ProductList({ products }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
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
        className="rounded-md h-96 object-cover w-full"
      />
      <h3 className="text-sm font-medium mt-2">{product.name}</h3>
      <h4 className="text-xs text-muted-foreground">${product.price}</h4>
    </div>
  );
}
