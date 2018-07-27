import React, { Component } from "react";


class Utilisateur extends Component {
  constructor(props){
    super(props);
    this.cAcChange = this.cAcChange.bind(this)
  }



  render() {
    return (

      <tr>
        <td className="text-center">{this.props.suppr && <input type="checkbox" id={this.props.id} onChange={e =>this.cAcChange(e)} />}</td>
        <td className="text-center">{this.props.id}</td>
        <td>{this.props.nom}</td>
        <td>{this.props.prenom}</td>
        
    </tr>


    );
  }

  cAcChange(e){
    this.props.majListeUtilisateur(this.props.id, e.target.checked)
  }
}

export default Utilisateur;
