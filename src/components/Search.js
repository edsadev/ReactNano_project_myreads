import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';

class Search extends Component {
  state = {
    query: '',
    queryBooks: [],
  }

  getBooks = event => {
    const query = event.target.value
    this.setState({ query })

    if (query) {
      BooksAPI.search(query, 20).then(books => {
        books.length > 0
          ? this.setState({ queryBooks: books})
          : this.setState({ queryBooks: []})
      })
    } else if (query === ''){
      this.setState({ queryBooks: [] })
    }
  }

  render() {
    const { query, queryBooks } = this.state
    const { books, changeShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={query}
              onChange={this.getBooks}  
            />
          </div>
        </div>
        <div className="search-books-results">
          {queryBooks.length > 0 && (
            <div>
              <h3>
                Your search results are: 
                {queryBooks.length === 1 
                  ? <span>1 book</span>
                  : <span>{queryBooks.length} books</span>
                } 
              </h3>
              <ol className="books-grid">
                {queryBooks.map(book => (
                  <Book
                    book={book}
                    books={books}
                    key={book.id}
                    changeShelf={changeShelf}
                  />
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Search