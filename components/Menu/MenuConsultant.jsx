import React, {Component} from 'react';



class MenuConsultant extends Component{
    render(){
        return(
        
                <div>
                    <nav aria-label="naviguation administrateur" id="sidebar" className="bordure-gauche">             
                    <div>
                        <ul className="nav">    
                        <p className="active">Consultant</p>                          
                        <li><a>Menu consult 1</a></li>
                        <li >
                            <a href="#sousMenuP3" data-toggle="collapse"  aria-expanded="false">
                                Menu consult 2  
                                <span className="glyphicon glyphicon glyphicon-menu-down" aria-hidden="true"></span>
                            </a>
                            <ul id="sousMenuP3" className="list-unstyled collapse navbar-sous-menu nav">
                                <li><a href="#">Sous-menu consult 1</a></li>
                                <li><a href="#">Sous-menu consult 2</a></li>
                            </ul>              
                        </li>
                        <li><a>Menu consult 3</a></li>
                        </ul>
                    </div>
                    </nav>         

                </div>

        )    
    }
}

export default MenuConsultant