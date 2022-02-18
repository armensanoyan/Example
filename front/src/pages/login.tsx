import Head from "next/head";
import { useState } from "react";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState(" ");
  const login = async (event:any) => {
    event.preventDefault();
    debugger
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token") || "",
      },
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.userpassword.value,
      }),
    });
    const data = await response.json();

    if (!data.error && data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "/";
    } else {
      setErrorMessage("wrong login or password");
    }
    console.log(data);
  };
  return (
    <div>
      <Head>
        <title>Fuck you</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <form onSubmit={login}>
          <label>User Name:</label>
          <input type="text" name="username" />
          <br />
          <label>Password:</label>
          <input type="password" name="userpassword" />
          <button type="submit">Login</button>
          <p>{errorMessage}</p>
        </form>
      </main>
    </div>
  );
}
