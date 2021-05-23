import { getFirestore } from "../firebase";
import { ItemDetailContainer } from "../components/item-detail-container/item-detail-container";
import { Page } from "../components/page/page";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const Item = () => {
  const { itemId } = useParams();

  const [item, setItem] = useState([]);
  const [colorsList, setColorsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items").doc(itemId);
    itemCollection
      .get()
      .then((querySnapshot) => {
        const data = { id: querySnapshot.id, ...querySnapshot.data() };
        setItem(data);
        setLoading(false);
      })
      .catch((error) => console.error("Firestore error:", error));
  }, [itemId]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("colors");
    itemCollection
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data())[0];
        setColorsList(data);
      })
      .catch((error) => console.error("Firestore error:", error));
  }, []);

  return (
    <Page id={`item-${itemId}`}>
      {loading ? (
        <p>No existe este item</p>
      ) : (
        <ItemDetailContainer item={item} colorsList={colorsList} />
      )}
    </Page>
  );
};
