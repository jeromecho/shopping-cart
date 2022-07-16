import React, { useState, useRef, RefObject }from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Shop } from './components/Shop';
import { UnderConstruction } from './components/UnderConstruction';
import { Header } from './components/Header';
import { ItemPage } from './components/Item';
import { ShoppingCart } from './components/ShoppingCart';
import COOKEDSALMON from './img/cooked-salmon.png';
import HARPOONGUN from './img/harpoon.png';
import RAWSALMON from './img/salmon.png';
import MARTINI from './img/martini.png';
import PARSLEY from './img/parsley.png';
import SUNOCULARS from './img/sunoculars.png';
import LETTUCE from './img/lettuce.png';
import CIGARETTES from './img/cigarettes.png';
import DARK from './img/dark.png';

export interface Items extends Array<Item> { }

export interface Item {
    img: string;
    name: string; 
    cost: number;
    currency: string;
    quantity: number;
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
            quantity: 1,
        },
        {
            img: RAWSALMON,
            name: 'Stricken Salmon',
            cost: 110.00,
            currency: 'USD',
            quantity: 1,
        },
        {
            img: MARTINI,
            name: 'Olive Martini',
            cost: 1799.00,
            currency: 'USD',
            quantity: 1,
        },
        {
            img: PARSLEY,
            name: 'Parsley Soda',
            cost: 15.00,
            currency: 'USD',
            quantity: 1,
        },
        {
            img: SUNOCULARS,
            name: 'Sunoculars',
            cost: 175.00,
            currency: 'USD',
            quantity: 1,
        },
        {
            img: LETTUCE,
            name: 'Lettuce',
            cost: 280.00,
            currency: 'USD',
            quantity: 1,
        },
        {
            img: CIGARETTES,
            name: 'Cigarettes',
            cost: 11.00,
            currency: 'USD',
            quantity: 1,
        },
        {
            img: DARK, 
            name: 'Dark',
            cost: 1.00,
            currency: 'USD',
            quantity: 1,
        },
    ]);

    const [cartItems, setCartItems] = useState<Items>([
        {
            img: LETTUCE,
            name: 'Lettuce',
            cost: 280.00,
            currency: 'USD',
            quantity: 1,
        },
        {
            img: CIGARETTES,
            name: 'Cigarettes',
            cost: 11.00,
            currency: 'USD',
            quantity: 1,
        },
 
    ]);

    function searchItemsByName(name: string | undefined): Item {
        let result = {
            img: 'NO FIND',
            name: '',
            cost: 0,
            currency: 'USD',
            quantity: 0,
        }
        items.forEach(item => {
            if (item.name === name) {
                result = item;
            }
        });
        return Object.assign({}, result);
    }

    function searchCartItemsByName(name: string | undefined): Item {
        let result = {
            img: 'NO FIND',
            name: '',
            cost: 0,
            currency: 'USD',
            quantity: 0,
        }
        cartItems.forEach(item => {
            if (item.name === name) {
                result = item;
            }
        });
        return Object.assign({}, result);
    }

    function handleIncrementClick(e: React.MouseEvent<HTMLButtonElement>) {
        const target = searchCartItemsByName(e.currentTarget.dataset.name);
        target.quantity = target.quantity + 1;
        setCartItems(updateItem(target, [... cartItems]));
    }

    function handleDecrementClick(e: React.MouseEvent<HTMLButtonElement>) {
        const target = searchCartItemsByName(e.currentTarget.dataset.name);
        if (target.quantity > 0) {
            target.quantity = target.quantity - 1;
        }
        setCartItems(updateItem(target, [... cartItems]));
    }

    function handleBuyClick(e: React.MouseEvent<HTMLButtonElement>) : void {
        const searchResult = searchCartItemsByName(e.currentTarget.dataset.name);
        if (searchResult.img === 'NO FIND') {
            setCartItems([... cartItems, searchItemsByName(e.currentTarget.dataset.name)]);
        } else {
            searchResult.quantity = searchResult.quantity + 1;
            setCartItems(updateItem(searchResult, [... cartItems]));
        }
    }

    function updateItem(result: Item, items: Items): Items {
        let itemIndex = 0;
        items.forEach((item, index) => {
            if (item.img === result.img) {
                itemIndex = index;
                items.splice(itemIndex, 1, result);
                return items;
            } 
        });
        return items;
    }

    const handleShoppingClick = () => {
        if (!!shoppingCartRef.current) {
            shoppingCartRef.current.classList.toggle('active');
        }
    }

    const shoppingCartRef = useRef<HTMLDivElement>(null);

    const ItemPageProps = {
        items: cartItems,
        searchByName: searchItemsByName,
        onBuyClick: handleBuyClick,
    }

    const ShoppingCartProps = {
        items:cartItems,
        onDecrementClick: handleDecrementClick,
        onIncrementClick: handleIncrementClick,
        onShoppingClick: handleShoppingClick,
        ref: shoppingCartRef,
    }

    const HeaderProps = {
        items: cartItems,
        onCartClick: handleShoppingClick,
    }

    return (
        <Router>
            <Header {...HeaderProps}/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop items={items}/>} />
                <Route path='/*' element={<UnderConstruction  />} />
                <Route path='/shop/:name' element={<ItemPage 
                        {...ItemPageProps}/>} />
            </Routes>
            <ShoppingCart
                {...ShoppingCartProps}
           />
        </Router>
    );
}

export default App;
