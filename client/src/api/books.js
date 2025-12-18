import api from "./axios.js";

export const getAllBooks = async()=>{
  
    const res = await api.get('/books');

    return res.data;
}