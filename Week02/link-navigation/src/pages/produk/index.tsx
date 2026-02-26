import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProdukRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/views/produk");
  }, [router]);

  return null;
}
