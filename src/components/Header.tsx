import React, { useRef, RefObject } from 'react';
import CART from '../img/shopping-logo.png';
import { CartCount } from './CartCount';
import { Link } from 'react-router-dom';
import { Items } from '../App';

interface HeaderProps {
    items: Items;
    onCartClick: () => void;
}

const Header: React.FunctionComponent<HeaderProps> = ({
    items,
    onCartClick,
}) => {
    const handleMenuClick = () => {
        if (menuRef.current && headerRef.current) {
            menuRef.current.classList.toggle('active');
            headerRef.current.classList.toggle('active');
        }
    };

    const headerRef = useRef<HTMLHeadElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    return (
        <>
        <div id='menu' ref={menuRef}>
            <label htmlFor='search' id='search-container'>
                <input id='search' placeholder={`Search for what's in`} />
            </label>
            <ul>
                <li><Link onClick={handleMenuClick} to='/shop'>Shop</Link></li>
                <hr />
                <li><Link onClick={handleMenuClick} to='/*'>Legal</Link></li>
                <hr />
                <li><Link onClick={handleMenuClick} to='/*'>Media</Link></li>
                <hr />
                <li><Link onClick={handleMenuClick} to='/*'>Auction</Link></li>
                <hr />
                <li><Link onClick={handleMenuClick} to='/*'>About Esmé</Link></li>
                <hr />
                <li><Link onClick={handleMenuClick} to='/*'>Orphans Program</Link></li>
                <hr />
                <li><Link onClick={handleMenuClick} to='/*'>Contact</Link></li>
                <hr />
            </ul>
        </div>
        <header ref={headerRef}>
            <button id='hamburger' onClick={handleMenuClick}>
                <div className='bar' />
                <div className='bar' />
            </button>
          <h2><Link to='/'>In</Link></h2>
          <button id='cart' onClick={onCartClick}>
              <CartCount count={items.reduce((accum, currItem) => {
                  return accum + currItem.quantity;
              }, 0)}/>
                <img src={CART} alt='shopping cart' />
            </button>
        </header>
   </>
    );
}

export { Header }
