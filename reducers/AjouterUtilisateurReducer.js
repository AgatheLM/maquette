import {  AJOUTER_UTILISATEUR_SUCCESS,  AJOUTER_UTILISATEUR_FAILURE, AJOUTER_UTILISATEUR_REINIT} from '../actions/ajouterUtilisateur';
/* Les actions déclenchent uniquement des modifications dans l'application */
/* Les reducers spécifient ces modifications, prend en paramètre state et actio pour renvoyer un state à jour */


export default function ajouterUtilisateurReducer(state=null, action) {

  switch(action.type) {
    case AJOUTER_UTILISATEUR_SUCCESS:
      return  { statutAjout : action.payload,
                erreur :""}
    case AJOUTER_UTILISATEUR_FAILURE:
      return  { statutAjout : "",
                erreur :action.error}
                
    case AJOUTER_UTILISATEUR_REINIT:
    return  { statutAjout : "",
              erreur :""}
    default:
      return state;
  }
}
