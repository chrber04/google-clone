const SearchItem = (item) => {
  return (
    <div key={item.link} className="max-w-xl mb-8 space-y-1">
      <div className="group cursor-pointer">
        <a href={item.link} className="block text-sm">
          {item.formattedUrl}
        </a>
        <a href={item.link}>
          <h2 className="group-hover:underline truncate text-xl text-blue-800 font-medium">
            {item.title}
          </h2>
        </a>
      </div>
      <p className="line-clamp-2">{item.snippet}</p>
    </div>
  );
};

export default SearchItem;
