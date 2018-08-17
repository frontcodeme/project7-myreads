import React, { Component } from 'react'
import Shelf from './Shelf'

class Library extends Component {

  render () {
    const { books, shelf, moveShelf, showDetails } = this.props
    return (
            <Book
                book={book}
                moveShelf={props.moveShelf}
                status={status}
            />
            )
  }
}
export default Shelf