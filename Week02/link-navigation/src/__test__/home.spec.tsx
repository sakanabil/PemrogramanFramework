import { render } from "@testing-library/react";
import HomePage from "@/pages/index";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "/",
      query: {},
      asPath: "/",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    };
  },
}));

describe("Home Page", () => {
  it("renders home page correctly", () => {
    const { container } = render(<HomePage />);
    expect(container).toBeTruthy();
  });

  it("page renders without crashing", () => {
    const page = render(<HomePage />);
    expect(page).toBeTruthy();
  });

  it("contains page elements", () => {
    const { container } = render(<HomePage />);
    expect(container.querySelector("div")).toBeTruthy();
  });
});
