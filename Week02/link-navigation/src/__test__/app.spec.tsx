import { render } from "@testing-library/react";
import App from "@/pages/_app";

jest.mock("@/components/layouts/Appshell", () => {
  return function MockAppShell({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
  };
});

const mockComponent = () => <div>Test Component</div>;
const pageProps = { session: null };
const mockRouter = {
  route: "/",
  pathname: "/",
  query: {},
  asPath: "/",
  push: jest.fn(),
  events: { on: jest.fn(), off: jest.fn() },
} as any;

describe("App Component (_app.tsx)", () => {
  it("renders app component without crashing", () => {
    const { container } = render(
      <App
        Component={mockComponent}
        pageProps={pageProps}
        router={mockRouter}
      />,
    );
    expect(container).toBeTruthy();
  });
});
