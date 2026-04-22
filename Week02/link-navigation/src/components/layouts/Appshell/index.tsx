import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Roboto } from "next/font/google";

// Dynamic import untuk Navbar dengan loading component
const Navbar = dynamic(() => import("../navbar"), {
  loading: () => <div style={{ height: "60px", background: "#f0f0f0" }} />,
  ssr: false,
});

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

type AppShellProps = {
  children: React.ReactNode;
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const router = useRouter();
  return (
    <main className={roboto.className}>
      {!disableNavbar.includes(router.pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
