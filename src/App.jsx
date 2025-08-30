import { Route, Routes } from "react-router";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<h1>Home</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
    </Routes>
  );
}

export default App;
