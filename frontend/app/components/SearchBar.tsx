import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <form>
      <div>
        <input type="text" name="artwork" id="search_artwork" />
        <button type="submit">
          <FaSearch />
        </button>
      </div>
    </form>
  );
}
