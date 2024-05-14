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
    return response;
  } catch (error) {
    console.error(error.response);
    return error.response;
  }
};
