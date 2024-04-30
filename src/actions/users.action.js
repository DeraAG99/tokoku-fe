import axios from "axios";

export const registerAction = async ({ request }) => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  const nama = form.get("nama");
  const email = form.get("email");

  try {
    const data = { username, password, nama, email };
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/signup`,
      data
    );
    if (response.status === 200 || response.status === 201) {
      return { success: true, message: "Registration successful!" };
    } else {
      // Handle unexpected success codes (optional)
      console.warn(`Unexpected success status code: ${response.status}`);
      return {
        error: true,
        message: "Registration might have failed (unexpected response)",
      };
    }
  } catch (error) {
    // Handle registration errors gracefully and return appropriate response
    console.error("Registration Error:", error);

    if (error.response) {
      // If there's a response object, extract error details
      const { status, data } = error.response;
      console.error(`Error Status: ${status}`);
      console.error("Error Message:", data?.message); // Access error message from response if available

      return {
        error: true,
        message: data?.message || "Registration failed", // Provide default message if none found
        status, // Include error status code for further handling
      };
    } else {
      // Handle network or other non-response errors
      console.error("Network Error:", error);
      return {
        error: true,
        message: "Network error occurred. Please try again later.",
      };
    }
  }
};
