import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handelToBooksmarks, handelToMarksRead}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold">Blogs : {blogs.length}</h2>
            {
                blogs.map(blog =><Blog
                    handelToBooksmarks={handelToBooksmarks} 
                    handelToMarksRead={handelToMarksRead}
                    key={blog.id}
                    pBlog={blog}></Blog>)

            }

        </div>
    );
};
Blogs.propTypes={
    handelToBooksmarks:PropTypes.func.isRequired,
    handelToMarksRead:PropTypes.func.isRequired
}

export default Blogs;