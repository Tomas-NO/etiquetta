import "./item-detail-container.scss";
import { useParams } from "react-router";
import { ItemDetail } from "./item-detail/item-detail";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();

  return <ItemDetail itemId={itemId} />;
};
