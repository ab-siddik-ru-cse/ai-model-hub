import React from 'react'
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
    const total = carts.reduce((acc, cur) => acc + cur.price, 0);
    const handleDelete = (id) => {
        setCarts(carts.filter(item => item.id !== id))
        toast.error('Item deleted!')
    }
    const handlePayment = ()=>{
        setCarts([]);
        toast.success('Payment Successfull!!');
    }
    return (
        <div className='text-center m-10'>
            <h1 className='text-5xl font-bold'>Your Cart Items : </h1>


            {
                carts.length === 0 ? <div className='text-center border border-amber-950 shadow-md rounded-xl p-5 mt-10 w-1/2 mx-auto'>
                    <p className='text-xl font-bold'>Your Cart Is Empty!!!</p>

                </div> : <div>
                    {
                        carts.map(item => <div className='flex justify-between items-center border border-amber-950 shadow-md rounded-xl p-5 mt-10 w-1/2 mx-auto' key={item.id}>
                            <div>
                                <div className='flex items-center gap-10'>
                                    <img className='h-20 w-20' src={item.image} alt="" />
                                    <h2 className='text-3xl font-bold'>{item.title}</h2>

                                </div>
                                <p className='mt-5'>{item.description}</p>
                            </div>
                            <div className='flex items-center gap-10'>
                                <p className='text-xl font-bold'>{item.price}/month</p>
                                <button onClick={() => handleDelete(item.id)} className='btn btn-error rounded-full'>X</button>
                            </div>
                        </div>)
                    }
                    <div className='flex justify-between items-center border border-amber-950 shadow-md rounded-xl p-5 mt-10 w-1/2 mx-auto'>
                        <p className='text-xl font-bold'>Your Cart Total</p>
                        <p className='text-xl font-bold'>{total}/month</p>
                    </div>
                    <button onClick={handlePayment} className='btn btn-warning mt-10'>Proceed to checkout</button>
                </div>
            }

        </div>
    )
}

export default Cart
