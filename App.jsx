import React, {Component} from 'react';
import BarreMenuHaut from './components/Menu/BarreMenuHaut.jsx'
import BarreMenuGauche2 from './components/MenuGauche/BarreMenuGauche2.jsx'

/* Site de documentation de la nav bar : http://www.conseil-webmaster.com/formation/bootstrap/menu-navigation-bootstrap.php
https://www.w3schools.com/bootstrap/bootstrap_navbar.asp*/
class App extends Component{
    render(){
        return(
        <div>
          <BarreMenuHaut/>
         {/* <BarreMenuGauche2/>*/}
        </div>
        );
    }
}




export default App;
