import { useEffect } from "react";
import { useRouter } from "next/router";
import HeroSection from "./heroSection";
import MainSection from "./mainSection";

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
      <HeroSection />
      <MainSection />
    </div>
  );
};

export default Produk;
