import React from 'react';
import Search from './Search';
import HomePage from './HomePage';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

moveShelf = () => {

}

  render() {
    return (
      <div className="app">
        <HomePage 
          books={this.state.books}
          moveShelf={this.moveShelf}
        />
      </div>
    )
  }
}

export default BooksApp
