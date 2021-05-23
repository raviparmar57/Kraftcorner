import React from 'react'

export default function InfoCard({ title, description }) {
    return (
        <div className="w-full lg:w-1/3 flex flex-col justify-center items-center bg-primary py-5 px-2 space-y-2">
            <h6 className="font-bold text-xl">{title}</h6>
            <p className="text-center">{description}</p>
        </div>
    )
}
