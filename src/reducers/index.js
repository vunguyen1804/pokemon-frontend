import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";
import mainReducer from "./mainReducer";

// state
export default combineReducers({
  main: mainReducer,
  pokemons: pokemonReducer,
});
