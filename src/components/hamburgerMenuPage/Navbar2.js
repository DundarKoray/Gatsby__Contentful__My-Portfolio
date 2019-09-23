import React, { Component } from 'react';
import NavbarHeader from './NavbarHeader'
import NavbarLinks from './NavbarLinks'

import './navbar.css'

class Navbar2 extends Component {
    state = {
        navbarOpen: false
    }
    handleNavbar = () => {
        this.setState(() => {
            return { navbarOpen: !this.state.navbarOpen }
        })
    }
    render() {
        return (
            <div className="container">

                <nav className="navbar-wrapper">
                    <NavbarHeader handleNavbar={this.handleNavbar} />
                    <NavbarLinks navbarOpen={this.state.navbarOpen} />
                </nav>
            </div>
        );
    }
}

export default Navbar2;