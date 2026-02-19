import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div>
      <h1>Data Mahasiswa</h1> <br />
      <p>Nama Mahasiswa : Saka Nabil</p>
      <p>NIM : 2341720108</p>
      <p>Program Studi : D4 Teknik Informatika</p>
    </div>
  );
}
