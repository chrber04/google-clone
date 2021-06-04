import {
  PhotographIcon,
  LocationMarkerIcon,
  PlayIcon,
  TagIcon,
  DotsVerticalIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { NewspaperIcon } from "@heroicons/react/solid";
import HeaderOption from "./HeaderOption";

const HeaderOptions = () => {
  return (
    <div className="flex max-w-2xl ml-8 sm:ml-16 md:ml-40 lg:ml-44">
      {/* Left */}
      <div className="flex w-full space-x-5 items-center">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={LocationMarkerIcon} title="Maps" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={TagIcon} title="Shopping" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>
      {/* Right */}
      <div className="flex  text-gray-500 ml-auto space-x-4 items-baseline mr-6">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
