import axios from "axios";

export const registerAction = async ({ request }) => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  const nama = form.get("nama");
  const email = form.get("email");

  try {
    const register = await axios.post(`http://localhost:8080/auth/signup`, {
      username,
      password,
      nama,
      email,
    });

    return register;
  } catch (error) {
    console.error(`{Action Register Error} : ${data.message}`);
  }
};
