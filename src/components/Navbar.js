import './NavbarStyles.css';
import { MenuItems } from './MenuItems';
import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom';

class Navbar extends Component {
  

    state = {clicked: false}
    handleclick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
  render() {
    return (
      <nav className='NavbarItems'>
        <h1 className='navbar-logo'>Trippy</h1>

        <div className='menu-icons' onClick={this.handleclick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index)=>{
                return(
                    <li key={index} > 
                    <Link className={item.cName} to={item.url}>
                    {item.title} 
                    </Link>
                    
                    </li>
                )
            })}
            <button onClick={this.handleclick}>
            <Link className='nav-links-signup' to='/signup'> </Link>
              Sign-up</button>
            
        </ul>
      </nav>
    )
  }
}

export default Navbar
