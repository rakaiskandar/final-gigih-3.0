import { Route, Routes } from "react-router-dom"
import Home from "./page/app/Home"
import DetailVideos from "./page/app/videos/DetailVideos"
import Search from "./page/app/videos/Search"
import NotFound from "./page/app/NotFound";

function App() {

  return (
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="channels/:id" element={<DetailVideos />}/>
          <Route path="search" element={<Search />}/>
          <Route path="*" element={<NotFound />}/>
      </Routes>
  )
}

export default App
