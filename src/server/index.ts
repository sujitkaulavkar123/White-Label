import axios from "axios";

async function fetchUserList(pageNumber: number) {
  try {
    const result = await axios.get(`https://dummyjson.com/products?limit=10&skip=${10 * pageNumber}`);
    return result?.data?.products;
  } catch (error) {
    return "Something went wrong"
  }
}

export {
  fetchUserList
}
