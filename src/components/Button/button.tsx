import React from 'react'
import { ButtonSize, ButtonType, ButtonProps } from './types'
import classNames from 'classnames'

const Button: React.FC<ButtonProps> = (props) => {
  const { btnType, disabled, size, children, href, plain, round, circle, className, ...restProps } = props
  const classes = classNames(`btn`, className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled,
    'plain': plain,
    'round': round,
    'circle': circle
  })

  if (ButtonType.Link && href) {
    return (
      <a
        href={href}
        className={classes}
        {...restProps}
      >
        {children}
      </a>
    )
  }
  return (
    <button
      className={classes}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Info,
  size: ButtonSize.Default
}

export default Button