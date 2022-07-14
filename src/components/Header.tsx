import React, { useRef } from 'react';
import CART from '../img/shopping-logo.png';
import { CartCount } from './CartCount';
import { Link } from 'react-router-dom';

interface HeaderProps {

}

const Header: React.FunctionComponent<HeaderProps> = () => {
    const handleClick = () => {
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
                <li><Link onClick={handleClick} to='/shop'>Shop</Link></li>
                <hr />
                <li><Link onClick={handleClick} to='/*'>Legal</Link></li>
                <hr />
                <li><Link onClick={handleClick} to='/*'>Media</Link></li>
                <hr />
                <li><Link onClick={handleClick} to='/*'>Auction</Link></li>
                <hr />
                <li><Link onClick={handleClick} to='/*'>About Esmé</Link></li>
                <hr />
                <li><Link onClick={handleClick} to='/*'>Orphans Program</Link></li>
                <hr />
                <li><Link onClick={handleClick} to='/*'>Contact</Link></li>
                <hr />
            </ul>
        </div>
        <header ref={headerRef}>
            <button id='hamburger' onClick={handleClick}>
                <div className='bar' />
                <div className='bar' />
            </button>
          <h2><Link to='/'>In</Link></h2>
            <div id='cart'>
                <CartCount count={1}/>
                <img src={CART} alt='shopping cart' />
            </div>
        </header>
    </>
    );
}

export { Header }
