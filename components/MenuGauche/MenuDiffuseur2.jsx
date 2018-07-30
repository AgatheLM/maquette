import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


class MenuDiffuseur2 extends Component{
    render(){
        return(
            <Router>        
                <div> 
                            <li className="active"><a href="#sousMenuDiff" data-toggle="collapse"  aria-expanded="false">
                                    Diffuseur
                                    <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                                </a> 
                            </li> 
                            <ul id="sousMenuDiff" className="list-unstyled collapse navbar-sous-menu nav">                       
                                <li><a>Menu diffuseur 1 </a></li>
                                <li >
                                    <a href="#sousMenuD3" data-toggle="collapse"  aria-expanded="false">
                                        Menu diffuseur 2  
                                        <span className="glyphicon glyphicon glyphicon-menu-down" aria-hidden="true"></span>
                                    </a>
                                    <ul id="sousMenuD3" className="list-unstyled collapse navbar-sous-menu nav">
                                        <li><a href="#">Sous-menu diffuseur 1</a></li>
                                        <li><a href="#">Sous-menu diffuseur 2</a></li>
                                    </ul>              
                                </li>
                                <li><a>Menu diffuseur 3</a></li>
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

export default MenuDiffuseur2