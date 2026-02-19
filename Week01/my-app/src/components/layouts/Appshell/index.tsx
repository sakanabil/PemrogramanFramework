import Navbar from "../navbar";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <div>footer</div>
    </>
  );
};

export default AppShell;
