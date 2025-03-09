import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

StarRating.propTypes = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  onChange: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  messages: PropTypes.array,
};
export default function StarRating({
  maxRating = 5,
  defaultRating = 0,
  onChange = (rating) => console.log(rating),
  size = 48,
  color = "yellow",
  className,
  messages = [],
}) {
  const [selectedRating, setSelectedRating] = useState(defaultRating);
  const [hoverRating, setHoverRating] = useState(0);

  function handleRatingClick(rating) {
    setSelectedRating(rating);
    onChange(rating);
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <div style={{ display: "flex" }}>
        {[...Array(maxRating)].map((_, i) => (
          <span
            key={i}
            style={{
              color: i <= hoverRating ? "yellow" : "#00fff",
              fontSize: "40px",
            }}
            onMouseEnter={(e) => {
              setHoverRating(i + 1);
            }}
            onMouseLeave={(e) => {
              setHoverRating(0);
            }}
            onClick={(e) => {
              handleRatingClick(i + 1);
            }}
            // onMouseLeave={(e) => ()}
          >
            <Star
              selected={
                hoverRating ? i <= hoverRating - 1 : i <= selectedRating - 1
              }
              size={size}
              color={color}
              className={className}
            />
          </span>
        ))}
      </div>

      <span
        style={{
          fontSize: `${size / 1.5}px`,
          margin: 0,
          color: color,
        }}
      >
        {messages.length >= maxRating
          ? messages[hoverRating ? hoverRating - 1 : selectedRating]
          : hoverRating > selectedRating
          ? hoverRating
          : selectedRating || ""}
      </span>
    </div>
  );
}

function Star({ selected = false, size, color }) {
  return (
    <span
      style={{
        display: "block",
        width: `${size}px`,
        height: `${size}px`,
        cursor: "pointer",
      }}
      role="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={selected ? color : "#00fff"}
        stroke={color}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </span>
  );
}
