import { useState } from "react";
import "../styles/photo.css";

// Shows the image, or a soft placeholder until the file exists in /public/images
const Photo = ({ src, alt, label, shape = "rect", ratio = "4 / 5", eager = false, className = "" }) => {
  const [failed, setFailed] = useState(!src);

  return (
    <figure className={`photo photo--${shape} ${className}`} style={{ aspectRatio: ratio }}>
      {failed ? (
        <div className="photo__placeholder" role="img" aria-label={alt}>
          <span>{label}</span>
        </div>
      ) : (
        <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} onError={() => setFailed(true)} />
      )}
    </figure>
  );
};

export default Photo;
