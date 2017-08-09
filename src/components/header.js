import React from 'react';
import { Link } from 'react-router-dom'

export default class Header extends React.Component {

  render() {
    return (
      <nav className='navbar navbar-toggleable-md navbar-light bg-faded'>
        <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse'
                data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false'
                aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <a className='navbar-brand' href='#'>YCont</a>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/home'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contacts'>Contacts</Link>
            </li>
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input className='form-control mr-sm-2' type='text' placeholder='Search'/>
              <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>Search</button>
          </form>
        </div>
      </nav>
      
    )
  }
}
