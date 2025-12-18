import api from "./axios.js";

export const getAllBooks = async()=>{
  
    const res = await api.get('/books');

    return res.data;
}

export const addBooks = async(data) =>{
    
    const res = await api.post('/book',data);
    return res.data;
}

export const DeletePost = async(id) =>{
    
    const res = await api.delete(`/book/${id}`);

    return res.data;
}

export const UpdatePost = async(id , data)=>{

      const res = await api.put(`/book/${id}`, data);
      return res.data;
}