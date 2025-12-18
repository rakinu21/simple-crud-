
import './App.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import { Books } from './pages/Books'
import { CreateBook } from './pages/CreateBook'
import { Update } from './pages/Update'
import { SingleBook } from './pages/SingleBook'


const router = createBrowserRouter (

  [
  {
  path:"/",
  element: <Books/>
  },

 {
  path:"/create",
  element: <CreateBook/>
  },

    {
  path:"/book/:id",
  element: <Update/>
  },

    {
  path:"/single/:id",
  element: <SingleBook/>
  }
  
  ]
  
)

function App() {
 

  return (
      <div className="app">
          <RouterProvider router={router}/>
      </div>
  )
}

export default App
