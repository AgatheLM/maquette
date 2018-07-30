import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Utilisateurs from './Utilisateurs.jsx';
import AjouterUtilisateur from './AjouterUtilisateur.jsx';

class MenuDiffuseur extends Component{
    render(){
        return(
            <Router>        
                <div>
                    <nav id="sidebar">             
                    <div className=" navbar-default">
                        <ul className="nav  nav-sidebar navbar-default navbar-nav ">    
                        <p className="active">Diffuseur</p>  
                        <li >
                            <a href="#sousMenuP1" data-toggle="collapse"  aria-expanded="false">Utilisateurs</a>
                            <ul id="sousMenuP1" className="list-unstyled collapse navbar-side  navbar-sous-menu nav ">                                
                                <li><Link to={'/utilisateurs'}> Liste des utilisateurs </Link></li>
                                <li><Link to={'/ajouter-utilisateur'}> Ajouter un utilisateur </Link></li> 
                            </ul>               
                        </li>
                        <li><a>Menu diffuseur 2</a></li>
                        <li >
                            <a href="#sousMenuP3" data-toggle="collapse"  aria-expanded="false">Menu diffuseur 3</a>
                            <ul id="sousMenuP3" className="list-unstyled collapse navbar-sous-menu nav">
                                <li><a href="#">Sous-menu diff 1</a></li>
                                <li><a href="#">Sous-menu diff 2</a></li>
                            </ul>              
                        </li>
                        <li><a>Menu diffuseur 3</a></li>
                        </ul>
                    </div>
                    </nav>         

                    <Switch>
                    <Route exact path='/ajouter-utilisateur'
                    render={() => <AjouterUtilisateur/>} />
                    <Route exact path='/utilisateurs'
                    render={() => <Utilisateurs />} />
                    </Switch>
                </div>
            </Router>
        )    
    }
}

export default MenuDiffuseur