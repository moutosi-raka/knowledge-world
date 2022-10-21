
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layouts/Main/Main';
import QuizDetails from './components/QuizDetails/QuizDetails';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Login></Login>
        },
        {
          path: 'home',
          loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: 'signUp',
          element: <SignUp></SignUp>
        },

        {
          path: 'home/quiz/:id',
          loader: async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <QuizDetails></QuizDetails>
        }
      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
    
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
