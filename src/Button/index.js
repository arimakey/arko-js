import "./index.css";

const Button = ({ text, size, disabled, onClick }) => (
  <button
    className={`button button--${size}`}
    disabled={disabled}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
