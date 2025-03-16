import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Button = ({
    onClick,
    onHover,
    className,
    type = 'primary',
    size = 'medium',
    children,
    disabled = false,
}) => {
    const typeClasses = {
        primary: 'button-primary',
        secondary: 'button-secondary',
        danger: 'button-danger',
        outlined: 'button-outlined',
        transparent: 'button-transparent',
        invisible: 'button-invisible',
    };

    const sizeClasses = {
        small: 'button-small',
        medium: 'button-medium',
        large: 'button-large',
    };

    const finalClassName = className
        ? className
        : `button ${typeClasses[type]} ${sizeClasses[size]} ${disabled ? 'button-disabled' : ''}`.trim();

    return (
        <button
            className={finalClassName}
            onClick={onClick}
            onMouseEnter={onHover}
            disabled={disabled}
        >
            {children || 'Button'}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    onHover: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.oneOf([
        'primary',
        'secondary',
        'danger',
        'outlined',
        'transparent',
        'invisible',
    ]),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    children: PropTypes.node,
    disabled: PropTypes.bool,
};

export default Button;
