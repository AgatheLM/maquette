import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


class MenuProducteur extends Component{
    render(){
        return(
       
                <div>
                    <nav aria-label="naviguation administrateur" id="sidebar" className="bordure-gauche">             
                    <div>
                        <ul className="nav">    
                        <p className="active">Producteur</p>                      
                        <li><a>Menu prod 1</a></li>
                        <li >
                            <a href="#sousMenuP3" data-toggle="collapse"  aria-expanded="false">
                                Menu prod 2  
                                <span className="glyphicon glyphicon glyphicon-menu-down" aria-hidden="true"></span>
                            </a>
                            <ul id="sousMenuP3" className="list-unstyled collapse navbar-sous-menu nav">
                                <li><a href="#">Sous-menu prod 1</a></li>
                                <li><a href="#">Sous-menu prod 2</a></li>
                            </ul>              
                        </li>
                        <li><a>Menu prod 3</a></li>
                        </ul>
                    </div>
                    </nav>         

                </div>

        )    
    }
}

export default MenuProducteur