import { GoPlay, GoPerson } from "react-icons/go";
import { LuGrid2X2 } from "react-icons/lu";
import { IoIosRadio } from "react-icons/io";
import { RiPlayListLine } from "react-icons/ri";
import { FiMusic } from "react-icons/fi";
import { TbMicrophone2 } from "react-icons/tb";
import { GiBookshelf } from "react-icons/gi";
import { JSX } from "react/jsx-runtime";

const Sidebar = () => {
  return (
    <div className="w-56 border-r p-3 h-[calc(100vh-48px)] mt-13 overflow-y-auto">
      <div className="flex flex-col gap-4">
        {/* Discover Section */}
        <div className="flex flex-col gap-1 mt-4">
          <h3 className="font-semibold text-sm">Discover</h3>
          <ul className="flex flex-col gap-2 list-none mt-2">
            <SidebarItem icon={<GoPlay />} text="Listen Now" />
            <SidebarItem icon={<LuGrid2X2 />} text="Browse" />
            <SidebarItem icon={<IoIosRadio />} text="Radio" />
          </ul>
        </div>

        {/* Library Section */}
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-sm">Library</h3>
          <ul className="flex flex-col gap-2 list-none mt-2">
            <SidebarItem icon={<RiPlayListLine />} text="Playlists" />
            <SidebarItem icon={<FiMusic />} text="Songs" />
            <SidebarItem icon={<GoPerson />} text="Made for You" />
            <SidebarItem icon={<TbMicrophone2 />} text="Artists" />
            <SidebarItem icon={<GiBookshelf />} text="Albums" />
          </ul>
        </div>

        {/* Playlists Section */}
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-sm">Playlists</h3>
          <ul className="flex flex-col gap-2 list-none mt-2">
            <SidebarItem icon={<RiPlayListLine />} text="Recently Added" />
            <SidebarItem icon={<RiPlayListLine />} text="Recently Played" />
            <SidebarItem icon={<RiPlayListLine />} text="Top Songs" />
            <SidebarItem icon={<RiPlayListLine />} text="Top Albums" />
            <SidebarItem icon={<RiPlayListLine />} text="Top Artists" />
          </ul>
        </div>
      </div>
    </div>
  );
};

// Reusable Sidebar Item Component
type SidebarItemProps = {
    icon: JSX.Element; // Ensures `icon` is a valid JSX element
    text: string; // Ensures `text` is a string
  };
  
  // Reusable Sidebar Item Component
  const SidebarItem = ({ icon, text }: SidebarItemProps) => {
    return (
      <li className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md">
        <div className="h-4 w-4">{icon}</div>
        <span className="text-sm font-medium">{text}</span>
      </li>
    );
  };

export default Sidebar;
