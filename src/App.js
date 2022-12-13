import React from "react";
import data from "./data";
import Review from "./Review";
import { FaGithubSquare } from "react-icons/fa";

export default function App() {
  return (
    <main>
      <div className="container">
        <h2>Our reviews</h2>
        <div className="underline" />
      </div>
      <Review />
      <FaGithubSquare />
    </main>
  );
}
