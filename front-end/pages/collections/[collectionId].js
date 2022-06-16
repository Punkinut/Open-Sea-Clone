import React from "react";
import { useRouter } from "next/router";

function Collection() {
  const router = useRouter();
  return <div>{router.query.collectionId}</div>;
}

export default Collection;
