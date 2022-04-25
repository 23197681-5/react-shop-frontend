import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
const Shop = () => {
  return <h1>Shop page</h1>;
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
