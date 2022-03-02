const getComments = () => {
  return {
    type: "GET_COMMENTS",
  };
};

const getCommentsSuccess = (comments) => {
  return {
    type: "GET_COMMENTS_SUCCESS",
    payload: comments,
  };
};

const getCommentsFailure = () => {
  return {
    type: "GET_COMMENTS_FAILURE",
  };
};

export const fetchComments = (postID) => {
  return async (dispatch) => {
    dispatch(getComments());

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postID}`
      );
      const data = await response.json();
      dispatch(getCommentsSuccess(data));
    } catch (error) {
      dispatch(getCommentsFailure());
    }
  };
};
