

function SortSearchCard({ sortBy, search, onSortChange, onSearch }) {
  return (
    <div className="bg-base-100 shadow-lg rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 my-12">

      <div className="flex flex-col md:flex-row items-center gap-3 w-full sm:w-auto">
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="select select-bordered w-full sm:w-48"
        >
          <option value="">All Scholarships</option>
          <option value="scholarshipCategory">Scholarship Category</option>
          <option value="universityWorldRank">University Rank</option>
          <option value="degree">Degree</option>
          <option value="tuitionFees">Tuition Fees</option>
        </select>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(e.target.search.value);
        }}
        className="flex items-center gap-2 w-full sm:w-auto"
      >
        <input
          type="text"
          name="search"
          placeholder="Search property..."
          className="input input-bordered w-full sm:w-64"
          defaultValue={search}
        />
        <button
          type="submit"
          className="btn btn-primary border-none text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
}


export default SortSearchCard;