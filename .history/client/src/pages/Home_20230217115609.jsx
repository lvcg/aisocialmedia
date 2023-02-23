import React, { useState, useEffect } from 'react'; 

import { Loader, Card, FormField } from '../components';



const Home = () => {
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState([]);

  return (
    <section className="max-w-7xl mx-auto">
        <div>
            <h1 className="font-extrabold text-[#222328] text-[32px]">
                Social ShowCase
            </h1>
            <p></p>
        </div>
        
    </section>
  )
}

export default Home