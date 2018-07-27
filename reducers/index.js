
import {combineReducers} from 'redux';
import utilisateursReducer from "./UtilisateursReducer"
import ajouterUtilisateurReducer from "./AjouterUtilisateurReducer"
import supprimerUtilisateurReducer from "./SupprimerUtilisateurReducer"

//combineReducers  : permet d'ajouter les nouveaux reducers.
const rootReducer = combineReducers({  
  utilisateursReducer : utilisateursReducer,
  ajouterUtilisateurReducer : ajouterUtilisateurReducer,
  statutSuppr : supprimerUtilisateurReducer
  /*listeUtilisateur est le state qui contient le résultat d'UtilisateursReducer*/
})

export default rootReducer;
