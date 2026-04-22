import { render } from "@testing-library/react";
import ProdukServer from "@/pages/produk/server";
import ProdukStatic from "@/pages/produk/static";

describe("Produk Server and Static Pages", () => {
  it("renders produk server page", () => {
    const { container } = render(<ProdukServer />);
    expect(container).toBeTruthy();
  });

  it("produk server page has content", () => {
    const { container } = render(<ProdukServer />);
    const content = container.textContent;
    expect(content).toBeDefined();
  });

  it("renders produk static page", () => {
    const { container } = render(<ProdukStatic />);
    expect(container).toBeTruthy();
  });

  it("produk static page has content", () => {
    const { container } = render(<ProdukStatic />);
    const content = container.textContent;
    expect(content).toBeDefined();
  });

  it("both pages render without errors", () => {
    const server = render(<ProdukServer />);
    const static_page = render(<ProdukStatic />);
    expect(server).toBeTruthy();
    expect(static_page).toBeTruthy();
  });
});
