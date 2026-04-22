import { render } from "@testing-library/react";
import ProfilePage from "@/pages/profil";
import EditProfilePage from "@/pages/profil/edit";

describe("Profile Pages", () => {
  it("renders profile page correctly", () => {
    const { container } = render(<ProfilePage />);
    expect(container).toBeTruthy();
  });

  it("renders edit profile page correctly", () => {
    const { container } = render(<EditProfilePage />);
    expect(container).toBeTruthy();
  });
});
