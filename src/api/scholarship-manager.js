import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_URL; 



// create scholarship
async function createScholarship(user, data, role) {
  
    if (!user) return;
    const token = await user.getIdToken();

    if (role !== "admin") {
        throw new Error("Only admins can publish scholarships.");
    }

    try {
        const response = await axios.post(`${BASE_URL}/create-scholarship`, 
            {
                ...data
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            }
        );

        return response.data;
    } 
    catch(error) {
        console.error("Error publishing scholarship:", error);
        throw new Error("Something Went Wrong");
    }

}


// get sorted scholarship
async function getSortedScholarship(sortBy) {
  try {
    const response = await axios.get(`${BASE_URL}/filtered?sort=${sortBy}`);
    return response.data;

  } catch (error) {
    console.error("Sorting failed.", error);
    throw new Error("Failed to load sorted scholarships"); 
  }
}


// get search scholarship
async function getSearchResult(query) {
    try {
        const response = await axios.get(`${BASE_URL}/searched?q=${query}`);
        return response.data;

    } catch (error) {
        console.error("Search failed", error);
        throw new Error("Failed to load searched scholarships"); 
    }
}


// pagination
async function getScholarshipsPaginated(page = 1, limit = 10) {
  try {
    const res = await axios.get(`${BASE_URL}/scholarships?page=${page}&limit=${limit}`);
    return res.data;
  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch paginated data");
  }
}


// scholarship details
async function getScholarshipDetails(user, scholarshipId) {

    try {
        const response = await axios.get(`${BASE_URL}/scholarship-details/${scholarshipId}`,
            {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                }
            }
        );
        return response.data;
    
    } catch(error) {
        console.error("Error loading scholarship details.", error);
        throw new Error('Failed to load scholarship details.');
    } 
}

export {createScholarship, getSortedScholarship, getSearchResult, getScholarshipsPaginated, getScholarshipDetails}