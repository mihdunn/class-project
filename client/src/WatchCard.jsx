import React from 'react';

const WatchCard = ({ watch, addToCart }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className=" h-45 card border-none rounded-lg shadow-md overflow-hidden">
                <img src={watch.image} className="h-35 w-full object-cover" alt={watch.title} />
                <div className="card-body p-4 text-center">
                    <h5 className="text-lg font-semibold mb-2">{watch.title}</h5>
                    <p className="text-md text-gray-700 mb-4">{watch.price}</p>
                    <button 
                        className="btn btn-success bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                        onClick={() => addToCart(watch.title, watch.price)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WatchCard;
