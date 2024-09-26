import React, { useState, useEffect } from "react";
import useNetworkConnection from "../utils/useNetworkConnection";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebaseconf";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { newUser, removeUser } from "../utils/userSlice";
import { Link } from "react-router-dom";
import { clickSmartAssist, resetSmartAssist } from "../utils/configureSlice";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const userData = useSelector((store) => store?.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const connectionStatus = useNetworkConnection();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const smartAssist = useSelector((store) => store?.configure?.smartAssist);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unmountingAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          newUser({
            userId: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // navigate("/browse");
      } else {
        dispatch(removeUser());
        // navigate("/");
      }
    });
    return () => unmountingAuth();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmartAssistantToggle = () => {
    dispatch(clickSmartAssist());
  };

  const resetSmartAssistClick = () => {
    if (smartAssist) {
      dispatch(resetSmartAssist());
    }
  };

  return (
    <nav
      className={`navbar fixed w-full h-24 px-4 sm:px-6 lg:px-8 flex items-center justify-between text-navy font-medium text-sm transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex items-center">
        <img
          src="/logo/png/logo-no-background.png"
          className="w-36"
          alt="Logo"
        />
      </div>

      {user ? (
        <div className="flex-2 flex items-center justify-center border-2 border-orange-950 rounded-3xl">
          <div className="hidden mx-5 sm:block">
            <div className="flex space-x-4">
              <Link
                to="/browse"
                className="nav-lis rounded-md px-3 py-2 text-lg font-medium text-orange-400 hover:text-2xl"
                aria-current="page"
                onClick={resetSmartAssistClick}
              >
                Home
              </Link>
              <Link
                to="/movies"
                className="nav-lis rounded-md px-3 py-2 text-lg font-medium text-orange-400 hover:text-2xl"
                onClick={resetSmartAssistClick}
              >
                Movies
              </Link>
              <Link
                to="/"
                className="nav-lis rounded-md px-3 py-2 text-lg font-medium text-orange-400 hover:text-2xl"
              >
                TV Serials
              </Link>
              <button
                className="nav-lis group flex items-center space-x-2 rounded-md px-3 py-2 text-lg font-medium text-orange-400 transition duration-200 ease-in-out hover:text-2xl"
                onClick={handleSmartAssistantToggle}
              >
                <span className="">Smart Assistant</span>
              </button>
              <Link
                to="/searchbar"
                className="nav-lis group flex items-center space-x-2 rounded-md px-3 py-2 text-lg font-medium text-orange-400 transition duration-200 ease-in-out hover:text-2xl"
                onClick={resetSmartAssistClick}
              >
                <i className="fa-solid fa-magnifying-glass items-center"></i>
                <span className="">Search</span>
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      {user ? (
        <div className="flex items-center">
          <div className="flex relative ml-3 items-center">
            <div className="">
              <ThemeToggle />
            </div>

            <button
              type="button"
              className="flex-1 flex rounded-full mx-4 items-center bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <img
                className="h-8 w-8 rounded-full"
                src={userData.photoURL === null ? 'https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151134160.jpg' : userData.photoURL}
                alt="User"
              />
            </button>

            <button
              type="button"
              className="relative rounded-full items-center p-1 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              onClick={handleSignOut}
            >
              <span className="absolute -inset-1.5"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={30}
                height={30}
                color={"#FF8C00"}
                fill={"none"}
              >
                <path
                  d="M6 6.50006C4.15875 8.14802 3 10.3345 3 13C3 17.9706 7.02944 22 12 22C16.9706 22 21 17.9706 21 13C21 10.3345 19.8412 8.14802 18 6.50006"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2V11M12 2C11.2998 2 9.99153 3.9943 9.5 4.5M12 2C12.7002 2 14.0085 3.9943 14.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
