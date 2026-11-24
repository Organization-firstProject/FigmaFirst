
import { Routes, Route } from "react-router-dom";

import Blog from "./pages/Blog";
import Press from "./pages/Press";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/press" element={<Press />} />
    </Routes>
  );
}

export default App;
