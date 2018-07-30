import React, {Component} from 'react';



class MenuResponsable extends Component{
    render(){
        return(
      
                <div>
                    <nav aria-label="naviguation administrateur" id="sidebar" className="bordure-gauche">             
                    <div>
                        <ul className="nav">    
                        <p className="active">Responsable</p>  
                        <li><a>Menu resp 2</a></li>
                        <li >
                            <a href="#sousMenuP3" data-toggle="collapse"  aria-expanded="false">
                                Menu resp 3  
                                <span className="glyphicon glyphicon glyphicon-menu-down" aria-hidden="true"></span>
                            </a>
                            <ul id="sousMenuP3" className="list-unstyled collapse navbar-sous-menu nav">
                                <li><a href="#">Sous-menu resp 1</a></li>
                                <li><a href="#">Sous-menu resp 2</a></li>
                            </ul>              
                        </li>
                        <li><a>Menu resp 3</a></li>
                        </ul>
                    </div>
                    </nav>         


                </div>

        )    
    }
}

export default MenuResponsable