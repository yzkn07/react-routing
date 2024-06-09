import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App';
import { Home } from './Home'

export const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' Component={App}></Route>
                    <Route path='/home' Component={Home}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}