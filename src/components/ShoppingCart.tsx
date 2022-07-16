import React, { useState, useEffect, useRef, forwardRef, RefObject }from 'react';
import { Items } from '../App';

export interface ShoppingCartProps {
    items: Items;
    onIncrementClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onDecrementClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onShoppingClick: () => void;
    ref: RefObject<HTMLDivElement>;
}

// prett sure forwardRef only works for FC so below implictly type checks for 
// ShoppingCart to be React.FC
const ShoppingCart = forwardRef<HTMLDivElement, ShoppingCartProps>(({
    items,
    onIncrementClick, 
    onDecrementClick,
    onShoppingClick,
}, ref) => {

    // Force re-render & update ref
    const [ dummy, setDummy ] = useState<string>('');
    useEffect(() => {
        setDummy('dummy');
    }, []);

    return (
        <>
        <div id='shopping-cart' ref={ref}>
            <h1>{!!items.length ?
                'Your Shopping Bag' :
                'Your Shopping Bag is Empty'}
            </h1>
            <hr />
            <div className ='container'>
            {
                items.map(item => (
                    <div className='item' key={item.name}>
                        <div className='left'>
                            <img src={item.img} />
                        </div>
                        <div className='right'>
                            <div className='left'>
                                <h3>{item.name}</h3>
                                <p className='description'>*Limited edition</p>
                                <p className='cost'>{`$${item.cost} ${item.currency}`}</p>
                            </div>
                           <div className='counter'>
                               <button className='decrement' data-name={item.name} onClick={onDecrementClick}>
                                    -
                                </button>
                                <div className='count-display' >
                                    <p>{item.quantity}</p>
                                </div>
                                <button className='increment' data-name={item.name} onClick={onIncrementClick}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                )) 
            }
           </div>
           <hr />
           <div id='total'>
               <h3>TOTAL</h3>
               <p>{`$${items.reduce((accum, currItem) => (
                   accum + currItem.cost * currItem.quantity), 0)} USD`}
               </p>
           </div>
           <hr />
           <button className='checkout'>CHECKOUT</button>
           <button className='back-to-shopping' onClick={onShoppingClick}>BACK TO SHOPPING</button>
       </div>
       <div id='shopping-bag-overlay' / >
       </>
   );
});

export { ShoppingCart };
