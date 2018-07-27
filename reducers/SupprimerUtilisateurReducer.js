import {  SUPPRIMER_UTILISATEUR_SUCCESS,  SUPPRIMER_UTILISATEUR_FAILURE} from '../actions/supprimerUtilisateur';
/* Les actions déclenchent uniquement des modifications dans l'application */
/* Les reducers spécifient ces modifications, prend en paramètre state et actio pour renvoyer un state à jour */


export default function supprimerrUtilisateurReducer(state=null, action) {

  switch(action.type) {
    case SUPPRIMER_UTILISATEUR_SUCCESS:
      return   action.payload;
    case SUPPRIMER_UTILISATEUR_FAILURE:
      return  action.error;
    default:
      return state;
  }
}
