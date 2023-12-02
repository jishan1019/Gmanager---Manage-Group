import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <div className="navbar bgPrimary shadow-md pr-6">
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl text-white">GManager</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "underline font-semibold" : "font-semibold"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? "underline font-semibold" : "font-semibold"
                  }
                >
                  Profile
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/friends"
                  className={({ isActive }) =>
                    isActive ? "underline font-semibold" : "font-semibold"
                  }
                >
                  Friends
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/group"
                  className={({ isActive }) =>
                    isActive ? "underline font-semibold" : "font-semibold"
                  }
                >
                  Group
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1 hidden lg:flex">
              <p className="font-semibold text-white my-auto">
                Md.Jishan Hossain
              </p>

              <li>
                <NavLink to="/profile">
                  <img
                    className="h-8 w-8 rounded-full border border-white p-1"
                    src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
                    alt=""
                  />
                </NavLink>
              </li>
            </ul>

            <ul className="menu menu-horizontal px-1 lg:hidden md:pr-6 pr-0">
              <li tabIndex={0}>
                <details>
                  <summary className="text-white">Profile</summary>
                  <ul>
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "underline font-semibold" : "font-semibold"
                        }
                      >
                        Home
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                          isActive ? "underline font-semibold" : "font-semibold"
                        }
                      >
                        Profile
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/friends"
                        className={({ isActive }) =>
                          isActive ? "underline font-semibold" : "font-semibold"
                        }
                      >
                        Friends
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/group"
                        className={({ isActive }) =>
                          isActive ? "underline font-semibold" : "font-semibold"
                        }
                      >
                        Group
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
