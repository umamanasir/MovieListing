import React from 'react'
import {HiOutlineTrash} from "react-icons/hi";

const DeleteBtn = () => {
  return (
    <button className='deleteBtn'>
        <HiOutlineTrash size = {20}></HiOutlineTrash>
    </button>
  )
}

export default DeleteBtn