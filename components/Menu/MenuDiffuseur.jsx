import React, {Component} from 'react';

class MenuDiffuseur extends Component{
    render(){
        return(      
                <div>
                    <nav aria-label="naviguation administrateur" id="sidebar" className="bordure-gauche">             
                    <div>
                        <ul className="nav">    
                        <p className="active">Diffuseur</p>  
                       
                        <li><a>Menu diff 1</a></li>
                        <li >
                            <a href="#sousMenuP3" data-toggle="collapse"  aria-expanded="false">
                                Menu diff 2  
                                <span className="glyphicon glyphicon glyphicon-menu-down" aria-hidden="true"></span>
                            </a>
                            <ul id="sousMenuP3" className="list-unstyled collapse navbar-sous-menu nav">
                                <li><a href="#">Sous-menu diff 1</a></li>
                                <li><a href="#">Sous-menu diff 2</a></li>
                            </ul>              
                        </li>
                        <li><a>Menu diff 3</a></li>
                        </ul>
                    </div>
                    </nav>         


                </div>

        )    
    }
}

export default MenuDiffuseur