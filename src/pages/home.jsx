import { getStorage } from "../firebase";
import { HomeContainer } from "../components/home/homeContainer";
import { LoadingScreen } from "../components/loadingScreen/loadingScreen";
import { Page } from "../components/page/page";
import { useEffect, useState } from "react";

export const Home = () => {
  const categories = ["camisas", "pantalones", "relojes", "sacos", "zapatos"];

  const [loading, setLoading] = useState(true);
  const [cardImages, setCardImages] = useState(true);

  useEffect(() => {
    const storage = getStorage();
    const storageRef = storage.ref();
    let images = {};
    categories.forEach((category) => {
      storageRef
        .child(`home/${category}.png`)
        .getDownloadURL()
        .then(function (url) {
          images[category] = url;
        });
    });
    setCardImages(images);
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <Page id="home">
      {loading ? (
        <LoadingScreen />
      ) : (
        <HomeContainer categories={categories} cardImages={cardImages} />
      )}
    </Page>
  );
};
