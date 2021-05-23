import React from 'react'
import Lb from 'react-image-lightbox';

export default function LightBox({ isOpen, images, photoIndex, setPhotoIndex, onCloseLightBox }) {
    return (
        isOpen && (
            <Lb
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={onCloseLightBox}
                onMovePrevRequest={() =>
                    setPhotoIndex(
                        (photoIndex + images.length - 1) % images.length
                    )
                }
                onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % images.length)
                }
            />
        )
    )
}
