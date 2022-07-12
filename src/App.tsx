import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Shop } from './components/Shop';
import { UnderConstruction } from './components/UnderConstruction';
import { Header } from './components/Header';

export interface AppProps {
    
}

const App: React.FunctionComponent<AppProps> = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/*' element={<UnderConstruction  />} />
            </Routes>
        </Router>
    );
}

export default App;
