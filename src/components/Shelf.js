import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
  state = {
      status: 'update'
    }
const shelves = [
  {  id: 'now',
     title: 'Currently Reading',
     shelf: 'currentlyReading',
     currentShelf: "currentlyReading"
   },

  {  id: 'later',
     title: 'Want to Read',
     shelf: 'wantToRead',
     currentShelf: "wantToRead"
   },

  {  id: 'then',
     title: 'Read',
     shelf: 'read',
     currentShelf: "read"
   }
]
  render () {
    // const { name, books, shelf, moveShelf, showDetails } = this.props
    // const { state } = this.props
    return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">{shelves.title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                  props.books
                    .filter(book => book.shelf ==={shelves.shelf})
                    .map(book => (
                  <li key={book.id} >
                    <Book
                        book={book}
                        moveShelf={props.moveShelf}
                        currentShelf={shelves.currentShelf}
                    />
                  </li>
                  ))
                  }
                </ol>
              </div>
            </div>
            )
  }
}
export default Shelf