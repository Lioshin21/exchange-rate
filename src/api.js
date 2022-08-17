import axios from "axios";

export const getData = () => axios.get("https://v6.exchangerate-api.com/v6/c46d382153c6a5a2e5d3dce0/latest/USD").then(res => res.data)