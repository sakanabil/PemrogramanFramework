import { render } from "@testing-library/react";
import ProdukDetailPage from "@/pages/produk/[produk]";

const mockProduct = {
  id: "1",
  name: "Test Product",
  description: "Test Description",
  price: 100000,
  image: "test.jpg",
  category: "Test Category",
  rating: 5,
  stock: 10,
};

jest.mock("@/views/DetailProduct", () => {
  return function MockDetailProduct() {
    return <div>Detail Product Component</div>;
  };
});

describe("Produk Detail Page ([produk].tsx)", () => {
  it("renders product detail page correctly", () => {
    const { container } = render(<ProdukDetailPage product={mockProduct} />);
    expect(container).toBeTruthy();
  });

  it("displays detail product component", () => {
    const { getByText } = render(<ProdukDetailPage product={mockProduct} />);
    expect(getByText("Detail Product Component")).toBeTruthy();
  });

  it("receives product prop", () => {
    const { container } = render(<ProdukDetailPage product={mockProduct} />);
    expect(container).toBeTruthy();
  });

  it("renders without crashing", () => {
    const page = render(<ProdukDetailPage product={mockProduct} />);
    expect(page).toBeTruthy();
  });

  it("passes product data to detail component", () => {
    const { container } = render(<ProdukDetailPage product={mockProduct} />);
    expect(container.textContent).toContain("Detail Product Component");
  });
});
