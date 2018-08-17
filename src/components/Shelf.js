import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
  state = {
      status: 'update'
    }
// const shelves = [
//   {  title: 'Currently Reading',
//      shelf: 'currentlyReading'
//    },

//   {  title: 'Want to Read',
//      shelf: 'wantToRead'
//    },

//   {  title: 'Read',
//      shelf: 'read'
//    }
// ]
  render () {
    // const { name, books, shelf, moveShelf, showDetails } = this.props
    // const { state } = this.props
    return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">{title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.filter(book => book.shelf === 'shelf').map(book => (
                    <li key={book.id} >
                      <Book
                          book={book}
                          moveShelf={props.moveShelf}
                          currentShelf={shelf}
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