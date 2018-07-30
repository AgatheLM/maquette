import React, {Component, PropTypes} from 'react';
import Utilisateur from './Utilisateur.jsx';
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import { getUtilisateurs } from "../actions/getUtilisateurs";
import { supprimerUtilisateur } from "../actions/supprimerUtilisateur";

 class Utilisateurs extends Component{
	 constructor(props){
		 super(props);
		 this.state=({listeUtilisateur:[]});
		 this.majListeUtilisateur = this.majListeUtilisateur.bind(this);
	 }
	componentDidMount() {
	 this.props.getUtilisateurs();
  }

  componentDidUpdate(prevProps) {
	if (this.props.myUsers !== prevProps.myUsers) {
	  this.fetchData(this.props.myUsers);
	}
  }

	renderUtilisateurs(){
		if (this.props.utilisateursReducer){
				const myUsers = this.props.utilisateursReducer.myUsers
				const erreur = this.props.utilisateursReducer.erreur
			 if(myUsers.length>0){
				return (
					<div className="col-md-4 contenu-page">
						<table className=" table table-hover">
							
							<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Id</th>
								<th scope="col">Nom</th>
								<th scope="col">Prénom</th>
							</tr>
							</thead>
						
							<tbody>
							{myUsers.map((utilisateur) => <Utilisateur majListeUtilisateur={this.majListeUtilisateur} key={utilisateur.id} utilisateur={utilisateur} {...utilisateur} suppr="true"/>)}
							</tbody>
						</table>

						<button className="btn btn-toucan" onClick={e => this.handleClick(e)}>Supprimer utilisateur</button>  
					</div>
				)
			 }
			else if (erreur) {
			return(<div> {erreur.message} </div>)
		} else {
			return(<div> Pas d'utilisateurs </div>)

		}
	}
	}

	majListeUtilisateur(idUtilisateur, coche){
		let liste = this.state.listeUtilisateur;
		if (coche) {
					liste.push(idUtilisateur);
		} else {
					let pos = liste.indexOf(idUtilisateur);
					liste.splice(pos,1);
		}

	}

	handleClick(){
		let listeSuppression=[];
		this.state.listeUtilisateur.forEach(element => {
			listeSuppression.push({id:element})
		})
     this.props.supprimerUtilisateur(listeSuppression); 
	}

	render(){
		return(
			<div>
				{this.renderUtilisateurs()}
			</div>
		)
	}
}



/* Fonction appelée a chaque fois que le state change*/
	function mapStateToProps(state){
	  return {
	    utilisateursReducer : state.utilisateursReducer
	  }
	}

	/*Pour ne pas appeler le dispatch dans le didMount*/
	function mapDispatchToProps(dispatch){
		return bindActionCreators({getUtilisateurs, supprimerUtilisateur} ,dispatch)
	}

/* ON connecte notre composant à Redux : mapStateToProps est le pont*/
export default connect(mapStateToProps,mapDispatchToProps)(Utilisateurs);
