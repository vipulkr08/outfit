import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2FhZjdlYzc1ZGIzZTQyZTQyNWQ3OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5ODM4ODQ3MywiZXhwIjoxNjk4NjQ3NjczfQ.wSIyM_CxNlQC7gJstHACt2d9DGmqNaLNGcTgLhRTEiE";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
