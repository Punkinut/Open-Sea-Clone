import { useState } from "react";
import Hero from "../../organisms/Hero";
import { Toaster } from "react-hot-toast";
import { observer } from "mobx-react-lite";
import { UniversalStore } from "./index.store";

function Homepage() {
  const [store] = useState(() => new UniversalStore());
  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <Hero />
    </>
  );
}

export default observer(Homepage);
