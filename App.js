import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import Reviews from "./Reviews";
function App() {
  return (
    <>
      <main>
        <section className="container">
          <div className="title">
            <h2>our reviews</h2>
            <div className="underline"></div>
          </div>
          <Reviews/>
        </section>
      </main>
    </>
  );
}

export default App;
