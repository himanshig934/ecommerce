import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Single() {


  const { id } = useParams(); 
  const [post, setPost] = useState(null);

  useEffect(() => {
    const api = `http://localhost/himanshi-portfolio/wp-json/wp/v1/news/${id}`;

    const fetchPost = async () => {
      try {
        const res = await fetch(api);
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
    
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container max-w-4xl m-auto py-10">
      <h1 className="text-2xl font-bold text-orange-600">
        {post.title}
      </h1>

      <p className="text-gray-500 mt-2">{post.date}</p>

      <div className="mt-6">
        {post.content}
      </div>
    </div>
  );

}
