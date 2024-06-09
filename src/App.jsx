import useAuth from './store/context'
import './App.css'

function App() {

  const { name, setName} = useAuth();

  console.log(name);

  return (
    <>
      <input type='text' 
      // readOnly
      value={name} 
      onChange={e => setName(e.target.value)}
      ></input>
    </>
  )
}

export default App
