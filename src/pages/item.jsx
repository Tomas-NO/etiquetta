import { getFirestore } from "../firebase";
import { ItemDetailContainer } from "../components/item-detail-container/item-detail-container";
import { LoadingScreen } from "../components/loadingScreen/loadingScreen";
import { Page } from "../components/page/page";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const Item = () => {
  const { itemId } = useParams();

  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  const [colorsList, setColorsList] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const colorCollection = db.collection("colors");
    colorCollection
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data())[0];
        setColorsList(data);
      })
      .catch((error) => console.error("Firestore error:", error));

    const itemCollection = db.collection("items").doc(itemId);
    itemCollection
      .get()
      .then((querySnapshot) => {
        const data = { id: querySnapshot.id, ...querySnapshot.data() };
        setItem(data);
      })
      .catch((error) => console.error("Firestore error:", error));
    setTimeout(() => setLoading(false), 3000);
  }, [itemId]);

  return (
    <Page id={`item-${itemId}`}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <ItemDetailContainer item={item} colorsList={colorsList} />
      )}
    </Page>
  );
};
