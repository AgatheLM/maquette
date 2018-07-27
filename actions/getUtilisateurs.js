import { URL_WS, ERREUR_RESEAU} from './index'; 
import axios from 'axios';

export const GET_UTILISATEURS_SUCCESS = 'GET_UTILISATEURS_SUCCESS';
export const GET_UTILISATEURS_FAILURE = 'FETCH_UTILISATEUR_FAILURE';


export function getUtilisateurs() {
  return function(dispatch){
     axios.get(`${URL_WS}/utilisateur`)
     .then(function(result) {
          dispatch({
              type: GET_UTILISATEURS_SUCCESS,
              payload :  result.data
          })
        })
      .catch(function(error){
        if (!error.response){
            dispatch({
                type: GET_UTILISATEURS_FAILURE,
                error: {message: ERREUR_RESEAU }
            })
        } else {
          dispatch({
            type: GET_UTILISATEURS_FAILURE,
            error:  error.response.data
        })
        }
      })
    }
}

