import React, { useRef } from 'react';
import { app, screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Home } from '../components/Home';
import App from '../App';
import { ShoppingCart } from '../components/ShoppingCart';

describe('header integration', () => {
    it('Toggle menu display with class active', () => {
        const mockHeaderProps = {
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
            onCartClick: jest.fn(),
        };
        render(
            <Router>
                <Header {
                    ... mockHeaderProps
                } />
                <Routes>
                    <Route path='/' element={
                        <Home />
                    } />
                </Routes>
            </Router>
        );

        expect(screen.getByTestId('menu').classList[0]).toBe(undefined);
        userEvent.click(screen.getAllByRole('button')[0]);
        expect(screen.getByTestId('menu').classList[0]).toBe('active');
    });
    
    it('Links to home', () => {
        const mockHeaderProps = {
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
            onCartClick: jest.fn(),
        };
        render(
            <Router>
                <Header {
                    ... mockHeaderProps
                } />
                <Routes>
                    <Route path='/' element={
                        <Home />
                    } />
                </Routes>
            </Router>
        );

        expect(screen.getByRole('link', {
            name: 'In'
        })).toHaveAttribute('href', '/');
    });

    it('Links to shop', () => {
        const mockHeaderProps = {
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
            onCartClick: jest.fn(),
        };
        render(
            <Router>
                <Header {
                    ... mockHeaderProps
                } />
                <Routes>
                    <Route path='/' element={
                        <Home />
                    } />
                </Routes>
            </Router>
        );

        expect(screen.getByRole('link', {
            name: 'Shop'
        })).toHaveAttribute('href', '/shop');
    });

    it('Toggles shopping cart display with class active', () => {
        render(
            <App />
        );

        expect(screen.getByTestId('shopping-cart').classList[0]).toBe(undefined);
        userEvent.click(screen.getByTestId('cart-button'));
        expect(screen.getByTestId('shopping-cart').classList[0]).toBe('active');
    });

    describe('shopping page integration', () => {
        it('Increments', () => {
            render(
                <App />
            );
            userEvent.click(screen.getByTestId('cart-button'));

            expect(screen.getByTestId('Lettuce-quantity').textContent).toBe('1');
            userEvent.click(screen.getByTestId('Lettuce-increment'));

            expect(screen.getByTestId('Lettuce-quantity').textContent).toBe('2');
        });

        it('Increments only clicked item', () => {
            render(
                <App />
            );
            userEvent.click(screen.getByTestId('cart-button'));

            expect(screen.getByTestId('Cigarettes-quantity').textContent).toBe('1');
            expect(screen.getByTestId('Lettuce-quantity').textContent).toBe('1');
            userEvent.click(screen.getByTestId('Lettuce-increment'));

            expect(screen.getByTestId('Lettuce-quantity').textContent).toBe('2');
            expect(screen.getByTestId('Cigarettes-quantity').textContent).toBe('1');
        });

        it('Decrements', () => {
             render(
                <App />
            );
            userEvent.click(screen.getByTestId('cart-button'));

            expect(screen.getByTestId('Lettuce-quantity').textContent).toBe('1');
            userEvent.click(screen.getByTestId('Lettuce-decrement'));

            expect(screen.getByTestId('Lettuce-quantity').textContent).toBe('0');
        });

        it('Does not decrement below 0', () => {
            render(
                <App />
            );
            userEvent.click(screen.getByTestId('cart-button'));

            expect(screen.getByTestId('Lettuce-quantity').textContent).toBe('1');
            userEvent.click(screen.getByTestId('Lettuce-decrement'));
            userEvent.click(screen.getByTestId('Lettuce-decrement'));

            expect(screen.getByTestId('Lettuce-quantity').textContent).toBe('0');
        });

        it('Decrements only clicked item', () => {
             render(
                <App />
            );
            userEvent.click(screen.getByTestId('cart-button'));

            expect(screen.getByTestId('Cigarettes-quantity').textContent).toBe('1');
            expect(screen.getByTestId('Lettuce-quantity').textContent).toBe('1');
            userEvent.click(screen.getByTestId('Lettuce-decrement'));

            expect(screen.getByTestId('Lettuce-quantity').textContent).toBe('0');
            expect(screen.getByTestId('Cigarettes-quantity').textContent).toBe('1');
        });

        it('Total happy path #1 - no items', () => {
             render(
                <App />
            );
            userEvent.click(screen.getByTestId('cart-button'));

            userEvent.click(screen.getByTestId('Lettuce-decrement'));
            userEvent.click(screen.getByTestId('Cigarettes-decrement'));

            expect(screen.getByTestId('total').textContent).toBe('$0 USD');
       });

        it('Total happy path #2 - some items', () => {
            render(
                <App />
            );
            userEvent.click(screen.getByTestId('cart-button'));

            expect(screen.getByTestId('total').textContent).toBe('$291 USD');
        });
    
        it('Checkout button does not toggle class active', () => {
             render(
                <App />
            );

            userEvent.click(screen.getByRole('button', {
                name: 'CHECKOUT',
            }));

            expect(screen.getByTestId('shopping-cart').classList[0])
                .toBe(undefined);
        });

        it('Back to shopping button toggles off class active', () => {
            render(
                <App />
            );
            userEvent.click(screen.getByTestId('cart-button'));

            userEvent.click(screen.getByRole('button', {
                name: 'BACK TO SHOPPING',
            }));

            expect(screen.getByTestId('shopping-cart').classList[0])
                .toBe(undefined);
        });
    });
});

describe('item page integration', () => {
    beforeAll(() => {

    });

    const cleanUp = () => {
        userEvent.click(screen.getByRole('link', {
            name: 'In',
        }));
    }

    it('Adds new item', () => {
        render (
            <App />
        );
        userEvent.click(screen.getByRole('link', {
            name: 'SHOP',
        }));
        userEvent.click(screen.getByTestId('Sunoculars'));

        userEvent.click(screen.getByRole('button', {
            name: 'ADD TO BAG',
        }));

        expect(screen.getByTestId('Sunoculars-quantity').textContent).toBe('1');
        cleanUp();
    });

    it('Adds different item', () => {
        render (
            <App />
        );
        userEvent.click(screen.getByRole('link', {
            name: 'SHOP',
        }));
        userEvent.click(screen.getByTestId('Dark'));

        userEvent.click(screen.getByRole('button', {
            name: 'ADD TO BAG',
        }));

        expect(screen.getByTestId('Dark-quantity').textContent).toBe('1');

        cleanUp();
    });

    it('Adding multiple of same item changes quantity', () => {
        render (
            <App />
        );
        userEvent.click(screen.getByRole('link', {
            name: 'SHOP',
        }));
        userEvent.click(screen.getByTestId('Dark'));

        userEvent.click(screen.getByRole('button', {
            name: 'ADD TO BAG',
        }));
        userEvent.click(screen.getByRole('button', {
            name: 'ADD TO BAG',
        }));

        expect(screen.getByTestId('Dark-quantity').textContent).toBe('2');

        cleanUp();
    });

    it('Adding multiple of same item does not add same item twice', () => {
        render (
            <App />
        );
        userEvent.click(screen.getByRole('link', {
            name: 'SHOP',
        }));
        userEvent.click(screen.getByTestId('Dark'));

        userEvent.click(screen.getByRole('button', {
            name: 'ADD TO BAG',
        }));
        userEvent.click(screen.getByRole('button', {
            name: 'ADD TO BAG',
        }));

        expect(screen.getByTestId('Dark-quantity').textContent).toBe('2');

        cleanUp();
    });
});



