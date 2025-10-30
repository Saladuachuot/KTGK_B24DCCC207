import { useState } from "react";
import { Link } from "react-router-dom";
import { Post } from "../App";
import PostCard from "./PostCard";

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  const [filter, setFilter] = useState("");

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Danh sách bài viết ({filtered.length})</h2>
      <input
        type="text"
        placeholder="Tìm bài viết..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: "15px", width: "100%", padding: "8px" }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "16px",
        }}
      >
        {filtered.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
      <Link to="/create">
        <button style={{ marginTop: "20px" }}>+ Viết bài mới</button>
      </Link>
    </div>
  );
}
