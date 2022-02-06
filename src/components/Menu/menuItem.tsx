import React, { useContext } from 'react'
import classNames from 'classnames'
import { IMenuItemProps } from './index'
import { MenuContext } from './menu'

const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props
  const context = useContext(MenuContext)
  const classes = classNames('xy-menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })
  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={() => {
      handleClick()
    }}>
      {children}
    </li>
  )
}

MenuItem.displayName = 'MenuItem'

export default MenuItem