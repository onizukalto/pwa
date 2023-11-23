import './App.css';
import MovieList from './movie/MovieList';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import MovieDetails from './movie/MovieDetails';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <MovieList />, 
  },
  {
    path: "/movieList", 
    element: <MovieList />,
  },
  {
    path: "/movie/:id", 
    element: <MovieDetails  />, 
  },
]);

function App() {
  return(
    <RouterProvider router={router}/>
  );
}

export default App;

