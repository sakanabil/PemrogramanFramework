import { render, screen } from "@testing-library/react";
import HalamanEditor from "@/pages/editor";

describe("Editor Page", () => {
  it("renders the editor page correctly", () => {
    const page = render(<HalamanEditor />);
    // expect(screen.getByTestId("title").textContent).toBe("Editor");
    expect(page).toMatchSnapshot();
  });
});
