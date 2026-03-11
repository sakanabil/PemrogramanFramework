import Link from "next/link";
import styles from "./regis.module.css";

const tampilanRegister = () => {
  return (
    <div className={styles.register}>
      <h1>Halaman Register</h1>
      <Link href="/auth/login">Ke Halaman Login</Link>
    </div>
  );
};

export default tampilanRegister;
