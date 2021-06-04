const HeaderOption = ({ Icon, title, selected }) => {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4  hover:border-blue-500 hover:text-blue-500 pb-2 cursor-pointer ${
        selected ? "border-blue-500" : "border-transparent"
      } ${selected ? "text-blue-500" : "text-gray-500"}`}
    >
      <Icon className="h-6 sm:h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
};

export default HeaderOption;
