import React from 'react';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Shop } from '../components/Shop';
import { ItemPage } from '../components/Item';
import { Home } from '../components/Home';

// Get to shop page from home
const setUp = () => {
    const mockItems = [
        {
            img: 'URL',
            name: 'Harpoon Gun',
            cost: 20.00,
            currency: 'USD',
            quantity: 1,
        },
        {
            img: 'URL',
            name: 'Stricken Salmon',
            cost: 110.00,
            currency: 'USD',
            quantity: 1,
        },
        {
            img: 'URL',
            name: 'Olive Martini',
            cost: 1799.00,
            currency: 'USD',
            quantity: 1,
        },
    ];

    const mockItemPageProps = {
        items: [
            {
                img: 'URL',
                name: 'Harpoon Gun',
                cost: 20.00,
                currency: 'USD',
                quantity: 1,
            },
            {
                img: 'URL',
                name: 'Stricken Salmon',
                cost: 110.00,
                currency: 'USD',
                quantity: 1,
            },
        ],
        searchByName: jest.fn((name) => 'mock-url'),
        onBuyClick: jest.fn(),
    }

    render(
        <Router> 
            <Shop items={mockItems} />
        </Router>
    );
};

it('Link for item exists', async () => {
    setUp();
    expect(screen.getByTestId('Harpoon Gun')).toHaveAttribute('href', '/shop/Harpoon Gun');
});

it('Link for item is unique - does not point to same item', () => {
    setUp();
    expect(screen.getByTestId('Olive Martini')).toHaveAttribute('href', '/shop/Olive Martini');
});

it('Click link to get to item page', () => {
    const mockItems = [
        {
            img: 'URL',
            name: 'Harpoon Gun',
            cost: 20.00,
            currency: 'USD',
            quantity: 1,
        },
        {
            img: 'URL',
            name: 'Stricken Salmon',
            cost: 110.00,
            currency: 'USD',
            quantity: 1,
        },
        {
            img: 'URL',
            name: 'Olive Martini',
            cost: 1799.00,
            currency: 'USD',
            quantity: 1,
        },
    ];
    const mockItemPageProps = {
        items: [
            {
                img: 'URL',
                name: 'Harpoon Gun',
                cost: 20.00,
                currency: 'USD',
                quantity: 1, }, {
                img: 'URL',
                name: 'Stricken Salmon',
                cost: 110.00,
                currency: 'USD',
                quantity: 1,
            },
        ],
        searchByName: jest.fn((name) => 'mock-url'),
        onBuyClick: jest.fn(),
    };
    render(
        <Router> 
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/shop' element={ <Shop items={mockItems} /> } />
                <Route path='/shop/:name' element={ 
                    <ItemPage {... mockItemPageProps} />} />
            </Routes>
        </Router>
    );
    userEvent.click(screen.getByRole('link', { name: 'SHOP' }));

    userEvent.click(screen.getByTestId('Harpoon Gun'));

    expect(screen.getByRole('heading').textContent).toMatch(/Harpoon Gun/i);
});





