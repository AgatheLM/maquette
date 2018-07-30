import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


class MenuProducteur2 extends Component{
    render(){
        return(
            <Router>        
                <div>
 
                            <li className="active"><a href="#sousMenuProd" data-toggle="collapse"  aria-expanded="false">
                                    Producteur
                                    <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                                </a> 
                            </li> 
                            <ul id="sousMenuProd" className="list-unstyled collapse navbar-sous-menu nav">                       
                                <li><a>Menu prod 1 </a></li>
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

export default MenuProducteur2