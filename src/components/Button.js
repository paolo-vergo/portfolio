import React from 'react';

function Button({ href, onClick, children, className, target, rel, ariaLabel }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  // If href is provided, we render an anchor tag, else we render a button
  const content = href ? (
    <a href={href} onClick={handleClick} className={`button ${className}`} target={target} rel={rel} aria-label={ariaLabel}>
      {children}
    </a>
  ) : (
    <button className={`button ${className}`} onClick={handleClick} aria-label={ariaLabel}>
      {children}
    </button>
  );

  return content;
}

export default Button;
