import React, {Component} from 'react';
import MenuConsultant2 from './MenuConsultant2.jsx';
import MenuProducteur2 from './MenuProducteur2.jsx';
import MenuResponsable2 from './MenuResponsable2.jsx';
import MenuDiffuseur2 from './MenuDiffuseur2.jsx';
import MenuAdministrateur2 from './MenuAdministrateur2.jsx';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


/* Site de documentation de la nav bar : http://www.conseil-webmaster.com/formation/bootstrap/menu-navigation-bootstrap.php
https://www.w3schools.com/bootstrap/bootstrap_navbar.asp*/
class BarreMenuGauche2 extends Component{

  constructor(props){
    super(props);
  }
  render(){    
      return(
      <Router>
        <div>
        <nav aria-label="naviguation profils" className="navbar navbar-default navbar-margin ">
            <div className="container-fluid">
                <div className="navbar-header    ">
                    <Link to={'/'} className="navbar-brand-img" > 
                        <img  id="logoToucan"  src="./img/logoToucan2.svg"  width="25px" alt="Logo Toucan retour accueil"/>
                    </Link>
                </div>              
                <ul className="nav navbar-nav navbar-right">
                    <li ><a href="#">Aide</a></li> 
                    <li className="navbar-user"><span className="glyphicon glyphicon-user "></span> Toto</li>
                </ul>
            </div>
        </nav>
        
        <nav aria-label="naviguation administrateur" id="sidebar" className="bordure-gauche">             
          <div>
          <ul className="nav active">    
            <MenuConsultant2/>   
            <MenuProducteur2/> 
            <MenuResponsable2/> 
            <MenuDiffuseur2/> 
            <MenuAdministrateur2/> 
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




export default BarreMenuGauche2;
