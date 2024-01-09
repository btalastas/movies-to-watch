// src/pages/index.js
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Next.js SPA!</h1>
      <p>This is a simple single-page web application using Next.js.</p>
      <Link href="/about">
        <a>About Page</a>
      </Link>
    </div>
  );
};

export default Home;
