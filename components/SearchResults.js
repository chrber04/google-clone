import SearchItem from "../components/SearchItem";
import PaginationButtons from "../components/PaginationButtons";

const SearchResults = ({ results }) => {
  const searchInformation = results.searchInformation;
  const searchItems = results.items;
  return (
    <div className="px-8 sm:ml-8 md:ml-32 lg:ml-36">
      <p className="text-gray-500 text mb-5 mt-3 text-sm">
        About {searchInformation.formattedTotalResults} results (
        {searchInformation.formattedSearchTime} seconds)
      </p>
      {searchItems?.map((item) => {
        return <SearchItem key={item.link} {...item} />;
      })}
      <PaginationButtons />
    </div>
  );
};

export default SearchResults;
