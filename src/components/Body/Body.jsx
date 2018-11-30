import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
//Resources
import './body.css'
//Components
import Inicio from '../Inicio/Inicio'

class Body extends Component{
    constructor(props){
        super(props);

        this.state={
            professions: []
        }
    }
    render(){
        return(
            <section className='main'>
                <Switch>
                    <Route path='/' component={Inicio} />
                    <Route path='/marketing' component={Inicio} />
                    <Route path='/web' component={Inicio} />
                    <Route path='/android' component={Inicio} />
                </Switch>
            </section>
        )
    }
}

export default Body