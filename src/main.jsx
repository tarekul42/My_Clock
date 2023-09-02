import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import Watch from './components/Watch/Watch'
import Alarm from './components/Alarm/Alarm'
import StopWatch from './components/StopWatch/StopWatch'
import Timer from './components/Timer/Timer'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/watch",
        element: <Watch></Watch>
      },
      {
        path: '/alarm',
        element: <Alarm></Alarm>
      },
      {
        path: '/stopwatch',
        element: <StopWatch></StopWatch>
      },
      {
        path: '/timer',
        element: <Timer></Timer>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
