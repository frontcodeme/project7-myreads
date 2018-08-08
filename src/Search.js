import React, { Component } from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI'

class Search extends Component {
	state = {
		query: '',
		searchedBooks: []
	}

	updateQuery = (query) => {
		this.setState({
			query: query
		})
		this.updateSearchedBooks(query);
	}

	updateSearchedBooks = () => {
		if (query) {
			BooksAPI.search(query).then((searchedBooks) => {
				if (searchedBooks.error) {
					this.setState({ searchedBooks: [] })
				} else {
					this.setState({ searchedBooks: searchedBooks })					
				}
			})
		} else {
			this.setState({ searchedBooks: [] })
		}

	}
	render () {

		return (
			<div className="search-books">
	            <div className="search-books-bar">
	              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
	              	<div className="search-books-input-wrapper">
	                	<input 
	                		type="text" 
	                		placeholder="Search by title or author"
	                		value={this.state.query}
	                		onChange={(event) => this.update(event.target.value)}
	                	/>
	              	</div>
	            </div>
	            <div className="search-books-results">
	              <ol className="books-grid">
	              	{
	              		this.setState.searchedBooks.map(searchedBooks => (
	              			<li key={searchedBooks.id}>
		              			<Book
		              				book={searchedBooks}
	              				/>
              				</li>
	              			))
	              	}
	              </ol>
	            </div>
	      	</div>
		);
	}
} 

export default Search;