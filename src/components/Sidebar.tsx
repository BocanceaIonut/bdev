import React from "react";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  ComputerDesktopIcon,
  MegaphoneIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";

const linkStyles =
  "hover:text-white my-3 transform hover:scale-125 transition duration-300";
const selectedStyles = "text-white scale-125";
const deselectedStyles = "main-green-text";

type SidebarProps = {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
};

const Sidebar: React.FC<SidebarProps> = ({
  selectedIndex,
  setSelectedIndex,
}) => {
  const handleLinkClick = (id: string, index: number) => {
    setSelectedIndex(index);
    const targetSection = document.getElementById(id);
    targetSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-yellow-400 w-16  rounded-xl shadow-xl flex flex-col justify-evenly items-center py-5">
        {/* Home */}
        <a
          className={`${selectedIndex === 0 ? selectedStyles : deselectedStyles} ${linkStyles}`}
          onClick={() => handleLinkClick("section0", 0)}
        >
          <HomeIcon className="h-8 w-8" />
        </a>

        {/* User */}
        <a
          className={`${selectedIndex === 1 ? selectedStyles : deselectedStyles} ${linkStyles}`}
          onClick={() => handleLinkClick("section1", 1)}
        >
          <UserIcon className="h-8 w-8" />
        </a>

        {/* Briefcase */}
        <a
          className={`${selectedIndex === 2 ? selectedStyles : deselectedStyles} ${linkStyles}`}
          onClick={() => handleLinkClick("section2", 2)}
        >
          <BriefcaseIcon className="h-8 w-8" />
        </a>

        {/* Desktop */}
        <a
          className={`${selectedIndex === 3 ? selectedStyles : deselectedStyles} ${linkStyles}`}
          onClick={() => handleLinkClick("section3", 3)}
        >
          <ComputerDesktopIcon className="h-8 w-8" />
        </a>

        {/* Megaphone */}
        {/* <a
          className={`${selectedIndex === 4 ? selectedStyles : deselectedStyles} ${linkStyles}`}
          onClick={() => handleLinkClick("section4", 4)}
        >
          <MegaphoneIcon className="h-8 w-8" />
        </a> */}

        {/* Paper Airplane */}
        <a
          className={`${selectedIndex === 4 ? selectedStyles : deselectedStyles} ${linkStyles}`}
          onClick={() => handleLinkClick("section4", 4)}
        >
          <PaperAirplaneIcon className="h-8 w-8" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
