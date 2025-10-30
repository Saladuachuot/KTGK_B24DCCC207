import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink 
        to="/trangchu" 
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Trang chủ
      </NavLink>

      <NavLink 
        to="/create" 
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Tạo bài
      </NavLink>
    </nav>
  );
}
