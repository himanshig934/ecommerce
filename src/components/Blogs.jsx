import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Blogs() {

    const [news, setNews] = useState([]);

    useEffect(() => {

        const api = 'http://localhost/himanshi-portfolio/wp-json/wp/v1/news';

        const fetchData = async () => {

            try {
                const res = await fetch(api);
                const data = await res.json();
                setNews(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, []);

    return (

        <div className='container max-w-7xl my-8 justify-center m-auto'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer">

                {news.map((item, index) => (
                    <div key={index.id} className="border border-[#dedede]">

                        <Link to={`${item.id}`}>
                            <div className="details py-6 px-4 mt-2 mb-6">
                                <h1 className="text-[18px] mt-2 text-orange-600">
                                    {item.title}
                                </h1>

                                <p>{item.date}</p>
                                <a href={item.link} target="_blank" className="text-blue-500 mt-2 block" >
                                    Read More
                                </a>
                            </div>
                        </Link>

                    </div>
                    
                ))}

            </div>
        </div>

    )
}
