import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import  { preview } from '../assets'
import { getRandomPrompt } from '../utils'; 
import { FormField, Loader } from  '../components';


const CreatePost = () => {
  const navigate = useNavigate();
  const [form, serForm] = useState({
    name: '',
    prompt: '',
    photo
  })

  return (
    <div>CreatePost</div>
  )
}

export default CreatePost