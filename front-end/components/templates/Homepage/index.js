import React from "react";
import Hero from "../../organisms/Hero";
import { Toaster } from "react-hot-toast";

function Homepage() {
  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <Hero />
    </>
  );
}

export default Homepage;
