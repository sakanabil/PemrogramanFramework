import { render } from "@testing-library/react";
import ProdukDetail from "@/pages/produk/[produk]";
import ProdukServer from "@/pages/produk/server";
import ProdukStatic from "@/pages/produk/static";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/produk",
      pathname: "/produk/[produk]",
      query: { produk: "1" },
      asPath: "/produk/1",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    };
  },
}));

describe("Produk Pages", () => {
  it("renders produk detail page correctly", () => {
    const { container } = render(<ProdukDetail />);
    expect(container).toBeTruthy();
  });

  it("renders produk server page correctly", () => {
    const { container } = render(<ProdukServer />);
    expect(container).toBeTruthy();
  });

  it("renders produk static page correctly", () => {
    const { container } = render(<ProdukStatic />);
    expect(container).toBeTruthy();
  });

  it("page renders without errors", () => {
    const page = render(<ProdukDetail />);
    expect(page).toBeTruthy();
  });
});
