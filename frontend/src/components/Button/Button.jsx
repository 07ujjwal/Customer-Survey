import './Button.css';

function Button({ onClick, children, disabled = false, type = "button", className = "" }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`custom-button ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;