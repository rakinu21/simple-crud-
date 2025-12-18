import React from 'react'
import { useState } from 'react'
import '../styles/Create.scss'
import { useNavigate } from 'react-router-dom'
import { addBooks } from '../api/books'

export const CreateBook = () => {
    const [books ,setbooks] = useState({
        title :"",
        description:""
    })

    const HandeChange =(e)=>{
        setbooks((prev)=> ({...prev , [e.target.name] : e.target.value}) )
    }

    const navigate = useNavigate();

    const handleSubmit = async(e)=>{

        e.preventDefault();

        try {
            await addBooks(books);
            navigate('/')
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
    <div className='form-container'>

        <h1>add books</h1>

        <form action="" className='form'>

                <input type="text" placeholder='Title' name='title' className='title' onChange={HandeChange}/>

                <textarea name="description" className='description' placeholder='description' onChange={HandeChange}></textarea>

                <button onClick={handleSubmit}>submit</button>
        </form>

    </div>
  )
}
