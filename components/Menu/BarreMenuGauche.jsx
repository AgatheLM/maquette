import React, {Component} from 'react';
import MenuConsultant from './MenuConsultant.jsx';
import MenuProducteur from './MenuProducteur.jsx';
import MenuResponsable from './MenuResponsable.jsx';
import MenuDiffuseur from './MenuDiffuseur.jsx';
import MenuAdministrateur from './MenuAdministrateur.jsx';



/* Site de documentation de la nav bar : http://www.conseil-webmaster.com/formation/bootstrap/menu-navigation-bootstrap.php
https://www.w3schools.com/bootstrap/bootstrap_navbar.asp*/
class BarreMenuGauche extends Component{

  constructor(props){
    super(props);
  }
  render(){    
    if (this.props.afficher){
      if(this.props.typeMenu=="consultant"){            
        return(          
          <MenuConsultant/>       
        );
      } else if(this.props.typeMenu=="producteur") {
        return(
          <MenuProducteur/>     
        );      
      } else if(this.props.typeMenu=="responsable") {
        return(
          <MenuResponsable/>
        );
      } else if(this.props.typeMenu=="diffuseur") {
        return(
          <MenuDiffuseur/>
        );
      } else if(this.props.typeMenu=="administrateur") {
        return(
         <MenuAdministrateur/>
        );
      } else{
        return(null)
      }
    }else{
      return(null)
    }
  }

  
}




export default BarreMenuGauche;
