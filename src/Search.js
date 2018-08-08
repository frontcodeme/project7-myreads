import React, { Component } from 'react';
import Book from './Book';
import { Link } from 'react-router-dom'
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
					this.setState({ searchedBooks: [] });
				} else {
					this.setState({ searchedBooks: searchedBooks });	
				}
			})
		} else {
			this.setState({ searchedBooks: [] });
		}
	}

	render () {
		return (
			<div className="search-books">
	            <div className="search-books-bar">
	              <Link 
	              	to="/"
	              	className="close-search" 
	              >Close</Link>
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
	              		this.State.searchedBooks.map(searchedBooks => {
	              			let shelf = "none";

	              			this.props.books.map(book => (
	              				book.id === seaarchedBook.id
	              				shelf = book.shelf :
	              				''
	              				));
	              			
	              			return (
		              			<li key={searchedBooks.id}>
			              			<Book
			              				book={searchedBooks}
			              				moveShelf={this.props.moveShelf}
			              				currentShelf={shelf}
		              				/>
	              				</li>
	              			);
	              		})
	              	}
	              </ol>
	            </div>
	      	</div>
		);
	}
} 

export default Search;