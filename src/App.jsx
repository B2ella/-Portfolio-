import { useState, useEffect } from 'react'
import './App.css'
import HomePage from './Components/Home/Home'
import Preloader from './Components/Preloader/Preloader'
import Projects from './Components/Projects'
import Loading from './Components/Loader/Loading'
import Mission from './Components/Mission/Mission'
import Layout from './Components/Layout/Layout'
import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from "react-router-dom";

import AboutMe from './Components/AboutMe/AboutMe'
import Circles from './Components/Projects/circles'
import TheSamePage from './Components/Projects/thesamepage'
import Icebreaker from './Components/Projects/Icebreaker'
import Cursor from './Components/Cursor/Cursor'
function App() {
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // return loading ? <Loading/> : <Layout><Cursor/><Component {...pageProps} /></Layout>
  return loading ? <Loading/> : (
  <div className="App">
 
<Cursor/>
<Layout>

<Router>
 <Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/aboutMe' element={<AboutMe/>}/>
  <Route path='/projects' element={<Projects/>}/>
  <Route path='/projects/circles' element={<Circles/>}/>
  <Route path='/projects/icebreaker' element={<Icebreaker/>}/>
  <Route path='/projects/thesamepage' element={<TheSamePage/>}/>
 </Routes>
</Router>
</Layout>
  </div>
 )
 }

export default App

// return loading ? <Loading/> : (
//   <div className="App">
 

// <Preloader/>

// <Router>
//  <Routes>
//   <Route path='/' element={<HomePage/>}/>
//   <Route path='/aboutMe' element={<AboutMe/>}/>
//   <Route path='/projects' element={<Projects/>}/>
//   <Route path='/projects/circles' element={<Circles/>}/>
//   <Route path='/projects/icebreaker' element={<Icebreaker/>}/>
//   <Route path='/projects/thesamepage' element={<TheSamePage/>}/>
//  </Routes>
// </Router>

//   </div>
// )
// }
