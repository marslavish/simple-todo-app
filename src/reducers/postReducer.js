export const initialState = {
  post: {},
  loading: false,
  hasErrors: false,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POST":
      return { ...state, loading: true };
    case "GET_POST_SUCCESS":
      return { post: action.payload, loading: false };
    case "GET_POST_FAILURE":
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
};

export default postReducer;
