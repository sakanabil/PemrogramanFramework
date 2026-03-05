import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";

type productType = {
  category: string;
  id: string;
  name: string;
  price: number;
  size: string;
};

const kategori = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = () => {
    setLoading(true);
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data);
      })
      .catch((error) => console.error("Error fetching produk:", error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Daftar Produk</h1>
        <button
          onClick={fetchProducts}
          disabled={loading}
          className={`px-4 py-2 rounded font-semibold transition-opacity ${
            loading
              ? "bg-gray-400 cursor-not-allowed opacity-60"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {loading ? "Sedang memuat..." : "Refresh Data"}
        </button>
      </div>
      {products.map((products: productType) => (
        <div key={products.id}>
          <h2 className="text-xl font-semibold">{products.name}</h2>
          <p>Kategori: {products.category}</p>
          <p>Harga: {products.price}</p>
          <p>Ukuran: {products.size}</p>
        </div>
      ))}
    </div>
  );
};

export default kategori;
