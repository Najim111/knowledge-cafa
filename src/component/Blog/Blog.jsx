import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ pBlog, handelToBooksmarks, handelToMarksRead }) => {
    // console.log(pBlog)
    const{title,cover, author_img, author, post_data,reading_time,hashtags }=pBlog;
    return (
        <div className='mb-5 space-y-4'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img className='w-14 h-14 mr-4  rounded-full' src={author_img} alt="" />
                    <div>
                        <h1>{author}</h1>
                        <p>{post_data}</p>
                    </div>

                </div>
                <div className='flex items-center'>
                    <p>{reading_time} min read</p>
                    <button 
                    onClick={()=>handelToBooksmarks(pBlog)}
                    className='ml-2 text-cyan-600'>
                        <FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1>{title}</h1>
            <p>
                {
                    hashtags.map((hash,idx) =><span className='mr-2' key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button  onClick={()=>handelToMarksRead(reading_time)}
             className=' text-purple-600 underline' 
           >Mark as read</button>
        </div>
    );
};


Blog.propTypes={
    pBlog:PropTypes.object.isRequired,
    handelToBooksmarks:PropTypes.func.isRequired,
    handelToMarksRead: PropTypes.func.isRequired
}



export default Blog;