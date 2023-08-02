

const NavBar:React.FC = () => {
 
    interface NavLink {
      id: number;
      link: string;
    }
  const navLinks: NavLink[] = [
    {
      id: 1,
      link: "Job",
    },
    {
      id: 2,
      link: "Companies",
    },
    {
      id: 3,
      link: "About",
    },
    {
      id: 4,
      link: "Contact",
    },
    {
      id: 5,
      link: "Blog",
    },
    {
      id: 4,
      link: "Login",
    },
    {
      id: 5,
      link: "Register",
    },
  ];
  return (
    <div className="p-[3rem] flex justify-between">
      <div className="logoDiv">
      <h1 className="text-2xl"><strong className="text-blueColor">
        Job
        </strong>
        Search</h1>
      </div>
      <div>
      <ul className="hidden md:flex">
        {navLinks.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer px-4 py-2  text-[#6f6f6f]  hover: hover:text-blueColor  duration-100"
          >
            {link}
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default NavBar