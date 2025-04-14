import './css/App.css'
import MovieCard from './components/movieCard'
import Favorite from './pages/Favorites'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'

// function App() {
  

//   return (
//     // '<>...</>' is a Fragment... used for using more than one parent div
//     <> 
//       {/* {movieNumber === 1 ? (<MovieCard movie={{title: "Intersteller", release_date: "2014"}}/>
//       ) 
//       : (<MovieCard movie={{title: "Batman", release_date: "2022"}}/>

//       )} */}
//     </>
//   )
// }

// // (For study basis)
// // function Text({display}){ // Props using {}
// //   return (
// //     <div>
// //       <p>{display}</p>
// //     </div>
// //   )
// // }

function App(){
  return (
    <div>
      <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorite/>}/>
      </Routes>
    </main>
    </div>
  )
}

export default App
