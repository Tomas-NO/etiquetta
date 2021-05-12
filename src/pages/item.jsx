import { ItemDetailContainer } from "../components/item-detail-container/item-detail-container";
import { Page } from "../components/page/page";
import { useParams } from "react-router";
import products from "../products.json";

export const Item = () => {
  const { itemId } = useParams();
  const item = products.filter((item) => item.id === parseInt(itemId))[0];
  return (
    <Page id={`item-${itemId}`}>
      <ItemDetailContainer item={item} />
    </Page>
  );
};
