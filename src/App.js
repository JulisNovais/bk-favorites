import Home from './pages/Home';
import Login from './pages/Login';
import Books from './pages/Books';
import BookNav from './components/BookNav';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <h1>Book Favorites</h1>
    
    <BookNav />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<Books />} />
        <Route path="*" element={<h1>Não tenho essa página</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
