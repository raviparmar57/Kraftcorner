import React from 'react'

export function HeroSliderCard({ image, name }) {
    return (
        <div>
            <img src={image} alt={name} />
        </div >
    )
}
