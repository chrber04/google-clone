import { GlobeIcon } from "@heroicons/react/outline";

const SearchFooter = () => {
  return (
    <footer className="static bottom-0 px-6 py-3 bg-gray-100 w-full flex flex-col justify-center space-y-3 text-gray-600 text-sm md:text-base">
      <div className="link border-b border-gray-300 pb-3">Sweden</div>
      <div className="flex justify justify-between ">
        <div className="flex space-x-8">
          <p className="link">About</p>
          <p className="link">Advertising</p>
          <p className="link">Business Solutions</p>
          <p className="link">How Search works</p>
        </div>
        <div className="inline-flex items-center">
          <GlobeIcon className="inline-block h-5 stroke-current text-green-500" />
          <p className="link ml-1">Carbon neutral since 2007</p>
        </div>
        <div className="flex space-x-8">
          <p className="link">Privacy</p>
          <p className="link">Terms</p>
          <p className="link">Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default SearchFooter;
