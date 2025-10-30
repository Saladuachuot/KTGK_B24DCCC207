import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";

interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  date: string;
}

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Bài viết đầu tiên",
      author: "Bro",
      content: "Đây là nội dung mẫu cho bài viết đầu tiên của bạn.",
      date: new Date().toLocaleDateString(),
    },
  ]);
  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tổng số bài viết: {posts.length}</h2>
      <button onClick={() => navigate("/create")}>Viết bài mới</button>
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
