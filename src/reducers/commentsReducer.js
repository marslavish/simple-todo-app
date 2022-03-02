export const initialState = {
  comments: [],
  loading: false,
  hasErrors: false,
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COMMENTS":
      return { ...state, loading: true };
    case "GET_COMMENTS_SUCCESS":
      return { comments: action.payload, loading: false };
    case "GET_COMMENTS_FAILURE":
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
};

export default commentsReducer;
