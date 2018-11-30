import React, {Component} from 'react'
import './Inicio.css'
//Packages
import Typed from 'react-typed'
//Components
import CardService from '../CardService/CardService'
//Resources
import services from '../../data/services'

class Inicio extends Component{
    render(){
        const professions = ['Marcadologo', 'Desarrollador Web Fullstack', 'Desarrollador Android']
        return(
            <section>
                <div className='main__title'>
                    <h1>I´m Alexis</h1>
                    <h3>
                        <Typed strings={professions} typeSpeed={35} backSpeed={30} loop/>
                    </h3>
                </div>

                {
                    services.map(service =>{
                        return <CardService subtitle={service.subtitle} description={service.description} icon={service.icon} alt={service.alt} link={service.link} />
                    })
                }
            </section>
        )
    }
}

export default Inicio