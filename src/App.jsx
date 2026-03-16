import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/layout.jsx";
import Home from "./pages/home.jsx";
import ProductDetail from "./pages/productdetail.jsx";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
