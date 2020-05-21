import React, { Component } from 'react'

class shelfChanger extends Component {
  updateShelf = event => 
    this.props.changeShelf(this.props.book, event.target.value)

  render (){
    console.log(this.props.changeShelf)
    const { book, books } = this.props

    let currentShelf = 'none'

    for (let b of books){
      if (b.id === book.id) {
        currentShelf = b.shelf
        break
      }
    }

    return(
      <div className='book-shelf-changer'>
        <select onChange={this.updateShelf} defaultValue={currentShelf}>
          <option value="none" disabled>
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