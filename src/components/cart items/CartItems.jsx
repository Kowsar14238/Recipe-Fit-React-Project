import React from 'react';

const CartItems = ({ item, onPreparing, isCooking }) => {
    // console.log(item);

    // Handle preparing button click
    const handlePreparing = () => {
        if (onPreparing) {
            onPreparing(item);
        }
    };

    return (
        <div className='flex flex-col justify-center text-center text-black gap-5 p-[3%]'>
            <div className='want-cook'>
                <div className='cart-info flex flex-row justify-between items-center'>
                    <h3>{item.title}</h3>
                    <h3>{item.time}</h3>
                    <h3>{item.calories}</h3>
                </div>
                
                {/* Conditionally render the button based on whether the item is currently cooking */}
                {!isCooking && (
                    <button className="btn btn-accent rounded-full" onClick={handlePreparing}>
                        Preparing
                    </button>
                )}
            </div>
        </div>
    );
};

export default CartItems;
