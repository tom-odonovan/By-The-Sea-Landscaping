const Picture = ({ avif, webp, src, alt, className }) => {
  return (
    <picture>
      <source srcSet={avif} type='image/avif' />
      <source srcSet={webp} type='image/webp' />
      <img
        src={src}
        alt={alt}
        className={className}
        loading='lazy'
        decoding='async'
      />
    </picture>
  );
}

export default Picture;