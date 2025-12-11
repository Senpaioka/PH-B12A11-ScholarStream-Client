import { useState, useEffect } from "react";
import ScholarshipCard from "../../components/ScholarshipCard";
import SortSearchCard from "../../components/SortSearch";
import {
  getSortedScholarship,
  getSearchResult,
  getScholarshipsPaginated
} from "../../api/scholarship-manager";
import { motion } from "motion/react"



function AllScholarshipPage() {

  // PAGE STATE
  const [page, setPage] = useState(1);
  const limit = 5;

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


  if (loading) return;


    if (!Array.isArray(data) || data.length < 1) {
        return (
        <div className="w-10/12 mx-auto mt-[50px]">
            <div className="flex justify-center items-center">
            <div className="bg-base-100 p-6 text-center">
                <h2 className="text-lg font-bold text-gray-700">No items found</h2>
                <p className="text-gray-500 mt-2">
                Try again, nothing to see here!
                </p>
            </div>
            </div>
        </div>
        );
    }

  return (
    <div className="w-10/12 mx-auto my-[100px] space-y-5">
      <SortSearchCard
        sortBy={sortBy}
        search={search}
        onSortChange={handleSortChange}
        onSearch={handleSearch}
        />

      <div className="space-y-4">
        {data.map((item, index) => (
          <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
          <ScholarshipCard
            scholarship={item}
            key={item._id}/>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      {!sortBy && !search && (
        <div className="flex justify-center gap-3 mt-6">
          <button
            className="btn"
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Previous
          </button>

          <span className="btn btn-ghost">
            Page {page} of {totalPages}
          </span>

          <button
            className="btn"
            disabled={page === totalPages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default AllScholarshipPage;
