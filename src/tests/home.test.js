import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Home } from '../components/Home';
import { Shop } from '../components/Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

it('Click shop button to get to shop page', () => {
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
    render(
        <Router> 
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/shop' element={
                    <Shop
                    items={mockItems}
                />} />
            </Routes>
        </Router>
    );
    const button = screen.getByRole('link', { name: 'SHOP' });

    userEvent.click(button);

    const title = screen.getByRole('heading', {name: 'VERY IN'});
    expect(title.textContent).toBe('VERY IN');
});
    
