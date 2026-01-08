import { useState, useEffect } from "react";
import ScholarshipCard from "../../components/ScholarshipCard";
import SortSearchCard from "../../components/SortSearch";
import {
  getSortedScholarship,
  getSearchResult,
  getScholarshipsPaginated
} from "../../api/scholarship-manager";
import { motion } from "motion/react"
import Spinner from "../../components/Spinner";



function AllScholarshipPage() {

  // PAGE STATE
  const [page, setPage] = useState(1);
  const limit = 6; // Increased for better grid layout

  // DATA STATE
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  // SORT & SEARCH
  const [sortBy, setSortBy] = useState("");
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSortChange = (value) => setSortBy(value);
  const handleSearch = (term) => setSearch(term);

  useEffect(() => {
    document.title = "All Scholarships | ScholarStream";
  }, []);

  useEffect(() => {
  async function fetchData() {
    setLoading(true);

    try {
      let result;

      // 1. SEARCH HAS HIGHEST PRIORITY
      if (search) {
        result = await getSearchResult(search);
        setData(Array.isArray(result) ? result : []);
        return;
      }

      // 2. SORTING HAS SECOND PRIORITY
      if (sortBy) {
        result = await getSortedScholarship(sortBy);
        setData(Array.isArray(result) ? result : []);
        return;
      }

      // 3. PAGINATION (DEFAULT / NO SEARCH + NO SORT)
      result = await getScholarshipsPaginated(page, limit);
      setData(result.data);
      setTotalPages(result.totalPages);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  fetchData();
}, [search, sortBy, page]);


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }


    if (!Array.isArray(data) || data.length < 1) {
        return (
        <div className="min-h-screen bg-base-100">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">All Scholarships</h1>
              <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                Discover thousands of scholarship opportunities from universities worldwide
              </p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="max-w-7xl mx-auto px-4 -mt-8">
            <SortSearchCard
              sortBy={sortBy}
              search={search}
              onSortChange={handleSortChange}
              onSearch={handleSearch}
            />
          </div>

          {/* No Results */}
          <div className="max-w-7xl mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-base-200 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-base-content mb-2">No Scholarships Found</h2>
              <p className="text-base-content/60 mb-6">
                Try adjusting your search criteria or browse all available scholarships
              </p>
              <button 
                onClick={() => {
                  setSortBy("");
                  setSearch("");
                }}
                className="btn btn-primary"
              >
                View All Scholarships
              </button>
            </motion.div>
          </div>
        </div>
        );
    }

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Scholarships</h1>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Discover thousands of scholarship opportunities from universities worldwide
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <div className="badge badge-outline badge-lg">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
                {data.length} Scholarships Available
              </div>
              <div className="badge badge-outline badge-lg">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"></path>
                </svg>
                Global Universities
              </div>
              <div className="badge badge-outline badge-lg">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                Quick Application
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SortSearchCard
            sortBy={sortBy}
            search={search}
            onSortChange={handleSortChange}
            onSearch={handleSearch}
          />
        </motion.div>
      </div>

      {/* Results Summary */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-semibold">
              {search ? `Search Results for "${search}"` : 
               sortBy ? `Sorted by ${sortBy.replace(/([A-Z])/g, ' $1').toLowerCase()}` : 
               'All Scholarships'}
            </h2>
            <p className="text-base-content/70 mt-1">
              {data.length} scholarship{data.length !== 1 ? 's' : ''} found
            </p>
          </div>
          
          {(search || sortBy) && (
            <button 
              onClick={() => {
                setSortBy("");
                setSearch("");
                setPage(1);
              }}
              className="btn btn-ghost btn-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Scholarships Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ScholarshipCard scholarship={item} />
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        {!sortBy && !search && totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-16"
          >
            {/* Previous Button */}
            <button
              className="btn btn-outline"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Previous
            </button>

            {/* Page Numbers */}
            <div className="flex gap-1 items-center">
              {(() => {
                const pages = [];
                const maxVisible = 5;
                
                if (totalPages <= maxVisible) {
                  // Show all pages if total is small
                  for (let i = 1; i <= totalPages; i++) {
                    pages.push(
                      <button
                        key={i}
                        className={`btn btn-sm ${page === i ? 'btn-primary' : 'btn-ghost'}`}
                        onClick={() => setPage(i)}
                      >
                        {i}
                      </button>
                    );
                  }
                } else {
                  // Complex pagination for many pages
                  const showFirst = page > 3;
                  const showLast = page < totalPages - 2;
                  
                  // Always show first page
                  if (showFirst) {
                    pages.push(
                      <button
                        key={1}
                        className={`btn btn-sm ${page === 1 ? 'btn-primary' : 'btn-ghost'}`}
                        onClick={() => setPage(1)}
                      >
                        1
                      </button>
                    );
                    
                    if (page > 4) {
                      pages.push(
                        <span key="ellipsis-start" className="px-2 text-base-content/50">...</span>
                      );
                    }
                  }
                  
                  // Show pages around current page
                  const start = Math.max(1, page - 1);
                  const end = Math.min(totalPages, page + 1);
                  
                  for (let i = start; i <= end; i++) {
                    pages.push(
                      <button
                        key={i}
                        className={`btn btn-sm ${page === i ? 'btn-primary' : 'btn-ghost'}`}
                        onClick={() => setPage(i)}
                      >
                        {i}
                      </button>
                    );
                  }
                  
                  // Always show last page
                  if (showLast) {
                    if (page < totalPages - 3) {
                      pages.push(
                        <span key="ellipsis-end" className="px-2 text-base-content/50">...</span>
                      );
                    }
                    
                    pages.push(
                      <button
                        key={totalPages}
                        className={`btn btn-sm ${page === totalPages ? 'btn-primary' : 'btn-ghost'}`}
                        onClick={() => setPage(totalPages)}
                      >
                        {totalPages}
                      </button>
                    );
                  }
                }
                
                return pages;
              })()}
            </div>

            {/* Next Button */}
            <button
              className="btn btn-outline"
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              Next
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            
            {/* Page Info */}
            <div className="text-sm text-base-content/70">
              Page {page} of {totalPages}
            </div>
          </motion.div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-base-content/70 mb-8 max-w-2xl mx-auto">
              Our scholarship database is constantly updated. Create an account to get personalized recommendations and notifications about new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary btn-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5zM4 19h5v-5H4v5zM13 3H4v5h9V3z"></path>
                </svg>
                Get Personalized Matches
              </button>
              <button className="btn btn-outline btn-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5z"></path>
                </svg>
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AllScholarshipPage;
