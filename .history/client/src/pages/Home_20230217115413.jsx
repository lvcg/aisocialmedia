import React, { useState, useEffect } from 'react'; 

import { Loader, Card, FormField } from '../components';



const Home = () => {
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState([]);

  return (
    <section className="max-w-7xl mx-auto">
        <div>
            <h1 className=>
                Social ShowCase
            </h1>
        </div>
        
    </section>
  )
}

export default Home