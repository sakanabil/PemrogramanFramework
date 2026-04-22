import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const AboutPage = () => {
  return (
    <div>
      <h1 data-testid="title">Ini Adalah Halaman About</h1> <br />
    </div>
  );
};

export default AboutPage;
