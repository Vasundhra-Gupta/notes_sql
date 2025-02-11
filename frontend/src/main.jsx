import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Home, Form, Note } from "./pages";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Home/>}/>
            <Route path="note/:id" element={<Note/>}/>
            <Route path="form" element={<Form/>}/>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
