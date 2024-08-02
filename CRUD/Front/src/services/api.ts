import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/",
});

export const login = async (email: string, password: string) => {
  try {
    const data = await api.post("login", {
      email,
      password,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const getBooks = async () => {
  try {
    const data = await api.get("books");
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const postBook = async (title: string, token: string) => {
  try {
    const data = await api.post(
      "book",
      { title },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getData = async (token: string) => {
  try {
    const data = await api.get("getData", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    return new Error("Token expired");
  }
};
