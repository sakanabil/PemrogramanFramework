import { render } from "@testing-library/react";
import BlogPage from "@/pages/blog";
import BlogDetail from "@/pages/blog/[slug]";

describe("Blog Pages", () => {
  it("renders blog list page correctly", () => {
    const { container } = render(<BlogPage />);
    expect(container).toBeTruthy();
  });

  it("renders blog detail page correctly", () => {
    const { container } = render(<BlogDetail />);
    expect(container).toBeTruthy();
  });
});
