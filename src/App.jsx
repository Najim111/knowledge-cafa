
import { useState } from 'react'
import './App.css'
import Blogs from './component/Bloges/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [read, setRead]=useState(0)

  const handelToBooksmarks = blog => {
    const newBoolmarks=[...bookmarks, blog]
    setBookmarks(newBoolmarks)
  }
  const handelToMarksRead = time =>{
    const newRead = read + time
    setRead(newRead)
  }

  return (
    <>

      <Header></Header>
      <div className='container m-auto md:flex'>
        <Blogs handelToBooksmarks={handelToBooksmarks}
        handelToMarksRead={handelToMarksRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} read={read}></Bookmarks>
      </div>

    </>
  )
}

export default App
