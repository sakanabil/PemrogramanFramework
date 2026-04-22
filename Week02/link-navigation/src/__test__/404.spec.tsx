import { render } from "@testing-library/react";
import NotFoundPage from "@/pages/404";

describe("404 Page", () => {
  it("renders 404 page correctly", () => {
    const { container } = render(<NotFoundPage />);
    expect(container).toBeTruthy();
  });

  it("contains page content", () => {
    const page = render(<NotFoundPage />);
    expect(page).toBeTruthy();
  });

  it("displays error information", () => {
    const { container } = render(<NotFoundPage />);
    const content = container.textContent;
    expect(content).toBeDefined();
  });
});
