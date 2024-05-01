import './App.css';
import Books from "./components/Books";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          {/* <Route path="/books/:id" element={<SingleBook />} />
          <Route path="/books/:id/edit" element={<EditBook />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h3>Page Not Found</h3>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
