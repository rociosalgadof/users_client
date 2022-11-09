export default (state = [], action) => {
  switch (action.type) {
    case "DELETE" :
      return state.filter((candidate) => candidate._id !== action.payload);
    case "FETCH_ALL":
      return action.payload;
    default:
      return state;
  }
};
