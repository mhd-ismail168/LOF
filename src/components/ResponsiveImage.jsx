import React from 'react';

const ResponsiveImage = ({ image, className, sizes = "100vw", loading = "lazy", ...props }) => {
    if (!image) return null;

    const { src, srcSet, alt } = image;

    return (
        <picture>
            <source type="image/avif" srcSet={srcSet.avif} sizes={sizes} />
            <source type="image/webp" srcSet={srcSet.webp} sizes={sizes} />
            <img
                src={src}
                alt={alt}
                className={className}
                loading={loading}
                sizes={sizes}
                {...props}
            />
        </picture>
    );
};

export default ResponsiveImage;
