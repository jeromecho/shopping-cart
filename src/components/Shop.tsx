import React, { useState } from 'react';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { Item } from '../App';
import uniqid from 'uniqid';
import COOKEDSALMON from '../img/cooked-salmon.png';

export interface ShopProps {
    items: Array<Item>;
}

const Shop: React.FunctionComponent<ShopProps> = ({
    items
}) => {
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
                        <div className='bar' />
                    </div>
                    <div className='container'>
                        <button>Food</button>
                        <div className='bar' />
                    </div>
                    <div className='container'>
                        <button>Weapons</button>
                        <div className='bar' />
                    </div>
                </div>
                <div id='gallery'>
                    {
                        items.map(item => (
                            <Link to={`/shop/${item.name}`} key={uniqid()}> 
                                <div className='item'>
                                    <img src={item.img} />
                                    <div className='container'>
                                        <h4>{item.name}</h4>
                                        <p>{`$${item.cost.toString()}.00 ${item.currency}`}</p>
                                        <button>
                                            MORE
                                        </button>
                                    </div>
                                </div>
                            </Link>
                    ))
                    }
                </div>
            </main>
            <Footer />
        </>
    );
}

export { Shop }



