import React from "react";

function Comment({ email, body }) {
  return (
    <aside className="comment">
      <h3>{email}</h3>
      <p>{body}</p>
    </aside>
  );
}

export default Comment;
