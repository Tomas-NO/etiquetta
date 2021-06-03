import { getFirestore, getStorage } from "../firebase";
import { ItemListContainer } from "../components/item-list-container/item-list-container";
import { LoadingScreen } from "../components/loadingScreen/loadingScreen";
import { Page } from "../components/page/page";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const Category = () => {
  let { categoryId } = useParams();

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [categoryImg, setCategoryImg] = useState("");

  useEffect(() => {
    setLoading(true);
    const storage = getStorage();
    const storageRef = storage.ref();
    storageRef
      .child(`categories/${categoryId ? categoryId : "productos"}.jpg`)
      .getDownloadURL()
      .then(function (url) {
        setCategoryImg(url);
      });

    const db = getFirestore();
    let itemCollection = db.collection("items");
    if (categoryId !== undefined) {
      itemCollection = db
        .collection("items")
        .where("category", "==", categoryId);
    }
    itemCollection
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(data);
      })
      .catch((error) => console.error("Firestore error:", error));
    setTimeout(() => setLoading(false), 1000);
  }, [categoryId]);

  return (
    <Page id={`category-${categoryId ? categoryId : "productos"}`}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <ItemListContainer items={items} categoryImg={categoryImg} />
      )}
    </Page>
  );
};
