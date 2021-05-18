import { getFirestore } from "../firebase";
import { ItemListContainer } from "../components/item-list-container/item-list-container";
import { Page } from "../components/page/page";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

// import productos from "../products.json";

export const Category = () => {
  const { categoryId } = useParams();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        setLoading(false);
      })
      .catch((error) => console.error("Firestore error:", error));
  }, [categoryId]);

  return (
    <Page id={`category-${categoryId ? categoryId : "productos"}`}>
      {loading ? (
        <p>Esta categoria actualmente no tiene productos</p>
      ) : (
        <ItemListContainer
          items={items}
          categoryId={categoryId ? categoryId : "productos"}
        />
      )}
    </Page>
  );
};
