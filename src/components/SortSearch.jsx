
function SortSearchCard({ sortBy, search, onSortChange, onSearch }) {
  return (
    <div className="bg-base-100 shadow-xl rounded-2xl p-6 border border-base-300">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Left Side - Sort Options */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path>
              </svg>
            </div>
            <span className="font-medium text-gray-700">Sort by:</span>
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="select select-bordered select-primary w-full sm:w-56 focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">All Scholarships</option>
            <option value="scholarshipCategory">Scholarship Category</option>
            <option value="universityWorldRank">University Rank</option>
            <option value="degree">Degree</option>
            <option value="tuitionFees">Tuition Fees</option>
          </select>
        </div>

        {/* Right Side - Search */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(e.target.search.value);
          }}
          className="flex items-center gap-3 w-full lg:w-auto"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-secondary/10 rounded-lg">
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <span className="font-medium text-gray-700 hidden sm:block">Search:</span>
          </div>
          
          <div className="flex gap-2">
            <input
              type="text"
              name="search"
              placeholder="Search scholarships, universities, countries..."
              className="input input-bordered input-primary w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-primary/20"
              defaultValue={search}
            />
            <button
              type="submit"
              className="btn btn-primary px-6 hover:shadow-lg transition-all duration-200"
            >
              <svg className="w-4 h-4 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </form>
      </div>

      {/* Active Filters Display */}
      {(sortBy || search) && (
        <div className="mt-4 pt-4 border-t border-base-300">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-600">Active filters:</span>
            
            {sortBy && (
              <div className="badge badge-primary badge-lg gap-2">
                Sort: {sortBy.replace(/([A-Z])/g, ' $1').toLowerCase()}
                <button 
                  onClick={() => onSortChange("")}
                  className="hover:bg-primary-focus rounded-full p-0.5"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            )}
            
            {search && (
              <div className="badge badge-secondary badge-lg gap-2">
                Search: "{search}"
                <button 
                  onClick={() => onSearch("")}
                  className="hover:bg-secondary-focus rounded-full p-0.5"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


export default SortSearchCard;