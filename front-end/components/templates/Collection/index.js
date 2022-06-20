import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function CollectionTemplate() {
  const router = useRouter();
  return (
    <Link href="/">
      <h2>{router.query.collectionId}</h2>
    </Link>
  );
}

export default CollectionTemplate;
