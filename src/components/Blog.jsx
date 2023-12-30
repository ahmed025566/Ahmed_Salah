import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import star from '../assets/star-2.png'
import image1 from '../assets/post image1.png'
import image2 from '../assets/post2.jpg'
import image3 from '../assets/post3.jpg'
import image4 from '../assets/post4.jpg'
import Footer from './Home-components/Footer'

const Blog = () => {
  const [postIndex, setPostIndex] = useState(1);
  const [post, setPost] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [comments, setComments] = useState([]);
  const [hashes, setHashes] = useState([]);
  
  const images = {1: image1, 2: image2, 3: image3, 4: image4};

  const name = useRef();
  const email = useRef();
  const comment = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/comments", {
      commentBody: comment.current.value,
      name: name.current.value,
      email: email.current.value,
      post_id: postIndex
    }).then(res => console.log(res.data)).catch(err => err.message)
  }

  useEffect(() => {
    const fetchPost = async () => {
      try {
            const response = await axios.get(`http://localhost:3000/posts/${postIndex}`);
            setPost(response.data.post)
            setCategory(response.data.category)
            let date = new Date(post.created_at)
            let year = date.getFullYear(), day = date.getDay();
            setDate(`December ${day}, ${year}`);
            setComments(response.data.comments)
            setHashes(response.data.post.hashes.split(','))
        } catch (error) {
            console.error('Error fetching blog post:', error);
        }
    }

    fetchPost()
  },[postIndex])

  return (
    <>
      <p className='intro'>{category} - {post.title}</p>
      <h1 className='postTitle'>
        <img src={star} alt="star" />
        {post.title}
        <img src={star} alt="star" />
      </h1>
      <img src={images[postIndex]} alt="post image" className='post_image' />
      <div className='recent_posts'>
        <p className='recent_posts_header'>Recent Posts</p>
        <p className='post_link' onClick={() => setPostIndex(2)} style={{color: postIndex == 2 ? 'white' : '', fontSize: postIndex == 2 ? "20px" : ""}}>The Evolution of Frontend Development</p>
        <p className='post_link' onClick={() => setPostIndex(3)} style={{color: postIndex == 3 ? 'white' : '', fontSize: postIndex == 3 ? "20px" : ""}}>The Power of Progressive Web Apps</p>
        <p className='post_link' onClick={() => setPostIndex(4)} style={{border: 'none', color: postIndex == 4 ? 'white' : '', fontSize: postIndex == 4 ? "17px" : ""}}>The Role of Artificial Intelligence in Modern Web Development</p>
      </div>
      <p className='date'>{date} - {category}</p>
      <p className='post_body'>{post.text}</p>
      <div className='recent_comments'>
        <p className='recent_comments_header'>Recent Comments</p>
        {comments.length === 0 ?
         <p className='noComments'>No comments to show.</p>
         :
         <div className='commentsDiv'>

         </div>
        }
      </div>
      <div className='archives'>
        <p className='archives_header'>ARCHIVES</p>
        <p className='datePara'>December 2023</p>
      </div>
      <div className='category'>
        <p className='category_header'>Category</p>
        <p className='category_para'>{category}</p>
      </div>
      <div className='hashes'>
        {hashes.map((item, index) => (
          <div key={index} className='hash'>{item}</div>
        ))}
      </div>
      <form className='commentForm' onSubmit={handleSubmit}>
        <h2 className='commentsCounter'>{comments.length}{' '}Comments</h2>
        <p className='leaveComment'>Leave a Comment</p>
        <textarea placeholder='Your Messgae' ref={comment} required rows={7} maxLength={1000} className='comment' />
        <input type="text" placeholder='Name' ref={name} required className='commentorName' />
        <input type="email" placeholder='Email' ref={email} className='email' />
        <button type="submit"  required className='snedMessage'>Send Message</button>
      </form>
      <Footer />
    </>
  )
}

export default Blog