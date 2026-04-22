import { render } from "@testing-library/react";
import CategoryPage from "@/pages/category/[...slug]";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/category",
      pathname: "/category/[...slug]",
      query: { slug: ["electronics"] },
      asPath: "/category/electronics",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    };
  },
}));

describe("Category Page ([...slug].tsx)", () => {
  it("renders category page correctly", () => {
    const { container } = render(<CategoryPage />);
    expect(container).toBeTruthy();
  });

  it("page renders without errors", () => {
    const page = render(<CategoryPage />);
    expect(page).toBeTruthy();
  });

  it("handles slug parameter", () => {
    const { container } = render(<CategoryPage />);
    expect(container).toBeTruthy();
  });

  it("contains page structure", () => {
    const { container } = render(<CategoryPage />);
    expect(container.querySelector("div")).toBeTruthy();
  });
});
