import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Paper from "./pages/paper";
import NotFound from "./pages/404";
import DiffCheck from "./pages/diffcheck";
import Demo from "./pages/demo";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="introduction" element={<Home />} />
          <Route path="research" element={<Paper />} />
          <Route path="demo" element={<Demo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/diff" element={<DiffCheck />}></Route>
        <Route path="/papa" element={<Paper />}></Route>
      </Routes>
    </BrowserRouter>
  );
}