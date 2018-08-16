import React from 'react';
import { Route } from 'react-router-dom'
// import escapeRegExp from 'escape-string-regexp';
import Search from './components/Search';
import ListBooks from './components/ListBooks';
import { getAll, update } from "./BooksAPI";
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  //Get all the books before loading the component
  componentDidMount() {
    getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  moveShelf = (book, shelf) => {
    update(book, shelf);

    getAll().then((books) => {
      this.setState({ books: books })
    })
  }



  render() {
    return (
      <div className="app">

       <Route exact path='/' render={() => (
        <ListBooks
            books={this.state.books}
            moveShelf={this.moveShelf}
        />
      )}/>

      <Route path='/search' render={() => (
        <Search
            moveShelf={this.moveShelf}
            books={this.state.books}
          />
      )}/>

      </div>
    )
  }
}

export default BooksApp
