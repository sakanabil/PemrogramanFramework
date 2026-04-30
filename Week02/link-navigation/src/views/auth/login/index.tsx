import style from "../../auth/login/login.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { signIn } from "next-auth/react";

const Tampilanlogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push, query } = useRouter();

  const callbackUrl: string = query.callbackUrl
    ? String(query.callbackUrl)
    : "/";
  const [error, setError] = useState("");

  const handleSubmit = async (event: any) => {
    setError("");
    event.preventDefault();
    setIsLoading(true);

    // const form = event.currentTarget;
    // const formData = new FormData(event.currentTarget);
    // const email = formData.get("email") as string;
    // const fullname = formData.get("Fullname") as string;
    // const password = formData.get("Password") as string;

    // // Validasi client-side
    // if (!email || email.trim() === "") {
    //   setError("Email wajib diisi");
    //   return;
    // }
    // if (!password || password.length < 6) {
    //   setError("Password minimal 6 karakter");
    //   return;
    // }

    // setIsLoading(true);
    // const response = await fetch("/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, fullname, password }),
    // });
    // if (response.status === 200) {
    //   form.reset();
    //   setIsLoading(false);
    //   push("/auth/login");
    // } else {
    //   setIsLoading(false);
    //   const data = await response.json();
    //   setError(data.name || "An error occurred");
    // }

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.Password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError(res?.error || "Login failed");
      }
    } catch (error) {
      setIsLoading(false);
      setError("wrong email or password");
    }
  };
  return (
    <div className={style.login}>
      {error && <p className={style.login__error}>{error}</p>}
      <h1 className={style.login__title}>Halaman login</h1>
      <div className={style.login__form}>
        <form onSubmit={handleSubmit}>
          <div className={style.login__form__item}>
            <label htmlFor="email" className={style.login__form__item__label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={style.login__form__item__input}
            />
          </div>

          <div className={style.login__form__item}>
            <label
              htmlFor="Password"
              className={style.login__form__item__label}
            >
              Password
            </label>
            <input
              type="password"
              id="Password"
              name="Password"
              placeholder="Password"
              className={style.login__form__item__input}
            />
          </div>
          <button
            type="submit"
            className={style.login__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
          <br />
          <br />
          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl, redirect: false })}
            className={style.login__form__item__button}
          >
            Sign in with Google
          </button>

          <br />
          <br />
          <button
            type="button"
            onClick={() => signIn("github", { callbackUrl, redirect: false })}
            className={style.login__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Sign in with GitHub"}
          </button>
        </form>
        <br />
        <p className={style.login__form__item__text}>
          Tidak punya {"'"} akun?{" "}
          <Link href="/auth/register">Ke Halaman Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Tampilanlogin;
