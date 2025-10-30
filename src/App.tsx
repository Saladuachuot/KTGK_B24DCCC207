import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostDetail from "./components/PostDetail";

export interface Post {
  id: number;
  title: string;
  author: string;
  thumbnail: string;
  category: string;
  content: string;
  date: string;
}

export default function App() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Khám phá vũ trụ với SpaceX",
      author: "Elon Musk",
      thumbnail: "https://picsum.photos/300/200?1",
      category: "Công nghệ",
      content:
        "Bài viết này nói về hành trình chinh phục vũ trụ của SpaceX và tầm nhìn đưa con người lên sao Hỏa...",
      date: "2025-10-30",
    },
    {
      id: 2,
      title: "Ẩm thực đường phố Sài Gòn",
      author: "Minh An",
      thumbnail: "https://picsum.photos/300/200?2",
      category: "Ẩm thực",
      content:
        "Ẩm thực Sài Gòn là sự kết hợp tinh tế giữa truyền thống và hiện đại, với những món ăn hấp dẫn...",
      date: "2025-10-29",
    },
  ]);

  const addPost = (post: Post) => {
    setPosts([...posts, post]);
  };

  const updatePost = (updated: Post) => {
    setPosts(posts.map((p) => (p.id === updated.id ? updated : p)));
  };

  const deletePost = (id: number) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px", margin: "20px" }}>
        <Routes>
          <Route path="/" element={<PostList posts={posts} />} />
          <Route path="/create" element={<PostForm addPost={addPost} />} />
          <Route
            path="/posts/:id"
            element={<PostDetail posts={posts} onDelete={deletePost} />}
          />
          <Route
            path="/posts/edit/:id"
            element={<PostForm posts={posts} onUpdate={updatePost} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
