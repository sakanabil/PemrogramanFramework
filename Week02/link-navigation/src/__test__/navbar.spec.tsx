import { render } from "@testing-library/react";
import Navbar from "@/components/layouts/navbar";

describe("Navbar Component", () => {
  it("renders navbar without crashing", () => {
    const { container } = render(<Navbar />);
    expect(container).toBeTruthy();
  });

  it("navbar component mounts successfully", () => {
    const page = render(<Navbar />);
    expect(page).toBeTruthy();
  });
});
