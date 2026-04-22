import { render } from "@testing-library/react";
import Document from "@/pages/_document";

describe("Document Component (_document.tsx)", () => {
  it("renders document structure", () => {
    const { container } = render(<Document />);
    expect(container).toBeTruthy();
  });

  it("renders html element with lang attribute", () => {
    const { container } = render(<Document />);
    const html = container.querySelector("html");
    expect(html?.getAttribute("lang")).toBe("id");
  });

  it("renders head element", () => {
    const { container } = render(<Document />);
    const head = container.querySelector("head");
    expect(head).toBeTruthy();
  });

  it("renders body element", () => {
    const { container } = render(<Document />);
    const body = container.querySelector("body");
    expect(body).toBeTruthy();
  });

  it("contains analytics scripts", () => {
    const { container } = render(<Document />);
    const scripts = container.querySelectorAll("script");
    expect(scripts.length).toBeGreaterThan(0);
  });
});
