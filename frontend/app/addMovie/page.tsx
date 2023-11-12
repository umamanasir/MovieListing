import React from 'react'

const page = () => {
  return (
   <form className='form'>
    <input className='formMovieName' 
    type="text" placeholder='Movie Name'/>
 
    <input className='formMovieName' 
    type="text" placeholder='Director Name'/>

    <input className='formMovieName' 
    type="text" placeholder='Producer Name'/>

    <input className='formMovieName' 
    type="text" placeholder='Rating'/>

    <button className='submitMovie'>
        Add New Movie
    </button>
    </form>
  )
}

export default page