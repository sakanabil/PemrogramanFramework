import { useRouter } from "next/router";

const halamanCategory = () => {
  // const Router = useRouter();
  // console.log(Router);
  const { query } = useRouter();
  return (
    <div>
      <h1>Halaman Kategori</h1>
      <h2>Kategori: </h2>
      <ul>
        {Array.isArray(query.slug) &&
          query.slug.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
};

export default halamanCategory;
