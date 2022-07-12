import React from "react"

export interface CartCountProps {
    count: number;
}

const CartCount: React.FunctionComponent<CartCountProps> = ({
    count
}) => {
    return (
        <>
            {!!count && 
            <div id='cart-count'>
                <div id='count'>
                    <p>{count}</p>
                </div>
                <div id='triangle'>
                    <div className='bar' />
                    <div className='bar' />
                </div>
            </div>
            }
        </>
    );
}

export { CartCount };


