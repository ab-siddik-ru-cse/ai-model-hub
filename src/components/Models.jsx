import React, { use } from 'react'
import ModelCard from './ModelCard';

const Models = ({ modelPromise, carts, setCarts }) => {
    const models = use(modelPromise);

    return (
        <div >
            <div className='text-center p-10'>
                <h1 className='text-5xl'>Choose Your AI Models</h1>
                <p className='text-2xl mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, corporis.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch mx-auto'>
                {models.map(model => <ModelCard
                    key={model.id}
                    model={model}
                    carts={carts} 
                    setCarts={setCarts}
                    ></ModelCard>)
                }
            </div>
        </div>
    )
}

export default Models
