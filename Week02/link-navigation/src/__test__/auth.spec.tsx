import { render } from "@testing-library/react";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";

describe("Auth Pages", () => {
  it("renders login page correctly", () => {
    const { container } = render(<LoginPage />);
    expect(container).toBeTruthy();
  });

  it("renders register page correctly", () => {
    const { container } = render(<RegisterPage />);
    expect(container).toBeTruthy();
  });
});
