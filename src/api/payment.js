import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_URL;

// create payment session
async function makePayment(user, info) {
  if (!user) return;

  const token = await user.getIdToken();

  try {
    const response = await axios.post(`${BASE_URL}/payment-checkout-session`,
      info,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data; // the entire checkout session object
  } catch (error) {
    console.error(
      "Payment Error:",
      error.response?.data || error.message
    );
    throw new Error("Something went wrong while creating payment");
  }
}



// saving payment session
async function savePayment(user, info) {
  if (!user) return;

  const token = await user.getIdToken();

  try {
    const response = await axios.post(`${BASE_URL}/save-payment-session`,
      info,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data; // the entire checkout session object
  } catch (error) {
    console.error(
      "Payment Error:",
      error.response?.data || error.message
    );
    throw new Error("Something went wrong while creating payment");
  }
}


export { makePayment, savePayment };
