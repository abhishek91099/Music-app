import SearchIcon from "@mui/icons-material/Search";

export const Searchbar = () => {
  return (
    <div className="flex bg-purple-950 text-purple-50 justify-between items-center h-8 w-1/2">
      <input
        type="Text"
        placeholder="Search"
        className="bg-transparent outline-none w-full"
      />
      <span>
        <SearchIcon />
      </span>
    </div>
  );
};
