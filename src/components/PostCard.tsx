import { Link } from "react-router-dom";
import { Post } from "../App";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "10px" }}>
      <img
        src={post.thumbnail}
        alt={post.title}
        style={{ width: "100%", borderRadius: "6px", marginBottom: "10px" }}
      />
      <h3>{post.title}</h3>
      <p><b>Tác giả:</b> {post.author}</p>
      <p><b>Ngày đăng:</b> {post.date}</p>
      <p>{post.content.substring(0, 100)}...</p>
      <Link to={`/posts/${post.id}`}>Đọc thêm</Link>
    </div>
  );
}
