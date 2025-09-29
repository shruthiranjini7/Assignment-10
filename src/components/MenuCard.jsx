export default function MenuCard({ product }) {
  const handleAddToCart = () => {
    console.log(`Added to cart: ${product.name}`);
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="mx-auto mb-3" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">Category: {product.category}</p>
      <p className="text-gray-800 font-bold">₹{product.price}</p>
      <p className="text-yellow-500">⭐ {product.rating}</p>
      <button
        onClick={handleAddToCart}
        className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
