import React from 'react'

export function TestimonialSliderCard({ description, name }) {
    return (
        <div>
            <p className="mb-8">{description}</p>
            <h1 className="font-bold uppercase">{name}</h1>
        </div>
    )
}
