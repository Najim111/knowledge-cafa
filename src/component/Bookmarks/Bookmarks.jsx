import PropTypes from 'prop-types';
import Bookmark from './Bookmark';
const Bookmarks = ({bookmarks,read}) => {
    // console.log(bookmarks)
    return (
        <div className="md:w-1/3 bg-slate-400 rounded-xl ml-4 mt-2 ">
           <div>
           <h3 className='text-4xl'>Spen time on read: {read}  </h3>
           </div>
            <h2 className="text-2xl text-center">Bookmarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.object.isRequired,
    read:PropTypes.object.isRequired
}

export default Bookmarks;