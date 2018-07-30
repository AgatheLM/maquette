import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


class MenuConsultant2 extends Component{
    render(){
        return(
            <Router>        
                <div>
                    
                            <li className="nav active"><a href="#sousMenuCons" data-toggle="collapse"  aria-expanded="false">
                                    Consultant
                                    <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                                </a> 
                            </li> 
                            <ul id="sousMenuCons" className="list-unstyled collapse navbar-sous-menu nav">                       
                                <li><a>Menu consult 1 </a></li>
                                <li >
                                    <a href="#sousMenuC3" data-toggle="collapse"  aria-expanded="false">
                                        Menu consult 2  
                                        <span className="glyphicon glyphicon glyphicon-menu-down" aria-hidden="true"></span>
                                    </a>
                                    <ul id="sousMenuC3" className="list-unstyled collapse navbar-sous-menu nav">
                                        <li><a href="#">Sous-menu consult 1</a></li>
                                        <li><a href="#">Sous-menu consult 2</a></li>
                                    </ul>              
                                </li>
                                <li><a>Menu consult 3</a></li>
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

export default MenuConsultant2