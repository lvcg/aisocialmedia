// This is a functional component that will be used to display the cards in the app
import React from 'react'

import { download } from '../assets'
import { downloadImage } from '../utils'

const Card = ( _id, name, prompt, photo ) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img 
        className="w-full h-auto "
      />
    </div>
  )
}

export default Card