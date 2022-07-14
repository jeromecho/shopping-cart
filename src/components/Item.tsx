import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { Footer } from './Footer';
import { Item } from '../App';
import React from 'react';

export interface ItemProps {
    items: Array<Item>;
}

const ItemPage: React.FunctionComponent<ItemProps> = ({
    items
}) => {
    function searchByName(name: string | undefined): string {
        let img = '';
        items.forEach(item => {
            if (item.name === name) {
                img = item.img;
            }
        });
        return img;
    }

    const { name } = useParams();

    return ( 
    <>
        <main id='item'>
            <div className='container'> 
                <h1>{name? name.toUpperCase() : 'Loading name...'}</h1>
                <div className='container'>
                    <img src={searchByName(name)} />
                </div>
            </div>
            <button>ADD TO BAG</button>
            <button>BUY IT NOW</button>
        </main>
        <Footer />
    </>
);
}

export { ItemPage };
