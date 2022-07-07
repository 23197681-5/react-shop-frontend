import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import CategoriesPreview from "./routes/categories-preview/categories-preview.component";
import Checkout from "./routes/checkout/checkout.component";
import Category from "./routes/category/category.component";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop*" element={<CategoriesPreview />} />
          <Route path="/sneakers" element={<Category category="sneakers" />} />
          <Route path="/womens" element={<Category category="womens" />} />
          <Route path="/mens" element={<Category category="mens" />} />
          <Route path="/jackets" element={<Category category="jackets" />} />
          <Route path="/hats/" element={<Category category="hats" />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
