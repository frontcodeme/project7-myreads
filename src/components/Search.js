import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import { search } from "../BooksAPI"

class Search extends Component {
	state = {
		query: '',
		booksToSearch: []
	}

	onSearch = (query) => {
		this.setState({
			query: query
		})
		this.updatebooksToSearch(query)
	}
	//Managing the input state
	updatebooksToSearch = (query) => {
		if (query) {
			search(query).then((booksToSearch) => {
				if (booksToSearch.error) {
					this.setState({ booksToSearch: [] })
				} else {
					this.setState({ booksToSearch: booksToSearch })
				}
			})
		} else {
			this.setState({ booksToSearch: [] })
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
	                		onChange={(event) => this.onSearch(event.target.value)}
	                	/>
	              	</div>
	            </div>
	            <div className="search-books-results">
	              <ol className="books-grid">
	              	{
	              		this.state.booksToSearch.map(booksToSearch => {
	              			let shelf = "none"

	              			this.props.books.map(book => {
	              				book.id === booksToSearch.id ?
	              				shelf = book.shelf :
	              				''
	              				return null
	              			})

	              			return (
		              			<li key={booksToSearch.id}>
			              			<Book
			              				book={booksToSearch}
			              				moveShelf={this.props.moveShelf}
			              				currentShelf={shelf}
		              				/>
	              				</li>
	              			)
	              		})
	              	}
	              </ol>
	            </div>
	      	</div>
		)
	}
}

export default Search