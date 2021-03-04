import React, { Component } from 'react'
import {
    NavLink,
    withRouter
} from 'react-router-dom'

export default withRouter(class Header extends Component {
    render() {
        return (
            <nav className='navContainer'>
                {
                    this.props.location.pathname !== '/' && <NavLink className='nav-link' exact activeClassName='link' to="/">Home</NavLink>
                }

                {
                    this.props.location.pathname !== '/signup' && <NavLink className='nav-link' exact activeClassName='link' to="/signup">SignUp</NavLink>
                }

                {
                    this.props.location.pathname !== '/login' && <NavLink className='nav-link' exact activeClassName='link' to='/login'>LogIn</NavLink>
                }

                {
                    this.props.location.pathname !== '/search' && <NavLink className='nav-link' exact activeClassName='link' to='/search'>Search</NavLink>
                }

                {
                    this.props.location.pathname !== '/favorites' && <NavLink className='nav-link' exact activeClassName='link' to='/favorites'>Favorites</NavLink>
                }
                <button onClick={this.props.handleLogout}>Sign Out</button>
            </nav>
        )
    }
});
