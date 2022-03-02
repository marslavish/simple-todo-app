import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import postReducer from "./postReducer";
import commentsReducer from "./commentsReducer";

const rootReducer = combineReducers({
  post: postReducer,
  posts: postsReducer,
  comments: commentsReducer,
});

export default rootReducer;
