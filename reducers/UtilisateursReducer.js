
import {  GET_UTILISATEURS_SUCCESS,  GET_UTILISATEURS_FAILURE} from '../actions/getUtilisateurs';
/* Les actions déclenchent uniquement des modifications dans l'application */
/* Les reducers spécifient ces modifications, prend en paramètre state et actio pour renvoyer un state à jour */


export default function utilisateursReducer(state=null, action) {

  switch(action.type) {
    case GET_UTILISATEURS_SUCCESS:
      return  { myUsers : [{
        "id": 1,
        "nom": "BURBAN",
        "prenom": "Achille"
      }, {
        "id": 2,
        "nom": "BURBAN",
        "prenom": "Eugène"
      }, {
        "id": 3,
        "nom": "BURBAN",
        "prenom": "Arnaud"
      }],
                erreur :""}
    case GET_UTILISATEURS_FAILURE:
      return   { myUsers:[{
        "id": 1,
        "nom": "BURBAN",
        "prenom": "Achille"
      }, {
        "id": 2,
        "nom": "BURBAN",
        "prenom": "Eugène"
      }, {
        "id": 3,
        "nom": "BURBAN",
        "prenom": "Arnaud"
      }],
                 erreur : action.error}
    default:
      return state;
  }
}
