import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
    <nav className="flex flex-row justify-between">
      <div>VStats</div>
      <ul className="flex flex-row justify-around">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/track">Track</Link>
        </li>
        <li>
          <Link to="/players">Players</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
    </>
  )
}

export default Layout