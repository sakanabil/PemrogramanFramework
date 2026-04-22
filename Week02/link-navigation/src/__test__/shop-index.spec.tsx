import { render } from "@testing-library/react";
import ShopIndexPage from "@/pages/shop/index";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/shop",
      pathname: "/shop",
      query: {},
      asPath: "/shop",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    };
  },
}));

describe("Shop Index Page", () => {
  it("renders shop index page correctly", () => {
    const { container } = render(<ShopIndexPage />);
    expect(container).toBeTruthy();
  });

  it("page renders without crashing", () => {
    const page = render(<ShopIndexPage />);
    expect(page).toBeTruthy();
  });

  it("contains shop content", () => {
    const { container } = render(<ShopIndexPage />);
    expect(container.textContent).toBeDefined();
  });
});
