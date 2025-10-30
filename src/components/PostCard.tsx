interface PostCardProps {
  post: {
    id: number;
    title: string;
    author: string;
    date: string;
    content: string;
  };
  onDelete: (id: number) => void;
}

export default function PostCard({ post, onDelete }: PostCardProps) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 10, marginBottom: 10 }}>
      <h3>{post.title}</h3>
      <p><b>Tác giả:</b> {post.author}</p>
      <small>Ngày đăng: {post.date}</small>
      <p>{post.content.slice(0, 100)}...</p>
      <a href={`/posts/${post.id}`}>Đọc thêm</a> |{" "}
      <button onClick={() => onDelete(post.id)}>Xóa</button>
    </div>
  );
}
