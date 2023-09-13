
import './App.css'
import Blogs from './component/Bloges/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {

  return (
    <>

      <Header></Header>
      <div className='container m-auto md:flex'>
        <Blogs></Blogs> 
        <Bookmarks></Bookmarks>
      </div>

    </>
  )
}

export default App
