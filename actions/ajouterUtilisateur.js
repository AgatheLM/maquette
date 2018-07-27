import { URL_WS} from './index'
import axios from 'axios';

import { getUtilisateurs } from "../actions/getUtilisateurs";

export const AJOUTER_UTILISATEUR_SUCCESS='AJOUTER_UTILISATEUR';
export const AJOUTER_UTILISATEUR_FAILURE='AJOUTER_UTILISATEUR_FAILURE';
export const AJOUTER_UTILISATEUR_REINIT='AJOUTER_UTILISATEUR_REINIT';

export function ajouterUtilisateur(v_nom, v_prenom){
  return function(dispatch){
     axios.post(`${URL_WS}/utilisateur`, {nom: `${v_nom}`,
                                          prenom : `${v_prenom}`})
      .then(function(response){
          dispatch({
              type: AJOUTER_UTILISATEUR_SUCCESS,
              payload :  "OK"
          });
          dispatch(getUtilisateurs());
        }
        )
        .catch(function(error){
          if (!error.response){
              dispatch({
                  type: AJOUTER_UTILISATEUR_FAILURE,
                  error: {message: ERREUR_RESEAU }
              })
          } else {
            dispatch({
              type: AJOUTER_UTILISATEUR_FAILURE,
              error:  error.response.data
          })
          }
        })
      }
  }

  export function reinit(){
      return {
        type: AJOUTER_UTILISATEUR_REINIT
    }
  }