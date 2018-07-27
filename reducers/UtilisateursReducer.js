
import {  GET_UTILISATEURS_SUCCESS,  GET_UTILISATEURS_FAILURE} from '../actions/getUtilisateurs';
/* Les actions déclenchent uniquement des modifications dans l'application */
/* Les reducers spécifient ces modifications, prend en paramètre state et actio pour renvoyer un state à jour */


export default function utilisateursReducer(state=null, action) {

  switch(action.type) {
    case GET_UTILISATEURS_SUCCESS:
      return  { myUsers : action.payload,
                erreur :""}
    case GET_UTILISATEURS_FAILURE:
      return   { myUsers:"",
                 erreur : action.error}
    default:
      return state;
  }
}
