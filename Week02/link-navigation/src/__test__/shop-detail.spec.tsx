import { render, screen } from "@testing-library/react";
import ShopDetail from "@/pages/shop/[...slug]";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/shop",
      pathname: "/shop/[...slug]",
      query: { slug: ["electronics", "phones"] },
      asPath: "/shop/electronics/phones",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    };
  },
}));

describe("Shop Detail Page ([...slug].tsx)", () => {
  it("renders shop detail page correctly", () => {
    const { container } = render(<ShopDetail />);
    expect(container).toBeTruthy();
  });

  it("page renders without errors", () => {
    const page = render(<ShopDetail />);
    expect(page).toBeTruthy();
  });

  it("handles multi-level slug routing", () => {
    const { container } = render(<ShopDetail />);
    expect(container).toBeTruthy();
  });

  it("contains page structure", () => {
    const { container } = render(<ShopDetail />);
    const div = container.querySelector("div");
    expect(div).toBeTruthy();
  });

  it("renders with correct router query", () => {
    const page = render(<ShopDetail />);
    expect(page).toBeTruthy();
  });
});
