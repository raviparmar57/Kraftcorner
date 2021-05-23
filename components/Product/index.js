import React from 'react'

export default function Product({ proudctImage, name, price, onOpenModal, onClickView }) {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="m-2 shadow">
                <div className="h-60">
                    <img src={proudctImage[0]} alt={name} className="w-full h-full" />
                </div>
                <div className="flex flex-col justify-center items-center space-y-2 p-4 text-gray-50">
                    <div className="font-bold text-lg text-center mb-4">
                        {name}
                    </div>
                    <div className="font-bold mb-4">
                        Rs. {price}
                    </div>
                    <div className="flex justify-between w-full space-x-4 pt-4">
                        <button className="bg-primary w-full font-bold p-4 uppercase text-xs md:text-sm" onClick={() => onOpenModal({ proudctImage, name, price })}>Order Now</button>
                        <button className="bg-gray-50 text-white w-full font-bold p-4 uppercase text-xs md:text-sm" onClick={() => onClickView({ proudctImage, name, price })}>View</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
