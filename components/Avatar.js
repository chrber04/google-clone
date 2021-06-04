import Image from "next/image";

const Avatar = ({ url, alt, dimension }) => {
  return (
    <img
      loading="lazy"
      src={url}
      alt="Profile Picture"
      className="h-10 w-10 cursor-pointer rounded-full border border-gray-300 ring-gray-700 shadow"
    />
  );
};

export default Avatar;
