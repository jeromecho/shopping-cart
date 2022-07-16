import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { Footer } from './Footer';
import { Item } from '../App';
import React from 'react';

export interface ItemProps {
    items: Array<Item>;
    searchByName: (name: string | undefined) => Item;
    onBuyClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ItemPage: React.FunctionComponent<ItemProps> = ({
    items,
    searchByName,
    onBuyClick
}) => {
    const { name } = useParams();

    return ( 
    <>
        <main id='item'>
            <div className='container'> 
                <h1>{name? name.toUpperCase() : 'Loading name...'}</h1>
                <div className='container'>
                    <img src={searchByName(name).img} />
                </div>
            </div>
            <div id='buttons-container'>
                <button onClick={onBuyClick} data-name={name}>ADD TO BAG</button>
                <button onClick={onBuyClick} data-name={name}>BUY IT NOW</button>
            </div>
       </main>
        <Footer />
    </>
);
}

export { ItemPage };
