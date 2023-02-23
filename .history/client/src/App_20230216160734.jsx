import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { logo } from './assets'
import { Home, CreatePost } from './pages'



const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 border-b-[#e6ebf4]">
        <Link></Link>
      </header>
    </BrowserRouter>
  )
}

export default App
