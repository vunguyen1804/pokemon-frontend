//import _ from "lodash";
import { FETCH_ALL } from "../actions/type";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
