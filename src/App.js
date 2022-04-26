import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SingIn from "./routes/sign-in/sign-in.component";

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
          <Route path="/sing-in" element={<SingIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
