import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import BookSearch from './components/BookSearch';
import Bookshelf from './components/Bookshelf';
import './App.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem('bookshelf')) || []
  );

  useEffect(() => {
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  }, [bookshelf]);

  const toggleBookshelf = (book) => {
    const bookIndex = bookshelf.findIndex((b) => b.key === book.key);
    if (bookIndex === -1) {
      setBookshelf([...bookshelf, book]);
    } else {
      setBookshelf(bookshelf.filter((b) => b.key !== book.key));
    }
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route 
            path="/" 
            element={<BookSearch toggleBookshelf={toggleBookshelf} bookshelf={bookshelf} />} 
          />
          <Route path="/bookshelf" element={<Bookshelf toggleBookshelf={toggleBookshelf} bookshelf={bookshelf} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
