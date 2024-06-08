import React, { useState, useEffect, useRef } from 'react';
import BookCard from './BookCard';

const BookSearch = ({ toggleBookshelf, bookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const cache = useRef({});

  const fetchBooks = async (searchQuery) => {
    if (cache.current[searchQuery]) {
      setBooks(cache.current[searchQuery]);
    } else if (searchQuery.length > 2 || searchQuery === 'initial') {
      try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${searchQuery === 'initial' ? 'bestsellers' : searchQuery}&limit=10&page=1`);
        const data = await response.json();
        cache.current[searchQuery] = data.docs;
        setBooks(data.docs);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    } else {
      setBooks([]);
    }
  };

  useEffect(() => {
    fetchBooks('initial'); // Fetch initial set of books
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchBooks(query);
    }, 300); // Throttle the API calls by 300ms

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  const isBookInBookshelf = (book) => {
    return bookshelf.some((b) => b.key === book.key);
  };

  return (
    <div>
      <div className="inputGroup">
        <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
          autoComplete="off"
        />
        <label htmlFor="search">Search for books...</label>
      </div>
      <div className="book-list">
        {books.map((book) => (
          <BookCard 
            key={book.key} 
            book={book} 
            toggleBookshelf={toggleBookshelf} 
            isBookInBookshelf={isBookInBookshelf} 
          />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
