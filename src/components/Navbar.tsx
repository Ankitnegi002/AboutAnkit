import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSoftSkillsOpen, setIsSoftSkillsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const weeks = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <nav className="bg-black shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src="https://tint.creativemarket.com/il3thzjdOwi2_puTVqfSFMuvaKKfyMxGayBu-hMRcjM/width:1200/height:800/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzEyNDAvMTI0MDkvMTI0MDk2MjUvYW4tbG9nby1kZXNpZ24tMS1vLmpwZw?1652872570"
                alt="logo"
                className="h-16 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive("/")
                  ? "text-white border-2 border-white bg-black"
                  : "text-gray-300 hover:text-black hover:bg-white hover:border-2 hover:border-white"
              } px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`${
                isActive("/projects")
                  ? "text-white border-2 border-white bg-black"
                  : "text-gray-300 hover:text-black hover:bg-white hover:border-2 hover:border-white"
              } px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out`}
            >
              Projects
            </Link>
            <Link
              to="/skills"
              className={`${
                isActive("/skills")
                  ? "text-white border-2 border-white bg-black"
                  : "text-gray-300 hover:text-black hover:bg-white hover:border-2 hover:border-white"
              } px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out`}
            >
              Skills
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsSoftSkillsOpen(!isSoftSkillsOpen)}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-black hover:bg-white hover:border-2 hover:border-white rounded-md transition-all duration-300 ease-in-out"
              >
                Soft Skills
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isSoftSkillsOpen && (
                <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-black ring-1 ring-gray-800 ring-opacity-5">
                  <div className="py-1">
                    <Link
                      to="/softskills/overview"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-black hover:bg-white hover:border-2 hover:border-white transition-all duration-300 ease-in-out"
                      onClick={() => setIsSoftSkillsOpen(false)}
                    >
                      Overview
                    </Link>
                    {weeks.map((week) => (
                      <Link
                        key={week}
                        to={`/softskills/week${week}`}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-black hover:bg-white hover:border-2 hover:border-white transition-all duration-300 ease-in-out"
                        onClick={() => setIsSoftSkillsOpen(false)}
                      >
                        Week {week}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`${
                isActive("/contact")
                  ? "text-white border-2 border-white bg-black"
                  : "text-gray-300 hover:text-black hover:bg-white hover:border-2 hover:border-white"
              } px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out`}
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-black hover:bg-white hover:border-2 hover:border-white focus:outline-none transition-all duration-300 ease-in-out"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`${
                isActive("/")
                  ? "bg-white text-black border-2 border-white"
                  : "text-gray-300 hover:text-black hover:bg-white hover:border-2 hover:border-white"
              } block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`${
                isActive("/projects")
                  ? "bg-white text-black border-2 border-white"
                  : "text-gray-300 hover:text-black hover:bg-white hover:border-2 hover:border-white"
              } block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/skills"
              className={`${
                isActive("/skills")
                  ? "bg-white text-black border-2 border-white"
                  : "text-gray-300 hover:text-black hover:bg-white hover:border-2 hover:border-white"
              } block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out`}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsSoftSkillsOpen(!isSoftSkillsOpen)}
                className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-300 hover:text-black hover:bg-white hover:border-2 hover:border-white rounded-md transition-all duration-300 ease-in-out"
              >
                Soft Skills
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isSoftSkillsOpen && (
                <div className="pl-4">
                  <Link
                    to="/softskills/overview"
                    className="block px-3 py-2 text-base text-gray-300 hover:text-black hover:bg-white hover:border-2 hover:border-white rounded-md transition-all duration-300 ease-in-out"
                    onClick={() => {
                      setIsOpen(false);
                      setIsSoftSkillsOpen(false);
                    }}
                  >
                    Overview
                  </Link>
                  {weeks.map((week) => (
                    <Link
                      key={week}
                      to={`/softskills/week${week}`}
                      className="block px-3 py-2 text-base text-gray-300 hover:text-black hover:bg-white hover:border-2 hover:border-white rounded-md transition-all duration-300 ease-in-out"
                      onClick={() => {
                        setIsOpen(false);
                        setIsSoftSkillsOpen(false);
                      }}
                    >
                      Week {week}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`${
                isActive("/contact")
                  ? "bg-white text-black border-2 border-white"
                  : "text-gray-300 hover:text-black hover:bg-white hover:border-2 hover:border-white"
              } block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
