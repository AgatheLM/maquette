import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Utilisateurs from './components/Utilisateurs.jsx';
import AjouterUtilisateur from './components/AjouterUtilisateur.jsx';

/* Site de documentation de la nav bar : http://www.conseil-webmaster.com/formation/bootstrap/menu-navigation-bootstrap.php
https://www.w3schools.com/bootstrap/bootstrap_navbar.asp*/
class App extends Component{
    render(){
        return(
        <Router>
        <div>
          <nav className="navbar navbar-default ">
            <div className="container-fluid">
              <div className="navbar-header    ">
                <Link to={'/'} className="navbar-brand-img" > <img  id="logoToucan"  src="./img/logoToucan2.svg"  width="25px" /></Link>
              </div>
              
              <div className="nav navbar-nav">        
                <ul className="nav navbar-nav">
          
                  <li className="active"><Link to={'/'}> Accueil</Link></li>
                  
                  <li><a href="#">Consultant</a></li>
                  <li><a href="#">Producteur</a></li>
                  <li><a href="#">Responsable</a></li>
                  <li><a href="#">Diffuseur</a></li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">Administrateur
                    <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><Link to={'/utilisateurs'}> Liste des utilisateurs </Link></li>
                      <li><Link to={'/ajouter-utilisateur'}> Ajouter un utilisateur </Link></li>
                    </ul>
                  </li>
                </ul>

              </div>
             
              <ul className="nav navbar-nav navbar-right">
                <li ><a href="#">Aide</a></li> 
                <li className="navbar-user"><span className="glyphicon glyphicon-user "></span> Toto</li>
                    
              </ul>
            </div>
          </nav>

            <div className="col-sm-2 sidenav text-left navbar-default">
              <ul className="nav  nav-sidebar navbar-default navbar-nav ">
                <li><a>Général</a></li>
                <li><a>Adresses</a></li>
                <li><a>Activités</a></li>
                <li><a>Enquêtes</a></li>
                <li><a>Etablissements</a></li>
                <li><a>Unité Complexe</a></li>
                <li><a>Bloc Note</a></li>
              </ul>
        		</div>


            <Switch>
                 <Route exact path='/ajouter-utilisateur'
                   render={() => <AjouterUtilisateur/>} />
                 <Route exact path='/utilisateurs'
                   render={() => <Utilisateurs />} />
              </Switch>
         </div>
      </Router>
        );
    }
}




export default App;
