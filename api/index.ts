import axios from "axios";
const headers = {
  accept: "application/json",
  "Content-Type": "multipart/form-data",
};
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const request = async <DataType>(url: string, additionalBody?: any) => {
  let body = {
    user_device: "web",
    ...additionalBody,
  };
  for (const key in body) {
    if (Array.isArray(body[key]) && body[key].length === 0) {
      body[`${key}[]`] = "";
    }
  }

  const res = await axios.get<DataType>(apiUrl + url, {
    headers,
  });
  return res.data;
};
