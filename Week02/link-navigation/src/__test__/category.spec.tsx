import { render } from "@testing-library/react";
import CategoryPage from "@/pages/category/[...slug]";
import { useRouter } from "next/router";

describe("Category Page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
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
    });
  });

  it("renders the category page correctly", () => {
    const page = render(<CategoryPage />);
    expect(page).toMatchSnapshot();
  });
});
