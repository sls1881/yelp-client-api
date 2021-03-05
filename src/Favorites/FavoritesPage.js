import React, { Component } from 'react'
import { getFavorites } from '../ApiUtils'

export default class Favorites extends Component {
    //Initialize state
    state = {
        favorites: [],
    }
    //Mount on load
    componentDidMount = async () => {
        //call get favorites
        const favorites = await getFavorites(this.props.user.token)
        this.setState({ favorites })
        console.log(favorites);

    }


    render() {
        return (
            <div className='fav-container'>
                <h1>Your Favorite Restaurants</h1>
                <div className='faves'>
                    {this.state.favorites.map(fav => <div className='fave'>
                        <h3>Name: {fav.name}</h3>
                        <img className='img' alt={fav.name} src={fav.image_url} />
                        <p>Rating: {fav.rating}</p>
                        <p>Price: {fav.price}</p>
                    </div>
                    )
                    }
                </div>
            </div>
        )
    }
}
