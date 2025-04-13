import './App.css'
import MovieCard from './components/movieCard'
import Home from './pages/Home'

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
    <>
      <Home />
    </>
  )
}

export default App
