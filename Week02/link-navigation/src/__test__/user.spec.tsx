import { render } from "@testing-library/react";
import UserPage from "@/pages/user";
import UserPasswordPage from "@/pages/user/password";

describe("User Pages", () => {
  it("renders user page correctly", () => {
    const { container } = render(<UserPage />);
    expect(container).toBeTruthy();
  });

  it("renders user password page correctly", () => {
    const { container } = render(<UserPasswordPage />);
    expect(container).toBeTruthy();
  });
});
