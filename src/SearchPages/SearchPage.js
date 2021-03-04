import React, { Component } from 'react'

export default class SearchPage extends Component {
    //Initialize state
    state = {
        restaurant: [],
        favorites: [],
        search: ''
    }

    //Components mount on load
    componentDidMount = async () => {
        if (this.props.token) await this.fetchFavorites();
    }

    //Fetch favorites
    fetchFavorites = async () => {
        const favorite = await getFavorites(this.props.user.token)
        this.setState({ favorites })
    }

    //Fetch search
    fetchSearch = async () => {
        const restaurant = await getRestaurant(this.state.search)
        this.setState({ restaurant })
    }

    //handle submit for search

    //handle click for favorites

    //handle change for search

    //
    render() {
        return (
            <div>
                <form>
                    <input type='search' value={this.state.} />
                    <button>Search</button>
                    <div className='restaurant-container'>
                        <h3>Name: </h3>
                        <img src='restaurant img' url='' />
                        <p>Rating:</p>
                        <p>Price:</p>
                    </div>
                </form>

            </div>
        )
    }
}
