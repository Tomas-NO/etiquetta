import "./App.scss";
import { PromotionMsj } from "./components/promotion-msj/promotion-msj";
import { NavBar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { HomePage } from "./pages/home";
import { CategoryPage } from "./pages/category";
import { ProductPage } from "./pages/product";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <PromotionMsj />
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/productos" component={CategoryPage}></Route>
        <Route path="/productos/:categoryId" component={CategoryPage}></Route>
        <Route path="/item/:itemId" component={ProductPage}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
