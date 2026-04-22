import { render } from "@testing-library/react";
import SettingPage from "@/pages/setting/app";

describe("Setting Pages", () => {
  it("renders setting app page correctly", () => {
    const { container } = render(<SettingPage />);
    expect(container).toBeTruthy();
  });

  it("page renders without crashing", () => {
    const page = render(<SettingPage />);
    expect(page).toBeTruthy();
  });
});
