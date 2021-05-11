import { ItemListContainer } from "../components/item-list-container/item-list-container";
import { Page } from "../components/page/page";
import { useParams } from "react-router";
import products from "../products.json";

export const Category = () => {
  const { categoryId } = useParams();
  const items = products.filter((item) => item.category === categoryId);

  return (
    <Page id={`category-${categoryId}`}>
      <ItemListContainer
        items={items.length > 0 ? items : products}
        categoryId={categoryId ? categoryId : "productos"}
      />
    </Page>
  );
};
