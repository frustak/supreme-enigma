export type ProductData = {
  id: string;
  slug: string;
  image: string;
  name: string;
  price: number;
};

type ProductProps = {
  product: ProductData;
};

export function ProductListItem({ product }: ProductProps) {
  return (
    <a href={`/shop/${product.slug}`} className="group">
      <div className="overflow-hidden rounded-md h-96">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full transition duration-500 rounded-md h-96 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <h3 className="text-sm font-semibold">{product.name}</h3>
        <h4 className="text-xs text-muted-foreground">
          ${product.price.toFixed(2)}
        </h4>
      </div>
    </a>
  );
}
