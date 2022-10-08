import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "../components/Navbar.css"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Budget Planner
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About Us</CustomLink>
        <CustomLink to="/testimonials">Testimonials</CustomLink>
        <CustomLink to="/contact us">Contact Us</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}