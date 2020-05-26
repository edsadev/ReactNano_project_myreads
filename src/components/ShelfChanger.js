import React, { Component } from 'react'

class shelfChanger extends Component {
  updateShelf = event => 
    this.props.changeShelf(this.props.book, event.target.value)

  render (){
    const { book, books } = this.props

    let currentShelf = 'none'

    books.map((b) => {
      if (b.id === book.id) {
        currentShelf = b.shelf
      }
      return currentShelf
    })

    return(
      <div className='book-shelf-changer'>
        <select onChange={this.updateShelf} defaultValue={currentShelf}>
          <option value="null" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default shelfChanger