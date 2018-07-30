import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


class MenuResponsable2 extends Component{
    render(){
        return(
            <Router>        
                <div>
    
                            <li className="active"><a href="#sousMenuResp" data-toggle="collapse"  aria-expanded="false">
                                    Responsable
                                    <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                                </a> 
                            </li> 
                            <ul id="sousMenuResp" className="list-unstyled collapse navbar-sous-menu nav">                       
                                <li><a>Menu resp 1 </a></li>
                                <li >
                                    <a href="#sousMenuR3" data-toggle="collapse"  aria-expanded="false">
                                        Menu resp 2  
                                        <span className="glyphicon glyphicon glyphicon-menu-down" aria-hidden="true"></span>
                                    </a>
                                    <ul id="sousMenuR3" className="list-unstyled collapse navbar-sous-menu nav">
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

export default MenuResponsable2