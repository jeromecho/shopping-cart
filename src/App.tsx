import React, { useState }from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Shop } from './components/Shop';
import { UnderConstruction } from './components/UnderConstruction';
import { Header } from './components/Header';
import { ItemPage } from './components/Item';
import COOKEDSALMON from './img/cooked-salmon.png';
import HARPOONGUN from './img/harpoon.png';
import RAWSALMON from './img/salmon.png';
import MARTINI from './img/martini.png';
import PARSLEY from './img/parsley.png';
import SUNOCULARS from './img/sunoculars.png';
import LETTUCE from './img/lettuce.png';
import CIGARETTES from './img/cigarettes.png';
import DARK from './img/dark.png';

export interface Items extends Array<Item> {

}

export interface Item {
    img: string;
    name: string; 
    cost: number;
    currency: string;
}

export interface AppProps {
    
}

const App: React.FunctionComponent<AppProps> = () => {
    const [ items, setItems ] = useState<Items>([
        {
            img: HARPOONGUN,
            name: 'Harpoon Gun',
            cost: 20.00,
            currency: 'USD',
        },
        {
            img: RAWSALMON,
            name: 'Stricken Salmon',
            cost: 110.00,
            currency: 'USD',
        },
        {
            img: MARTINI,
            name: 'Olive Martini',
            cost: 1799.00,
            currency: 'USD',
        },
        {
            img: PARSLEY,
            name: 'Parsley Soda',
            cost: 15.00,
            currency: 'USD',
        },
        {
            img: SUNOCULARS,
            name: 'Sunoculars',
            cost: 175.00,
            currency: 'USD',
        },
        {
            img: LETTUCE,
            name: 'Lettuce',
            cost: 280.00,
            currency: 'USD',
        },
        {
            img: CIGARETTES,
            name: 'Cigarettes',
            cost: 11.00,
            currency: 'USD',
        },
        {
            img: DARK, 
            name: 'Dark',
            cost: 1.00,
            currency: 'USD',
        },
    ]);


    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop items={items}/>} />
                <Route path='/*' element={<UnderConstruction  />} />
                <Route path='/shop/:name' element={<ItemPage items={items}/>} />
            </Routes>
        </Router>
    );
}

export default App;
