import React from 'react'
import ShelfChanger from './ShelfChanger'
import noCoverImage from './Image/no-Cover-Image.png'

const Book = props => {
  const { book, books, changeShelf } = props
  
  const coverImg = 
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : noCoverImage

  const title = 
    book.title 
      ? book.title
      : 'No title Available'
  
  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <div 
            className='book-cover'
            style={{ backgroundImage: `url(${coverImg})`}}
          />
          <ShelfChanger book={book} books={books} changeShelf={changeShelf} />
        </div>
        <div className='book-title'>{title}</div>
        {book.authors &&
          book.authors.map((author, index) => (
            <div className='book-authors' key={index}>
              {author}
            </div>
          ))
        }
      </div>
    </li>
  )
}

export default Book