import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get("https://v6.exchangerate-api.com/v6/c46d382153c6a5a2e5d3dce0/latest/USD")
    return response.data.conversion_rates
  } catch (error) {
    throw Error (error.message)
  }
}