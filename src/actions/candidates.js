import * as api from "../api/index";

export const getCandidates = () => async (dispatch) => {
  try {
    const { data } = await api.getCandidates();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCandidate = (id) => async (dispatch) => {
  try {
    await api.deleteCandidate(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};



