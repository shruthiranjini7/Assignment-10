import { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import ProductGrid from "./components/ProductGrid";
import { products as initialProducts } from "./data/products";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const categories = [...new Set(initialProducts.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    let list = [...initialProducts];

    if (search)
      list = list.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );

    if (category)
      list = list.filter(p => p.category === category);

    if (sort === "price-asc")
      list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc")
      list.sort((a, b) => b.price - a.price);
    else if (sort === "rating-desc")
      list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [search, category, sort]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        categories={categories}
      />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
