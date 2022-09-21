export default (state = [], action) => {
  switch (action.type) {
    case "DELETE" :
      return state.filter((user) => user._id !== action.payload);
    case "FETCH_ALL":
      return action.payload;
    default:
      return state;
  }
};
