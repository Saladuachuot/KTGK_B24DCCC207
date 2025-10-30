import { useNavigate, useParams } from "react-router-dom";

export default function PostDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Chi tiết bài viết #{id}</h2>
      <p>Đây là nội dung chi tiết của bài viết (demo).</p>
      <button onClick={() => navigate(-1)}>Quay lại</button>{" "}
      <button onClick={() => navigate(`/posts/edit/${id}`)}>Chỉnh sửa</button>{" "}
      <button
        onClick={() => {
          if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
            alert("Đã xóa!");
            navigate("/");
          }
        }}
      >
        Xóa bài viết
      </button>
    </div>
  );
}
