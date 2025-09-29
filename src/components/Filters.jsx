export default function Filters({ search, setSearch, category, setCategory, sort, setSort, categories }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 bg-gray-100">
      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full md:w-1/3"
      />

      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      {/* Sort */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">Sort</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
        <option value="rating-desc">Rating: High → Low</option>
      </select>
    </div>
  );
}
