import { useEffect } from "react";
import { useRouter } from "next/router";

const Produk = () => {
  const { push } = useRouter();

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (!isLogin) {
      push("/auth/login");
    }
  }, [push]);

  return (
    <div>
      <h1>Halaman Produk</h1>
      <p>Anda sudah login!</p>
    </div>
  );
};

export default Produk;
