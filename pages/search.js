import Head from "next/head";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import SearchFooter from "../components/SearchFooter";
const SearchPage = ({ searchQuery, searchResults }) => {
  return (
    <div>
      <Head>
        <title>{searchQuery} - Search on Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Search results */}
      <SearchResults results={searchResults} />
      <SearchFooter />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const query = context.query.q;
  const queryIndex = +context.query.start > 0 ? context.query.start : 0;
  const startIndex = queryIndex || "0";

  const API_KEY = process.env.GOOGLE_SEARCH_API_KEY;
  const CONTEXT_KEY = process.env.GOOGLE_CSE_CONTEXT_KEY;

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}&start=${startIndex}`
  );
  const data = await response.json();
  return {
    props: {
      searchQuery: query,
      searchResults: data,
    },
  };
};

export default SearchPage;
