// @flow strict
import Link from "next/link";


function Navbar() {
  return (
    <nav className="bg-transparent overflow-x-hidden">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-3xl border-2 rounded-sm p-1 border-[#16f2b3] font-bold">
            VIVEK NEUPANE
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-[#16f2b3] transition-colors duration-300 hover:text-white capitalize">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-[#16f2b3] transition-colors duration-300 hover:text-white capitalize">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-[#16f2b3] transition-colors duration-300 hover:text-white capitalize">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-[#16f2b3] transition-colors duration-300 hover:text-white capitalize">ACADEMIC</div></Link>
          </li>
          {/* <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog"><div className="text-sm text-[#16f2b3] transition-colors duration-300 hover:text-white capitalize">BLOGS</div></Link>
          </li> */}
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-[#16f2b3] transition-colors duration-300 hover:text-white capitalize">PROJECTS</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;