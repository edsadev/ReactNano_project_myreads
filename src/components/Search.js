import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class Search extends Component {
  state = {
    query: '',
    queryBooks: [],
    queryError: false
  }

  getBooks = event => {
    const query = event.target.value
    this.setState({ query })

    if (query !== '') {
      BooksAPI.search(query)
        .then(books => {
          books.length > 0
            ? this.setState({ queryBooks: books, queryError: false })
            : this.setState({ queryBooks: [], queryError: true })
        })
    } else if (query === '') {
      this.setState({ queryBooks: [], queryError:false })
    } 
  }

  render() {
    const { query, queryBooks, queryError } = this.state
    const { books, changeShelf } = this.props
    console.log(queryBooks)
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
              <h3>Your search results are: {queryBooks.length} books</h3>
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
          {queryError && (
            <h3>Search doesn't exist</h3>
          )}
        </div>
      </div>
    )
  }
}

export default Search