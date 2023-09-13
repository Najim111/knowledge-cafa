import PropTypes from 'prop-types';
const Blog = ({ pBlog }) => {
    console.log(pBlog)
    return (
        <div>

        </div>
    );
};


Blog.propTypes={
    pBlog:PropTypes.object.isRequired

}


export default Blog;