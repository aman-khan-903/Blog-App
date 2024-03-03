import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Blogs = () => {
    const {posts, loading}= useContext(AppContext); 

    

  return (
    <div>
      {loading ? (<h1>Loading...</h1>) : (posts.length===0 ? (<h1>No Posts Found</h1>) : 
      posts.map((post)=>{
        return <div key={post.id}>
          <p className='font-bold text-2xl'>{post.title}</p>
          <p>By <span>{post.author}</span>on <span>{post.category}</span></p>
          <p>Posted On {post.date}</p>
          <p>{post.content}</p>
          <div>
            {post.tags.map((tag, index)=>{
              return <span key={index}>#{tag} </span>
            })}
          </div>
        </div>
      })
      )}
    </div>
  )
}

export default Blogs