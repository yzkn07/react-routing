// import useAuth from './store/context'
// import './App.css'

// function App() {

//   const { name, setName} = useAuth();

//   console.log(name);

//   return (
//     <>
//       <input type='text' 
//       readOnly
//       value={name} 
//       onChange={e => setName(e.target.value)}
//       ></input>
//     </>
//   )
// }

// export default App


// Router

import { Link } from 'react-router-dom'
import './App.css'
function App() {

  return (
    <>
      <Link to='/home'>
                <button>Home</button>
      </Link>
    </>
  )
}
export default App