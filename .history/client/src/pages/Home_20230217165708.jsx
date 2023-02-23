import React, { useState, useEffect } from 'react'; 

import { Loader, Card, FormField } from '../components';



const Home = () => {
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState([]);

    const [searchText, setSearchText] = useState('');

  return (
    <section className="max-w-7xl mx-auto">
        <div>
            <h1 className="font-extrabold text-[#222328] text-[32px]">
                Social ShowCase
            </h1>
            <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
                Browse  through the latest posts from the community & Dall-E Ai
            </p>
        </div>
        <div className="mt-16">
            <FormField />
        </div>

        <div className="mt-10">
            { loading ? (
                <div className="flex justify-center items-center">
                    <Loader />
                </div>
            ) : (
                <>
                { searchText && (
                    <h2 className="font-medium text-[#666e75] text-xl mb-3">
                        Showing results for <span className="text-[#222328]">{}</span>
                    </h2>

                )}
                </>
            )
        }
        </div>
    </section>
  )
}

export default Home