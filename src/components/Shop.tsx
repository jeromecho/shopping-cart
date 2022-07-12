import React, { useState } from 'react';
import { Footer } from './Footer';
import COOKEDSALMON from '../img/cooked-salmon.png';
import HARPOONGUN from '../img/harpoon.png';
import RAWSALMON from '../img/salmon.png';
import MARTINI from '../img/martini.png';
import PARSLEY from '../img/parsley.png';
import SUNOCULARS from '../img/sunoculars.png';
import LETTUCE from '../img/lettuce.png';
import CIGARETTES from '../img/cigarettes.png';
import DARK from '../img/dark.png';

export interface ShopProps {
    
}

export interface Items extends Array<Item> {

}

export interface Item {
    img: string;
    name: string; 
    cost: number;
    currency: string;
}

const Shop: React.FunctionComponent<ShopProps> = ({

}) => {
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
            name: 'Harpoon Gun',
            cost: 1.00,
            currency: 'USD',
        },
    ]);

    return (
        <>
            <main id='shop'>
                <div id='title-content'>
                    <div id='title-container'>
                        <h2>VERY IN</h2>
                        <p>The latest fashion, food, and weapons, one click away</p>
                    </div>
               </div>
                <div id='img-container'>
                    <img src={COOKEDSALMON} />
                </div>
                <div id='filter'>
                    <div className='container'>
                        <button>All Items</button>
                        <hr />
                    </div>
                    <div className='container'>
                        <button>Food</button>
                        <hr />
                    </div>
                    <div className='container'>
                        <button>Weapons</button>
                        <hr />
                    </div>
                </div>
                <div id='gallery'>
                    {
                        items.map(item => (
                        <div className='item'>
                            <img src={item.img} />
                            <h4>{item.name}</h4>
                            <p>{`$${item.cost.toString()} ${item.currency}`}</p>
                            <button>
                                More
                            </button>
                        </div>
                    ))
                    }
                </div>
            </main>
            <Footer />
        </>
    );
}

export { Shop }



