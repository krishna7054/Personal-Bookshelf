import React from 'react';

const Bookshelf = ({ toggleBookshelf, bookshelf }) => {
  const removeFromBookshelf = (book) => {
    toggleBookshelf(book);
  };

  return (
    <div className="bookshelf">
        <h2 className='h2'>Book Shelf</h2>
      <div className="book-list">
        {bookshelf.length > 0 ? (
          bookshelf.map((book) => (
            <div key={book.key} className="book-card">
              <img 
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} 
                alt={`${book.title} cover`} 
                onError={(e) => { e.target.src = 'default-cover.jpg'; }} // Fallback if no image is available
              />
              <h3>{book.title}</h3>
              <p>{book.edition_count ? `Editions: ${book.edition_count}` : 'Edition info not available'}</p>
              <button onClick={() => removeFromBookshelf(book)}>Remove from Bookshelf</button>
            </div>
          ))
        ) : (
          <p>No books added to the bookshelf yet.</p>
        )}
      </div>
    </div>
  );
};

export default Bookshelf;
