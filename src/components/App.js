import { Routes, Route, BrowserRouter } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path=":id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
