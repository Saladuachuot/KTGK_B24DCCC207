import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PostForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const editing = Boolean(id);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (title.length < 10 || author.length < 3 || content.length < 50) {
      alert("Vui lòng nhập đúng độ dài tối thiểu!");
      return;
    }
    alert(editing ? "Cập nhật thành công!" : "Đăng bài thành công!");
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{editing ? "Chỉnh sửa bài viết" : "Tạo bài viết mới"}</h2>
      <input
        type="text"
        placeholder="Tiêu đề (≥10 ký tự)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", marginBottom: 10, width: "100%" }}
      />
      <input
        type="text"
        placeholder="Tác giả (≥3 ký tự)"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{ display: "block", marginBottom: 10, width: "100%" }}
      />
      <textarea
        placeholder="Nội dung (≥50 ký tự)"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={6}
        style={{ display: "block", marginBottom: 10, width: "100%" }}
      />
      <button onClick={handleSubmit}>
        {editing ? "Cập nhật" : "Đăng bài"}
      </button>{" "}
      <button onClick={() => navigate(-1)}>Hủy</button>
    </div>
  );
}
