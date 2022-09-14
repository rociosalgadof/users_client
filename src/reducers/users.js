export default (state = [], action) => {
  switch (action.type) {
    case "DELETE":
      return state.filter((event) => event.id !== action.payload);
    case "FETCH_ALL":
      return action.payload;
    default:
      return state;
  }
};
