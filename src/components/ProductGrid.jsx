import ProductCard from "./MenuCard";

export default function ProductGrid({ products }) {
  if (!products.length) return <p className="p-4">No products found.</p>;

  return (
    <div className="grid gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
