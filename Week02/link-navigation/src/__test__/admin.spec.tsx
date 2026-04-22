import { render } from "@testing-library/react";
import AdminPage from "@/pages/admin";

describe("Admin Page", () => {
  it("renders admin page correctly", () => {
    const { container } = render(<AdminPage />);
    expect(container).toBeTruthy();
  });

  it("page renders without crashing", () => {
    const page = render(<AdminPage />);
    expect(page).toBeTruthy();
  });
});
