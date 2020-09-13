import {
  FETCH_POKEMONS,
  FETCH_POKEMON,
  CREATE_POKEMON,
  DELETE_POKEMON,
} from "../actions/type";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POKEMONS:
      return { ...state, ...action.payload };
    case FETCH_POKEMON:
      return { ...state, ...action.payload };
    case CREATE_POKEMON:
      return { ...state, ...action.payload };
    case DELETE_POKEMON:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
