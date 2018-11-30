import React, {Component} from 'react'
import './header.css'

class Header extends Component{
    render(){
        return(
            <header className='header'>
                <div className='header__space'></div>
                <div className='header__space'></div>
                <div className='header__space menu'>
                    <i className="material-icons">menu</i>
                </div>
            </header>
        );
    }
}

export default Header