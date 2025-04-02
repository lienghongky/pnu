import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Paper from "./pages/paper";
import NotFound from "./pages/404";
import DiffCheck from "./pages/diffcheck";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Project" element={<Home />} />
          <Route path="paper" element={<Paper />} />
          <Route path="demo" element={<DiffCheck />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/diff" element={<DiffCheck />}></Route>
      </Routes>
    </BrowserRouter>
  );
}