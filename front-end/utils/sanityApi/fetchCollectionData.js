const fetchCollectionData = async (sanityClient, collectionId) => {
  const query = `  *[_type == "marketItems" && contractAddress == "${collectionId}" ] {
    "imageUrl": profileImage.asset->url,
    "bannerImageUrl": bannerImage.asset->url,
    volumeTraded,
    createdBy,
    contractAddress,
    "creator": createdBy->userName,
    title,
    floorPrice,
    "allOwners": owners[]->,
    description
  }`;

  const collectionData = await sanityClient.fetch(query);
  return collectionData;
};

export default fetchCollectionData;
