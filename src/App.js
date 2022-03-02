import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:postID" element={<PostPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
