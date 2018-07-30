import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Utilisateurs from '../Utilisateurs.jsx';
import AjouterUtilisateur from '../AjouterUtilisateur.jsx';


class MenuAdministrateur2 extends Component{
    render(){
        return(
            <Router>        
                <div>
    
                            <li className="active"><a href="#sousMenuAdmin" data-toggle="collapse"  aria-expanded="false">
                                    Administrateur
                                    <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                                </a> 
                            </li> 
                            <ul id="sousMenuAdmin" className="list-unstyled collapse navbar-sous-menu nav">
                                    <li >
                                    <a href="#sousMenuA1" data-toggle="collapse"  aria-expanded="false">
                                        Utilisateurs  
                                        <span className="glyphicon glyphicon glyphicon-menu-down" aria-hidden="true"></span>
                                    </a>
                                    <ul id="sousMenuA1" className="list-unstyled collapse navbar-sous-menu nav">
                                        <li><Link to={'/utilisateurs'} > Liste des utilisateurs </Link></li>
                                        <li><Link to={'/ajouter-utilisateur'}> Ajouter un utilisateur </Link></li> 
                                    </ul>              
                                </li>            
                                <li><a>Menu resp 2 </a></li>
                                <li >
                                    <a href="#sousMenuA3" data-toggle="collapse"  aria-expanded="false">
                                        Menu resp 2  
                                        <span className="glyphicon glyphicon glyphicon-menu-down" aria-hidden="true"></span>
                                    </a>
                                    <ul id="sousMenuA3" className="list-unstyled collapse navbar-sous-menu nav">
                                        <li><a href="#">Sous-menu resp 1</a></li>
                                        <li><a href="#">Sous-menu resp 2</a></li>
                                    </ul>              
                                </li>
                                <li><a>Menu resp 3</a></li>
                            </ul>
     

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

export default MenuAdministrateur2