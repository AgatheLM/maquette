import React, {Component} from 'react';
import BarreMenuGauche from './BarreMenuGauche.jsx';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

/* Site de documentation de la nav bar : http://www.conseil-webmaster.com/formation/bootstrap/menu-navigation-bootstrap.php
https://www.w3schools.com/bootstrap/bootstrap_navbar.asp*/
class BarreMenuHaut extends Component{

    constructor () {
        super()
        this.state={afficher:false,
                    typeMenu:""}    
        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        return(
            <Router>
                <div>
                    <nav className="navbar navbar-default navbar-margin ">
                        <div className="container-fluid">
                            <div className="navbar-header    ">
                                <Link to={'/'} className="navbar-brand-img" > <img  id="logoToucan"  src="./img/logoToucan2.svg"  width="25px" /></Link>
                            </div>
                            <div className="nav navbar-nav">        
                                <ul className="nav navbar-nav">          
                                    <li className="active"><Link to={'/'} onClick={e => this.handleClick("accueil")}> Accueil</Link></li>                  
                                    <li><a href="#" onClick={e => this.handleClick("consultant")}>Consultant</a></li>
                                    <li><a href="#" onClick={e => this.handleClick("producteur")}>Producteur</a></li>
                                    <li><a href="#" onClick={e => this.handleClick("responsable")}>Responsable</a></li>
                                    <li><a href="#" onClick={e => this.handleClick("diffuseur")}>Diffuseur</a></li>
                                    <li><a href="#" onClick={e => this.handleClick("administrateur")}>Administrateur</a></li>
                                </ul>
                            </div>
                            <ul className="nav navbar-nav navbar-right">
                                <li ><a href="#">Aide</a></li> 
                                <li className="navbar-user"><span className="glyphicon glyphicon-user "></span> Toto</li>
                            </ul>
                        </div>
                    </nav>
                    <BarreMenuGauche afficher={this.state.afficher} typeMenu={this.state.typeMenu}/>
                </div>
            </Router>
        );
    }

    handleClick(vTypeMenu){          
        let visible=true;
        // Si on clique une deuxième fois sur un menu de la barre du haut, cela cache la barre de gauche
        if (this.state.typeMenu==vTypeMenu){
            visible=!this.state.afficher
        }
        this.setState ({afficher:visible, typeMenu:vTypeMenu})    
    }

}

export default BarreMenuHaut;
