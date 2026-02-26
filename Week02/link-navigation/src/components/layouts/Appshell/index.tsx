import Navbar from "../navbar";
import { useRouter } from "next/router";

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const router = useRouter();
  return (
    <main>
      {!disableNavbar.includes(router.pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
