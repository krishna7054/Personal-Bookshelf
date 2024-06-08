import React from 'react';

const BookCard = ({ book, toggleBookshelf, isBookInBookshelf }) => (
  <div className="book-card">
    <img 
      src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} 
      alt={`${book.title} cover`} 
      onError={(e) => { e.target.src = 'default-cover.jpg'; }} // Fallback if no image is available
    />
    <h3> {book.title}</h3>
    <p>{book.edition_count ? `Editions: ${book.edition_count}` : 'Edition info not available'}</p>
    <button className='btn' onClick={() => toggleBookshelf(book)}>
      {isBookInBookshelf(book) ? 'Remove from Bookshelf' : 'Add to Bookshelf'}
    </button>
  </div>
);

export default BookCard;
