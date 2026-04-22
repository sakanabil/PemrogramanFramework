import { render } from "@testing-library/react";
import ShopPage from "@/pages/shop/[...slug]";
import { useRouter } from "next/router";

beforeEach(() => {
  (useRouter as jest.Mock).mockReturnValue({
    route: "/shop",
    pathname: "/shop/[...slug]",
    query: { slug: ["electronics"] },
    asPath: "/shop/electronics",
    push: jest.fn(),
    events: { on: jest.fn(), off: jest.fn() },
    isReady: true,
  });
});

describe("Shop Page", () => {
  it("renders shop page correctly", () => {
    const { container } = render(<ShopPage />);
    expect(container).toBeTruthy();
  });

  it("renders without errors", () => {
    const page = render(<ShopPage />);
    expect(page).toBeTruthy();
  });
});
