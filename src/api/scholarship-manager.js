import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_URL; 


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


export {createScholarship}