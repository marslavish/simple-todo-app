export const getPost = () => {
  return {
    type: "GET_POST",
  };
};
export const getPostSuccess = (post) => {
  return {
    type: "GET_POST_SUCCESS",
    payload: post,
  };
};

export const getPostFailure = () => {
  return {
    type: "GET_POST_FAILURE",
  };
};

export const fetchPost = (postID) => {
  return async (dispatch) => {
    dispatch(getPost());

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postID}`
      );
      const data = await response.json();
      dispatch(getPostSuccess(data));
    } catch (error) {
      dispatch(getPostFailure());
    }
  };
};
