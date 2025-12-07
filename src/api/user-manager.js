import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_URL; 


async function createUser(user) {
  
    if (!user) return;

    const token = await user.getIdToken();
    const provider = user.providerData[0];

    try {
        const response = await axios.post(`${BASE_URL}/registration`, 
            {
                uid: user.uid ?? null,
                name: provider.displayName,
                email: provider.email || user.email,
                photo: provider.photoURL || user.photoURL || null,
                providerId: provider.providerId ?? null,
                emailVerified: user.emailVerified ?? false,
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
        console.error("Error registering or logging in user:", error);
        throw new Error("Something Went Wrong");
    }

}


export {createUser}