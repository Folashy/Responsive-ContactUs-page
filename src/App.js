
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Page1 from "./pages/page1/page1";
import Page2 from "./pages/page2/page2";



function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/places" element={<Page2 />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
