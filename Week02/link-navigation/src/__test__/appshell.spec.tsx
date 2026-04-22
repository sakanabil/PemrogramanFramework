import { render } from "@testing-library/react";
import { SessionProvider } from "next-auth/react";
import AppShell from "@/components/layouts/Appshell";

jest.mock("next/dynamic", () => ({
  __esModule: true,
  default: ({
    children,
    fallback,
  }: {
    children?: React.ReactNode;
    fallback?: React.ReactNode;
  }) => {
    return <div>{children || fallback}</div>;
  },
}));

describe("AppShell Component", () => {
  it("renders appshell with children", () => {
    const { container } = render(
      <SessionProvider session={null}>
        <AppShell>
          <div>Test Content</div>
        </AppShell>
      </SessionProvider>,
    );
    expect(container).toBeTruthy();
  });

  it("renders main element", () => {
    const { container } = render(
      <SessionProvider session={null}>
        <AppShell>
          <p>Content</p>
        </AppShell>
      </SessionProvider>,
    );
    const main = container.querySelector("main");
    expect(main).toBeTruthy();
  });
});
