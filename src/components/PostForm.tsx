import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "../App";

interface PostFormProps {
  addPost?: (post: Post) => void;
  posts?: Post[];
  onUpdate?: (post: Post) => void;
}

export default function PostForm({ addPost, posts, onUpdate }: PostFormProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const editing = id && posts;

  const currentPost = editing ? posts!.find((p) => p.id === Number(id)) : undefined;

  const [title, setTitle] = useState(currentPost?.title || "");
  const [author, setAuthor] = useState(currentPost?.author || "");
  const [thumbnail, setThumbnail] = useState(currentPost?.thumbnail || "");
  const [category, setCategory] = useState(currentPost?.category || "Khác");
  const [content, setContent] = useState(currentPost?.content || "");

  useEffect(() => {
    if (currentPost) {
      setTitle(currentPost.title);
      setAuthor(currentPost.author);
      setThumbnail(currentPost.thumbnail);
      setCategory(currentPost.category);
      setContent(currentPost.content);
    }
  }, [currentPost]);

  const validate = () => {
    if (title.length < 10) return alert("Tiêu đề phải ít nhất 10 ký tự");
    if (author.length < 3) return alert("Tác giả phải ít nhất 3 ký tự");
    if (content.length < 50) return alert("Nội dung phải ít nhất 50 ký tự");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newPost: Post = {
      id: editing ? Number(id) : Date.now(),
      title,
      author,
      thumbnail: thumbnail || "https://picsum.photos/300/200",
      category,
      content,
      date: new Date().toISOString().split("T")[0],
    };

    if (editing && onUpdate) {
      onUpdate(newPost);
      alert("Cập nhật thành công!");
      navigate(`/posts/${id}`);
    } else if (addPost) {
      addPost(newPost);
      alert("Đăng bài thành công!");
      navigate("/");
    }
  };

  return (
    <div>
      <h2>{editing ? "Chỉnh sửa bài viết" : "Tạo bài viết mới"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Tiêu đề:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Tác giả:</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} required />

        <label>URL ảnh thumbnail:</label>
        <input value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />

        <label>Thể loại:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Công nghệ</option>
          <option>Du lịch</option>
          <option>Ẩm thực</option>
          <option>Đời sống</option>
          <option>Khác</option>
        </select>

        <label>Nội dung:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
        />

        <button type="submit" style={{ marginTop: "10px" }}>
          {editing ? "Cập nhật" : "Đăng bài"}
        </button>
      </form>
    </div>
  );
}
