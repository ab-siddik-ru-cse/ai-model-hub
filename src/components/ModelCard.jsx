import React, { useState } from 'react'
import { toast } from 'react-toastify';

const ModelCard = ({ model, carts, setCarts }) => {
    const [isSubscribe, setIsSubscribe] = useState(false);
    const handleSubscribe = () => {
        setIsSubscribe(true);
        if (carts.find(item => item.id === model.id)) {
            toast.error('Item already in cart!');
            return;
        }
        setCarts([...carts, model]);
        toast.success('Item added successfully!');
    }

    return (
        <div >
            <div className="card bg-base-100 w-96 shadow-sm h-full">
                <figure className="px-10 pt-10">
                    <img
                        src={model.image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{model.title}</h2>
                    <p>{model.description}</p>
                    <div className="card-actions">
                        <button onClick={handleSubscribe}
                            className={`btn ${isSubscribe ? 'btn-success' : 'btn-info'}`}
                        >{isSubscribe ? 'Subscribed' : 'Subscribe Now'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModelCard
