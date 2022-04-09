import axios from "axios";

const API_URL = "https://admin.stresheniya.ru/api";

export const api = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const BLANK_STRING = "";
export const APP_NAME = "SR_PUBLIC";
