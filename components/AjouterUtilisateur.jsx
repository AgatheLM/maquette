import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import { ajouterUtilisateur, reinit } from "../actions/ajouterUtilisateur";
import Utilisateurs from './Utilisateurs.jsx';

class AjouterUtilisateur extends Component {

  componentDidMount(){
    this.props.reinit();
  }


  renderAjouterUtilisateur(){
    if (this.props.ajouterUtilisateurReducer){
      let statutAjout = this.props.ajouterUtilisateurReducer.statutAjout
      const erreur = this.props.ajouterUtilisateurReducer.erreur
      if (statutAjout=="OK"){

        return (
          <div>
            <h1>Utilisateur crée avec succès</h1>
            <Utilisateurs/>
          </div>
        )
      }else if (erreur){
        return (
          <h1>Erreur lors de la création</h1>
        )
      }else{
         <h1>RAS</h1>
      }
    }
  }

  render() {

    
      return (
        <div className="col-sm-4 contenu-page">
        <h1>Ajouter un utilisateur</h1>
          <form>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label" htmlFor="inputNom" >Nom</label>
              <div className="col-sm-10">
                <input className="form-control" id="inputNom" ref="inputNom" type="text" placeholder="Entrer nom" required
                  minLength="1" maxLength="45" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label" htmlFor="inputPrenom">Prenom</label>
              <div className="col-sm-10">  
                <input className="form-control" id="inputPrenom" ref="inputPrenom" type="text" placeholder="Entrer prenom"  />
              </div>
            </div>
              <div className="form-group row"> 
                <div className="col-sm-10"> 
                  <button  type="button"  className="btn btn-toucan" onClick={e => this.handleClick(e)}>Ajouter utilisateur</button>    
                </div>
              </div>
            </form>      
            {this.renderAjouterUtilisateur()}
          </div>

      )
    
  }

  handleClick(e) {
    const nom = this.refs.inputNom.value.trim();
    const prenom = this.refs.inputPrenom.value;
    this.refs.inputNom.value = "";
    this.refs.inputPrenom.value = "";
    this.props.ajouterUtilisateur(nom, prenom);
  }
}


/* Fonction appelée a chaque fois que le state change*/
	function mapStateToProps(state){
	  return {
	    ajouterUtilisateurReducer : state.ajouterUtilisateurReducer
	  }
	}

	/*Pour ne pas appeler le dispatch dans le didMount*/
	function mapDispatchToProps(dispatch){
		return bindActionCreators({ajouterUtilisateur, reinit},dispatch)
	}

/* ON connecte notre composant à Redux : mapStateToProps est le pont*/
export default connect(mapStateToProps,mapDispatchToProps)(AjouterUtilisateur);
