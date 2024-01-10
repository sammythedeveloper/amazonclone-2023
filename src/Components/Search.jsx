import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-yellow-500 rounded">
        <select className=" w-[60px] h-10 p-2 bg-gray-200 text-black border text-xs xl:text-sm rounded-l ">
          <option>All</option>
          <option>Appliances</option>
          <option>Beauty and Personal Care</option>
          <option>Books</option>
          <option>Clothing,shoe and jewlery</option>
          <option>Computers</option>
          <option>Digitals</option>
          <option>Electronics</option>
        </select>
        <input
          className="flex grow items-center h-[100%] rounded text-black"
          placeholder="Search Amazon"
          type="text"
        />
        <button className="w-[45px]">
          <SearchIcon className="h-[27px] m-auto fill-current text-black" />
        </button>
      </div>
    </div>
  );
};

export default Search;
