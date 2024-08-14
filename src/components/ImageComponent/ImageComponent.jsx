import React from 'react';

const ImageComponent = ({
  src,
  width,
  height,
  className,
  figClassName,
  alt,
  layout,
  objectFit,
  blurEffect,
  priority,
  onClick,
  sizes,
  ...rest
}) => {
  return (
    <>
      <figure
        className={`relative leading-0 ${figClassName ? figClassName : ""}`}
      >
        <img
          src={src}
          width={width}
          height={height}
          className={className}
          placeholder={!blurEffect ? "empty" : "blur"}
          alt={alt ? alt : "Image"}
          layout={layout}
          objectFit={objectFit}
          priority={priority}
          {...rest}
          sizes={sizes}
          
        />
      </figure>
    </>
  );
};

export default ImageComponent;
