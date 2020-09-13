import db from "../apis/axios";
import history from "../history";
import {
  FETCH_ALL,
  FETCH_POKEMON,
  FETCH_TRAINER,
  CREATE_POKEMON,
  FETCH_POKEMONS,
  CREATE_TRAINER,
  DELETE_POKEMON,
  DELETE_TRAINER,
} from "./type";

export const fetchAll = () => async (dispatch) => {
  const response = await db.get("/info");
  dispatch({ type: FETCH_ALL, payload: response.data });
};

export const fetchPokemon = (id) => async (dispatch) => {
  const response = await db.get(`/pokemons/${id}`);
  dispatch({ type: FETCH_POKEMON, payload: response.data });
};

export const fetchPokemons = () => async (dispatch) => {
  const response = await db.get(`/pokemons`);
  dispatch({ type: FETCH_POKEMONS, payload: response.data });
};

export const fetchTrainer = (uuid) => async (dispatch) => {
  const response = await db.get(`/trainers/${uuid}`);
  dispatch({ type: FETCH_TRAINER, payload: response.data });
};

export const createPokemon = (params) => async (dispatch) => {
  const response = await db.post("/pokemons", params);
  dispatch({ type: CREATE_POKEMON, payload: response.data });
  history.push("/");
};

export const deletePokemon = (id) => async (dispatch) => {
  const response = await db.delete(`/pokemons/${id}`);
  dispatch({ type: DELETE_POKEMON, payload: response.data });
  history.push("/");
};

export const createTrainer = (params) => async (dispatch) => {
  const response = await db.post("/trainers/", params);
  dispatch({ type: CREATE_TRAINER, payload: response.data });
  history.push("/");
};

export const deleteTrainer = (uuid) => async (dispatch) => {
  const response = await db.delete(`/trainers/${uuid}`);
  dispatch({ type: DELETE_TRAINER, payload: response.data });
  history.push("/");
};

// export const createStream = (formValues) => async (dispatch, getState) => {
//   const { userId } = db().auth;
//   const response = await streams.post("/streams", { ...formValues, userId });
//   dispatch({ type: CREATE_STREAM, payload: response.data });
//   history.push("/");
// };

// export const fetchAll = () => async (dispatch) => {
//   const response = await db.get("/info");
//   dispatch({ type: FETCH_STREAMS, payload: response.data });
// };

// export const fetchStream = (id) => async (dispatch) => {
//   const response = await streams.get(`/streams/${id}`);
//   dispatch({ type: FETCH_STREAM, payload: response.data });
// };

// export const editStream = (id, formValues) => async (dispatch) => {
//   const response = await streams.patch(`/streams/${id}`, formValues);
//   dispatch({ type: EDIT_STREAM, payload: response.data });
//   history.push("/");
// };

// export const deleteStream = (id) => async (dispatch) => {
//   await streams.delete(`/streams/${id}`);
//   dispatch({ type: DELETE_STREAM, payload: id });
//   history.push("/");
// };
