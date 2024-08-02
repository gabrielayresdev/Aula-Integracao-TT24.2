import { Home } from "./pages/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="produto/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
