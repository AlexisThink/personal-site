import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import './CardService.css'

class CardService extends Component{
    render(){
        return(
            <div className='card'>
                <div className='card__icon'>
                    <img src={this.props.icon} alt={this.props.alt}  width='200px' height='200px' />
                </div>
                <div className='card__service__subtitle' >
                    <h3>{this.props.subtitle}</h3>
                </div>                
                <div className='card__description'>
                    <p>{this.props.description}</p>
                </div>
                <div className='card__more'>
                    <Link to={this.props.link}>Learn more</Link>
                </div>
            </div>
        )
    }
}

export default CardService;