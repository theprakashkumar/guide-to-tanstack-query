import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UseQueryPage from "./pages/UseQueryPage";
import UseMutationPage from "./pages/UseMutationPage";
import UseInfiniteQueryPage from "./pages/UseInfiniteQueryPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/use-query" element={<UseQueryPage />} />
        <Route path="/use-mutation" element={<UseMutationPage />} />
        <Route path="/use-infinite-query" element={<UseInfiniteQueryPage />} />
      </Routes>
    </>
  );
}

export default App;
