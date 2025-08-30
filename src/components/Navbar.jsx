import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { to: "/", label: "useEffect" },
    { to: "/use-query", label: "useQuery" },
    { to: "/use-mutation", label: "useMutation" },
    { to: "/use-infinite-query", label: "useInfiniteQuery" },
  ];
  return (
    <nav className="bg-gray-50 p-3 rounded-lg border border-gray-300 w-fit mx-auto">
      <ul className=" flex gap-4">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-gray-500"
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
