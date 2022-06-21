import { useState, useEffect } from "react";
import Hero from "../../organisms/Hero";
import { Toaster } from "react-hot-toast";
import { observer } from "mobx-react-lite";
import { GlobalStore } from "../../../stores/GlobalStore/index.store";

function Homepage() {
  const [store] = useState(() => new GlobalStore());
  useEffect(() => {
    console.log(JSON.stringify(store.state));
  }, [store]);
  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <Hero />
    </>
  );
}

export default observer(Homepage);
