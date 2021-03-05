import React, { Component } from 'react'
import { addFavorite, getFavorites, getRestaurant } from '../ApiUtils.js'

export default class SearchPage extends Component {
    //Initialize state
    state = {
        restaurants: [],
        favorites: [],
        search: ''
    }

    //Components mount on load
    componentDidMount = async () => {
        if (this.props.token) await this.fetchFavorites();
    }

    //Fetch favorites search
    fetchFavorites = async () => {
        const favorites = await getFavorites(this.props.user.token);
        this.setState({ favorites })
    }

    //Do search
    doSearch = async () => {
        const restaurants = await getRestaurant(this.state.search, this.props.user.token)
        this.setState({ restaurants })
    }

    //handle submit for search
    handleSearchSubmit = async (e) => {
        e.preventDefault()

        await this.doSearch();
    }

    //handle click for favorites
    handleFavoritesClick = async (newFav) => {
        await addFavorite({
            yelp_id: newFav.id,
            name: newFav.name,
            image_url: newFav.image_url,
            rating: newFav.rating,
            price: newFav.price
        }, this.props.user.token);
        await this.fetchFavorites();
    }

    //handle change for search
    handleSearchChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    //Conditional for favorite or not
    isAFavorite = (restaurant) => {
        if (!this.props.token) return true;
        const isFav = this.state.favorites.find(favorite => favorite.yelp_id === restaurant.id);
        return Boolean(isFav);
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSearchSubmit}>
                        <input type='search' value={this.state.search} onChange={this.handleSearchChange} />
                        <button>Search</button>
                    </form>
                </div>
                <div className='restaurant-container'>
                    {
                        this.state.restaurants.map((restaurant) =>
                            <div key={restaurant.id}>
                                <h3>Name: {restaurant.name}</h3>
                                <img className='img' alt={restaurant.title} src={restaurant.image_url} />
                                <p>Rating: {restaurant.rating}</p>
                                <p>Price: {restaurant.price}</p>
                                <p>{this.isAFavorite(restaurant)
                                    ? '❤️'
                                    : <button onClick={() => this.handleFavoritesClick(restaurant)} >Favorite</button>}</p>
                            </div>)
                    }
                </div>
            </div>
        )
    }
}
