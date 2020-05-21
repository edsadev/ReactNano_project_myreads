import React from 'react'
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import BookList from './components/BookList';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then(books => this.setState({ books }))
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then( res => {
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books
          .filter(b => b.id !== book.id)
          .concat(book)
      }))
    })
  }

  render() {
    const { books } = this.state
    return (
      <div className="app">
        {console.log(books)}
          <Route 
            exact path='/'
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <BookList books={books} changeShelf={this.changeShelf} />
                <div className="open-search">
                  <Link to="/search">Search</Link>
                </div>
              </div>
            )}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
