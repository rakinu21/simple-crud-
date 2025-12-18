import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UpdatePost } from '../api/books'

export const Update = () => {

        const [books ,setbooks] = useState({
        title :"",
        description:""
    })

    const {id} = useParams()

    const HandeChange =(e)=>{
        setbooks((prev)=> ({...prev , [e.target.name] : e.target.value}) )
    }

    const navigate = useNavigate();

    const handleSubmit = async(e)=>{

        e.preventDefault();

        try {
            await UpdatePost(id , books)
            navigate('/')
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
  
        <div className='form-container'>

        <h1>edit post</h1>

        <form action="" className='form'>

                <input type="text" placeholder='Title' name='title' className='title' onChange={HandeChange}/>

                <textarea name="description" className='description' placeholder='description' onChange={HandeChange}></textarea>

                <button onClick={handleSubmit}>submit</button>
        </form>

    </div>
  )
}
