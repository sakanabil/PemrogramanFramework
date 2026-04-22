import styles from "@/styles/404.module.scss";
import Image from "next/image";

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <div className={styles.error__container}>
        <head>
          <title>404 - Halaman Tidak Ditemukan</title>
        </head>
        <Image
          src="/page-not-found.svg"
          alt="404"
          width={200}
          height={200}
          className={styles.error__image}
        />
        <h1 className={styles.error__title}>404 - Halaman Tidak Ditemukan</h1>
        <p className={styles.error__description}>
          Maaf, halaman yang Anda cari tidak ada.
        </p>
        <a href="/" className={styles.error__description__link}>
          Kembali
        </a>
      </div>
    </div>
  );
};

export default Custom404;
