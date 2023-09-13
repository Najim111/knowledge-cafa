
import { useState } from 'react'
import './App.css'
import Blogs from './component/Bloges/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handelToBooksmarks = blog => {
    const newBoolmarks=[...bookmarks, blog]
    setBookmarks(newBoolmarks)
   
    
  }

  return (
    <>

      <Header></Header>
      <div className='container m-auto md:flex'>
        <Blogs handelToBooksmarks={handelToBooksmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>

    </>
  )
}

export default App
