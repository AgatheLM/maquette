import { URL_WS} from './index'
import axios from 'axios'
import { getUtilisateurs } from "../actions/getUtilisateurs";
export const SUPPRIMER_UTILISATEUR_SUCCESS='SUPPRIMER_UTILISATEUR';
export const SUPPRIMER_UTILISATEUR_FAILURE='SUPPRIMER_UTILISATEUR_FAILURE';

export function supprimerUtilisateur(v_listeId){
    console.log(v_listeId)
    return function(dispatch){
       axios.post(`${URL_WS}/utilisateur/supprimer`, v_listeId)
        .then(function(response){
            dispatch({
                type: SUPPRIMER_UTILISATEUR_SUCCESS,
                payload :  "OK"
            });
            dispatch(getUtilisateurs());
          })
        .catch(function(error){
            dispatch({
              type: SUPPRIMER_UTILISATEUR_FAILURE,
              error:  "KO"
            })
        });
      }
  }
  
  export function listeUtilisateurASupprimer(v_listeId){
    console.log(v_listeId)
    return function(dispatch){
       axios.post(`${URL_WS}/utilisateur/supprimer`, v_listeId)
        .then(function(response){
            dispatch({
                type: SUPPRIMER_UTILISATEUR_SUCCESS,
                payload :  "OK"
            });
            dispatch(getUtilisateurs());
          })
        .catch(function(error){
            dispatch({
              type: SUPPRIMER_UTILISATEUR_FAILURE,
              error:  "KO"
            })
        });
      }
  }



