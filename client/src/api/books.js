import api from "./axios.js";

export const getAllBooks = async()=>{
  
    const res = await api.get('/books');

    return res.data;
}

export const addBooks = async(data) =>{
    
    const res = await api.post('/book',data);
    return res.data;
}