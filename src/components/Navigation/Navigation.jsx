import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </header>
  );
};
export default Navigation;
