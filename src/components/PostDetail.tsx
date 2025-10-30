import { useParams, Link, useNavigate } from "react-router-dom";
import { Post } from "../App";

interface PostDetailProps {
  posts: Post[];
  onDelete: (id: number) => void;
}

export default function PostDetail({ posts, onDelete }: PostDetailProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));

  if (!post)
    return (
      <div>
        <p>Không tìm thấy bài viết.</p>
        <Link to="/">Quay lại trang chủ</Link>
      </div>
    );

  const handleDelete = () => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      onDelete(post.id);
      alert("Đã xóa bài viết!");
      navigate("/");
    }
  };

  return (
    <div>
      <img src={post.thumbnail} alt={post.title} style={{ width: "100%", borderRadius: "10px" }} />
      <h2>{post.title}</h2>
      <p>
        <b>Tác giả:</b> {post.author} | <b>Ngày:</b> {post.date}
      </p>
      <p>
        <b>Thể loại:</b> {post.category}
      </p>
      <p style={{ whiteSpace: "pre-wrap" }}>{post.content}</p>
      <div style={{ marginTop: "20px" }}>
        <Link to={`/posts/edit/${post.id}`}>✏ Chỉnh sửa</Link> |{" "}
        <button onClick={handleDelete}>🗑 Xóa bài</button> |{" "}
        <Link to="/">⬅ Quay lại</Link>
      </div>
    </div>
  );
}
