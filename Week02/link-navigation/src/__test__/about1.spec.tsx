import { render } from "@testing-library/react";
import AboutPage1 from "@/pages/about1";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/about1",
      pathname: "/about1",
      query: {},
      asPath: "/about1",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    };
  },
}));

describe("About1 Page", () => {
  it("renders about1 page correctly", () => {
    const { container } = render(<AboutPage1 />);
    expect(container).toBeTruthy();
  });

  it("page renders without crashing", () => {
    const page = render(<AboutPage1 />);
    expect(page).toBeTruthy();
  });

  it("contains page content", () => {
    const { container } = render(<AboutPage1 />);
    const content = container.querySelector("div");
    expect(content).toBeTruthy();
  });

  it("renders component successfully", () => {
    const page = render(<AboutPage1 />);
    expect(page).toBeTruthy();
  });
});
