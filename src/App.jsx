import { useState } from 'react'
import PostList from './components/post-list'
import './App.css'


function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <h2 className='title'>
        My Posts
      </h2>
      <PostList />   
    </div>
  )
}

export default App
