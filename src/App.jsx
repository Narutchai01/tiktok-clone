import './App.css'
import CardVedio from './components/CardVedio'
import { useState } from 'react'

function App() {


  const [videos ,setVideos] = useState([
    {
      id: 1,
      video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      song : "gime gime love",
      name : "sahil",
      likes: 10,
      comments: 5,
      shares: 2,
      bookmark: 1,
      likesActive: false,
    },
    {
      id: 2,
      video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      song : "gime gime love",
      likes: 10,
      comments: 5,
      shares: 2,
      bookmark: 1,
      name : "sahil",
      likesActive: false,
      bookmarkActive: false,
    },
    {
      id: 3,
      video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      likes: 10,
      comments: 5,
      shares: 2,
      bookmark: 1,
      song : "gime gime love",
      name : "sahil",
      likesActive: false,
      bookmarkActive: false,
    },
    {
      id: 4,
      video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      likes: 10,
      comments: 5,
      shares: 2,
      bookmark: 1,
      song : "gime gime love",
      name : "sahil",
      likesActive: false,
      bookmarkActive: false,
    },
  ])

  return (
    <>
     <CardVedio videos={videos} setVideos={setVideos}/> 
    </>
  )
}

export default App
