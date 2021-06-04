import { SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon, XIcon, ViewGridIcon } from "@heroicons/react/solid";
import Avatar from "../components/Avatar";
import HeaderOptions from "../components/HeaderOptions";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
const Header = ({ searchQuery }) => {
  const router = useRouter();
  const searchInputRef = useRef();

  const handleClearSearch = () => {
    searchInputRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = searchInputRef.current.value;
    if (!searchQuery || searchQuery.trim().length === 0) return;
    router.push(`/search?q=${searchQuery}`);
  };

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          alt="Google Icon"
          height={30}
          width={92}
          quality={100}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form
          className="flex flex-grow px-6 py-3 ml-10 mr-4 border border-gray-200 rounded-full shadow hover:shadow-lg max-w-2xl items-center"
          onSubmit={handleSubmit}
        >
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none outline-none"
            type="text"
          />
          <div className="flex">
            <XIcon
              className="h-5 sm:mr-4 text-gray-500 hover:scale-125 transition duration-100 transform cursor-pointer"
              onClick={handleClearSearch}
            />
            <MicrophoneIcon className="hidden sm:inline-flex h-5 pl-4 mr-4 text-blue-500 border-l-2 border-gray-400 cursor-pointer" />
            <SearchIcon className="hidden sm:inline-flex h-5 text-blue-500 cursor-pointer" />
            <button hidden type="submit"></button>
          </div>
        </form>

        <div className="hidden sm:flex space-x-4 ml-auto">
          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer text-gray-600" />

          {/* Avatar */}
          <Avatar url="https://i.imgur.com/Ls9edAT.jpg" />
        </div>
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
